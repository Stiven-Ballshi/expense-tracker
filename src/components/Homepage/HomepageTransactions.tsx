import TransactionComponent from "../Transactions/TransactionComponent";
import { useTransaction } from "../hooks/useTransaction";

function HomepageTransactions() {
  const { transactions } = useTransaction();
  return (
    <div className="transactionsContainer">
      <TransactionComponent transactions={transactions} vh="42vh" />
    </div>
  );
}

export default HomepageTransactions;
