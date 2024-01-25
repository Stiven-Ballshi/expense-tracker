import OverviewHeader from "../../components/Transactions/OverviewHeader";
import OverviewTabs from "../../components/Transactions/OverviewTabs";

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
