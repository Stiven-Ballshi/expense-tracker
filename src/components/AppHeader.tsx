import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { IconButton } from "@mui/material";

import BadgeComponent from "./Homepage/BadgeComponent";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function HomepageHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentUrl = location.pathname.replace("/", "");

  return (
    <div className="homepageContainer">
      <IconButton
        onClick={() => navigate("/")}
        style={{ backgroundColor: "#f9f5ff", borderRadius: "5px" }}
        className="widgetButton"
      >
        <WidgetsOutlinedIcon />
      </IconButton>

      <span style={{ textTransform: "capitalize" }}>
        {getCurrentUrl || "Homepage"}
      </span>

      {getCurrentUrl === "" ? (
        <IconButton>
          <BadgeComponent />
        </IconButton>
      ) : (
        <div style={{ width: "50px", height: "50px" }}></div>
      )}
    </div>
  );
}

export default HomepageHeader;
