import { z } from "zod";
import { propertyFormSchema } from "./schemas";

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
