import React from 'react'
import './RecommendVideo.css'
import VideoPage from './VideoPage';


function RecommendVideo({videoData}) {

  
  
  return (
    <div className='recommend__app' style={{maxWidth:'100%', padding: "5px"}}>
      <h3 style={{marginTop:"0"}}>  Recommend Video</h3>
      <VideoPage videoData={videoData}/>
      </div>
  );
}

export default RecommendVideo;
