import React,{useState} from "react";
import { IconButton, Typography } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
function Library() {
  const [isHovered, setIsHovered] = useState(false)
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: isHovered ? "#e0e0e0" : "transparent", // Change background color on hover
    
  };
  return (
    <div style={containerStyle}
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}>
      <IconButton color="inherit" aria-label="library">
        <VideoLibraryIcon />
      </IconButton>
      <Typography variant="p" > Library </Typography>
    </div>
  );
}

export default Library;
