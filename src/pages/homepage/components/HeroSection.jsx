import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { value: "340%", label: "Average ROI Increase" },
    { value: "50+", label: "Brands Scaled to 8-Figures" },
    { value: "2.5x", label: "Faster Growth Velocity" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Video Simulation */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-primary/30 to-secondary/30 animate-pulse"></div>
      </div>
      {/* Growth Curve Visualization */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <motion.path
            d="M0,600 Q300,500 600,200 T1200,100"
            stroke="url(#growthGradient)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A72906" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 tracking-tight">
            WE SCALE
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              WHAT MATTERS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premium cinematic marketing that transforms ambitious brands into market leaders through exponential growth strategies.
          </p>
        </motion.div>

        {/* Animated Metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <motion.div
              key={currentMetric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                {metrics?.[currentMetric]?.value}
              </div>
              <div className="text-lg text-gray-300">
                {metrics?.[currentMetric]?.label}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="default"
            size="lg"
            iconName="TrendingUp"
            iconPosition="right"
            onClick={() => window.location.href = '/growth-assessment-contact'}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-brand-lg hover-brand"
          >
            Start Growth Assessment
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Play"
            iconPosition="left"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
          >
            Watch Our Story
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon name="ChevronDown" size={24} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;