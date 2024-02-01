import TransactionComponent from "../Transactions/TransactionComponent";
import { useTransaction } from "../hooks/useTransaction";

function HomepageTransactions() {
  const { TransactionsHistory, incomes, expenses } = useTransaction();
  return (
    <div className="transactionsContainer">
      <TransactionComponent
        transactions={TransactionsHistory(incomes, expenses)}
        vh="42vh"
      />
    </div>
  );
}

export default HomepageTransactions;
