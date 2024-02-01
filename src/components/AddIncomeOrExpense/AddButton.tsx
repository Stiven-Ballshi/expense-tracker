import { useTheme } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import { StyledButton } from "./Button.styled.tsx";

type Props = {
  type: string;
  title: string;
  onClick: () => void;
};

function AddButton({ type, title, onClick }: Props) {
  const theme = useTheme();
  return (
    <StyledButton onClick={onClick} buttonType={type}>
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
          letterSpacing: "0.5px",
          fontSize: "1.7rem",
        }}
      >
        {title}
      </span>
    </StyledButton>
  );
}

export default AddButton;
