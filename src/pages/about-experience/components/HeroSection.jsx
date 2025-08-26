import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              <Icon name="Users" size={16} />
              <span>Meet the Growth Architects</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary leading-tight">
              Where Strategy
              <span className="block text-secondary">Meets Boldness</span>
            </h1>

            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
              We exist at the intersection of strategic precision and creative boldness,
              <span className="text-primary font-semibold"> scaling what truly matters</span> for ambitious brands.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <div className="flex items-center space-x-2 text-text-primary">
              <Icon name="Award" size={20} className="text-accent" />
              <span className="font-medium">Industry Leaders</span>
            </div>
            <div className="flex items-center space-x-2 text-text-primary">
              <Icon name="TrendingUp" size={20} className="text-accent" />
              <span className="font-medium">Proven Results</span>
            </div>
            <div className="flex items-center space-x-2 text-text-primary">
              <Icon name="Target" size={20} className="text-accent" />
              <span className="font-medium">Exponential Growth</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2 text-text-secondary">
            <span className="text-sm font-medium">Discover Our Story</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
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