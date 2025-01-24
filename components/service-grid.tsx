"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

type Service = {
  title: string;
  image: string;
  previewImages: string[];
};

const services: Service[] = [
  {
    title: "Website Design",
    image: "/assets/logo.png",
    previewImages: [
      "/assets/brand.avif",
      "/assets/previews/web2.png",
      "/assets/previews/web3.png",
    ],
  },
  {
    title: "Mobile App Design",
    image: "/assets/services/mobile.png",
    previewImages: ["/assets/previews/app1.png", "/assets/previews/app2.png"],
  },
  {
    title: "Framer and Webflow Development (No-Code)",
    image: "/assets/services/nocode.png",
    previewImages: [
      "/assets/previews/nocode1.png",
      "/assets/previews/nocode2.png",
    ],
  },
  {
    title: "Social Media Graphics",
    image: "/assets/services/social.png",
    previewImages: [
      "/assets/previews/social1.png",
      "/assets/previews/social2.png",
    ],
  },
  {
    title: "Branding",
    image: "/assets/services/branding.png",
    previewImages: [
      "/assets/previews/brand1.png",
      "/assets/previews/brand2.png",
    ],
  },
  {
    title: "Logos",
    image: "/assets/services/logos.png",
    previewImages: ["/assets/previews/logo1.png", "/assets/previews/logo2.png"],
  },
];

export function ServiceGrid() {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group cursor-pointer border border-dashed border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-all"
            onMouseEnter={() => {
              setPreviewImages(service.previewImages);
              setShowPreview(true);
            }}
            onMouseLeave={() => {
              setShowPreview(false);
            }}
          >
            <div className="aspect-[3/2] relative mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-center font-medium">{service.title}</h3>
          </div>
        ))}
      </div>

      {/* Preview Overlay */}
      {showPreview && previewImages.length > 0 && (
        <div className="fixed top-1/2 right-8 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl z-50">
          <div className="space-y-4">
            {previewImages.map((image, index) => (
              <div key={index} className="relative w-48 h-32">
                <Image
                  src={image}
                  alt="Preview"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
