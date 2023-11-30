import React , {useState} from "react";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { Typography, IconButton } from "@mui/material";
function Subscription() {
  const [isHovered, setIsHovered] = useState(false)
  const containerStyle={ display: "flex",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: isHovered ? "#e0e0e0" : "transparent", // Change background color on hover
  

  };
  return (
    <div style={containerStyle}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <IconButton color="inherit" aria-label="subscription">
        <SubscriptionsIcon />
      </IconButton>

      <Typography variant="p"> Subscription</Typography>
    </div>
  );
}

export default Subscription;
