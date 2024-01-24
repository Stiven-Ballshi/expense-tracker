import TransactionComponent from "../Transactions/TransactionComponent";
import { TTransactions } from "../../types";

type Props = {
  transactions: TTransactions[];
};

function HomepageTransactions({ transactions }: Props) {
  return (
    <div className="transactionsContainer">
      <TransactionComponent overview={false} transactions={transactions} />
    </div>
  );
}

export default HomepageTransactions;
