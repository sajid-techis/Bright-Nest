"use client";

import React from "react";
import Image from "next/image";

const partnerCompanies = [
  { id: 1, logo: "/greenlam-logo.png", name: "Greenlam Laminates" },
  { id: 2, logo: "/action-tesa-logo.png", name: "Action Tesa" },
  { id: 3, logo: "/century-logo.png", name: "Century Ply" },
  { id: 4, logo: "/dorset-logo.svg", name: "Dorset" },
  { id: 5, logo: "/green-panel-logo.png", name: "GreenPanel" },
  { id: 6, logo: "/haefele-logo.png", name: "Haefele" },
  { id: 7, logo: "/hettich-logo.svg", name: "Hettich" },
  { id: 8, logo: "/wigwam-logo.png", name: "Wigwam" },
];

const PartnerCompanies = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center text-green-600 font-semibold mb-8">
          Our Partner Companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {partnerCompanies.map((partner) => (
            <div
              key={partner.id}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out hover:scale-105 transform"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={150}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCompanies;
