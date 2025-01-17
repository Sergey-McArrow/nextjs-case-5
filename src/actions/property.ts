"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { TPropertyFormState } from "@/types/actions";
import { propertyFormSchema } from "@/types/schemas";
import { cookies } from "next/headers";

export const createPropertyAction = async (
  _prevState: TPropertyFormState | null,
  formData: FormData,
): Promise<TPropertyFormState> => {
  try {
    const cookieStore = await cookies();
    const validatedData = propertyFormSchema.parse(
      Object.fromEntries(formData),
    );

    const property = await prisma.property.create({
      data: validatedData,
    });

    revalidatePath("/property-details");
    cookieStore.set("propertyId", property.id);

    return { success: true, data: property, errors: null };
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        data: null,
        errors: error.flatten().fieldErrors,
      };
    }
    return { success: false, data: null, errors: "Failed to create property" };
  }
};
