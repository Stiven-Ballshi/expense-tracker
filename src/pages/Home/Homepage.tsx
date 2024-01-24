import HomepageCard from "../../components/Homepage/HomepageCard";
import HomepageTransactions from "../../components/Homepage/HomepageTransactions";

import "../../App.css";
import { useState } from "react";
import { TTransactions } from "../../types";

function Homepage() {
  const [transactions, setTransactions] = useState<TTransactions[]>(
    new Array(10).fill({
      name: "Stiven",
      time: "10:02AM",
      trans: "350",
      type: "expense",
    })
  );
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
      <HomepageTransactions transactions={transactions} />
    </div>
  );
}

export default Homepage;
