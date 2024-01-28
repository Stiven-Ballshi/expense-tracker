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

export type TTransactions = {
  name: string;
  avatar: string;
  id: string;
  time: string;
  trans: string;
  type: string;
};