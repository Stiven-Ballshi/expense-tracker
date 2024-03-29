import { Route, Routes } from "react-router-dom";

import UserPage from "./pages/User/UserPage";
import Homepage from "./pages/Home/Homepage";
import AccountInfoPage from "./pages/AccountInfo/AccountInfoPage";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import TransactionsPage from "./pages/Transactions/TransactionsPage";
import MyCardsPage from "./pages/MyCards/MyCardsPage";
import AddIncomeOrExpensePage from "./pages/AddIncomeOrExpense/AddIncomeOrExpensePage";
import AddTransactionType from "./pages/AddTransactionType/AddTransactionType";

import MainTabs from "./components/Tabs/MainTabs";
import ErrorPage from "./components/Error/ErrorPage";
import HomepageHeader from "./components/AppHeader";

// import GetStarted from "./components/GetStarted/GetStarted";

import { styled } from "@mui/material";

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
  return (
    <StyledOuterAppDiv className="App">
      <HomepageHeader />
      <MainTabs />

      <Routes>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/cards" element={<MyCardsPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add" element={<AddIncomeOrExpensePage />} />
        <Route path="/add/:type" element={<AddTransactionType />} />

        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/account_info" element={<AccountInfoPage />} />
      </Routes>
    </StyledOuterAppDiv>
  );
}

export default App;
