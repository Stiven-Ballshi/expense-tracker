import { styled } from "@mui/material";
import AddButton from "../../components/AddIncomeOrExpense/AddButton";
import styles from "./Page.module.css";
import TransactionComponent from "../../components/Transactions/TransactionComponent";
import { useTransaction } from "../../components/hooks/useTransaction";

export const AddPageContainer = styled("div")({
  padding: "20px",
});

function AddIncomeOrExpensePage() {
  const { transactions } = useTransaction();

  return (
    <AddPageContainer>
      <div className={styles.container}>
        <AddButton title="Add Income" type="income" />
        <AddButton title="Add Expense" type="expense" />
      </div>
      <TransactionComponent vh="65vh" transactions={transactions} />
    </AddPageContainer>
  );
}

export default AddIncomeOrExpensePage;
