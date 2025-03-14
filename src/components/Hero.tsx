"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#F0F7FF] overflow-hidden">
      {/* Wave background element */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-full h-[800px] bg-[#E1EEFF] rounded-b-[100%] opacity-50 transform -translate-y-1/2" />
          <div className="absolute top-0 left-0 w-full h-[700px] bg-[#C5DCFF] rounded-b-[100%] opacity-30 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="relative w-[80%] mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-6"
            >
              <span className="bg-[#C5DCFF] bg-opacity-50 text-[#2D5BA0] px-4 py-2 rounded-full text-sm font-medium">
                Professional Cleaning Services
              </span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-[#1E3A6E] leading-tight">
              Cleanliness in
              <span className="block text-[#2D5BA0]">Every Detail</span>
            </h1>
            
            <p className="text-lg text-[#4B6A9B] mb-10 max-w-lg leading-relaxed">
              Trust your space to professionals. We create not just cleanliness, but an atmosphere of comfort and freshness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#2D5BA0] rounded-xl text-white font-medium hover:bg-[#1E3A6E] transition-colors"
              >
                Book Cleaning
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white rounded-xl text-[#2D5BA0] font-medium border border-[#2D5BA0] hover:bg-[#F0F7FF] transition-colors"
              >
                Our Services
              </motion.button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[#E1EEFF] pt-8">
              <div>
                <p className="text-3xl font-bold text-[#1E3A6E] mb-2">10+</p>
                <p className="text-[#4B6A9B]">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1E3A6E] mb-2">2000+</p>
                <p className="text-[#4B6A9B]">Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1E3A6E] mb-2">100%</p>
                <p className="text-[#4B6A9B]">Guarantee</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute -right-20 -top-20 w-72 h-72 bg-[#C5DCFF] rounded-full opacity-50 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-[#E1EEFF] rounded-full opacity-50 blur-3xl" />
              <Image
                src="https://www.cabq.gov/artsculture/biopark/images/penguin-cool-facts_penguins-huddling.jpg"
                alt="Professional Cleaning"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F0F7FF]/50 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute backdrop-blur-sm -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/60 rounded-xl p-3 w-auto shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="text-[#4B6A9B]">We are online</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 