import HomepageHeader from "../../components/Homepage/HomepageHeader";

import HomepageCard from "../../components/Homepage/HomepageCard";
import HomepageTransactions from "../../components/Homepage/HomepageTransactions";

import "../../App.css";

function Homepage() {
  return (
    <>
      <HomepageHeader />
      <HomepageCard />
      <HomepageTransactions />
    </>
  );
}

export default Homepage;
