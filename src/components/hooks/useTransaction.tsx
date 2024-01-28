import { useState } from "react";
import { TTransactions } from "../../types";
import { faker } from "@faker-js/faker";

export const useTransaction = () => {
  type TUserTransaction = {
    name: string;
    id: string;
    avatar: string;
    time: string;
    trans: string;
    type: string;
  };

  const generateTransaction = (type?: string): TUserTransaction => {
    return {
      name: faker.person.firstName(),
      id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      time: "10:02AM",
      trans: "450",
      type: type === "expense" ? "expense" : "income",
    };
  };

  const [transactions, setTransactions] = useState<TTransactions[]>(
    new Array(10).fill(0).map((_) => generateTransaction())
  );

  const [incomes, setIncomes] = useState<TTransactions[]>(
    new Array(10).fill(0).map((_) => generateTransaction())
  );

  const [expenses, setExpenses] = useState<TTransactions[]>(
    new Array(10).fill(0).map((_) => generateTransaction("expense"))
  );

  console.log(setExpenses, setIncomes, setTransactions);

  return { expenses, transactions, incomes };
};
