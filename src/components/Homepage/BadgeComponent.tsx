import Badge from "@mui/material/Badge";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

type Props = {};

function BadgeComponent({}: Props) {
  return (
    <Badge badgeContent={1} color="primary">
      <NotificationsNoneIcon color="action" />
    </Badge>
  );
}

export default BadgeComponent;
