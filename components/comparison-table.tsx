"use client";

import React from "react";
import { Check, X } from "lucide-react";

type ComparisonRow = {
  feature: string;
  cre8tee: {
    value: string;
    isPositive: boolean;
  };
  fullTime: {
    value: string;
    isPositive: boolean;
  };
  agencies: {
    value: string;
    isPositive: boolean;
  };
};

const comparisonData: ComparisonRow[] = [
  {
    feature: "Cost",
    cre8tee: { value: "$", isPositive: true },
    fullTime: { value: "$$$$ (High Overhead)", isPositive: false },
    agencies: { value: "$$", isPositive: false },
  },
  {
    feature: "Senior-Level Designer",
    cre8tee: { value: "Guaranteed", isPositive: true },
    fullTime: { value: "Hopefully", isPositive: false },
    agencies: { value: "Maybe", isPositive: false },
  },
  {
    feature: "Turnaround Time",
    cre8tee: { value: "48 hours for most projects", isPositive: true },
    fullTime: { value: "Can take weeks due to other tasks", isPositive: false },
    agencies: { value: "Weeks, depending on workload", isPositive: false },
  },
  {
    feature: "Start Time",
    cre8tee: { value: "Today itself", isPositive: true },
    fullTime: { value: "Weeks to onboard and train", isPositive: false },
    agencies: { value: "Days to set up agreements", isPositive: false },
  },
  {
    feature: "Unlimited Revisions",
    cre8tee: {
      value: "Yes, we keep working until it's perfect",
      isPositive: true,
    },
    fullTime: {
      value: "Limited, with extra time constraints",
      isPositive: false,
    },
    agencies: { value: "Limited revisions per project", isPositive: false },
  },
  {
    feature: "Client Portal",
    cre8tee: { value: "Yes, track progress easily", isPositive: true },
    fullTime: { value: "Internal systems may vary", isPositive: false },
    agencies: { value: "Inconsistent system", isPositive: false },
  },
  {
    feature: "Scalability",
    cre8tee: { value: "Scale up or down with ease", isPositive: true },
    fullTime: { value: "Possible", isPositive: true },
    agencies: { value: "Limited by freelancer's capacity", isPositive: false },
  },
  {
    feature: "Flexibility",
    cre8tee: {
      value: "Pause or adjust your subscription anytime",
      isPositive: true,
    },
    fullTime: { value: "Locked into salaries and benefits", isPositive: false },
    agencies: { value: "Inflexible, project-based", isPositive: false },
  },
];

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[800px]">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="col-span-1"></div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl font-bold">cre8tee</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-2xl">full-time Designer</span>
          </div>
          <div className="text-center">
            <span className="text-2xl">Other agencies</span>
          </div>
        </div>

        {/* Table Body */}
        <div className="space-y-4">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 items-center bg-white rounded-lg p-4"
            >
              <div className="font-medium">{row.feature}</div>
              <div className="flex items-center justify-center">
                {row.cre8tee.isPositive ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <Check className="w-4 h-4" />
                    <span>{row.cre8tee.value}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-500">
                    <X className="w-4 h-4" />
                    <span>{row.cre8tee.value}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center">
                {row.fullTime.isPositive ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <Check className="w-4 h-4" />
                    <span>{row.fullTime.value}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-500">
                    <X className="w-4 h-4" />
                    <span>{row.fullTime.value}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center">
                {row.agencies.isPositive ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <Check className="w-4 h-4" />
                    <span>{row.agencies.value}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-500">
                    <X className="w-4 h-4" />
                    <span>{row.agencies.value}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
