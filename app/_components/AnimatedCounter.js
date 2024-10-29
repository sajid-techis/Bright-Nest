"use client";

import React, { useState, useEffect } from "react";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const increment = end / (duration * 500); 

  useEffect(() => {
    let frame = 0;

    const updateCounter = () => {
      frame++;
      const nextValue = Math.min(end, Math.round(frame * increment));
      setCount(nextValue);

      if (nextValue < end) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [end, increment]);

  return <h2 className="text-4xl font-bold text-green-800">{count}</h2>;
};

const AnimatedCounter = () => {
  return (
    <div className="bg-[#f8f6f2] py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <Counter end={5} duration={1} />
          <p className="mt-2 text-lg text-gray-700">Years Of Operation</p>
        </div>
        <div>
          <Counter end={60} duration={1} />
          <p className="mt-2 text-lg text-gray-700">Total Building</p>
        </div>
        <div>
          <Counter end={100} duration={1} />
          <p className="mt-2 text-lg text-gray-700">Building Models</p>
        </div>
        <div>
          <Counter end={10} duration={1} />
          <p className="mt-2 text-lg text-gray-700">Awards Of Design</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
