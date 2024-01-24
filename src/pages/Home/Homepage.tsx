import HomepageCard from "../../components/Homepage/HomepageCard";
import HomepageTransactions from "../../components/Homepage/HomepageTransactions";

import "../../App.css";

function Homepage() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
      }}
    >
      <HomepageCard />
      <HomepageTransactions />
    </div>
  );
}

export default Homepage;
