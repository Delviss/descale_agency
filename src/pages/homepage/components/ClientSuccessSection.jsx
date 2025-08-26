import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientSuccessSection = () => {
  const [hoveredClient, setHoveredClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: "TechFlow",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop",
      industry: "SaaS",
      growth: "450%",
      metric: "Revenue Growth",
      timeframe: "18 months",
      description: "From $2M to $11M ARR through strategic performance marketing and brand positioning"
    },
    {
      id: 2,
      name: "EcoVibe",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=100&fit=crop",
      industry: "E-commerce",
      growth: "320%",
      metric: "Customer Acquisition",
      timeframe: "12 months",
      description: "Scaled from 10K to 42K monthly customers through omnichannel growth strategies"
    },
    {
      id: 3,
      name: "FinanceForward",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      industry: "FinTech",
      growth: "280%",
      metric: "User Base Growth",
      timeframe: "15 months",
      description: "Achieved 2.8x user growth through targeted digital campaigns and conversion optimization"
    },
    {
      id: 4,
      name: "HealthTech Pro",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop",
      industry: "HealthTech",
      growth: "390%",
      metric: "Market Expansion",
      timeframe: "20 months",
      description: "Expanded from 2 to 15 markets with 3.9x revenue increase through strategic scaling"
    },
    {
      id: 5,
      name: "RetailRise",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop",
      industry: "Retail",
      growth: "510%",
      metric: "Online Sales",
      timeframe: "14 months",
      description: "Transformed traditional retail with 5.1x online sales growth through digital transformation"
    },
    {
      id: 6,
      name: "EduNext",
      logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=100&fit=crop",
      industry: "EdTech",
      growth: "425%",
      metric: "Student Enrollment",
      timeframe: "16 months",
      description: "Scaled from 5K to 26K students through innovative marketing and user experience optimization"
    }
  ];

  const testimonials = [
    {
      quote: "DESCALE didn\'t just scale our campaigns—they transformed our entire approach to growth. The results speak for themselves.",
      author: "Sarah Chen",
      position: "CEO, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "The strategic depth and execution excellence is unmatched. They understand scaling at a level most agencies never reach.",
      author: "Marcus Rodriguez",
      position: "CMO, FinanceForward",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#A72906" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Scaling
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            50+ brands have chosen exponential growth over incremental improvement. Here's how we transformed their market position.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {clients?.map((client, index) => (
            <motion.div
              key={client?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredClient(client?.id)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <Image
                    src={client?.logo}
                    alt={`${client?.name} logo`}
                    className="w-full h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{client?.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{client?.industry}</p>
                  
                  {/* Hover Metrics */}
                  {hoveredClient === client?.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-primary/95 rounded-xl p-4 flex flex-col justify-center text-white z-10"
                    >
                      <div className="text-3xl font-bold text-accent mb-1">
                        {client?.growth}
                      </div>
                      <div className="text-sm opacity-90 mb-2">
                        {client?.metric}
                      </div>
                      <div className="text-xs opacity-75">
                        in {client?.timeframe}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">340%</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Average ROI Increase</div>
            <div className="text-gray-600">Across all client campaigns</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-accent mb-2">50+</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Brands Scaled to 8-Figures</div>
            <div className="text-gray-600">From startup to market leader</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-secondary mb-2">2.5x</div>
            <div className="text-xl font-semibold text-gray-900 mb-2">Faster Growth Velocity</div>
            <div className="text-gray-600">Compared to industry average</div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials?.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed">
                    "{testimonial?.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial?.author}</div>
                    <div className="text-gray-500">{testimonial?.position}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={() => window.location.href = '/work-portfolio'}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 inline-flex items-center space-x-2 shadow-brand-lg hover-brand"
          >
            <span>View All Case Studies</span>
            <Icon name="ArrowRight" size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;