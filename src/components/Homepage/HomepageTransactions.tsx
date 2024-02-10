import TransactionComponent from "../Transactions/TransactionComponent";

function HomepageTransactions() {
  return (
    <div className="transactionsContainer">
      <TransactionComponent vh="42vh" lsKey="transactions" />
    </div>
  );
}

export default HomepageTransactions;
