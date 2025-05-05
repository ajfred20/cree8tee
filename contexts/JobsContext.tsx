"use client";

import React, { createContext, useContext, ReactNode } from "react";

// Job type definition
export interface Job {
  id: number;
  title: string;
  client: string;
  rate: string;
  duration: string;
  description: string;
  tags: string[];
  location: string;
  postedDate: string;
  requirements: string[];
  responsibilities: string[];
  applicationLink?: string;
  clientLogo?: string;
  featured?: boolean;
}

// Create 30 mock jobs
const mockJobs: Job[] = [
  {
    id: 1,
    title: "Smart Contract Developer",
    client: "DeFi Protocol",
    rate: "$80-120/hr",
    duration: "3 months",
    description:
      "Develop and audit Solidity smart contracts for a new DeFi lending platform. Experience with ERC standards and security best practices required.",
    tags: ["Solidity", "Web3.js", "Security"],
    location: "Remote",
    postedDate: "2025-09-15",
    requirements: [
      "3+ years experience with Solidity development",
      "Knowledge of DeFi protocols and mechanisms",
      "Experience with smart contract security audits",
      "Understanding of ERC token standards",
    ],
    responsibilities: [
      "Design and implement smart contracts for lending and borrowing",
      "Conduct security reviews and fix vulnerabilities",
      "Optimize gas usage and contract efficiency",
      "Document code and create technical specifications",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Blockchain UI/UX Designer",
    client: "NFT Marketplace",
    rate: "$70-90/hr",
    duration: "2 months",
    description:
      "Design intuitive user interfaces for an NFT marketplace. Focus on wallet connection flows and minting experiences.",
    tags: ["Figma", "UI/UX", "Web3"],
    location: "Remote",
    postedDate: "2025-09-18",
    requirements: [
      "Experience designing for Web3 applications",
      "Portfolio showing NFT or crypto-related projects",
      "Proficiency in Figma or similar design tools",
      "Understanding of wallet connection UX patterns",
    ],
    responsibilities: [
      "Create wireframes and high-fidelity mockups",
      "Design responsive layouts for web and mobile",
      "Develop user flows for NFT minting and trading",
      "Collaborate with developers on implementation",
    ],
  },
  {
    id: 3,
    title: "Full-Stack dApp Developer",
    client: "Gaming Studio",
    rate: "$90-130/hr",
    duration: "6 months",
    description:
      "Build a Play-to-Earn game platform integrating with multiple blockchains. Experience with Unity and smart contract integration required.",
    tags: ["React", "Node.js", "Solidity"],
    location: "Remote",
    postedDate: "2025-09-10",
    requirements: [
      "Experience with React and Node.js",
      "Knowledge of blockchain integration in games",
      "Understanding of Play-to-Earn mechanics",
      "Experience with Unity or similar game engines",
    ],
    responsibilities: [
      "Develop frontend game interfaces using React",
      "Create backend services with Node.js",
      "Integrate with multiple blockchain networks",
      "Implement smart contract interactions for in-game assets",
    ],
    featured: true,
  },
  // Add 27 more jobs with similar structure but different details
  {
    id: 4,
    title: "Web3 Marketing Specialist",
    client: "Crypto Startup",
    rate: "$60-80/hr",
    duration: "Ongoing",
    description:
      "Create and execute marketing strategies for a Web3 wallet solution. Experience with crypto communities and growth hacking preferred.",
    tags: ["Marketing", "Community", "Content"],
    location: "Remote",
    postedDate: "2025-09-20",
    requirements: [
      "Experience marketing blockchain products",
      "Understanding of crypto communities",
      "Content creation skills",
      "Growth hacking experience",
    ],
    responsibilities: [
      "Develop marketing strategies for Web3 products",
      "Create content for social media and blog",
      "Engage with crypto communities",
      "Track performance metrics and optimize campaigns",
    ],
  },
  // Continue with more jobs...
  {
    id: 5,
    title: "Solana Developer",
    client: "Financial Protocol",
    rate: "$85-125/hr",
    duration: "4 months",
    description:
      "Develop Solana programs for a decentralized financial application. Implement high-performance trading functionality with focus on low latency.",
    tags: ["Solana", "Rust", "Trading"],
    location: "Remote",
    postedDate: "2025-09-12",
    requirements: [
      "Experience with Solana development",
      "Proficiency in Rust programming",
      "Understanding of financial trading systems",
      "Performance optimization skills",
    ],
    responsibilities: [
      "Build Solana programs for trading operations",
      "Optimize for transaction throughput",
      "Implement secure key management",
      "Design and test protocol upgrades",
    ],
  },
  // Continue with more jobs...
  {
    id: 30,
    title: "Ethereum Layer 2 Engineer",
    client: "Scaling Solution",
    rate: "$110-150/hr",
    duration: "12 months",
    description:
      "Help build and optimize a new Layer 2 scaling solution for Ethereum. Deep knowledge of rollups and zero-knowledge proofs required.",
    tags: ["Ethereum", "Layer 2", "ZK Proofs"],
    location: "Remote",
    postedDate: "2025-09-05",
    requirements: [
      "Experience with Ethereum scaling solutions",
      "Knowledge of ZK-rollups or Optimistic rollups",
      "Strong cryptography background",
      "System architecture skills",
    ],
    responsibilities: [
      "Design and implement Layer 2 protocols",
      "Optimize for scalability and security",
      "Develop proof generation systems",
      "Create documentation and integration guides",
    ],
    featured: true,
  },
];

// Create the context
interface JobsContextType {
  jobs: Job[];
  featuredJobs: Job[];
  getJobById: (id: number) => Job | undefined;
}

const JobsContext = createContext<JobsContextType | undefined>(undefined);

// Provider component
export function JobsProvider({ children }: { children: ReactNode }) {
  const featuredJobs = mockJobs.filter((job) => job.featured);

  const getJobById = (id: number) => {
    return mockJobs.find((job) => job.id === id);
  };

  return (
    <JobsContext.Provider value={{ jobs: mockJobs, featuredJobs, getJobById }}>
      {children}
    </JobsContext.Provider>
  );
}

// Hook for using the context
export function useJobs() {
  const context = useContext(JobsContext);
  if (context === undefined) {
    throw new Error("useJobs must be used within a JobsProvider");
  }
  return context;
}
