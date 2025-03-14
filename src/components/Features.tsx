"use client";

import { motion } from 'framer-motion';
import { FaStar, FaClock, FaShieldAlt, FaHandshake } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: FaStar,
      title: "Quality Guarantee",
      description: "We guarantee the highest quality of cleaning and complete customer satisfaction"
    },
    {
      icon: FaClock,
      title: "Punctuality",
      description: "Strict adherence to schedules and timelines without delays"
    },
    {
      icon: FaShieldAlt,
      title: "Safety",
      description: "All our employees undergo background checks, and equipment is certified"
    },
    {
      icon: FaHandshake,
      title: "Individual Approach",
      description: "We develop a personalized cleaning plan tailored to your needs"
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
            Our Advantages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A6E]"
          >
            Why Choose <span className="text-[#2D5BA0]">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B6A9B] text-lg max-w-2xl mx-auto"
          >
            We provide the highest level of service with care for each client
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-[#E1EEFF] hover:border-[#C5DCFF] transition-all shadow-lg group"
            >
              <div className="bg-[#F0F7FF] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-2xl text-[#2D5BA0]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A6E] mb-4">{feature.title}</h3>
              <p className="text-[#4B6A9B]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 