import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import IconButton from "@mui/material/IconButton";
import "../../App.css";

function HomepageCard() {
  return (
    <div className="homepageCard">
      <p className="balanceTitle">Total Balance</p>
      <p className="balanceNumber">$3,257.00</p>

      <div className="outcomeCalculation">
        <div className="flexBox">
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              style={{
                backgroundColor: "rgba(3, 172, 240, 0.3)",
                borderRadius: "50%",
                padding: "11px",
                marginRight: "10px",
              }}
            >
              <ArrowUpwardIcon
                style={{ width: "1.9rem", fill: "white" }}
                className="cardIcon"
              />
            </IconButton>
            <span>Income</span>
          </div>
          <p>$2,350.00</p>
        </div>

        <div className="flexBox">
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              style={{
                background: "rgba(3, 172, 240, 0.3)",
                borderRadius: "50%",
                padding: "11px",
                marginRight: "10px",
              }}
            >
              <ArrowDownwardIcon
                style={{ width: "1.9rem", fill: "white" }}
                className="cardIcon"
              />
            </IconButton>
            <span>Expenses</span>
          </div>
          <p>$950.00</p>
        </div>
      </div>
    </div>
  );
}

export default HomepageCard;
