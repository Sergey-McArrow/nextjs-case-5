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
    // totalSquareFootage,
    assetValue,
    netOperatingIncome,
    // effectiveGrossIncome,
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

  return (
    <Card className="space-y-4 p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Image src={propImg} alt="img" />
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">{propertyName}</h3>
            <p className="text-sm text-muted-foreground">
              {addressLine}, {city}
            </p>
          </div>
        </div>
        <div className="relative h-16 w-16">
          <Progress value={75} className="h-16 w-16 rotate-[-90deg]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium">
              {Math.abs(ROE).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Asset Value</p>
          <p className="text-lg font-semibold">
            {formatCurrency(assetValue || 0)}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">NOI</p>
          <p className="text-lg font-semibold">
            {formatCurrency(netOperatingIncome || 0)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Monthly CashFlow</p>
          <p className="text-lg font-semibold">{formatCurrency(monthlyNOI)}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Expense Ratio</p>
          <p className="text-lg font-semibold">{expenseRatio?.toFixed(1)}%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">LTV</p>
          <p className="text-lg font-semibold">{loanToValue?.toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">DSCR</p>
          <p className="text-lg font-semibold">
            {debtServiceCoverageRatio?.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Rent per sqft</p>
          <p className="text-lg font-semibold">
            {formatCurrency(rentPerSqft || 0)}/sqft
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Expense Ratio</p>
          <p className="text-lg font-semibold">{expenseRatio?.toFixed(1)}%</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">LTV</p>
          <p className="text-lg font-semibold">{loanToValue?.toFixed(1)}%</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">DSCR</p>
          <p className="text-lg font-semibold">
            {debtServiceCoverageRatio?.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Rent per sqft</p>
          <p className="text-lg font-semibold">
            {formatCurrency(rentPerSqft || 0)}/sqft
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Expense Ratio</p>
          <p className="text-lg font-semibold">{expenseRatio?.toFixed(1)}%</p>
        </div>
      </div>
    </Card>
  );
};
