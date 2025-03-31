"use client";

import Image from "next/image";
import { useState } from "react";

export function InteractiveSteps() {
  const [stepImage, setStepImage] = useState("/assets/logo.png");

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2">
        <div className="relative h-[400px] w-full">
          <Image
            src={stepImage}
            alt="Process visualization"
            fill
            className="object-contain transition-opacity duration-300"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-8">
        <div
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          onMouseEnter={() => setStepImage("/assets/logo.png")}
        >
          <h3 className="text-xl font-bold mb-2">Step 1: Choose Your Plan</h3>
          <p className="text-gray-600">
            Select the best plan that suits your requirement
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          onMouseEnter={() => setStepImage("/assets/muniz.svg")}
        >
          <h3 className="text-xl font-bold mb-2">
            Step 2: Design Your Project
          </h3>
          <p className="text-gray-600">
            Work with our designers to create your project
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          onMouseEnter={() => setStepImage("/assets/brand.avif")}
        >
          <h3 className="text-xl font-bold mb-2">Step 3: Review and Approve</h3>
          <p className="text-gray-600">
            Review your project and make any necessary adjustments
          </p>
        </div>

        <div
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          onMouseEnter={() => setStepImage("/assets/step4.png")}
        >
          <h3 className="text-xl font-bold mb-2">Step 4: Delivery</h3>
          <p className="text-gray-600">
            Receive your project and enjoy your new design
          </p>
        </div>
      </div>
    </div>
  );
}
