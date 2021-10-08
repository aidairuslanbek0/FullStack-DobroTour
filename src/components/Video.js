function Video(){
    
      return (
        <div className="video-btn d-flex justify-center">
        <video width="350" height="300" controls >
        <source src="../public/../video/video.mp4" type="video/mp4"/>
       </video>
        </div>
      );
    
  }

export default Video