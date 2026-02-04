import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = ({ isScrolled, theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">VK</span>
            </div>
            <span className="gradient-text font-bold text-lg hidden sm:inline">Portfolio</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-slate-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <button
              className="p-2 rounded-lg border border-slate-600 text-slate-300 hover:text-blue-400 hover:border-blue-400 transition"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-blue-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block text-slate-300 hover:text-blue-400 py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="w-full px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:text-blue-400 hover:border-blue-400 transition"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            </button>
            <button className="btn-primary w-full text-sm">Hire Me</button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
