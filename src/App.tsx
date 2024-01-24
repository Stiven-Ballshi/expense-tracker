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

const isFirstTimeLogIn = false;

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
