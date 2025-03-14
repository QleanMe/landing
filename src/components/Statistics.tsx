"use client";

import { motion } from 'framer-motion';
import { FaUsers, FaBuilding, FaStar, FaClock } from 'react-icons/fa';

export default function Statistics() {
  const stats = [
    {
      icon: FaUsers,
      value: "1000+",
      label: "Happy Clients",
      description: "Satisfied customers who trust our services"
    },
    {
      icon: FaBuilding,
      value: "2500+",
      label: "Projects Completed",
      description: "Successfully completed cleaning projects"
    },
    {
      icon: FaStar,
      value: "4.9",
      label: "Average Rating",
      description: "Based on customer reviews"
    },
    {
      icon: FaClock,
      value: "24/7",
      label: "Available",
      description: "Round-the-clock service availability"
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
            Our Numbers
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A6E]"
          >
            Trusted by <span className="text-[#2D5BA0]">Thousands</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B6A9B] text-lg max-w-2xl mx-auto"
          >
            Our achievements in numbers speak for themselves
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-[#E1EEFF] hover:border-[#C5DCFF] transition-all shadow-lg"
            >
              <div className="bg-[#F0F7FF] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <stat.icon className="text-2xl text-[#2D5BA0]" />
              </div>
              <div className="text-4xl font-bold text-[#1E3A6E] mb-2">{stat.value}</div>
              <h3 className="text-xl font-semibold text-[#2D5BA0] mb-4">{stat.label}</h3>
              <p className="text-[#4B6A9B]">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 