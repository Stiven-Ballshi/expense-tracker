import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

type TTransactions = {
  name: string;
  time: string;
};

function HomepageTransactions() {
  const [transactions, setTransations] = useState<TTransactions[]>(
    new Array(10).fill({
      name: "Stiven",
      time: "10:02AM",
    })
  );

  return (
    <div className="transactionsContainer">
      <div className="transactionsHeader">
        <span className="tranName">Transactions</span>
        <button className="seeAll">See All</button>
      </div>
      <>
        <div className="transactions">
          {transactions.map((tr: TTransactions, index: number) => {
            return (
              <div key={index} className="transaction">
                <div className="transactionLeft">
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                    />
                  </Stack>

                  <div className="transInfo">
                    <span className="tranName">{tr.name}</span>
                    <span className="tranTime">{tr.time}</span>
                  </div>
                </div>
                <span className="tranAmount" style={{ color: "red" }}>
                  -$450
                </span>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
}

export default HomepageTransactions;
