"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaSprayCan, FaBroom, FaTshirt, FaWind } from 'react-icons/fa';

export default function Equipment() {
  const equipment = [
    {
      icon: FaWind,
      title: "Vacuum Cleaners",
      description: "Professional vacuum cleaners for dry and wet cleaning",
      features: ["HEPA filtration", "Low noise level", "Large tank capacity"],
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    },
    {
      icon: FaSprayCan,
      title: "Cleaning Agents",
      description: "Professional chemistry for different types of surfaces",
      features: ["Hypoallergenic", "Eco-certified", "Effective stain removal"],
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    },
    {
      icon: FaBroom,
      title: "Cleaning Tools",
      description: "Specialized inventory for professional cleaning",
      features: ["Ergonomic design", "High durability", "Versatility"],
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    },
    {
      icon: FaTshirt,
      title: "Consumables",
      description: "Quality materials for perfect cleanliness",
      features: ["Microfiber", "Lint-free cloths", "Protective equipment"],
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    }
  ];

  return (
    <section className="w-full py-32 bg-[#0A1B3D] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-[600px] bg-[#1E3A6E] opacity-20 transform rotate-12" />
        <div className="absolute bottom-0 left-0 w-full h-[600px] bg-[#2D5BA0] opacity-10 transform -rotate-12" />
      </div>

      <div className="w-[80%] mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#90B3E7] font-medium mb-4 block"
          >
            Our Equipment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Professional <span className="text-[#90B3E7]">Equipment</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6B8CC9] text-lg max-w-2xl mx-auto"
          >
            We use only high-quality equipment and professional cleaning products
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1E3A6E]/30 backdrop-blur-sm rounded-2xl border border-[#2D5BA0]/30 group hover:border-[#2D5BA0]/60 transition-all overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative w-full md:w-48 h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B3D]/80 to-transparent" />
                </div>
                <div className="p-8 flex-1">
                  <div className="bg-[#0A1B3D] w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-xl text-[#90B3E7]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-[#6B8CC9] mb-4">{item.description}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#90B3E7]" />
                        <p className="text-white text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 