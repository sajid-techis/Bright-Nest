"use client";
import { useState } from "react";
import { FaPaintBrush, FaTools, FaLeaf, FaEye, FaPlus } from "react-icons/fa";

const About = () => {
  const [activeTrait, setActiveTrait] = useState(null);

  const traits = [
    {
      title: "Creativity",
      shortDescription:
        "We bring innovative ideas and artistic solutions to every project.",
      fullDescription:
        "Our team thrives on creativity, constantly pushing the boundaries of design to craft unique spaces. We believe in using artistic solutions to enhance the functionality and aesthetic appeal of your environment.",
    },
    {
      title: "Functionality",
      shortDescription:
        "Our designs focus on enhancing usability while maintaining aesthetic appeal.",
      fullDescription:
        "We prioritize functionality in all our designs, ensuring that every space is not only beautiful but also practical. Our solutions cater to your lifestyle, making your home more enjoyable and efficient.",
    },
    {
      title: "Sustainability",
      shortDescription:
        "We prioritize eco-friendly materials and practices in all our projects.",
      fullDescription:
        "Sustainability is at the core of our values. We use eco-friendly materials and sustainable practices to create spaces that are not only beautiful but also kind to the planet, ensuring a healthier environment for future generations.",
    },
    {
      title: "Attention to Detail",
      shortDescription:
        "Every element is meticulously considered to create a cohesive look.",
      fullDescription:
        "We believe that the beauty of a space lies in the details. Our team pays close attention to every aspect of design, from color palettes to textures, ensuring a harmonious and cohesive look throughout.",
    },
  ];

  const handleToggle = (index) => {
    setActiveTrait(activeTrait === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="relative p-8 bg-greenish flex-1 flex flex-col justify-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
          About Us
        </h2>
        <p className="text-lg md:text-xl mb-4">
          At Bright Nest Design, we specialize in creating stunning interiors
          that enhance your living experience. Our team of dedicated
          professionals works closely with you to bring your vision to life,
          ensuring every detail reflects your unique style and preferences.
        </p>
        <p className="text-lg md:text-xl">
          With years of experience in the industry, we combine creativity,
          functionality, and sustainability to deliver exceptional results. Let
          us transform your space into a haven of comfort and beauty.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative p-8 bg-white flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-4 text-secondary">Our Traits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {traits.map((trait, index) => (
            <div key={index} className="bg-greenish p-4 rounded-lg shadow-md">
              {/* Top Section with Icon and Title */}
              <div className="flex items-center">
                {/* Trait Icon */}
                {index === 0 && (
                  <FaPaintBrush className="w-8 h-8 mr-4 text-secondary" />
                )}
                {index === 1 && (
                  <FaTools className="w-8 h-8 mr-4 text-secondary" />
                )}
                {index === 2 && (
                  <FaLeaf className="w-8 h-8 mr-4 text-secondary" />
                )}
                {index === 3 && (
                  <FaEye className="w-8 h-8 mr-4 text-secondary" />
                )}

                <span className="text-lg font-bold text-secondary">
                  {trait.title}
                </span>
              </div>

              {/* Short Description and Toggle Button */}
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm">{trait.shortDescription}</p>
                <button
                  className="focus:outline-none ml-2"
                  onClick={() => handleToggle(index)}
                >
                  <FaPlus
                    className={`inline-block transition-transform duration-300 ease-in-out ${
                      activeTrait === index
                        ? "text-secondary transform rotate-45"
                        : "text-secondary"
                    }`}
                  />
                </button>
              </div>

              {/* Full Description */}
              {activeTrait === index && (
                <p className="mt-2 text-sm text-white">
                  {trait.fullDescription}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
