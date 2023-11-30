import React from "react";
import "./SideBar.css";
import Home from "./sidebarows/Home";
import Trending from "./sidebarows/Trending";
import Subscription from "./sidebarows/Subscription";
import Library from "./sidebarows/Library";
import History from "./sidebarows/History";
import YourVideos from "./sidebarows/YourVideos";
import WatchLater from "./sidebarows/WatchLater";
import LikedVideos from "./sidebarows/LikedVideos";

function SideBar() {
  return (
    <div className="sidebar" style={{ width: "20%" }}>
      <Home></Home>
      <Trending />
      <Subscription />
      <hr />
      <Library />
      <History />
      <YourVideos />
      <WatchLater />
      <LikedVideos />
      <hr />
    </div>
  );
}

export default SideBar;
