import { IncomeExpensesCurrentForm } from "@/components/income-expenses-current-form";
import { IncomeExpenssesAnnualForm } from "@/components/income-expensses-annual-form";
import { IncomeExpensesProvider } from "@/context/income-expenses-context";

export default function IncomeExpensesPage() {
  return (
    <div className="container mx-auto space-y-8 p-8">
      <h1 className="text-2xl font-bold">Income & Expenses</h1>
      <IncomeExpensesProvider>
        <IncomeExpensesCurrentForm />
        <IncomeExpenssesAnnualForm />
      </IncomeExpensesProvider>
    </div>
  );
}
