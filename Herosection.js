'use client';
import React from 'react';
import { Julius_Sans_One } from 'next/font/google';

const julius = Julius_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] flex items-center justify-start overflow-hidden px-6 md:px-12">
      {/* Fullscreen Background Image Layer */}
      <img
        src="/image/ben-neale-zpxKdH_xNSI-unsplash.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-[1]"
      />

      {/* Text Overlay */}
      <div className="relative z-[2] max-w-2xl text-left text-[#fdfaf6] drop-shadow-lg mt-[-40px]">
        <h1 className={`text-4xl md:text-5xl font-bold leading-tight animate-fade-in text-[#f5f5dc] ${julius.className}`}>
          <span style={{ color: '#61103c' }}>Crafting</span> Code with Creativity
        </h1>
        <p className="mt-4 text-md md:text-lg italic">
          Beyond algorithms and syntax, I craft digital experiences
          that blend <br /> artistic vision with technical precision
        </p>
        <p className="mt-2 text-md md:text-lg italic">
          I shape digital spaces where design meets purpose.
        </p>
        <a
          href="#home"
          className="inline-block mt-8 bg-[#61103c] text-[#fdfaf6] px-6 py-3 rounded-full text-lg font-medium hover:bg-[#8b1e5f] transition transform hover:scale-105"
        >
          Explore More
        </a>
      </div>
    </section>
  );
}
