"use client";

import { createContext, useContext, useState } from "react";

type IncomeExpensesContextType = {
  egi: number;
  setEgi: (value: number) => void;
};

const IncomeExpensesContext = createContext<IncomeExpensesContextType | undefined>(
  undefined
);

export function IncomeExpensesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [egi, setEgi] = useState(0);

  return (
    <IncomeExpensesContext.Provider value={{ egi, setEgi }}>
      {children}
    </IncomeExpensesContext.Provider>
  );
}

export function useIncomeExpenses() {
  const context = useContext(IncomeExpensesContext);
  if (context === undefined) {
    throw new Error(
      "useIncomeExpenses must be used within a IncomeExpensesProvider"
    );
  }
  return context;
}
