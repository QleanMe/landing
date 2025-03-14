"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Specialists() {
  const specialists = [
    {
      name: "Emily Parker",
      role: "Senior Cleaning Specialist",
      experience: "8+ years experience",
      specialization: "Residential & Commercial",
      image: "https://www.cabq.gov/artsculture/biopark/images/penguin-cool-facts_penguins-huddling.jpg"
    },
    {
      name: "John Martinez",
      role: "Deep Cleaning Expert",
      experience: "10+ years experience",
      specialization: "Industrial & Special Projects",
      image: "https://www.cabq.gov/artsculture/biopark/images/penguin-cool-facts_penguins-huddling.jpg"
    },
    {
      name: "Sophie Wilson",
      role: "Eco-Cleaning Specialist",
      experience: "6+ years experience",
      specialization: "Green Cleaning Solutions",
      image: "https://www.cabq.gov/artsculture/biopark/images/penguin-cool-facts_penguins-huddling.jpg"
    },
    {
      name: "Mark Thompson",
      role: "Sanitization Expert",
      experience: "7+ years experience",
      specialization: "Disinfection & Health Safety",
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
            Our Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A6E]"
          >
            Meet Our <span className="text-[#2D5BA0]">Specialists</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B6A9B] text-lg max-w-2xl mx-auto"
          >
            Professional team with extensive experience in cleaning services
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white backdrop-blur-sm rounded-2xl border border-[#E1EEFF] hover:border-[#C5DCFF] transition-all shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={specialist.image}
                  alt={specialist.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A6E]/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E3A6E] mb-2">{specialist.name}</h3>
                <p className="text-[#2D5BA0] font-medium mb-4">{specialist.role}</p>
                <div className="space-y-2">
                  <p className="text-[#4B6A9B] text-sm">{specialist.experience}</p>
                  <p className="text-[#4B6A9B] text-sm">{specialist.specialization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

          <p className="text-[#4B6A9B] text-lg text-center mt-16">
            And many more dedicated specialists ready to help you maintain cleanliness and comfort in your space
          </p>
      </div>
    </section>
  );
} 