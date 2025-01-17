"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { financingFormSchema, type FinancingFormValues } from "@/types/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency, parseCurrencyString } from "@/lib/helpers";
import { financingFormDefaultValues } from "@/const";
import { RadioButton } from "./ui/radio-button";

export function FinancingForm() {
  const [activeTab, setActiveTab] = useState("debt-1");
  const [debts, setDebts] = useState([1]);

  const form = useForm<FinancingFormValues>({
    resolver: zodResolver(financingFormSchema),
    defaultValues: financingFormDefaultValues,
  });

  const onSubmit = (data: FinancingFormValues) => {
    console.log(data);
  };

  const addDebt = () => {
    if (debts.length < 10) {
      const newDebtNumber = debts.length + 1;
      setDebts([...debts, newDebtNumber]);
      setActiveTab(`debt-${newDebtNumber}`);
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            {debts.map((debtNumber) => (
              <TabsTrigger key={debtNumber} value={`debt-${debtNumber}`}>
                Debt {debtNumber}
              </TabsTrigger>
            ))}
            {debts.length < 10 && (
              <Button
                variant="outline"
                className="ml-4"
                onClick={addDebt}
                type="button"
              >
                Add Debt
              </Button>
            )}
          </TabsList>
        </div>

        {debts.map((debtNumber) => (
          <TabsContent key={debtNumber} value={`debt-${debtNumber}`}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="lender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lender</FormLabel>
                      <FormControl>
                        <Input placeholder="ABC Capitals" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="loanAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Loan Amount</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-1.5">$</span>
                            <Input
                              className="pl-7"
                              value={formatCurrency(field.value).replace(
                                "$",
                                "",
                              )}
                              onChange={(e) =>
                                field.onChange(
                                  parseCurrencyString(e.target.value),
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
                    name="startDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Start Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value ? (
                                  format(new Date(field.value), "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={(date) =>
                                field.onChange(date?.toISOString() ?? "")
                              }
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="rateType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Rate</FormLabel>
                        <FormControl>
                          <div className="flex gap-2">
                            <RadioButton
                              value="Fixed"
                              checked={field.value === "Fixed"}
                              onChange={field.onChange}
                            >
                              Fixed
                            </RadioButton>
                            <RadioButton
                              value="Variable"
                              checked={field.value === "Variable"}
                              onChange={field.onChange}
                            >
                              Variable
                            </RadioButton>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interestRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interest Rate</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="number"
                              step="0.01"
                              min="0"
                              max="100"
                              value={field.value}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="pr-6"
                            />
                            <span className="absolute right-2 top-1.5">%</span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="interestCapitalization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interest Capitalization</FormLabel>
                        <FormControl>
                          <div className="flex gap-2">
                            <RadioButton
                              value="Monthly"
                              checked={field.value === "Monthly"}
                              onChange={field.onChange}
                            >
                              Monthly
                            </RadioButton>
                            <RadioButton
                              value="Semi-Annual"
                              checked={field.value === "Semi-Annual"}
                              onChange={field.onChange}
                            >
                              Semi-Annual
                            </RadioButton>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interestOnlyPeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interest Only Period</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="number"
                              min="0"
                              value={field.value}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                              className="pr-16"
                            />
                            <span className="absolute right-2 top-1.5">
                              months
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="term"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Term</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="1"
                            value={field.value}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="amortization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amortization</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="1"
                            value={field.value}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="financingFees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Financing Fees</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-1.5">$</span>
                            <Input
                              className="pl-7"
                              value={formatCurrency(field.value).replace(
                                "$",
                                "",
                              )}
                              onChange={(e) =>
                                field.onChange(
                                  parseCurrencyString(e.target.value),
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

                <div className="flex justify-end space-x-4">
                  <Button type="submit">Save</Button>
                </div>
              </form>
            </Form>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
