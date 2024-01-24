import { IconButton, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const StyledAddDiv = styled("div")({
  borderRadius: "50%",
  background: "#8736f6",
  width: "80%",
  height: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  svg: {
    width: "1.9em",
    height: "1.9em",
    color: "white",
  },
});

export const StyledOuterAddDiv = styled("div")({
  position: "absolute",
  bottom: "1vh",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  filter: "drop-shadow(0px 10px 10px #8736f6)",
  borderRadius: "50%",
  width: "90px",
  height: "90px",
  zIndex: "10000",
});

function PlusComponent() {
  return (
    <StyledOuterAddDiv>
      <StyledAddDiv>
        <IconButton>
          <AddIcon />
        </IconButton>
      </StyledAddDiv>
    </StyledOuterAddDiv>
  );
}

export default PlusComponent;
