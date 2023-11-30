
import { IconButton, Typography } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import React, { useState } from 'react';

function History() {
  const [isHovered,setIsHovered] = useState(false);
  
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: isHovered ? "#e0e0e0" : "transparent", // Change background color on hover
    
  };
  return (
    <div style={containerStyle}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <IconButton color="inherit" aria-label="history">
        <HistoryIcon />
      </IconButton>
      <Typography variant="p">History</Typography>
    </div>
  );
}

export default History;
