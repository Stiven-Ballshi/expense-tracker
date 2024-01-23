import React from "react";

type Props = {};

function HomepageTransactions({}: Props) {
  return (
    <div className="transactionsContainer">
      <div className="transactionsHeader">
        <span>Transactions</span>
        <span>See All</span>
        <div className="transactions"></div>
      </div>
    </div>
  );
}

export default HomepageTransactions;
