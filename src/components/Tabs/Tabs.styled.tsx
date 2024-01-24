import { Tab, Tabs, styled } from "@mui/material";

export const StyledTabs = styled(Tabs)({
  ".MuiTabs-indicator": {
    display: "none",
    width: "100%",
  },
});

export const NavigationTabs = styled(Tab)({
  margin: "0px 1rem",
});
