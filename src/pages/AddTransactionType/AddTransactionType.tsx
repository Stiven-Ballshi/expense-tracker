import { useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { Button, TextField } from "@mui/material";

import { CustomFormControl, InputDiv } from "./Input.style";

function AddTransactionType() {
  const { type } = useParams();

  const inputRef = useRef<HTMLInputElement | null>(null);
  // const [value, setValue] = useState({
  //   amount: "",
  //   title: "",
  //   type: type,
  // });

  useLayoutEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        justifyContent: "space-between",
        height: "85vh",
        alignItems: "center",
      }}
    >
      {/* Input Box */}
      <CustomFormControl
        fullWidth
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "15px",
          },
        }}
      >
        <InputDiv>
          <span style={{ marginBottom: "10px", textTransform: "capitalize" }}>
            {type} title
          </span>
          <TextField
            ref={inputRef}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: "2rem",
              },
              width: "100%",
            }}
            id="outlined-basic"
            variant="outlined"
            type="text"
          />
        </InputDiv>

        <InputDiv>
          <span style={{ marginBottom: "10px" }}>Amount</span>
          <OutlinedInput
            inputMode="numeric"
            type="number"
            sx={{
              width: "100%",
              fontSize: "2rem",
              "& .MuiTypography-root": {
                fontSize: "2rem",
              },
            }}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </InputDiv>
      </CustomFormControl>
      {/* Button Box */}

      <Button
        fullWidth
        variant="outlined"
        color="primary"
        type="submit"
        sx={{
          background: (theme) =>
            type === "income"
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
          color: (theme) => theme.palette.background.default,
          textTransform: "capitalize",
          fontSize: "2.5rem",
          borderRadius: "15px",
        }}
      >
        Add {type}
      </Button>
    </Box>
  );
}

export default AddTransactionType;
