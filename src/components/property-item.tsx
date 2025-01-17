"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Property } from "@prisma/client";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import propImg from "../../public/img.png";

type TPropertyItemProps = {
  prop: Property;
};

export const PropertyItem = ({ prop }: TPropertyItemProps) => {
  //FIXME: styles
  const {
    propertyName,
    addressLine,
    city,
    assetValue,
    netOperatingIncome,
    expenseRatio,
    loanToValue,
    debtServiceCoverageRatio,
    rentPerSqft,
  } = prop;

  const monthlyNOI = netOperatingIncome ? netOperatingIncome / 12 : 0;
  const ROE =
    assetValue && assetValue !== 0 && netOperatingIncome
      ? (netOperatingIncome / assetValue) * 100
      : 0;

  const formattedROE = Math.round(ROE);

  return (
    <Card className="p-6">
      <div className="mb-8 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-20 overflow-hidden rounded-md">
            <Image
              src={propImg}
              alt={propertyName}
              className="object-cover"
              fill
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {propertyName}
            </h3>
            <p className="text-sm text-muted-foreground">
              {addressLine}, {city}
            </p>
          </div>
        </div>
        <div className="relative h-16 w-16">
          <Progress
            value={formattedROE}
            className="h-16 w-16 rotate-[-90deg]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-semibold">{formattedROE}%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-2">
        <div>
          <p className="mb-1 text-sm text-muted-foreground">Asset Value</p>
          <p className="text-lg font-semibold">
            <span className="align-top text-sm">$</span>
            {formatCurrency(assetValue || 0)}
          </p>
        </div>
        <div>
          <p className="mb-1 text-sm text-muted-foreground">NOI</p>
          <p className="text-lg font-semibold">
            <span className="align-top text-sm">$</span>
            {formatCurrency(netOperatingIncome || 0)}
          </p>
        </div>
        <div>
          <p className="mb-1 text-sm text-muted-foreground">Monthly CashFlow</p>
          <p className="text-lg font-semibold">
            <span className="align-top text-sm">$</span>
            {formatCurrency(monthlyNOI || 0)}
          </p>
        </div>
        <div>
          <p className="mb-1 text-sm text-muted-foreground">Expense Ratio</p>
          <p className="text-lg font-semibold">{expenseRatio?.toFixed(0)}%</p>
        </div>
        <div>
          <p className="mb-1 text-sm text-muted-foreground">LTV</p>
          <p className="text-lg font-semibold">{loanToValue?.toFixed(0)}%</p>
        </div>
        <div>
          <p className="mb-1 text-sm text-muted-foreground">DSCR</p>
          <p className="text-lg font-semibold">
            {debtServiceCoverageRatio?.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="mb-1 text-sm text-muted-foreground">Rent per sqft</p>
          <p className="text-lg font-semibold">
            <span className="align-top text-sm">$</span>
            {formatCurrency(rentPerSqft || 0)}
          </p>
        </div>
      </div>
      <Card className="mt-4 grid grid-cols-2 gap-4 bg-dark p-4">
        <div>
          <p className="mb-1 text-xs text-gray-300">ROE</p>
          <p className="text-light text-3xl font-semibold">{formattedROE}%</p>
        </div>
        <div>
          <p className="mb-1 text-xs text-gray-300">Monthly CashFlow</p>
          <p className="text-light text-3xl font-semibold">
            <span className="align-top text-sm">$</span>
            55,345
          </p>
        </div>
      </Card>
    </Card>
  );
};
