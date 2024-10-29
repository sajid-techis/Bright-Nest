"use client";
import React from 'react';

const Work = () => {
    const steps = [
        {
          title: "Step 1: Match with one of our talented designers and get inspired.",
          description: 
            "We begin by understanding your needs, style preferences, and budget. Based on this, we connect you with the best-suited designer from our team. Explore mood boards and inspirations to kickstart your design journey.",
        },
        {
          title: "Step 2: Collaborate 1:1 with your designer to create your perfect space.",
          description: 
            "Work closely with your designer through personalized sessions. Share feedback, review layouts, and select furniture or decor elements that reflect your personality. The goal is to shape a design that feels uniquely yours.",
        },
        {
          title: "Step 3: Bring your design home with ease.",
          description: 
            "Once the design is finalized, we provide you with a comprehensive plan, including product recommendations and installation guidelines. We also assist with procurement, so you can bring your dream space to life without any hassle.",
        },
      ];
      

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section: Timeline */}
      <div className="flex-1 p-8 bg-white relative">
        <h2 className="text-3xl font-bold mb-4 text-secondary">How We Work</h2>
        <ol className="relative border-l border-secondary">
          {steps.map((step, index) => (
            <li key={index} className="mb-10 ml-6">
              {/* Dot icon */}
              <div className="absolute w-3 h-3 bg-secondary rounded-full -left-1.5 border border-secondary"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">{step.date}</time>
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mb-4 text-base font-normal text-gray-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 p-8 bg-greenish flex items-center justify-center">
        <img 
          src="/work-img.png" 
          alt="Work Process" 
          className="w-full h-96 rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Work;
