import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styles from "./Header.module.css";

function OverviewHeader() {
  return (
    <div className={styles.header}>
      <div className={`${styles.trackBox} ${styles.income}`}>
        <span style={{ color: "hsl(240 12% 66% / 1)" }}>Total Income</span>
        <div className={styles.number}>
          <IconButton
            style={{
              backgroundColor: "#8736f6",
              borderRadius: "50%",
              padding: "11px",
              marginRight: "10px",
            }}
          >
            <ArrowUpwardIcon
              style={{ width: "1.5rem", fill: "white" }}
              className="cardIcon"
            />
          </IconButton>
          <span>$8,500</span>
        </div>
      </div>
      <div className={`${styles.trackBox} ${styles.expense}`}>
        <span style={{ color: "hsl(240 12% 66% / 1)" }}>Total Income</span>
        <div className={styles.number}>
          <IconButton
            style={{
              backgroundColor: "#ff6c39",
              borderRadius: "50%",
              padding: "11px",
              marginRight: "10px",
            }}
          >
            <ArrowUpwardIcon
              style={{ width: "1.5rem", fill: "white" }}
              className="cardIcon"
            />
          </IconButton>
          <span>$8,500</span>
        </div>
      </div>
    </div>
  );
}

export default OverviewHeader;
