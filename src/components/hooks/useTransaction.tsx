import { useState } from "react";
import { TransactionProps } from "../../types/types";

export const useTransaction = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [incomes, setIncomes] = useState<TransactionProps[]>([]);
  const [expenses, setExpenses] = useState<TransactionProps[]>([]);

  return {
    transactions,
    incomes,
    expenses,
    setTransactions,
    setIncomes,
    setExpenses,
  };
};
