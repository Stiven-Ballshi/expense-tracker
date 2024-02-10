import Typography from "@mui/material/Typography";

// type EmptyStateCompProps = {
//   transactionArray: TransactionProps[];
// };

function EmptyStateComponent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography sx={{ color: "gray" }} variant="h5">
        You have no Transactions <br /> Start to add some.
      </Typography>
    </div>
  );
}

export default EmptyStateComponent;
