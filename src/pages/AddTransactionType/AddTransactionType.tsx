import { FormEvent, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  TextField,
  OutlinedInput,
  InputAdornment,
  Box,
} from "@mui/material";
import { CustomFormControl, InputDiv } from "./Input.style";
import CheckboxComponent from "../../components/AddIncomeOrExpense/CheckboxComponent";
import {
  ExpenseCategory,
  IncomeCategory,
  TransactionProps,
} from "../../types/types";
import { faker } from "@faker-js/faker";
import { checkboxValueMap } from "../../constants/selectMap";
import { useTransaction } from "../../components/hooks/useTransaction";
import { useLocalStorage } from "../../components/hooks/useLocalStorage";

function AddTransactionType() {
  const navigate = useNavigate();
  const { type } = useParams();
  const { setExpenses, setIncomes } = useTransaction();
  const { setItemToLs, getItemFromLS } = useLocalStorage(type as string);

  const [checkboxValues, setCheckboxValues] = useState(checkboxValueMap);
  const [initialValues, setInitialValues] = useState<TransactionProps>({
    title: "",
    id: faker.string.uuid(),
    icon: undefined,
    time: new Date().getTime(),
    amount: "",
    type: type as "expense" | "income",
    category: "bill",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedCategory = checkboxValues.find((obj) => obj.selected);
    const transactionData = {
      ...initialValues,
      category: selectedCategory?.key as ExpenseCategory | IncomeCategory,
    };

    if (type === "expense") {
      setExpenses((prevExpenses: TransactionProps[]) => [
        ...prevExpenses,
        transactionData,
      ]);
    } else if (type === "income") {
      setIncomes((prevExpenses: TransactionProps[]) => [
        ...prevExpenses,
        transactionData,
      ]);
    }

    setItemToLs([...(getItemFromLS() ?? []), transactionData]);

    navigate("/");
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
                value={initialValues.title}
                autoFocus
                onChange={(e) => {
                  const newValue = e.target.value;

                  setInitialValues((prevValues) => ({
                    ...prevValues,
                    title: newValue,
                  }));
                }}
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
                inputProps={{ min: 1, max: 1000000 }}
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
                onChange={(e) => {
                  const newValue = e.target.value;
                  setInitialValues((prevValues) => ({
                    ...prevValues,
                    amount: newValue,
                  }));
                }}
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </InputDiv>

            <CheckboxComponent
              checkboxValues={checkboxValues}
              setCheckboxValues={setCheckboxValues}
              type={type ?? "income"}
            />
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
