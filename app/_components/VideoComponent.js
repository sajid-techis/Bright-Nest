"use client";

import React from "react";

const VideoComponent = () => {
  return (
    <div className="relative bg-[#FDF6D7] text-white p-4 md:p-8">
      {/* Top Heading */}
      <div className="flex justify-center">
        <h1
          className="
            text-4xl md:text-6xl font-extrabold tracking-wide
            text-center leading-tight
          "
        >
          <span className="outline-text">Watch</span>{' '}
          <span className="outline-text">Video</span>{' '}
          <span className="outline-text">Profile</span>
        </h1>
      </div>

      {/* Video Player */}
      <div className="my-6 flex justify-center">
        <video 
          width="90%" 
          height="auto" 
          controls 
          className="rounded-lg mx-auto h-[300px] md:h-[500px]"
          poster="/Video-thumbnail.png"
        >
          <source src="/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Scrolling Text Heading */}
      <div className="relative overflow-hidden h-20 px-4">
        <div className="whitespace-nowrap animate-scroll-left ">
          <h1 className="text-7xl font-bold inline-block">
            <span className="text-greenish">Bright</span> &nbsp;
            <span className="text-secondary">Nest</span> &nbsp;
            <span className="text-greenish">Design </span> &nbsp;
            <span className="text-secondary">Studio</span> &nbsp;&nbsp;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
