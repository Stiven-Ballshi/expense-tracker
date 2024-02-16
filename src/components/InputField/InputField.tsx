import TextField from "@mui/material/TextField";

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  title: string;
  value: string;
};

function InputField({ name, type, title, value, handleChange }: Props) {
  return (
    <div style={{ width: "100%" }}>
      <label htmlFor={`input-label-${name}`}>{title}</label>
      <TextField
        name={name}
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiInputBase-input": {
            fontSize: "1rem",
          },
          width: "100%",
        }}
        inputMode={type === "numeric" ? "tel" : (type as any)}
        id={`input-label-${name}`}
        variant="outlined"
        type={type}
      />
    </div>
  );
}

export default InputField;
