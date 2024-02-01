import { useState } from "react";
import { faker } from "@faker-js/faker";
import { TransactionProps } from "../../types";
import { getCurrentTime, shuffleArray } from "../../utility";

export const useTransaction = () => {
  const generateTransaction = (type?: string): TransactionProps => {
    return {
      title: faker.person.firstName(),
      id: faker.string.uuid(),
      time: getCurrentTime(),
      amount: faker.number.int({ max: 1000 }),
      type: type === "expense" ? "expense" : "income",
      category: "money_transfer",
    };
  };

  const TransactionsHistory = (
    incomes: TransactionProps[],
    expenses: TransactionProps[]
  ) => {
    return shuffleArray([...incomes, ...expenses]);
  };

  const [incomes, setIncomes] = useState<TransactionProps[]>(
    new Array(10).fill(0).map((_) => generateTransaction())
  );

  const [expenses, setExpenses] = useState<TransactionProps[]>(
    new Array(10).fill(0).map((_) => generateTransaction("expense"))
  );

  console.log(setExpenses, setIncomes);

  return { expenses, incomes, TransactionsHistory };
};
