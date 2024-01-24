import { styled } from "@mui/material";
import { useRouteError } from "react-router-dom";

const StyledDiv = styled("div")({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <StyledDiv>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </StyledDiv>
  );
}
