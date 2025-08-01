'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Julius_Sans_One } from 'next/font/google';

const julius = Julius_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-beige font-sans px-6 md:px-16 py-10 flex flex-col justify-center items-center border-[6px] border-double border-[#b03060] shadow-[0_0_20px_#dcdcdc]">
      <header className="text-center">
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 text-[#63113a] tracking-widest ${julius.className}`}>
          hEY P<span className="text-yellow-500">EE</span>PS 🌟
        </h1>
        <p className="text-lg md:text-xl text-[#113e63] opacity-90">
          <mark> Creative Frontend Developer & Problem Solver</mark>
        </p>
      </header>

      <motion.div
        className="mt-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-xl overflow-hidden border-[6px] border-double border-[#b03060] shadow-[0_0_20px_#dcdcdc]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="image/WhatsApp Image 2025-08-01 at 00.00.30_15fbb5bb.jpg"
          alt="Maryam's Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <section className="mt-12 text-center">
        <p className="text-md md:text-lg max-w-xl mx-auto text-beige opacity-80">
          I specialize in crafting interactive, responsive, and visually engaging web applications using React, Next.js, and Tailwind CSS. Passionate about blending logic and design to create meaningful digital experiences.
        </p>
      </section>

      <nav className="mt-10 flex gap-6">
        <a href="https://instagram.com/mvryamas1f" target="_blank" rel="noopener noreferrer" className="text-[#63113a] text-2xl hover:text-[#113e63] transition duration-300">
          <FaInstagram />
        </a>
        <a href="https://github.com/MaryamAsif22" target="_blank" rel="noopener noreferrer" className="text-[#63113a] text-2xl hover:text-[#113e63] transition duration-300">
          <FaGithub />
        </a>
        <a href="http://linkedin.com/in/maryam-asif-758801366" target="_blank" rel="noopener noreferrer" className="text-[#63113a] text-2xl hover:text-[#113e63] transition duration-300">
          <FaLinkedin />
        </a>
      </nav>
    </main>
  );
}
