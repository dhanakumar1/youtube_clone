
import HomeIcon from "@mui/icons-material/Home";
import { Typography, IconButton } from '@mui/material';
import React, { useState } from 'react';
function Home() {
  const [isHovered, setIsHovered] = useState(false)
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
      <IconButton color="inherit" aria-label="home">
        <HomeIcon  />
      </IconButton>
      <Typography variant="p">Home</Typography>
    </div>
  );
}

export default Home;
