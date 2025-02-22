import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Services from "../components/Services.jsx"; // Import your Services component
// import VideoPlayer from "../components/VideoPlayer.jsx"; // Import the VideoPlayer component
import ScrollToTopButton from "../components/scrolltotop.jsx";
import PopupButton from "../components/PopupButton.jsx";
// import video1 from "../assets/videos/video1.mp4";
// import video2 from "../assets/videos/video2.mp4";
// import video3 from "../assets/videos/video3.mp4";
// import video4 from "../assets/videos/video4.mp4";
// import video5 from "../assets/videos/video5.mp4";
// import video6 from "../assets/videos/video6.mp4";
import loader from "../assets/loader/loader.gif";

const VideoEmbed = () => {
  useEffect(() => {
    // Load Vimeo player script dynamically
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};
const OurServices = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayVideo = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setShowDialog(false);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSelectedVideo(null);
  };

  
    const videos = [
      "https://player.vimeo.com/video/1059233341?h=d56bb7d3e1&badge=0&autopause=0&player_id=0&app_id=58479",
      "https://player.vimeo.com/video/1059236067?h=55bc5a6165&badge=0&autopause=0&player_id=0&app_id=58479",
      "https://player.vimeo.com/video/1059236097?h=e1079b7f08&badge=0&autopause=0&player_id=0&app_id=58479",
      "https://player.vimeo.com/video/1059236113?h=00eaf7d3d3&badge=0&autopause=0&player_id=0&app_id=58479",
      "https://player.vimeo.com/video/1059236142?h=47627e0a86&badge=0&autopause=0&player_id=0&app_id=58479",
      "https://player.vimeo.com/video/1059236177?h=fc5fefc863&badge=0&autopause=0&player_id=0&app_id=58479",
    ];
  

  if (isLoading) {
    return (
      <div className="loading-screen flex flex-col justify-center items-center h-screen bg-black">
        {/* Spinning Logo Loader */}
        <img
          src={loader}
          alt="Loading Logo"
          className="w-32 h-32 animate-spin"
        />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="our-services-page p-6 pt-24">
        <Services />

        {/* Section 2: Work Videos */}
        <section className="mt-16 text-center">
          <h2 className="text-5xl font-oswald text-black">WORK</h2>
          <p className="text-lg font-nunito mt-2">See our work in action</p>
        </section>

        {/* Video Grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative bg-black rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handlePlayVideo(video)}
            >
              <VideoPlayer videoSrc={video} />
            </div>
          ))}
        </div>

        {/* Dialog Box for Video */}
        {/* {showDialog && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={closeDialog}
          >
            <div className="relative bg-black p-4 rounded-lg shadow-lg w-[80%] max-w-xl">
              <VideoPlayer videoSrc={selectedVideo} />
              
            </div>
          </div>
        )} */}
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-xl font-semibold mb-6">
            See Our Work In Action
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative pt-[177.78%] bg-black rounded-lg overflow-hidden cursor-pointer"
              >
                <iframe
                  src={video}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title={`video${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      <ScrollToTopButton />
    </>
  );
};

export default OurServices;
