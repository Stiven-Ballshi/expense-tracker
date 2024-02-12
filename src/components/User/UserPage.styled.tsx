import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const UserMenuWrappers = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
  padding: "0px 10px",
});

export const UserIconSpan = styled("span")<{ bgColor: string }>((prop) => ({
  background: prop.bgColor,
  borderRadius: "10px",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LeftBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});
