"use client";

import React, { use } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { useJobs } from "@/contexts/JobsContext";
import {
  ArrowLeft,
  Briefcase,
  Clock,
  DollarSign,
  MapPin,
  CalendarDays,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function JobPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { getJobById, jobs } = useJobs();
  const jobId = parseInt(id);

  const job = getJobById(jobId);

  if (!job) {
    return notFound();
  }

  // Get related jobs (same tags)
  const relatedJobs = jobs
    .filter(
      (j) => j.id !== jobId && j.tags.some((tag) => job.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-purple-600 mb-8 hover:text-purple-700 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span className="font-medium">Back to Jobs</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-semibold tracking-tighter text-gray-900 mb-2">
                    {job.title}
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <Briefcase size={16} className="mr-2" />
                    <span className="font-normal tracking-tight">
                      {job.client}
                    </span>
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                  {job.rate}
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-8 text-gray-600">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span className="font-normal tracking-tight">
                    {job.duration}
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span className="font-normal tracking-tight">
                    {job.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <CalendarDays size={16} className="mr-2" />
                  <span className="font-normal tracking-tight">
                    Posted on {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-medium tracking-tight mb-4 text-gray-900">
                  Job Description
                </h2>
                <p className="text-gray-600 mb-6 tracking-tight font-normal">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-medium tracking-tight mb-4 text-gray-900">
                  Requirements
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 tracking-tight font-normal">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-medium tracking-tight mb-4 text-gray-900">
                  Responsibilities
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 tracking-tight font-normal">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <a
                  href={job.applicationLink || "#apply"}
                  className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Apply for this Job
                  <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Client Info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-medium tracking-tight mb-4 text-gray-900">
                About the Client
              </h2>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-medium">
                    {job.client.substring(0, 2)}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{job.client}</h3>
                  <p className="text-gray-500 text-sm">Web3 Company</p>
                </div>
              </div>
              <p className="text-gray-600 font-normal tracking-tight">
                Leading company in the blockchain space, focused on building
                decentralized solutions.
              </p>
            </div>

            {/* Related Jobs */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-medium tracking-tight mb-4 text-gray-900">
                Related Jobs
              </h2>
              <div className="space-y-4">
                {relatedJobs.map((relJob) => (
                  <Link
                    href={`/jobs/${relJob.id}`}
                    key={relJob.id}
                    className="block p-4 border border-gray-100 rounded-lg hover:border-purple-200 hover:shadow-sm transition-all"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">
                      {relJob.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {relJob.client}
                    </p>
                    <div className="flex items-center text-gray-600">
                      <DollarSign size={14} className="mr-1" />
                      <span className="text-xs">{relJob.rate}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
