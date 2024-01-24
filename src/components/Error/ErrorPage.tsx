import { styled } from "@mui/material";

const StyledDiv = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
});

export default function ErrorPage() {
  return (
    <StyledDiv>
      <h1>Oops!</h1>
      <h1>404 Page not found</h1>
    </StyledDiv>
  );
}
