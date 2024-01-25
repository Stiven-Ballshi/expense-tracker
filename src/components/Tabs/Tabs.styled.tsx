import { Tab, Tabs, styled } from "@mui/material";

export const StyledTabs = styled(Tabs)({
  margin: "0px 1rem",
  ".MuiTabs-indicator": {
    display: "none",
    width: "100%",
  },
  // "&::before": {
  //   content: '""',
  //   position: "absolute",
  //   display: "block",
  //   width: "200%",
  //   height: "200%",
  //   borderRadius: "50%",
  //   boxShadow: "150px 50px 0 0 red",
  //   top: "0",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  // },
});

export const NavigationTabs = styled(Tab)({
  margin: "0px 1rem",
  position: "relative",
});
