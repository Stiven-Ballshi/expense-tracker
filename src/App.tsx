// import GetStarted from "./components/GetStarted/GetStarted";
import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/Overview/OverviewPage";
import UserPage from "./pages/User/UserPage";
// import TransactionsPage from "./pages/Transactions/transactionsPage";

import MainTabs from "./components/Tabs/MainTabs";
import PlusComponent from "./components/Tabs/PlusComponent";

import Homepage from "./pages/Home/Homepage";
import ErrorPage from "./components/Error/ErrorPage";
import HomepageHeader from "./components/AppHeader";

import "./App.css";
import "./index.css";
import { styled } from "@mui/material";

// .App {
//   /* min-height: -webkit-fill-available; */
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   position: relative;
// }

export const StyledOuterAppDiv = styled("div")<{ isSafari?: boolean }>(
  (prop) => ({
    position: "relative",
    minHeight: prop.isSafari ? "-webkit-fill-available" : "100vh",
    display: "flex",
    flexDirection: "column",
  })
);

const isFirstTimeLogIn = false;

function App() {
  return (
    <StyledOuterAppDiv className="App">
      <HomepageHeader />
      <MainTabs />
      <PlusComponent />
      <Routes>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/transactions" element={<OverviewPage />} />
        <Route path="/user" element={<UserPage />} />
        {/* <Route path="/transaction" element={<TransactionsPage />} /> */}
      </Routes>
    </StyledOuterAppDiv>
  );
}

export default App;
