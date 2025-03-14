"use client";

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaClipboardCheck, FaBroom, FaCheckCircle } from 'react-icons/fa';

export default function Process() {
  const steps = [
    {
      icon: FaPhoneAlt,
      title: "Contact Us",
      description: "Call us or fill out the form on our website to request a service"
    },
    {
      icon: FaClipboardCheck,
      title: "Assessment",
      description: "We evaluate your needs and provide a detailed quote"
    },
    {
      icon: FaBroom,
      title: "Service",
      description: "Our professional team performs the cleaning according to the agreed plan"
    },
    {
      icon: FaCheckCircle,
      title: "Quality Check",
      description: "We ensure the cleaning meets our high quality standards"
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
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A6E]"
          >
            Our Working <span className="text-[#2D5BA0]">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B6A9B] text-lg max-w-2xl mx-auto"
          >
            Simple and efficient process to ensure the best cleaning service
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-[#E1EEFF] hover:border-[#C5DCFF] transition-all shadow-lg relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2D5BA0] rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="bg-[#F0F7FF] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="text-2xl text-[#2D5BA0]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A6E] mb-4">{step.title}</h3>
              <p className="text-[#4B6A9B]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 