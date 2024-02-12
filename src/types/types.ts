import { ReactNode } from "react";

//  Types for routes in the page
export enum TabsRouteEnums {
  HomePage,
  Transactions,
  MyCards,
  User,
}

export type RouteObjType = {
  [key in TabsRouteEnums]: string;
};

export enum UserPageEnum {
  AccountInfo,
  Notifications,
  Logout
}

export type UserPageRouteType = {
  [key in UserPageEnum] : {
    name: string;
    route: string;
    background: string;
    icon: ReactNode;
  }
}

// Types for transactions, icons , checkboxes and other utilities

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
