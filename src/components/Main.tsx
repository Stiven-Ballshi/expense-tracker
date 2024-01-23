import MainTabs from "./Tabs/MainTabs";
import PlusComponent from "./Tabs/PlusComponent";
import HomepageHeader from "./Homepage/HomepageHeader";

import "../App.css";
import HomepageCard from "./Homepage/HomepageCard";

function Main() {
  return (
    <div className="container">
      <HomepageHeader />
      <HomepageCard />
      <div className="tabsContainer">
        <MainTabs />
        <PlusComponent />
      </div>
    </div>
  );
}

export default Main;
