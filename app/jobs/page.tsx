import React from "react";
import { LucideUser, MoveUpRight } from "lucide-react";

const JobsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white text-gray-900 py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-purple-600">
            <LucideUser size={18} />
            <span>Jobs</span>
          </div>
          
          {/* Main Hero Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Column - Hero Text */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Web3 Talent Marketplace
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Finding quality blockchain projects and talented freelancers has never been easier. Connect, collaborate, and get paid in crypto.
              </p>
            </div>
            
            {/* Right Column - Highlights */}
            <div className="flex-1">
              {/* Feature Box 1 */}
              <div className="bg-white rounded-xl p-6 mb-6 border border-purple-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Smart Contract Employment</h3>
                </div>
                <p className="text-gray-600">
                  All jobs are secured with smart contracts for trustless payments and transparent milestone tracking.
                </p>
              </div>
              
              {/* Feature Box 2 */}
              <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Global Talent Network</h3>
                </div>
                <p className="text-gray-600">
                  Connect with specialized Web3 developers, designers, and marketers from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Capabilities Section */}
      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find Your Next Web3 Opportunity
              </h2>
              <p className="text-xl text-gray-600">
                Web3 freelancing thrives on decentralized collaboration and specialized skills. Find projects that match your expertise.
              </p>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid gap-6">
              {/* Card 1 */}
              <div className="border border-purple-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-900">Verified Clients</h3>
                </div>
                <p className="text-gray-600">
                  Every client is verified through our Web3 identity system, ensuring legitimate projects and secure payments.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-purple-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-medium text-gray-900">Crypto Payments</h3>
                </div>
                <p className="text-gray-600">
                  Get paid in your preferred cryptocurrency with low fees and near-instant global transfers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Member Section (Similar to the reference image) */}
      <section className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Freelancer Roles Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Featured Freelancers
              </h3>
              
              {/* Individual team members */}
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-200 overflow-hidden mr-3">
                      <div className="w-full h-full bg-purple-300 flex items-center justify-center text-purple-700">
                        LP
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Liam P.</h4>
                      <p className="text-sm text-gray-500">Smart Contract Developer</p>
                    </div>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm">
                    Admin
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-200 overflow-hidden mr-3">
                      <div className="w-full h-full bg-purple-300 flex items-center justify-center text-purple-700">
                        AG
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Ava G.</h4>
                      <p className="text-sm text-gray-500">Blockchain Designer</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                    View
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-200 overflow-hidden mr-3">
                      <div className="w-full h-full bg-purple-300 flex items-center justify-center text-purple-700">
                        MB
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Max B.</h4>
                      <p className="text-sm text-gray-500">DeFi Specialist</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                    Writer
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-3">
                      <div className="w-8 h-8 rounded-full bg-purple-300 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                    </div>
                    <div>
                      <h4 className="font-medium">Top Freelancers</h4>
                      <p className="text-sm text-gray-500">+17 People</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                    Restricted
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project Platform Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Live Projects
              </h3>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm text-gray-500">Project Board (8)</h4>
                  <div className="flex">
                    <button className="h-6 w-6 flex items-center justify-center text-gray-500 hover:text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="h-6 w-6 flex items-center justify-center text-gray-500 hover:text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-200 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-full h-full bg-purple-300 rounded-full flex items-center justify-center text-purple-700">
                        LP
                      </div>
                    </div>
                    <h4 className="font-medium">Liam P.</h4>
                    <p className="text-xs text-gray-500">Smart Contract Dev</p>
                    <div className="mt-2 text-xs text-center">
                      <a href="#" className="text-purple-600 hover:underline">Profile</a>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-200 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-full h-full bg-purple-300 rounded-full flex items-center justify-center text-purple-700">
                        AG
                      </div>
                    </div>
                    <h4 className="font-medium">Ava G.</h4>
                    <p className="text-xs text-gray-500">Blockchain Designer</p>
                    <div className="mt-2 text-xs text-center">
                      <a href="#" className="text-purple-600 hover:underline">Profile</a>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-200 mx-auto mb-2 flex items-center justify-center">
                      <div className="w-full h-full bg-purple-300 rounded-full flex items-center justify-center text-purple-700">
                        MB
                      </div>
                    </div>
                    <h4 className="font-medium">Max B.</h4>
                    <p className="text-xs text-gray-500">DeFi Specialist</p>
                    <div className="mt-2 text-xs text-center">
                      <a href="#" className="text-purple-600 hover:underline">Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm text-gray-500">Available Tasks (5)</h4>
                  <div className="flex">
                    <button className="h-6 w-6 flex items-center justify-center text-gray-500 hover:text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="h-6 w-6 flex items-center justify-center text-gray-500 hover:text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center">
                    <div className="bg-yellow-500 h-3 w-3 rounded-full mr-2"></div>
                    <h4 className="text-gray-800">Web3 Frontend Integration</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full opacity-20 -mr-32"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-purple-100 rounded-full opacity-10"></div>
      </section>
    </div>
  );
};

export default JobsPage;