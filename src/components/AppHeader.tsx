import { useLocation, useNavigate } from "react-router-dom";

import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";

import PlusComponent from "./Tabs/PlusComponent";

import "../App.css";

function HomepageHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  let regexPattern = /[\/.,-]/g;
  const getCurrentUrl = location.pathname;
  const formatedUrl = getCurrentUrl.replace(regexPattern, " ");

  return (
    <div className="homepageContainer">
      {getCurrentUrl.includes("add") ? (
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIosIcon />
        </IconButton>
      ) : (
        <IconButton
          style={{ backgroundColor: "#f9f5ff", borderRadius: "5px" }}
          className="widgetButton"
        >
          <WidgetsOutlinedIcon />
        </IconButton>
      )}

      <span style={{ textTransform: "capitalize" }}>
        {getCurrentUrl === "/" ? "Homepage" : formatedUrl}
      </span>

      {getCurrentUrl.includes("add") ? (
        <div style={{ width: "50px", height: "50px" }}></div>
      ) : (
        <IconButton onClick={() => navigate("/add")}>
          <PlusComponent />
        </IconButton>
      )}
    </div>
  );
}

export default HomepageHeader;
