import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CheckboxTypeValueMapProps } from "../../types/types";

type CheckboxProps = {
  type: string;
  setCheckboxValues: React.Dispatch<
    React.SetStateAction<CheckboxTypeValueMapProps>
  >;
  checkboxValues: CheckboxTypeValueMapProps;
};

function CheckboxComponent({
  type,
  checkboxValues,
  setCheckboxValues,
}: CheckboxProps) {
  const handleClick = (idx: number) => {
    const newArr = checkboxValues.map((obj, i) => {
      if (i === idx) {
        return { ...obj, selected: !obj.selected };
      } else {
        return { ...obj, selected: false };
      }
    });

    setCheckboxValues(newArr);
  };

  return (
    <div>
      <Typography sx={{ fontSize: "22px", margin: "20px 0px" }} variant="h5">
        Category
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          rowGap: "10px",
        }}
      >
        {checkboxValues.map((val, idx) => (
          <Box
            key={idx}
            onClick={() => handleClick(idx)}
            sx={{
              borderRadius: "30px",
              padding: "0px 10px",
              width: "150px",
              textAlign: "center",
              backgroundColor: `${
                val.selected
                  ? type === "income"
                    ? "#8736f6"
                    : "#ff6c39"
                  : "#f9f5ff"
              }`,
              color: (theme) => {
                return val.selected
                  ? theme.palette.background.default
                  : "black";
              },
              marginRight: "20px",
            }}
          >
            <span>{val.name}</span>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default CheckboxComponent;
