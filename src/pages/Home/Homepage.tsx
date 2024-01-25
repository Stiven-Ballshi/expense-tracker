import HomepageCard from "../../components/Homepage/HomepageCard";
import HomepageTransactions from "../../components/Homepage/HomepageTransactions";

import { useState } from "react";
import { TTransactions } from "../../types";

import "../../App.css";

function Homepage() {
  const [transactions, setTransactions] = useState<TTransactions[]>(
    new Array(10).fill({
      name: "Stiven",
      time: "10:02AM",
      trans: "350",
      type: "expense",
    })
  );

  console.log(setTransactions);

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
