import { useState } from "react";
import { TransactionProps } from "../../types/types";
import { shuffleArray } from "../../utility";

export const useTransaction = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [incomes, setIncomes] = useState<TransactionProps[]>([]);
  const [expenses, setExpenses] = useState<TransactionProps[]>([]);

  const TransactionsHistory = (
    incomes: TransactionProps[],
    expenses: TransactionProps[]
  ) => {
    return shuffleArray([...incomes, ...expenses]);
  };

  return {
    transactions,
    incomes,
    expenses,
    setTransactions,
    setIncomes,
    setExpenses,
    TransactionsHistory,
  };
};
