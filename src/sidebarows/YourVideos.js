import React ,{useState} from "react";
import { IconButton, Typography } from "@mui/material";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
function YourVideos() {
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
      <IconButton color="inherit" aria-label="yourvideo">
       <OndemandVideoIcon/>
      </IconButton>
      <Typography variant="p"> Your Videos</Typography>
    </div>
  );
}

export default YourVideos;
