import OverviewHeader from "../../components/Overview/OverviewHeader";
import OverviewTabs from "../../components/Overview/OverviewTabs";

type Props = {};

function OverviewPage({}: Props) {
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

export default OverviewPage;
