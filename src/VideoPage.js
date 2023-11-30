import React, { useEffect, useState } from "react";

function VideoPage({videoData}) {

  const [vData, setVideoData] = useState([])

  useEffect(()=>{
    setVideoData(videoData)
  },[videoData])
 
  return (
    <div  style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginLeft:"40px", marginRight:"40px"}}>
      
      {vData && vData.map((item)=>{
        return <div  key={item.id} style={{ flexBasis: "fit-content", marginBottom: "20px" }} >
        
        <iframe
          width={item.width}
          height={item.height}
          src={item.src}
          title={item.title}
          frameborder={item.frameborder}
          allow={item.allow}
          allowfullscreen={videoData.allowfullscreen ? 'true' : 'false'}
        
        ></iframe>
        <div style={{display:"flex", alignItems: "center" }}>
         <div> {item.avatar}</div>
        <h3 style={{marginLeft:"20px" , marginTop: "5px" }}> {item.title}</h3>
       
        </div>
        <h9 style={ { marginLeft:"65px"}}> {item.channel}</h9>
        </div>
      })}
      
     
    </div>


  );
}

export default VideoPage;
