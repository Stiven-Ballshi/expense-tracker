// import GetStarted from "./components/GetStarted/GetStarted";
import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/Overview/OverviewPage";
import UserPage from "./pages/User/UserPage";
import TransactionsPage from "./pages/Transactions/transactionsPage";
import { Tab, Tabs, styled } from "@mui/material";

import MainTabs from "./components/Tabs/MainTabs";
import PlusComponent from "./components/Tabs/PlusComponent";

import "./index.css";
import "./App.css";
import Homepage from "./pages/Home/Homepage";

const isFirstTimeLogIn = false;

export const StyledTabs = styled(Tabs)({
  ".MuiTabs-indicator": {
    display: "none",
    width: "100%",
  },
});

export const NavigationTabs = styled(Tab)({
  margin: "0px 1.5rem",
});

function App() {
  const routes = [
    {
      path: "/homepage",
      idx: 0,
    },
    {
      path: "/overview",
      idx: 1,
    },
    {
      path: "/transactions",
      idx: 2,
    },
    {
      path: "/user",
      idx: 3,
    },
  ];

  return (
    <div className="App">
      <MainTabs routes={routes} />
      <PlusComponent />
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/transaction" element={<TransactionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
