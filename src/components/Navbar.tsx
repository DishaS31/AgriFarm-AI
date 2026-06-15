'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    'Knowledge Hub',
    'Technology',
    'Dashboard',
    'Contact',
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-md border-b border-white/10'
            : 'bg-black/10 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-full mx-auto px-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3d6b35] to-[#7fb069] flex items-center justify-center shadow-lg">
                🌱
              </div>

              <div>
                <h1 className="text-2xl font-bold text-white">
                  AgriFarm
                </h1>

                <p className="text-xs text-white/70 tracking-wider">
                  AI
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white font-medium hover:text-[var(--accent)] transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA */}
           <button
                className="
                hidden lg:flex
                items-center
                justify-center
                gap-2
                min-w-[165px]
                h-[40px]
                rounded-full
                bg-gradient-to-r
                from-[#3d6b35]
                to-[#7fb069]
                text-white
                font-semibold
                shadow-lg
                hover:scale-105
                hover:shadow-green-500/20
                transition-all
                duration-300
                "
              >
                <span>Get Started</span>
                <span>→</span>
            </button>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-white text-xl"
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
            >
              {isMobileMenuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-0 right-0 bg-black/80 backdrop-blur-xl z-40 lg:hidden"
        >
          <div className="flex flex-col px-8 py-6 gap-5">

            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white hover:text-emerald-400 transition"
              >
                {item}
              </a>
            ))}

            <button className="mt-4 px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold">
              Get Started
            </button>

          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;