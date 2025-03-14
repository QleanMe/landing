"use client";

import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaBroom, FaSprayCan } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaHome,
      title: "Residential Cleaning",
      description: "Professional cleaning of apartments and houses with attention to every detail",
      features: [
        "Deep cleaning of all rooms",
        "Window cleaning",
        "Carpet and upholstery cleaning",
        "Kitchen and bathroom sanitization"
      ]
    },
    {
      icon: FaBuilding,
      title: "Commercial Cleaning",
      description: "Comprehensive cleaning services for offices and commercial spaces",
      features: [
        "Regular office cleaning",
        "Floor maintenance",
        "Workspace sanitization",
        "Common areas cleaning"
      ]
    },
    {
      icon: FaBroom,
      title: "Special Cleaning",
      description: "Specialized cleaning services for specific needs and occasions",
      features: [
        "Post-construction cleaning",
        "Move-in/move-out cleaning",
        "Event cleanup",
        "Emergency cleaning"
      ]
    },
    {
      icon: FaSprayCan,
      title: "Disinfection Services",
      description: "Professional disinfection and sanitization of spaces",
      features: [
        "Surface disinfection",
        "Air purification",
        "Antibacterial treatment",
        "Virus protection measures"
      ]
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
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A6E]"
          >
            Professional <span className="text-[#2D5BA0]">Cleaning Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B6A9B] text-lg max-w-2xl mx-auto"
          >
            We offer a wide range of cleaning services tailored to your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-[#E1EEFF] hover:border-[#C5DCFF] transition-all shadow-lg"
            >
              <div className="bg-[#F0F7FF] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="text-2xl text-[#2D5BA0]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A6E] mb-4">{service.title}</h3>
              <p className="text-[#4B6A9B] mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-[#4B6A9B] flex items-center">
                    <span className="w-2 h-2 bg-[#2D5BA0] rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 