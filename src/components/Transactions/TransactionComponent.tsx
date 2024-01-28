import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { TTransactions } from "../../types";
import { styled } from "@mui/material";

type TProps = {
  transactions?: TTransactions[];
  overview?: Boolean;
  vh?: string | undefined;
};

export const CustomTransactionsDiv = styled("div")<{
  isSafari?: boolean;
  vh: string;
}>((prop) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  rowGap: "2rem",
  height: prop.isSafari ? "35vh" : prop.vh,
  scrollBehavior: "smooth",
  overflowY: "auto",
}));

function TransactionComponent({ transactions, overview, vh = "" }: TProps) {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <>
      {overview ? (
        <></>
      ) : (
        <div className="transactionsHeader">
          <>
            <span className="tranName">Transactions</span>
            <button className="seeAll">See All</button>
          </>
        </div>
      )}

      <CustomTransactionsDiv
        isSafari={isSafari}
        vh={vh ? vh : "35vh"}
        className="transactions"
      >
        {transactions?.map((tr: TTransactions, index: number) => {
          return (
            <div key={index} className="transaction">
              <div className="transactionLeft">
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      tr.avatar
                        ? tr.avatar
                        : "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                    }
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
      </CustomTransactionsDiv>
    </>
  );
}

export default TransactionComponent;
