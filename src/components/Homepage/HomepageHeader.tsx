import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { IconButton } from "@mui/material";

import "../../App.css";
import BadgeComponent from "./BadgeComponent";

function HomepageHeader() {
  return (
    <div className="homepageContainer">
      <IconButton
        style={{ backgroundColor: "#f9f5ff", borderRadius: "5px" }}
        className="widgetButton"
      >
        <WidgetsOutlinedIcon />
      </IconButton>

      <span>Home</span>

      <IconButton>
        <BadgeComponent />
      </IconButton>
    </div>
  );
}

export default HomepageHeader;
