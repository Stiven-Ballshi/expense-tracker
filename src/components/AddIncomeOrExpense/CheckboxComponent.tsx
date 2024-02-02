import { useState } from "react";
import { checkboxValueMap } from "../../constants/selectMap";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { Height } from "@mui/icons-material";
import Button from "@mui/material/Button";

type CheckboxProps = {
  type: string;
};

function CheckboxComponent({ type }: CheckboxProps) {
  const [checkboxValues, setCheckboxValues] = useState(checkboxValueMap);

  console.log(type);

  const handleClick = (idx: number) => {
    const newArr = checkboxValues.map((obj, i) => {
      if (i === idx) {
        return { ...obj, selected: !obj.selected };
      }

      return obj;
    });

    setCheckboxValues(newArr);
  };

  console.log(checkboxValues);

  return (
    <Stack direction="row" spacing={2}>
      {checkboxValues.map((val, idx) => (
        <Button
          sx={{
            color: val.selected ? "white" : "black",
            backgroundColor: `${val.selected ? "#8736f6" : "#f9f5ff"}`,
          }}
          key={idx}
          onClick={() => handleClick(idx)}
        >
          {val.name}
        </Button>
      ))}
    </Stack>
  );
}

export default CheckboxComponent;
