"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { TPropertyFormData, TPropertyFormState } from "@/types/actions";
import { propertyFormSchema } from "@/types/schemas";

export const createPropertyAction = async (
  _prevState: TPropertyFormState | null,
  formData: FormData,
): Promise<TPropertyFormState> => {
  try {
    console.log(Object.fromEntries(formData));

    const validatedData = propertyFormSchema.parse(
      Object.fromEntries(formData),
    );

    const property = await prisma.property.create({
      data: validatedData,
    });

    revalidatePath("/property-details");

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

export const getPropertiesAction = async () => {
  try {
    const properties = await prisma.property.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return { properties };
  } catch (error) {
    return { error: "Failed to fetch properties, " + error };
  }
};

export const getPropertyAction = async (id: string) => {
  try {
    const property = await prisma.property.findUnique({
      where: {
        id,
      },
    });
    return { property };
  } catch (error) {
    return { error: "Failed to fetch property, " + error };
  }
};

export const updatePropertyAction = async (
  id: string,
  data: Partial<TPropertyFormData>,
) => {
  try {
    const validatedData = propertyFormSchema.partial().parse(data);

    const property = await prisma.property.update({
      where: {
        id,
      },
      data: validatedData,
    });

    revalidatePath("/property-details");
    revalidatePath(`/properties/${id}`);
    return { property };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message };
    }
    return { error: "Failed to update property" };
  }
};

export const deletePropertyAction = async (id: string) => {
  try {
    await prisma.property.delete({
      where: {
        id,
      },
    });

    revalidatePath("/property-details");
  } catch (error) {
    return { error: "Failed to delete property, " + error };
  }
};
