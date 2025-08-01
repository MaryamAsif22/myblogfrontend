'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Julius_Sans_One } from 'next/font/google';

const julius = Julius_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F3D3] text-[#63113a] font-sans px-6 md:px-20 py-10">
      {/* Header */}
      <header className="flex justify-between items-center border-b-2 border-[#ae4a71] pb-4 shadow-[0_0_10px_#ae4a71]">
        <h1 className={`text-3xl font-bold tracking-wide ${julius.className}`}>
          W<span className="text-[#113e63]">hat</span> do i do?
        </h1>
        <nav className="flex gap-6 text-lg font-medium"></nav>
      </header>

      {/* First Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/image/light-blue-app-icons-pack-preview-1-scaled.jpg"
            alt="Blog Hero"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className={`text-2xl font-semibold mb-4 ${julius.className}`}>
            THE BL<span className="text-[#113e63]">og</span>
          </h2>
          <p className="text-md leading-relaxed opacity-90">
            Welcome to my creative space where logic meets aesthetics. Here, I write about design thinking, frontend magic, and projects that spark joy and performance.
            In a world where pixels meet personality, the way we code is more than syntax—it’s expression.

Just as fashion tells the story of who we are, our frontend layouts speak to the choices we make: the balance between whitespace and rhythm, the confidence of bold colors versus the subtlety of opacity, the layering of components like fabric textures that glide into harmony. Every div, every hover effect—it all has attitude. <br/>
 <mark><b>👗 CODE IS YOUR CANVAS </b></mark><br/>

Designing a web interface is like curating an outfit. Buttons are accessories, layouts are silhouettes, and hover transitions? Your sparkle. When I style components with Tailwind CSS and animate with Framer Motion, I’m not just building—I’m dressing the interaction. <br/>
 <mark><b>🎨 MIXING TEXTURES</b></mark><br/>

I love contrasting soft pastels with confident strokes of maroon pink and navy. A double border might act as the hemline of a sharp blazer; a rounded card with a shadow is your cozy oversized knit. And don’t get me started on how satisfying a crisp border-[#ae4a71] feels against a warm background.
          </p>
        </div>
      </motion.section>

      {/* Second Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16"
      >
        <div className="bg-[#ae4a71] rounded-xl shadow-md p-6 md:flex gap-8">
          <div className="md:w-1/2 h-[250px] rounded-xl overflow-hidden border-[6px] border-double border-[#e8b7c7] shadow-[0_0_12px_#e8b7c7]">
            <Image
              src="/image/line-art-wallpapers.jpg"
              alt="Blog Preview"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h3 className={`text-xl font-bold mb-2 ${julius.className}`}>
              How to Wear Creati<span className="text-[#F5F5DC]">vit</span>y
            </h3>
            <p className="text-md opacity-80">
              Discover how coding can be a form of style expression—from layout structures to color psychology. Styling React components like outfits: layering, mixing textures, and showing personality. <br/>
              <mark><b>💃 The Performance Walk</b></mark><br/>

              Behind the style is the walk—smooth transitions, snappy page loads, fluid user experiences. Elegance isn’t just visual—it’s performance that doesn’t stutter. Optimization is like tailoring: invisible but essential. <br/>
              <mark><b>💡 Creativity is confidence</b></mark><br/>

              You don’t need a massive wardrobe or a bloated style sheet. Minimal code, meaningful execution. The magic is in the details.
            </p>
            <div className="mt-4 text-sm text-[#113e63]">
              💬 Comments: “Love this concept!” • “Waiting for part 2!”
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-20 text-center text-[#113e63] text-sm">
        &copy; {new Date().getFullYear()} Maryam Asif — Crafted with React & Tailwind
      </footer>
    </main>
  );
}
