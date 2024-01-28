import { Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import styles from "./Header.module.css";
import TransactionComponent from "./TransactionComponent";
import { useTransaction } from "../hooks/useTransaction";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
}

function OverviewTabs() {
  const [value, setValue] = useState(0);
  const { incomes, expenses } = useTransaction();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.tabContainer}>
      <span style={{ fontSize: "2rem", paddingBottom: "10px" }}>
        Statistics
      </span>

      <Tabs
        sx={{
          "& .MuiTabs-scroller": {
            borderRadius: "10px",
          },
          "& .MuiTabs-root": {
            width: "100%",
          },
          "& .MuiTab-root": {
            background: "#f2ebfd",
            color: "black",
          },
          "& .MuiTab-root.MuiIncomeTab.Mui-selected": {
            background: "#8736f6",
            color: "white",
          },
          "& .MuiTab-root.MuiExpenseTab.Mui-selected": {
            background: "#ff6c39",
            color: "white",
          },
        }}
        style={{ position: "relative" }}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        TabIndicatorProps={{
          style: { display: "none" },
        }}
      >
        <Tab
          sx={{
            fontSize: "1.7rem",
          }}
          className="MuiIncomeTab"
          label="Income"
        />
        <Tab
          sx={{ fontSize: "1.7rem" }}
          className="MuiExpenseTab"
          label="Expenses"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TransactionComponent vh="53vh" overview transactions={incomes} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TransactionComponent vh="53vh" overview transactions={expenses} />
      </TabPanel>
    </div>
  );
}

export default OverviewTabs;
