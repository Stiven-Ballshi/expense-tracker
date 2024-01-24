import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "../../App.css";

type Props = {
  isIncome?: boolean;
  isExpense?: boolean;
  category: string;
};

function IconUpOrDownComponent({ category, isIncome, isExpense }: Props) {
  return (
    <div className="flexBox">
      <div style={{ display: "flex", alignItems: "center" }}>
        {isIncome ? (
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
        ) : (
          <IconButton
            style={{
              backgroundColor: "rgba(3, 172, 240, 0.3)",
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
        )}
        <span>{category}</span>
      </div>
      <p>$2,350.00</p>
    </div>
  );
}

export default IconUpOrDownComponent;
