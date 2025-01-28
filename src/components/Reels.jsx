import React, { useState, useRef, useEffect } from "react";
const Reels = () => {
  const reels = [
    "https://www.w3schools.com/html/mov_bbb.mp4", // Reel 1
    "https://www.w3schools.com/html/movie.mp4",   // Reel 2
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", // Reel 3
    "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", // Reel 4
    "https://samplelib.com/lib/preview/mp4/sample-20s.mp4", // Reel 5
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const mainVideoRef = useRef(null); // Reference for the main video element
  const leftVideoRef = useRef(null); // Reference for the left video element
  const rightVideoRef = useRef(null); // Reference for the right video element

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reels.length) % reels.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reels.length);
  };

  // Effect to reload the videos when the index changes
  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.load();
    }
    if (leftVideoRef.current) {
      leftVideoRef.current.load();
    }
    if (rightVideoRef.current) {
      rightVideoRef.current.load();
    }
  }, [currentIndex]);

  return (
    <div className="reel-carousel">
      <button className="reel-carousel__btn reel-carousel__btn--left" onClick={handlePrev}>
        &lt;
      </button>
      <div className="reel-carousel__container">
        {/* Left Reel */}
        <div className="reel-carousel__video reel-carousel__video--small">
          <video ref={leftVideoRef} muted loop>
            <source src={reels[(currentIndex - 1 + reels.length) % reels.length]} type="video/mp4" />
          </video>
        </div>
        {/* Main Reel */}
        <div className="reel-carousel__video reel-carousel__video--main">
          <video ref={mainVideoRef} autoPlay muted loop>
            <source src={reels[currentIndex]} type="video/mp4" />
          </video>
        </div>
        {/* Right Reel */}
        <div className="reel-carousel__video reel-carousel__video--small">
          <video ref={rightVideoRef} muted loop>
            <source src={reels[(currentIndex + 1) % reels.length]} type="video/mp4" />
          </video>
        </div>
      </div>
      <button className="reel-carousel__btn reel-carousel__btn--right" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Reels;
