import { styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const StyledAddDiv = styled("div")({
  borderRadius: "50%",
  background: "#8736f6",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  svg: {
    width: "2.3rem",
    height: "2.3rem",
    color: "white",
  },
});

export const StyledOuterAddDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
});

function PlusComponent() {
  return (
    <StyledOuterAddDiv>
      <StyledAddDiv>
        <AddIcon />
      </StyledAddDiv>
    </StyledOuterAddDiv>
  );
}

export default PlusComponent;
