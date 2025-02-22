import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoSrc }) => {
  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <ReactPlayer
        url={videoSrc}
        width="100%"
        height="200px"
        controls={true} // Show controls, but don't autoplay
        playing={false} // Video won't play on click, the play button needs to be pressed
      />
    </div>
  );
};

export default VideoPlayer;
