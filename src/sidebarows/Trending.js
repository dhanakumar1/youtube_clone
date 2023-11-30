import React,{useState} from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Typography, IconButton } from "@mui/material";
function Trending() {
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
      <IconButton color="inherit" aria-label="trending">
        <WhatshotIcon />
      </IconButton>
      <Typography variant="p">Trending</Typography>
    </div>
  );
}

export default Trending;
