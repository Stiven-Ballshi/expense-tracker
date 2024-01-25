import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";

import { NavigationTabs, StyledTabs } from "./Tabs.styled";
import { useNavigate } from "react-router-dom";
import { ConstructedRouteIndexes, RouteObj } from "../../types";
import "../../App.css";

export default function MainTabs() {
  const localStorageVal = localStorage.getItem("selectedTabIndex");
  const [value, setValue] = useState(
    localStorageVal ? parseInt(localStorageVal) : 0
  );
  const navigate = useNavigate();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    let currentTab = ConstructedRouteIndexes[newValue as keyof RouteObj];
    navigate(currentTab);
  };

  useEffect(() => {
    localStorage.setItem("selectedTabIndex", value.toString());
  }, [value]);

  return (
    <>
      <StyledTabs centered value={value} onChange={handleChange}>
        <NavigationTabs value={0} icon={<HomeIcon />} />
        <NavigationTabs value={1} icon={<StackedBarChartIcon />} />
        <NavigationTabs value={2} icon={<FavoriteIcon />} />
        <NavigationTabs value={3} icon={<PersonIcon />} />
      </StyledTabs>
    </>
  );
}
