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
import { useMemo } from "react";
import { useIncomeExpenses } from "@/context/income-expenses-context";
import { formatCurrency, onNonNumericValueChange } from "@/lib/helpers";
import { incomeExpenssesAnnualFormSchema } from "@/types/schemas";
import { incomeExpenssesAnnualFormDefaultValues } from "@/const";

type FormValues = z.infer<typeof incomeExpenssesAnnualFormSchema>;

export function IncomeExpenssesAnnualForm() {
  const { egi } = useIncomeExpenses();
  const form = useForm<FormValues>({
    resolver: zodResolver(incomeExpenssesAnnualFormSchema),
    defaultValues: incomeExpenssesAnnualFormDefaultValues,
  });

  const formValues = form.watch();
  const totalExpenses = useMemo(
    () =>
      formValues.propertyTaxes +
      formValues.insurance +
      formValues.utilities +
      formValues.repairsAndMaintenance +
      formValues.adminExpense +
      formValues.offSiteManagement +
      formValues.onSiteManagement +
      formValues.advertisingMarketing +
      formValues.miscellaneous,
    [formValues],
  );

  const noi = useMemo(() => {
    return egi - totalExpenses;
  }, [egi, totalExpenses]);

  return (
    <Form {...form}>
      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Annual Expenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="propertyTaxes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Taxes</FormLabel>
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
                name="insurance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Insurance</FormLabel>
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
                name="utilities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Utilities</FormLabel>
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
                name="repairsAndMaintenance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repairs & Maintenance</FormLabel>
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
                name="adminExpense"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Admin Expense</FormLabel>
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
                name="offSiteManagement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Off-Site Management</FormLabel>
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
                name="onSiteManagement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>On-Site Management</FormLabel>
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
                name="advertisingMarketing"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Advertising / Marketing</FormLabel>
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
                name="miscellaneous"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Miscellaneous</FormLabel>
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
                <span className="font-semibold">TOTAL EXPENSES</span>
                <span className="text-2xl font-bold">
                  {formatCurrency(totalExpenses)}
                </span>
              </CardContent>
            </Card>

            <Card className="bg-dark text-white">
              <CardContent className="flex items-center justify-between p-4">
                <span className="font-semibold">NET OPERATING INCOME</span>
                <span className="text-2xl font-bold">
                  {formatCurrency(noi)}
                </span>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
