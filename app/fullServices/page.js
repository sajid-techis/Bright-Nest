import React from "react";
import {
  FaCube,
  FaHome,
  FaRegLightbulb,
  FaTree,
  FaLayerGroup,
  FaBuilding,
} from "react-icons/fa"; // Importing icons from React Icons
import { FaKitchenSet } from "react-icons/fa6";

// Sample service data
const services = [
  {
    icon: <FaCube className="text-yellow-400" />,
    title: "3D Design",
    description:
      "Our 3D design services bring your ideas to life with detailed and realistic visualizations. This allows you to see your space before it’s built, helping you make informed decisions.",
    image: "/work-img.png", // Replace with your actual image path
  },
  {
    icon: <FaKitchenSet className="text-yellow-400" />,
    title: "Modular Kitchen",
    description:
      "Bright Nest specializes in modular kitchens that maximize space and efficiency. Our designs are customizable to fit your style, ensuring your kitchen is both beautiful and functional.",
    image: "/work-img.png", // Replace with your actual image path
  },
  {
    icon: <FaHome className="text-yellow-400" />,
    title: "Interior Designing",
    description:
      "Our expert interior designers create harmonious spaces that reflect your personality and lifestyle. We focus on aesthetics, functionality, and comfort in every project.",
    image: "/work-img.png", // Replace with your actual image path
  },
  {
    icon: <FaRegLightbulb className="text-yellow-400" />,
    title: "False Ceiling",
    description:
      "Enhance the elegance of your rooms with our false ceiling solutions. We offer various designs to improve acoustics, aesthetics, and energy efficiency in your spaces.",
    image: "/work-img.png", // Replace with your actual image path
  },
  {
    icon: <FaTree className="text-yellow-400" />,
    title: "Wooden Floors",
    description:
      "Experience the warmth and luxury of wooden floors. Our selection includes various wood types and finishes, ensuring your flooring complements your interior design.",
    image: "/work-img.png", // Replace with your actual image path
  },
  {
    icon: <FaLayerGroup className="text-yellow-400" />,
    title: "Renovations",
    description:
      "Bright Nest offers comprehensive renovation services, transforming outdated spaces into stunning areas that meet modern standards and enhance your home’s value.",
    image: "/work-img.png", // Replace with your actual image path
  },
  {
    icon: <FaBuilding className="text-yellow-400" />,
    title: "Building Space",
    description:
      "We specialize in designing and optimizing building spaces to suit your needs, ensuring that every aspect aligns with your vision and operational requirements.",
    image: "/work-img.png", // Replace with your actual image path
  },
];

const FullServices = () => {
  return (
    <section className="bg-greenish text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="flex-1 flex flex-col mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-2 flex items-center">
              What We Do
              <img src="/Line.png" alt="Line" className="ml-4 h-0.5 w-24" />
            </h4>
            <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-secondary">
              Our Services
            </h1>
          </div>
          <p className="flex-1 text-sm md:text-base md:w-1/3">
            Bright Nest is dedicated to creating beautiful, functional spaces
            that resonate with our clients' lifestyles. Our team of experienced
            designers works closely with you to bring your dreams to life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mt-8 text-4xl text-yellow-400">
                {service.icon}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col h-full">
                <h4 className="text-xl font-semibold mt-4 mb-2">
                  {service.title}
                </h4>
                <p className="text-sm mb-4">{service.description}</p>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                {/* Button to Booking Page */}
                <div className="">
                  <a
                    href="/booking"
                    className="block text-center bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullServices;
