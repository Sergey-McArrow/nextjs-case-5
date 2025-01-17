"use client";

import { createContext, useContext, useState } from "react";

type IncomeExpensesContextType = {
  egi: number;
  setEgi: (value: number) => void;
  totalSquareFootage: number;
  setTotalSquareFootage: (value: number) => void;
  netRental: number;
  setNetRental: (value: number) => void;
  retailIncome: number;
  setRetailIncome: (value: number) => void;
  insuranceIncome: number;
  setInsuranceIncome: (value: number) => void;
  miscIncome: number;
  setMiscIncome: (value: number) => void;
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
  const [totalSquareFootage, setTotalSquareFootage] = useState(0);
  const [netRental, setNetRental] = useState(0);
  const [retailIncome, setRetailIncome] = useState(0);
  const [insuranceIncome, setInsuranceIncome] = useState(0);
  const [miscIncome, setMiscIncome] = useState(0);

  return (
    <IncomeExpensesContext.Provider 
      value={{
        egi,
        setEgi,
        totalSquareFootage,
        setTotalSquareFootage,
        netRental,
        setNetRental,
        retailIncome,
        setRetailIncome,
        insuranceIncome,
        setInsuranceIncome,
        miscIncome,
        setMiscIncome,
      }}
    >
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
