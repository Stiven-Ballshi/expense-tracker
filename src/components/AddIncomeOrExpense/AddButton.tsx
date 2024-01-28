import { useTheme } from "@mui/material";
import { StyledButton } from "./Button.styled";
import PaymentIcon from "@mui/icons-material/Payment";

type Props = {
  type: string;
  title: string;
};

function AddButton({ type, title }: Props) {
  const theme = useTheme();
  return (
    <StyledButton buttonType={type}>
      <PaymentIcon
        htmlColor={
          type === "income"
            ? theme.palette.primary.main
            : theme.palette.secondary.main
        }
      />
      <span
        style={{
          fontWeight: "500",
          letterSpacing: "1.2px",
          fontSize: "1.8rem",
        }}
      >
        {title}
      </span>
    </StyledButton>
  );
}

export default AddButton;
