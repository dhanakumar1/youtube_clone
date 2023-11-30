import React, {  useState } from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";

import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";


function Header({ searchResult }) {
  const [inputValue,setInputValue] = useState("")

  const handleSearch = ()=>{
    searchResult(inputValue);
  }
 
  return (
    <div className="header">
      <div className="left__side">
        <IconButton>
          <MenuSharpIcon></MenuSharpIcon>
        </IconButton>

        <Link to="/">
          <img
            className="header__photo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Youtube.png/800px-Youtube.png?20200327063957"
            alt="youtube logo"
          />
        </Link>
      </div>
      <div style={{display:"flex",alignItems:"center", border:"1px  solid grey", borderRadius: '20px'}}>
        <input style={{width:"600px" , height: "35px",  borderTopLeftRadius: "20px" , borderBottomLeftRadius: "20px"}}
          onChange={(e)=>setInputValue(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <IconButton>

        
        <SearchSharpIcon onClick={()=>handleSearch()}  className="search__button" />
        </IconButton>
      </div>
      <div className="right__side">
        <VideoCallSharpIcon />
       
        <NotificationsIcon />
        <Avatar sx={{ bgcolor: deepPurple[500] }}> DH</Avatar>
      </div>
    </div>
  );
}

export default Header;
