import { UserPageRouteType, UserPageEnum } from "../types/types";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

export const UserPageRouteMap: UserPageRouteType = {
  [UserPageEnum.AccountInfo]: {
    name: "Account Info",
    route: "/accountInfo",
    icon: <PersonIcon color="info" fontSize="small" />,
    background: "#6249ff",
  },
  [UserPageEnum.Notifications]: {
    name: "Notifications",
    route: "/notifications",
    icon: <NotificationsIcon color="info" fontSize="small" />,
    background: "#59cb76",
  },

  [UserPageEnum.Logout]: {
    name: "Logout",
    route: "/logout",
    icon: <LogoutIcon color="info" fontSize="small" />,
    background: "#ff1010",
  },
};
