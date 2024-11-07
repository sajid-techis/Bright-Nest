"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    label: "Renovation",
    images: ["/portfolio-1.png", "/portfolio-2.png", "/portfolio-3.png"],
  },
  {
    id: 2,
    label: "Interior Drawing",
    images: ["/portfolio-4.png", "/portfolio-5.png", "/portfolio-6.png"],
  },
  {
    id: 3,
    label: "Building Space",
    images: ["/portfolio-7.png", "/portfolio-8.png", "/portfolio-9.png"],
  },
];

const PortfolioComponent = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(
    projects.map(() => 0) // Initialize index for each project
  );

  // Function to handle image click and navigate to project details
  const handleImageClick = (projectId) => {
    router.push(`/projects/${projectId}`);
  };

  // Function to handle next slide
  const nextImage = (projectIndex) => {
    setCurrentIndex((prev) =>
      prev.map((index, i) =>
        i === projectIndex
          ? (index + 1) % projects[projectIndex].images.length
          : index
      )
    );
  };

  // Function to handle previous slide
  const prevImage = (projectIndex) => {
    setCurrentIndex((prev) =>
      prev.map((index, i) =>
        i === projectIndex
          ? (index - 1 + projects[projectIndex].images.length) %
            projects[projectIndex].images.length
          : index
      )
    );
  };

  return (
    <div className="bg-greenish text-white p-6 sm:p-8 flex flex-col md:flex-row items-start">
      {/* Left Section: Categories */}
      <div className="md:w-1/4 p-4">
        <h2 className="text-lg text-green-600 tracking-wide uppercase mb-4">
          Latest Portfolio
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Select Categories</h1>

        <ul className="space-y-4 text-base sm:text-lg font-medium">
          <li className="text-yellow-500 cursor-pointer">All Projects</li>
          <li className="text-gray-300 cursor-pointer">Interior Drawing</li>
          <li className="text-gray-300 cursor-pointer">Renovation</li>
          <li className="text-gray-300 cursor-pointer">Building Space</li>
        </ul>

        <a href="#" className="text-green-600 mt-8 inline-block">
          SEE MORE &rarr;
        </a>
      </div>

      {/* Right Section: Projects with Swiper-like Image Navigation */}
      <div className="md:w-3/4 p-4 relative">
        <div className="flex flex-col md:flex-row md:space-x-6 overflow-x-auto whitespace-nowrap">
          {projects.map((project, projectIndex) => (
            <div
              key={project.id}
              className="mx-auto w-[90%] md:w-auto min-w-[350px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[400px] bg-secondary rounded-lg p-4 mb-6 md:mb-0 inline-block"
            >
              <h3 className="text-lg font-semibold mb-4">{project.label}</h3>

              {/* Swiper Image with Navigation Buttons */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
                <Image
                  src={project.images[currentIndex[projectIndex]]}
                  alt={project.label}
                  layout="fill"
                  className="rounded-lg cursor-pointer object-cover"
                  onClick={() => handleImageClick(project.id)}
                />

                {/* Navigation Buttons */}
                <button
                  onClick={() => prevImage(projectIndex)}
                  className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-greenish text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-lg hover:bg-green-500 transition duration-200 ease-in-out"
                >
                  &larr;
                </button>
                <button
                  onClick={() => nextImage(projectIndex)}
                  className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-secondary text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-lg hover:bg-green-500 transition duration-200 ease-in-out"
                >
                  &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
