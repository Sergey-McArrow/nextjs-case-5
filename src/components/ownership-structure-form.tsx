"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ownershipStructureSchema,
  type TOwnershipStructureValues,
} from "@/types/schemas";
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
import { ownershipStructureDefaultValues } from "@/const";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

export const OwnershipStructureForm = () => {
  const form = useForm<TOwnershipStructureValues>({
    resolver: zodResolver(ownershipStructureSchema),
    defaultValues: ownershipStructureDefaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: "owners",
    control: form.control,
  });

  const onSubmit = (data: TOwnershipStructureValues) => {
    console.log(data);
  };

  const totalPercentage = form
    .watch("owners")
    .reduce((sum, owner) => sum + (owner.ownershipPercentage || 0), 0);

  const isValidTotal = totalPercentage === 100;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className={cn(
                "grid grid-cols-2 gap-4",
                index > 0 && "border-t pt-4",
              )}
            >
              <FormField
                control={form.control}
                name={`owners.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index === 0 && "block")}>
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Input default" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`owners.${index}.ownershipPercentage`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index === 0 && "block")}>
                      Ownership percentage
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="number"
                          min={0}
                          max={100}
                          className="pr-6"
                          value={field.value}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                        <span className="absolute right-2 top-1.5">%</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {index > 2 && (
                <div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2 min-w-36 font-semibold"
                    onClick={() => remove(index)}
                  >
                    <Minus strokeWidth={2} />
                    Remove owner
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ name: "", ownershipPercentage: 0 })}
            className="min-w-36 font-semibold"
          >
            <Plus strokeWidth={2} />
            Add owner
          </Button>

          {!isValidTotal && (
            <p className="text-sm text-destructive">
              Total ownership must equal 100% (currently {totalPercentage}%)
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={!isValidTotal}>
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};
