import { FormEvent } from "react";

import { useParams } from "react-router-dom";

import {
  Button,
  TextField,
  OutlinedInput,
  InputAdornment,
  Box,
} from "@mui/material";
import { CustomFormControl, InputDiv } from "./Input.style";
// import { faker } from "@faker-js/faker";

function AddTransactionType() {
  const { type } = useParams();
  // const [initialValues, setInitialValues] = useState<TUserTransaction>({
  //   name: "",
  //   id: faker.string.uuid(),
  //   avatar: faker.image.avatar(),
  //   time: new Date().getTime().toString(),
  //   trans: "",
  //   type: type as string,
  // });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          justifyContent: "space-between",
          height: "88dvh",
          alignItems: "center",
        }}
      >
        <CustomFormControl fullWidth>
          <Box>
            <InputDiv>
              <span
                style={{ marginBottom: "10px", textTransform: "capitalize" }}
              >
                {type} title
              </span>
              <TextField
                autoFocus
                color={type === "income" ? "primary" : "secondary"}
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
                color={type === "income" ? "primary" : "secondary"}
                sx={{
                  width: "100%",
                  fontSize: "2rem",
                  "& .MuiTypography-root": {
                    fontSize: "2rem",
                  },
                }}
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </InputDiv>
          </Box>
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
        </CustomFormControl>
      </form>
      {/* Button Box */}
    </>
  );
}

export default AddTransactionType;
