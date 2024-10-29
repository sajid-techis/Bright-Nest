import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import { FaRegSquare, FaLayerGroup, FaBuilding } from "react-icons/fa"; // Importing icons from React Icons

const services = [
  {
    icon: <FaRegSquare className="text-secondary" />, // Using React Icons components
    title: "Interior Designing",
    description:
      "At Bright Nest, we create stunning interior drawings that capture the essence of your vision. Our talented designers translate your ideas into detailed plans, ensuring a seamless design process.",
  },
  {
    icon: <FaLayerGroup className="text-secondary" />,
    title: "Renovations",
    description:
      "Transform your space with our expert renovation services. Whether it’s a single room or a complete home makeover, Bright Nest brings innovative solutions that enhance functionality and style.",
  },
  {
    icon: <FaBuilding className="text-secondary" />,
    title: "Building Space",
    description:
      "We specialize in designing and optimizing building spaces that reflect your brand&apos;s identity. From commercial projects to residential developments, Bright Nest ensures each space is thoughtfully crafted.",
  },
];

const Services = () => {
  return (
    <section className="bg-greenish text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex-1 flex flex-col mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2 flex items-center">
              What We Do{" "}
              <Image 
                src="/Line.png" 
                alt="Line" 
                className="ml-4 h-0.5 w-24" 
                width={96} // Adjust width as needed
                height={1} // Adjust height as needed
              />
            </h4>
            <h1 className="text-4xl font-semibold mb-12 text-secondary">
              Our Services
            </h1>
          </div>
          <p className="flex-1 mb-16 md:flex-none md:w-1/3">
            Bright Nest is dedicated to creating beautiful, functional spaces
            that resonate with our clients&apos; lifestyles. Our team of experienced
            designers works closely with you to bring your dreams to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-t-4 py-16 border-b-0 md:border-b-2 border-borderColor"
            >
              <div className="text-4xl mb-8">{service.icon}</div>{" "}
              {/* Icon rendering */}
              <h4 className="text-xl font-semibold mt-4 mb-4">
                {service.title}
              </h4>
              <p className="mb-4">{service.description}</p>
              <Link
                href="/fullServices"
                className="text-secondary hover:underline text-4xl transform scale-x-150"
              >
                →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href='/fullServices'>
          <button className="bg-secondary hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            See All Services
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
