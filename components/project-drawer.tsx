"use client";

import React from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";

type ProjectDrawerProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  status?: string;
  scope: string[];
  cost: string;
  year: string;
  images: string[];
};

export function ProjectDrawer({
  children,
  title,
  description,
  status = "In progress",
  scope,
  cost,
  year,
  images,
}: ProjectDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="max-h-[96vh] bg-slate-50">
        <div className="mx-auto w-full max-w-7xl">
          <DrawerHeader className="px-6">
            <DrawerClose asChild>
              <button className="mb-8 text-sm flex items-center gap-2">
                ← Close
              </button>
            </DrawerClose>
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <DrawerTitle className="text-4xl font-bold">
                  {title}
                </DrawerTitle>
                <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  {status}
                </span>
              </div>
              <p className="text-gray-600 max-w-2xl">{description}</p>
            </div>
          </DrawerHeader>
          <div className="p-6">
            {/* Project Details */}
            <div className="mb-12">
              <h3 className="text-lg font-medium mb-4">Project Scope</h3>
              <div className="flex flex-wrap gap-3">
                {scope.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <h4 className="text-sm text-gray-500 mb-1">Cost</h4>
                <p className="text-xl font-medium">{cost}</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">Year</h4>
                <p className="text-xl font-medium">{year}</p>
              </div>
            </div>

            {/* Project Images */}
            <div className="grid grid-cols-2 gap-6">
              {images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
