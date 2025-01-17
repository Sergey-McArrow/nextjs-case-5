"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo, useEffect } from "react";
import { useIncomeExpenses } from "@/context/income-expenses-context";
import { IncomeExpensesCurrentFormDefaultValues } from "@/const";
import { formatCurrency, onNonNumericValueChange } from "@/lib/helpers";
import { incomeExpensesCurrentFormSchema } from "@/types/schemas";

type FormValues = z.infer<typeof incomeExpensesCurrentFormSchema>;

export const IncomeExpensesCurrentForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(incomeExpensesCurrentFormSchema),
    defaultValues: IncomeExpensesCurrentFormDefaultValues,
  });

  const {
    setEgi,
    setNetRental,
    setRetailIncome,
    setInsuranceIncome,
    setMiscIncome,
  } = useIncomeExpenses();
  const formValues = form.watch();
  const totalIncome = useMemo(() => {
    return (
      formValues.netRental +
      formValues.retailIncome +
      formValues.insuranceIncome +
      formValues.miscAdditionalIncome
    );
  }, [formValues]);

  useEffect(() => {
    setEgi(totalIncome);
    setNetRental(formValues.netRental);
    setRetailIncome(formValues.retailIncome);
    setInsuranceIncome(formValues.insuranceIncome);
    setMiscIncome(formValues.miscAdditionalIncome);
  }, [
    formValues,
    totalIncome,
    setEgi,
    setNetRental,
    setRetailIncome,
    setInsuranceIncome,
    setMiscIncome,
  ]); //FIXME: need better solution

  return (
    <Form {...form}>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Annual Income</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="netRental"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Net Rental</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <Input
                          className="pl-7"
                          value={formatCurrency(field.value).replace("$", "")}
                          onChange={(e) =>
                            onNonNumericValueChange(
                              e.target.value,
                              field.onChange,
                            )
                          }
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="retailIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Retail Income</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <Input
                          className="pl-7"
                          value={formatCurrency(field.value).replace("$", "")}
                          onChange={(e) =>
                            onNonNumericValueChange(
                              e.target.value,
                              field.onChange,
                            )
                          }
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="insuranceIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Insurance Income</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <Input
                          className="pl-7"
                          value={formatCurrency(field.value).replace("$", "")}
                          onChange={(e) =>
                            onNonNumericValueChange(
                              e.target.value,
                              field.onChange,
                            )
                          }
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="miscAdditionalIncome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Misc Additional Income</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <Input
                          className="pl-7"
                          value={formatCurrency(field.value).replace("$", "")}
                          onChange={(e) =>
                            onNonNumericValueChange(
                              e.target.value,
                              field.onChange,
                            )
                          }
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Card className="bg-muted">
              <CardContent className="flex items-center justify-between p-4">
                <span className="font-semibold">
                  (EGI) EFFECTIVE GROSS INCOME
                </span>
                <span className="text-2xl font-bold">
                  {formatCurrency(totalIncome)}
                </span>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </Form>
  );
};
