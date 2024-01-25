import { styled } from "@mui/material";
import IconUpOrDownComponent from "../Homepage/IconUpOrDownComponent";
import styles from "./Card.module.css";

type TProps = {
  isCardsPage: boolean;
  balanceName: string;
  cardholder?: string;
  cardNumber?: string;
  gradient: string;
};

export const CardHeader = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function CardComponent({
  isCardsPage,
  balanceName,
  cardholder,
  cardNumber,
  gradient,
}: TProps) {
  return (
    <div
      style={{
        background: gradient,
        rowGap: isCardsPage ? "3rem" : 0,
      }}
      className={styles.homepageCard}
    >
      <CardHeader>
        {isCardsPage && (
          <div className={styles.svgContainer} style={{ width: "100%" }}>
            <svg
              className={styles.svgIcon}
              fill="#fff"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z" />
            </svg>
          </div>
        )}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p className="balanceTitle">{balanceName}</p>
          <p className="balanceNumber">$3,257.00</p>
        </div>
      </CardHeader>
      {/* Cards number and ca */}
      <div className={styles.cardHolderInfo}>
        <span className={styles.cardNumber}>{cardNumber}</span>
        <span className={styles.cardName}>{cardholder}</span>
      </div>

      {isCardsPage ? null : (
        <div className="outcomeCalculation">
          <IconUpOrDownComponent isIncome category="Income" />
          <IconUpOrDownComponent isExpense category="Expense" />
        </div>
      )}
    </div>
  );
}

export default CardComponent;
