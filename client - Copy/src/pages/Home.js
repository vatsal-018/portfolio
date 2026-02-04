import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.div variants={item} className="mb-6">
            <span className="text-blue-400 font-semibold text-lg">👋 Welcome to my portfolio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Vatsal Karani</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            Computer Engineering student passionate about building innovative solutions with modern
            technologies. Focused on full-stack development, embedded systems, and AI/ML.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/projects" className="btn-primary inline-flex items-center gap-2 justify-center">
              View My Work
              <FiArrowRight />
            </Link>
            <a
              href="https://drive.google.com/file/d/1UlruTxi831ZYjKPSYUZ7cW9cZ6Ul24xP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 justify-center"
            >
              <FiDownload />
              Download CV
            </a>
          </motion.div>

          {/* Floating cards */}

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}

    </div>
  );
};

export default Home;
