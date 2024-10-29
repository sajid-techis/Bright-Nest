"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col gap-8 lg:flex-row p-8 md:p-16 lg:p-24 items-start lg:items-center lg:justify-between 
                 bg-cover bg-center"
      style={{ backgroundImage: "url('/banner-1.png')" }}
    >
      {/* Content Section */}
      <div className="relative flex flex-col gap-6 md:gap-8 lg:gap-14 backdrop-brightness-50 p-6 md:p-8 rounded-lg">
        <p className="text-sm text-primary font-extrabold flex items-center gap-2">
          We are
          <Image
            src="/Line.png"
            alt="Line"
            width={100}
            height={30}
            priority
          />
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-snug">
          Bright Nest Design
          <br />
          <span className="text-white mt-2 block">Studio</span>
        </h1>
      </div>

      {/* Right Side: Watch Video Button */}
      <Link href="/video" passHref>
        <div className="relative flex items-start gap-6 mt-0 lg:mt-24 lg:flex-row cursor-pointer backdrop-brightness-50 p-6 rounded-lg w-full lg:w-auto">
          <Image
            src="/video-icon.png"
            alt="Video Icon"
            width={40}
            height={40}
            priority
          />
          <span className="text-primary font-bold text-xl md:text-lg lg:text-left">
            Watch <br /> Profile Video
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
