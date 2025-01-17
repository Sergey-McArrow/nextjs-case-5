"use server";

import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { calculateFinancialMetrics } from "@/lib/financial-calculations";
import { revalidatePath } from "next/cache";
import { financialDataSchema } from "@/types/schemas";
import { z } from "zod";
import { TFinancialFormState } from "@/types/actions";

export const updateFinancialDataAction = async (
  _prevState: TFinancialFormState | null,
  formData: FormData,
): Promise<TFinancialFormState> => {
  try {
    const cookieStore = await cookies();
    const propertyId = cookieStore.get("propertyId")?.value;

    if (!propertyId) {
      throw new Error("Property ID not found");
    }

    const rawData = Object.fromEntries(formData) as Record<string, string>;
    console.log({ rawData });
    const parsedData = Object.entries(rawData).reduce<Record<string, number>>(
      (acc, [key, value]) => {
        acc[key] = Number(value.replace(/[$,\s]/g, ""));
        return acc;
      },
      {},
    );

    const validationResult = financialDataSchema.safeParse(parsedData);

    if (!validationResult.success) throw validationResult.error;

    const financialData = validationResult.data;

    const metrics = calculateFinancialMetrics(financialData);

    const property = await prisma.property.update({
      where: { id: propertyId },
      data: {
        ...financialData,
        ...metrics,
      },
    });
    (await cookies()).delete("propertyId");

    revalidatePath("/income-expenses");
    return { success: true, data: property, errors: null }; //FIMXE: add success message
  } catch (error) {
    console.error("Failed to update financial data:", error);
    console.error(error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        data: null,
        errors: error.flatten().fieldErrors,
      };
    }
    return {
      success: false,
      data: null,
      errors: "Failed to update financial data",
    };
  }
};
