export enum RouteIndexes {
  HomePage,
  Transactions,
  Overview,
  User,
}

export type RouteObj = {
  [key in RouteIndexes]: string;
};

export const ConstructedRouteIndexes: RouteObj = {
  [RouteIndexes.HomePage]: "/homepage",
  [RouteIndexes.Transactions]: "/transactions",
  [RouteIndexes.Overview]: "/overview",
  [RouteIndexes.User]: "/user",
};

export type TTransactions = {
  name: string;
  time: string;
};