// import GetStarted from "./components/GetStarted/GetStarted";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/User/UserPage";

import MainTabs from "./components/Tabs/MainTabs";
import PlusComponent from "./components/Tabs/PlusComponent";

import Homepage from "./pages/Home/Homepage";
import ErrorPage from "./components/Error/ErrorPage";
import HomepageHeader from "./components/AppHeader";

import "./App.css";
import "./index.css";
import { styled } from "@mui/material";
import TransactionsPage from "./pages/Transactions/TransactionsPage";
import MyCardsPage from "./pages/MyCards/MyCardsPage";

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
      <PlusComponent />
      <Routes>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/cards" element={<MyCardsPage />} />
        <Route path="/user" element={<UserPage />} />
        {/* <Route path="/transaction" element={<TransactionsPage />} /> */}
      </Routes>
    </StyledOuterAppDiv>
  );
}

export default App;
