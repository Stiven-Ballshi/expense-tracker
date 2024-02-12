import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { UserPageRouteMap } from "../../constants/userpageRouteMap";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LeftBox, UserIconSpan, UserMenuWrappers } from "./UserPage.styled";

function UserMenu() {
  return (
    <MenuList
      sx={{
        width: "100%",
      }}
      id="composition-menu"
      aria-labelledby="composition-button"
    >
      {Object.values(UserPageRouteMap).map((obj) => {
        return (
          <UserMenuWrappers>
            <LeftBox>
              <UserIconSpan bgColor={obj.background}>{obj.icon}</UserIconSpan>

              <MenuItem>
                <Typography variant="h4">{obj.name}</Typography>
              </MenuItem>
            </LeftBox>

            <ArrowForwardIosIcon fontSize="small" />
          </UserMenuWrappers>
        );
      })}
    </MenuList>
  );
}

export default UserMenu;
