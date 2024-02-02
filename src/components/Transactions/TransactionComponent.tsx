// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import { Box, styled } from "@mui/material";
import { TransactionProps } from "../../types/types";
import { icons } from "../../constants/iconsMap";

type TProps = {
  transactions?: TransactionProps[];
  transaction?: Boolean;
  vh?: string | undefined;
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

function TransactionComponent({ transactions, transaction, vh = "" }: TProps) {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <>
      {transaction ? (
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
        vh={vh}
        className="transactions"
        hasMargin={transaction || false}
      >
        {transactions?.map((tr: TransactionProps, index: number) => {
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
                  {icons[tr.type][tr.category].icon ?? null}
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
        })}
      </CustomTransactionsDiv>
    </>
  );
}

export default TransactionComponent;
