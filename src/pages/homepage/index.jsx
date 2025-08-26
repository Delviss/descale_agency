import React, { useEffect } from 'react';

import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import InteractiveTaxiAdsSection from './components/InteractiveTaxiAdsSection';
import ClientSuccessSection from './components/ClientSuccessSection';
import GrowthAssessmentSection from './components/GrowthAssessmentSection';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for scroll-snap sections
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Main Content with Scroll Snap */}
      <main className="scroll-snap-y">
        {/* Hero Section */}
        <div className="scroll-snap-start">
          <HeroSection />
        </div>

        {/* Value Proposition Section */}
        <div className="scroll-snap-start">
          <ValuePropositionSection />
        </div>

        {/* Interactive Taxi Ads Section */}
        <div className="scroll-snap-start">
          <InteractiveTaxiAdsSection />
        </div>

        {/* Client Success Section */}
        <div className="scroll-snap-start">
          <ClientSuccessSection />
        </div>

        {/* Growth Assessment Section */}
        <div className="scroll-snap-start">
          <GrowthAssessmentSection />
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand">
                    <span className="text-white font-bold text-2xl">D</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-gray-900"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-headline text-2xl font-extrabold text-white tracking-tight">
                    DESCALE
                  </span>
                  <span className="text-sm text-gray-400 font-medium tracking-wider">
                    AGENCY
                  </span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Premium cinematic marketing that transforms ambitious brands into market leaders through exponential growth strategies.
              </p>
              <div className="text-sm text-gray-400">
                © {new Date()?.getFullYear()} DESCALE Agency. All rights reserved.
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/services-hub" className="hover:text-accent transition-colors">Brand Strategy</a></li>
                <li><a href="/services-hub" className="hover:text-accent transition-colors">Performance Marketing</a></li>
                <li><a href="/services-hub" className="hover:text-accent transition-colors">Creative Content</a></li>
                <li><a href="/interactive-taxi-ads-innovation-lab" className="hover:text-accent transition-colors">Interactive Taxi Ads</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about-experience" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="/work-portfolio" className="hover:text-accent transition-colors">Case Studies</a></li>
                <li><a href="/growth-assessment-contact" className="hover:text-accent transition-colors">Growth Assessment</a></li>
                <li><a href="/growth-assessment-contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;