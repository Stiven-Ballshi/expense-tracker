import { ReactNode } from "react";


export enum RouteIndexes {
  HomePage,
  Transactions,
  MyCards,
  User,
}

export type RouteObj = {
  [key in RouteIndexes]: string;
};

export const ConstructedRouteIndexes: RouteObj = {
  [RouteIndexes.HomePage]: "/",
  [RouteIndexes.Transactions]: "/transactions",
  [RouteIndexes.MyCards]: "/cards",
  [RouteIndexes.User]: "/user",
};

export type ExpenseCategory = 'bill' | 'subscription'
export type IncomeCategory = 'salary' | 'money_transfer'

export type TransactionProps = {
  title: string;
  id: string;
  type: 'expense' | 'income';
  time: string;
  category: ExpenseCategory | IncomeCategory;
  amount: string | number;
  icon?: { name: string, background: string}
}

export type CheckboxTypeValueMapProps = {
  name: string;
  key: string;
  selected: boolean;
}[];

export type Icon = {
  [key: string]: {
    [key: string]: {
      name: string;
      icon: ReactNode;
      background: string;
    }
  }
};
