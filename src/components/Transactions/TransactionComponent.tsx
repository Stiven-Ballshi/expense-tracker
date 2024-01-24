import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { TTransactions } from "../../types";

type TProps = {
  transactions: TTransactions[];
  overview?: Boolean;
};

function TransactionComponent({ transactions, overview }: TProps) {
  console.log(transactions[0], "tra");
  return (
    <>
      <div className="transactionsHeader">
        {overview ? null : (
          <>
            <span className="tranName">Transactions</span>
            <button className="seeAll">See All</button>
          </>
        )}
      </div>

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
              <span
                className="tranAmount"
                style={{ color: tr.type === "income" ? "green" : "red" }}
              >
                {tr.type === "income" ? "+$" : "-$"}
                {tr.trans}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TransactionComponent;
