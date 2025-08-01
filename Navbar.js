'use client';
import React, { useState } from 'react';
import { Julius_Sans_One } from 'next/font/google';

// Modern, minimal font for both logo and nav items
const julius = Julius_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ['Home', 'About', 'MyBlogs', 'Login'];

  return (
    <nav className={`bg-[#030c26] text-[#61103c] px-6 py-4 shadow-md transition-colors duration-700`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-4xl tracking-widest transition duration-700 ease-in-out hover:scale-105 hover:text-white ${julius.className}`}
        >
          Maryam’s Blog
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl p-2 rounded-lg transition duration-500 hover:text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Desktop menu */}
      <ul className={`hidden md:flex justify-end gap-8 mt-2 text-lg ${julius.className}`}>
        {menuItems.map((label, idx) => (
          <li key={idx}>
            <a
              href={label.toLowerCase().replace(/\s/g, '')}
              className="transition duration-700 ease-in-out hover:text-white hover:font-semibold"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className={`md:hidden flex flex-col gap-4 mt-3 text-lg ${julius.className}`}>
          {menuItems.map((label, idx) => (
            <li key={idx}>
              <a
                href={label.toLowerCase().replace(/\s/g, '')}
                className="transition duration-700 ease-in-out hover:text-white hover:font-semibold"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
