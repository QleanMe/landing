"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function Tools() {
  const tools = [
    {
      name: "Professional Vacuum Cleaners",
      description: "High-power vacuum cleaners for deep cleaning of all surfaces",
      features: ["HEPA filtration", "Adjustable power", "Large capacity"],
      image: "https://www.cabq.gov/artsculture/biopark/images/penguin-cool-facts_penguins-huddling.jpg"
    },
    {
      name: "Steam Cleaners",
      description: "Advanced steam cleaning systems for sanitization and deep cleaning",
      features: ["High temperature", "Chemical-free", "Multi-surface"],
      image: "https://www.cabq.gov/artsculture/biopark/images/penguin-cool-facts_penguins-huddling.jpg"
    },
    {
      name: "Floor Scrubbers",
      description: "Industrial floor scrubbers for efficient cleaning of large areas",
      features: ["Powerful motors", "Large water tanks", "Easy operation"],
      image: "https://www.cabq.gov/artsculture/biopark/images/penguin-cool-facts_penguins-huddling.jpg"
    },
    {
      name: "Cleaning Solutions",
      description: "Professional eco-friendly cleaning products for all surfaces",
      features: ["Eco-certified", "Effective formulas", "Safe for all surfaces"],
      image: "https://www.cabq.gov/artsculture/biopark/images/penguin-cool-facts_penguins-huddling.jpg"
    }
  ];

  return (
    <section className="w-full py-32 bg-[#F0F7FF] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-[#E1EEFF] opacity-50 transform -skew-y-6" />
        <div className="absolute bottom-0 right-0 w-full h-[600px] bg-[#C5DCFF] opacity-30 transform skew-y-6" />
      </div>

      <div className="w-[80%] mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#2D5BA0] font-medium mb-4 block"
          >
            Professional Equipment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A6E]"
          >
            Our <span className="text-[#2D5BA0]">Tools</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B6A9B] text-lg max-w-2xl mx-auto"
          >
            We use only professional-grade cleaning tools and equipment
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white backdrop-blur-sm rounded-2xl border border-[#E1EEFF] hover:border-[#C5DCFF] transition-all shadow-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] flex items-center justify-center">
                  <FaCheck className="w-6 h-6 text-[#2D5BA0]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E3A6E] mb-2">{tool.name}</h3>
                  <p className="text-[#4B6A9B] mb-4">{tool.description}</p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-[#4B6A9B]">
                        <FaCheck className="w-4 h-4 text-[#2D5BA0]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 