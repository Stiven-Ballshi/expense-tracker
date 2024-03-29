import { Box, styled } from "@mui/material";
import { TransactionProps } from "../../types/types";
import { icons } from "../../constants/iconsMap";
import { useLocalStorage } from "../hooks/useLocalStorage";
import EmptyStateComponent from "../EmtpyStateComponent";
import { useTransaction } from "../hooks/useTransaction";
import { useEffect } from "react";
import { isSafari, timestampConverter } from "../../utility";

type TProps = {
  transactions?: TransactionProps[];
  transaction?: Boolean;
  vh?: string | undefined;
  lsKey: string;
  homepage?: boolean;
};

export const CustomTransactionsDiv = styled("div")<{
  isSafari?: Boolean;
  vh: string;
  hasMargin: Boolean;
}>((prop) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "flex-start",
  rowGap: "2rem",
  height: prop.isSafari ? "35vh" : prop.vh,
  scrollBehavior: "smooth",
  overflowY: "auto",
  marginTop: prop.hasMargin ? "20px" : "0",
}));

function TransactionComponent({
  transaction,
  vh = "",
  lsKey,
  homepage,
}: TProps) {
  const { getItemFromLS } = useLocalStorage(lsKey);
  const { setTransactions, transactions } = useTransaction();
  const localStorageKeys = Object.keys(localStorage).slice(0, 3);

  const lsObject: Record<string, any> = {};

  localStorageKeys.forEach((key: string) => {
    return (lsObject[key] = JSON.parse(localStorage.getItem(key) as any));
  });

  useEffect(() => {
    let newTransactions: TransactionProps[] = [];
    for (let key in lsObject) {
      if (lsObject.hasOwnProperty(key)) {
        var value = lsObject[key];
        if (Array.isArray(value)) {
          newTransactions = [...newTransactions, ...value];
        }
      }
    }
    setTransactions(newTransactions);
  }, []);

  console.log(transaction, " from ls");
  return (
    <>
      {transaction ? (
        <></>
      ) : (
        <div className="transactionsHeader">
          {transactions.length === 0 ? null : (
            <>
              <span className="tranName">Transactions</span>
              <button className="seeAll">See All</button>
            </>
          )}
        </div>
      )}

      <CustomTransactionsDiv
        isSafari={isSafari}
        vh={vh}
        className="transactions"
        hasMargin={transaction || false}
      >
        {!transactions.length ? (
          <EmptyStateComponent />
        ) : homepage ? (
          transactions?.map((tr: TransactionProps, index: number) => {
            console.log(tr);
            return (
              <div key={index} className="transaction">
                <div className="transactionLeft">
                  <Box
                    sx={{
                      background: icons[tr.type][tr.category].background,
                      padding: "2px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {icons[tr?.type][tr?.category].icon ?? null}
                  </Box>

                  <div className="transInfo">
                    <span className="tranName">{tr.title}</span>
                    <span className="tranTime">
                      {timestampConverter(Number(tr.time))}
                    </span>
                  </div>
                </div>
                <span
                  className="tranAmount"
                  style={{ color: tr.type === "income" ? "green" : "red" }}
                >
                  {tr.type === "income" ? "+$" : "-$"}
                  {tr.amount}
                </span>
              </div>
            );
          })
        ) : (
          getItemFromLS()?.map((tr: TransactionProps, index: number) => {
            return (
              <div key={index} className="transaction">
                <div className="transactionLeft">
                  <Box
                    sx={{
                      background: icons[tr.type][tr.category].background,
                      padding: "2px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {icons[tr?.type][tr?.category].icon ?? null}
                  </Box>

                  <div className="transInfo">
                    <span className="tranName">{tr.title}</span>
                    <span className="tranTime">{tr.time}</span>
                  </div>
                </div>
                <span
                  className="tranAmount"
                  style={{ color: tr.type === "income" ? "green" : "red" }}
                >
                  {tr.type === "income" ? "+$" : "-$"}
                  {tr.amount}
                </span>
              </div>
            );
          })
        )}
      </CustomTransactionsDiv>
    </>
  );
}

export default TransactionComponent;
