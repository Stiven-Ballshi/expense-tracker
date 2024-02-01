import { Box, FormControl, styled } from "@mui/material";

export const CustomFormControl = styled(FormControl)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontSize: "2rem",
  rowGap: "2rem",
  height: "100%",
  "& .MuiInputBase-root": {
    borderRadius: "15px",
  },
});

export const InputDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: "2rem",
});
