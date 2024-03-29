import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import AddButton from "../../components/AddIncomeOrExpense/AddButton";
import styles from "./Page.module.css";

export const AddPageContainer = styled("div")({
  padding: "20px",
});

function AddIncomeOrExpensePage() {
  const navigate = useNavigate();

  return (
    <AddPageContainer>
      <div className={styles.container}>
        <AddButton
          title="Add Income"
          type="income"
          onClick={() => navigate("/add/income")}
        />
        <AddButton
          onClick={() => navigate("/add/expense")}
          title="Add Expense"
          type="expense"
        />
      </div>
    </AddPageContainer>
  );
}

export default AddIncomeOrExpensePage;
