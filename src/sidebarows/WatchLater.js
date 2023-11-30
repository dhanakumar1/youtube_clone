import React, {useState} from 'react'
import { IconButton, Typography } from "@mui/material";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
function WatchLater() {
  const [isHovered, setIsHovered] = useState(false)
  const containerStyle={ display: "flex",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: isHovered ? "#e0e0e0" : "transparent", // Change background color on hover
  

  };
  return (
    <div style={containerStyle}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave= {() => setIsHovered(false)}>
      <IconButton color='Inherit' aria-label='watchlater'>
        <WatchLaterIcon/>
      </IconButton>
      <Typography variant='p'> Watch Later</Typography>
    </div>
  )
}

export default WatchLater
