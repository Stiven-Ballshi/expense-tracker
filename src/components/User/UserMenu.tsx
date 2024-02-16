import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { UserPageRouteMap } from "../../constants/userpageRouteMap";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { LeftBox, UserIconSpan, UserMenuWrappers } from "./UserPage.styled";
import { useNavigate } from "react-router-dom";

function UserMenu() {
  const navigate = useNavigate();
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
          <UserMenuWrappers onClick={() => navigate(`${obj.route}`)}>
            <LeftBox>
              <UserIconSpan bgColor={obj.background}>{obj.icon}</UserIconSpan>

              <MenuItem>
                <Typography color="" variant="h4">
                  {obj.name}
                </Typography>
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
