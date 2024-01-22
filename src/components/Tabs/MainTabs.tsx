import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";

import { Tab, Tabs, styled } from "@mui/material";
import "../../App.css";

export const StyledTabs = styled(Tabs)({
  ".MuiTabs-indicator": {
    display: "none",
    width: "100%",
  },
});

export const NavigationTabs = styled(Tab)({
  svg: {
    width: "1.2em",
    height: "1.2em",
  },
  margin: "0px 20px",
});

export default function MainTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledTabs
        centered
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <NavigationTabs icon={<HomeIcon />} aria-label="phone" />
        <NavigationTabs icon={<StackedBarChartIcon />} aria-label="chart" />

        <NavigationTabs icon={<FavoriteIcon />} aria-label="favorite" />
        <NavigationTabs icon={<PersonIcon />} aria-label="person" />
      </StyledTabs>
    </>
  );
}
