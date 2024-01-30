// import GetStarted from "./components/GetStarted/GetStarted";
import { Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/User/UserPage";

import MainTabs from "./components/Tabs/MainTabs";

import Homepage from "./pages/Home/Homepage";
import ErrorPage from "./components/Error/ErrorPage";
import HomepageHeader from "./components/AppHeader";

import { styled } from "@mui/material";
import TransactionsPage from "./pages/Transactions/TransactionsPage";
import MyCardsPage from "./pages/MyCards/MyCardsPage";
import AddIncomeOrExpensePage from "./pages/AddIncomeOrExpense/AddIncomeOrExpensePage";

import AddTransactionType from "./pages/AddTransactionType/AddTransactionType";

import "./App.css";
import "./index.css";

export const StyledOuterAppDiv = styled("div")({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  zIndex: "10",
});

function App() {
  const location = useLocation();

  let regexPattern = /[\/.,-]/g;
  const getCurrentUrl = location.pathname.replace(regexPattern, " ");

  return (
    <StyledOuterAppDiv className="App">
      <HomepageHeader />
      {!getCurrentUrl.includes("add") && <MainTabs />}

      <Routes>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/cards" element={<MyCardsPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add" element={<AddIncomeOrExpensePage />} />
        <Route path="/add/:type" element={<AddTransactionType />} />
      </Routes>
    </StyledOuterAppDiv>
  );
}

export default App;
