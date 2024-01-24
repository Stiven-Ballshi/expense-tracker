import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";

import { NavigationTabs, StyledTabs } from "./Tabs.styled";
import { useNavigate } from "react-router-dom";
import "../../App.css";

enum RouteIndexes {
  HomePage,
  Overview,
  Transaction,
  User,
}

type RouteObj = {
  [key in RouteIndexes]: string;
};

const ConstructedRouteIndexes: RouteObj = {
  [RouteIndexes.HomePage]: "/homepage",
  [RouteIndexes.Overview]: "/overview",
  [RouteIndexes.Transaction]: "/transaction",
  [RouteIndexes.User]: "/user",
};

export default function MainTabs() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    let currentTab = ConstructedRouteIndexes[newValue as keyof RouteObj];
    setValue(newValue);
    navigate(currentTab);
  };

  return (
    <>
      <StyledTabs centered value={value} onChange={handleChange}>
        <NavigationTabs value={0} label="Home" icon={<HomeIcon />} />
        <NavigationTabs
          value={1}
          label="Overview"
          icon={<StackedBarChartIcon />}
        />
        <NavigationTabs value={2} label="Favorite" icon={<FavoriteIcon />} />
        <NavigationTabs value={3} label="User" icon={<PersonIcon />} />
      </StyledTabs>
    </>
  );
}
