import { z } from "zod";

export const propertyFormSchema = z.object({
  propertyName: z
    .string()
    .min(1, "Property name is required")
    .max(100, "Property name must be less than 100 characters"),
  addressLine: z
    .string()
    .min(1, "Address is required")
    .max(200, "Address must be less than 200 characters"),
  country: z
    .string()
    .min(1, "Country is required")
    .max(100, "Country must be less than 100 characters"),
  city: z
    .string()
    .min(1, "City is required")
    .max(100, "City must be less than 100 characters"),
  zipCode: z
    .string()
    .min(1, "ZIP/Postal Code is required")
    .max(20, "ZIP/Postal Code must be less than 20 characters")
    .regex(/^[A-Za-z0-9\s-]*$/, "Invalid ZIP/Postal Code format"),
  closeDate: z.string({
    required_error: "Close date is required",
  }),
});

export const incomeExpensesCurrentFormSchema = z.object({
  netRental: z.number(),
  retailIncome: z.number(),
  insuranceIncome: z.number(),
  miscAdditionalIncome: z.number(),
});

export const incomeExpenssesAnnualFormSchema = z.object({
  propertyTaxes: z.number(),
  insurance: z.number(),
  utilities: z.number(),
  repairsAndMaintenance: z.number(),
  adminExpense: z.number(),
  offSiteManagement: z.number(),
  onSiteManagement: z.number(),
  advertisingMarketing: z.number(),
  miscellaneous: z.number(),
});
