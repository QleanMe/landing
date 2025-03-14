"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Exceptional service! Their attention to detail is remarkable. My home has never been this clean and fresh.",
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    },
    {
      name: "Michael Chen",
      role: "Office Manager",
      text: "We've been using their services for over a year now. The results are consistently outstanding.",
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Restaurant Owner",
      text: "Their team is professional, thorough, and always punctual. Highly recommended!",
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    },
    {
      name: "David Smith",
      role: "Property Manager",
      text: "Best cleaning service we've worked with. They handle our entire complex beautifully.",
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    },
    {
      name: "Lisa Chen",
      role: "Business Owner",
      text: "I'm amazed by their consistency and quality. They make our office shine every time.",
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    },
    {
      name: "James Wilson",
      role: "Hotel Manager",
      text: "Professional, reliable, and detail-oriented. They've transformed our guest experience.",
      image: "https://www.animalspot.net/wp-content/uploads/2017/08/Penguin-Pictures.jpg"
    }
  ];

  const totalPages = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="w-full py-32 bg-[#0A1B3D] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-[#1E3A6E] opacity-30 transform -skew-y-6" />
        <div className="absolute bottom-0 right-0 w-full h-[500px] bg-[#2D5BA0] opacity-20 transform skew-y-6" />
      </div>

      <div className="w-[80%] mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#90B3E7] font-medium mb-4 block"
          >
            Client Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            What Our <span className="text-[#90B3E7]">Clients Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6B8CC9] text-lg max-w-2xl mx-auto"
          >
            Discover why clients trust us with their spaces
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {testimonials.slice(currentPage * 3, (currentPage * 3) + 3).map((testimonial, index) => (
              <motion.div
                key={currentPage * 3 + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1E3A6E]/30 backdrop-blur-sm p-8 rounded-2xl border border-[#2D5BA0]/30"
              >
                <div className="flex flex-col items-start gap-6">
                  <div className="relative w-16 h-16 group">
                    <div className="absolute inset-0 bg-[#90B3E7] rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="64px"
                    />
                  </div>
                  <FaQuoteLeft className="text-2xl text-[#90B3E7]" />
                  <p className="text-white italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#90B3E7]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentPage ? 'bg-[#90B3E7] scale-150' : 'bg-[#2D5BA0]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 