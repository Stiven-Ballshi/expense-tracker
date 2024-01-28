import OverviewHeader from "../../components/Transactions/TransactionHeader";
import OverviewTabs from "../../components/Transactions/TransactionTabs";

type Props = {};

function TransactionPage({}: Props) {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
      }}
    >
      <OverviewHeader />
      <OverviewTabs />
    </div>
  );
}

export default TransactionPage;
