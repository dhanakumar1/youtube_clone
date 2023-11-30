import React ,{useState} from 'react'
import { IconButton, Typography } from "@mui/material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
function LikedVideos() {
  const [isHovered, setIsHovered] = useState(false)
  const containerStyle={ display: "flex",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: isHovered ? "#e0e0e0" : "transparent", // Change background color on hover
  

  };
  return (
    <div style={containerStyle}
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)} >
        <IconButton color='inherit' aria-label='likedvideos'>
            <ThumbUpOffAltIcon/>
        </IconButton>
        <Typography variant='p'> Liked Videos</Typography>
    </div>
  )
}

export default LikedVideos
