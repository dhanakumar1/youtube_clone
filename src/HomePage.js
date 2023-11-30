import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import RecommendVideo from "./RecommendVideo";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
const vData = [
  {
    id: 1,
    width: "350",
    height: "200",
    src: "https://www.youtube.com/embed/HcGNqrAtsgg?si=9aq6wQosAmatfc9V",
    frameborder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowfullscreen: true,
    title: "Thunder cat theme song",
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    channel: " old cartoon song"
    
    
  },
  {
    id: 2,
    width: "350",
    height: "200",
    src: "https://www.youtube.com/embed/R4vjJrGeh1c?si=iekD11_hBkkBjJjD",
    frameborder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowfullscreen: true,
    title: "Dragon ball z theme song",
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    channel:" Anime theme songs"
  },
  {
    id:3,
    width: "350",
    height: "200",
    src: "https://www.youtube.com/embed/rDxrpSqYHD8?si=2AnjZz0OApaEEsHY",
    title: "Tekken 8 New Character",
    frameborder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowfullscreen :true,
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    channel: "Tekken 8 Review"
  },
  { id: 4,
    width: "350",
  height: "200",
  src: "https://www.youtube.com/embed/nLC7Fj_yxcM?si=0v5SQ6ugVTvM7XVs",
  title: "Tekken Character select evolution",
  frameborder: "0",
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowfullscreen :true,
  avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
  channel:"Tekken 8 Review"  },
  { id: 5,
    width: "350",
  height: "200",
  src: "https://www.youtube.com/embed/IokBKvFiCvM?si=mYdtvV7KViBwSiPn",
  title: "adams family old theme song",
  frameborder: "0",
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowfullscreen :true,
  avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
channel: "old cartoon theme song"},
  {id:6,
     width: "350",
  height: "200",
  src: "https://www.youtube.com/embed/H0IQBWWabuU?si=CRPH55jX3XQTcKJB",
  title: "swats cats theme song",
  frameborder: "0",
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowfullscreen :true,
  avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
channel: "old cartoon theme song"},
  { id:7,
    width: "350",
  height: "200",
  src: "https://www.youtube.com/embed/qGguyyxthLw?si=nGLditlkGXugOpeH",
  title: "naruto tom and  jerry version",
  frameborder: "0",
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowfullscreen :true,
  avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
channel: "cartoon parodies"},
  { id:8,
    width: "350",
  height: "200",
  src: "https://www.youtube.com/embed/M-V5Wxc-D5E?si=1NuInw-_4rZDOEVs",
  title: "mortal combat all character",
  frameborder: "0",
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowfullscreen :true,
  avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
 channel:"Game Review" },
  {
    width: "350",
    height: "200",
    src: "https://www.youtube.com/embed/MNorQI_O-14?si=X6gqUwN2cXl0_h6O",
    title: "Tekken 8 lee roy vs kazuya",
    frameborder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowfullscreen :true,
    avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    channel:"Tekken Review"
  }
];

function HomePage() {
  const [videoData, setVideoData] = useState(vData);
 
  const searchResult = (firstNAme) => {
    if (firstNAme === "") {
      setVideoData(vData);
    } else {
      let newFilteredData = vData;
console.log("firstNAme",firstNAme);
console.log("newFilterDara 1 ",newFilteredData);
      newFilteredData = newFilteredData.filter((item) => item.title.includes(firstNAme));
      console.log("newFilteredData 2", newFilteredData);
      setVideoData(newFilteredData);
    }
  };

  return (
    <div>
      <Header className="app_header" searchResult={searchResult} />
      <div className="app_sidebar" style={{ display: "flex" }}>
        <SideBar />
        <RecommendVideo videoData={videoData} />
      </div>
    </div>
  );
}

export default HomePage;
