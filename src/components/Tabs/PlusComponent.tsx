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

const StyledComp = styled("div")<{ myProp?: boolean; color?: string }>(
  ({ theme, myProp, color }) => ({
    backgroundColor: myProp ? "aliceblue" : "red",
    color,
    padding: theme.spacing(1),
  })
);

export const StyledOuterAddDiv = styled("div")<{ isSafari?: boolean }>(
  (prop) => ({
    position: "absolute",
    bottom: prop.isSafari ? "10%" : "0%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    filter: "drop-shadow(0px 10px 10px #8736f6)",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    zIndex: "10000",
  })
);

function PlusComponent() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <StyledOuterAddDiv isSafari={isSafari}>
      <StyledAddDiv>
        <IconButton>
          <AddIcon />
        </IconButton>
      </StyledAddDiv>
    </StyledOuterAddDiv>
  );
}

export default PlusComponent;
