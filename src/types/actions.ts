import { z } from "zod";
import { propertyFormSchema, TFinancialDataSchema } from "./schemas";

export type TFormState<T> = {
  success: boolean;
  errors:
    | {
        [K in keyof T]?: string[];
      }
    | string
    | null;
  data: T | null;
};
export type TPropertyFormData = z.infer<typeof propertyFormSchema>;

export type TPropertyFormState = TFormState<TPropertyFormData>;

export type TFinancialFormState = TFormState<TFinancialDataSchema>;
