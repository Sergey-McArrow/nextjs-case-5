import {
  getRandomStatusOrTypeValue,
  getRandomValueBetween,
} from "./lib/helpers";
import { FinancingFormValues } from "./types/schemas";

export const navItems = [
  "property-details",
  "rent-roll",
  "income-expenses",
  "financing",
  "ownership-structure",
] as const;

export const defaultPropertyFormData = {
  propertyName: "Storage A",
  addressLine: "3549 102nd Avenue Cranbrook, BC V1C 2R9",
  country: "United Kingdom",
  city: "London",
  zipCode: "W1C 2R9",
  closeDate: new Date().toISOString(),
  totalSquareFootage: 100,
} as const;

export const rentRollData = Array.from({ length: 50 }, (_, index) => ({
  id: `E${index + 1}`,
  type: getRandomStatusOrTypeValue("type"),
  rent: getRandomValueBetween(100, 200),
  width: getRandomValueBetween(10, 20),
  length: getRandomValueBetween(20, 30),
  marketRent: getRandomValueBetween(50, 100),
  status: getRandomStatusOrTypeValue("status"),
  sqftSqm: getRandomValueBetween(50, 100),
}));

export const ITEMS_PER_PAGE = 10;

export const IncomeExpensesCurrentFormDefaultValues = {
  netRental: 1128,
  retailIncome: 300,
  insuranceIncome: 300,
  miscAdditionalIncome: 1128,
  effectiveGrossIncome: 0,
  rentPerSqft: 0,
};

export const incomeExpenssesAnnualFormDefaultValues = {
  propertyTaxes: 40453,
  insurance: 17359,
  utilities: 12140,
  repairsAndMaintenance: 6953,
  adminExpense: 54001,
  offSiteManagement: 24000,
  onSiteManagement: 11358,
  totalExpenses: 0,
  netOperatingIncome: 0,
  assetValue: 0,
  expenseRatio: 0,
  advertisingMarketing: 11067,
  miscellaneous: 13500,
};

export const financingFormDefaultValues: FinancingFormValues = {
  lender: "ABC Capitals",
  loanAmount: getRandomValueBetween(100, 1000),
  startDate: new Date().toISOString(),
  rateType: "Fixed",
  interestRate: getRandomValueBetween(1, 10),
  interestCapitalization: "Monthly",
  interestOnlyPeriod: getRandomValueBetween(1, 24),
  term: getRandomValueBetween(1, 24),
  amortization: getRandomValueBetween(1, 24),
  financingFees: getRandomValueBetween(1, 24),
};

export const ownershipStructureDefaultValues = {
  owners: [
    { name: "", ownershipPercentage: 35 },
    { name: "", ownershipPercentage: 35 },
    { name: "", ownershipPercentage: 30 },
  ],
};
