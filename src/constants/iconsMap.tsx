import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Icon } from "../types/types";

export const icons: Icon = {
  expense: {
    bill: {
      name: "Bill",
      icon: <LocalAtmIcon />,
      background: "#fdebea",
    },
    subscriptions: {
      name: "Subscription",
      icon: <SubscriptionsIcon />,
      background: "#fdebea",
    },
    salary: {
      name: "Salary",
      icon: <MonetizationOnOutlinedIcon />,
      background: "#fdebea",
    },
    money_transfer: {
      name: "Money Transfer",
      icon: <CurrencyExchangeIcon />,
      background: "#fdebea",
    },
  },
  income: {
    bill: {
      name: "Bill",
      icon: <LocalAtmIcon />,
      background: "#ebffea",
    },
    subscriptions: {
      name: "Subscription",
      icon: <SubscriptionsIcon />,
      background: "#ebffea",
    },
    salary: {
      name: "Salary",
      icon: <MonetizationOnOutlinedIcon />,
      background: "#ebffea",
    },
    money_transfer: {
      name: "Money Transfer",
      icon: <CurrencyExchangeIcon />,
      background: "#ebffea",
    },
  },
};
