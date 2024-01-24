import { useState } from "react";
import TransactionComponent from "../Transactions/TransactionComponent";
import { TTransactions } from "../../types";

function HomepageTransactions() {
  const [transactions, setTransations] = useState<TTransactions[]>(
    new Array(10).fill({
      name: "Stiven",
      time: "10:02AM",
    })
  );

  return (
    <div className="transactionsContainer">
      <TransactionComponent overview={false} transactions={transactions} />
    </div>
  );
}

export default HomepageTransactions;
