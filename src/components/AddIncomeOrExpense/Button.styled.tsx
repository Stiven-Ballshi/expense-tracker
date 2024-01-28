import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)<{ buttonType: string }>((prop) => ({
  background: prop.buttonType === "income" ? "#f2ebfd" : "#ffefeb",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  color: prop.theme.palette.text.primary,
}));
