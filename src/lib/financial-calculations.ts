import { TFinancialDataSchema } from "@/types/schemas";

const CAP_RATE = 0.05;

export const calculateFinancialMetrics = (data: TFinancialDataSchema) => {
  // (EGI)
  const effectiveGrossIncome =
    (data.netRental || 0) +
    (data.retailIncome || 0) +
    (data.insuranceIncome || 0) +
    (data.miscIncome || 0);

  const totalExpenses =
    (data.propertyTaxes || 0) +
    (data.insurance || 0) +
    (data.utilities || 0) +
    (data.repairsMaintenance || 0) +
    (data.miscExpenses || 0);

  // (NOI)
  const netOperatingIncome = effectiveGrossIncome - totalExpenses;

  const assetValue = netOperatingIncome / CAP_RATE;

  // LTV
  const loanToValue = data.totalDebt ? (data.totalDebt / assetValue) * 100 : 0;

  // DSCR
  const debtServiceCoverageRatio = data.annualDebtService
    ? netOperatingIncome / data.annualDebtService
    : 0;

  const rentPerSqft =
    data.totalSquareFootage && data.netRental
      ? data.netRental / data.totalSquareFootage
      : 0;

  const expenseRatio = effectiveGrossIncome
    ? (totalExpenses / effectiveGrossIncome) * 100
    : 0;

  return {
    effectiveGrossIncome,
    totalExpenses,
    netOperatingIncome,
    assetValue,
    loanToValue,
    debtServiceCoverageRatio,
    rentPerSqft,
    expenseRatio,
  };
};
