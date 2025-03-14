"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <section className="w-full py-32 bg-[#0A1B3D] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-[600px] bg-[#1E3A6E] opacity-20 transform rotate-6" />
        <div className="absolute bottom-0 left-0 w-full h-[600px] bg-[#2D5BA0] opacity-10 transform -rotate-6" />
      </div>

      <div className="w-[80%] mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#90B3E7] font-medium mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Contact <span className="text-[#90B3E7]">Us</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6B8CC9] text-lg max-w-2xl mx-auto"
          >
            Let us know how we can help you maintain the perfect cleanliness
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#1E3A6E]/30 backdrop-blur-sm p-8 rounded-2xl border border-[#2D5BA0]/30">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#0A1B3D] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-[#90B3E7]" />
                  </div>
                  <div>
                    <p className="text-[#90B3E7] font-medium">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#0A1B3D] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-[#90B3E7]" />
                  </div>
                  <div>
                    <p className="text-[#90B3E7] font-medium">Email</p>
                    <p className="text-white">contact@cleaningservice.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#0A1B3D] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#90B3E7]" />
                  </div>
                  <div>
                    <p className="text-[#90B3E7] font-medium">Address</p>
                    <p className="text-white">123 Cleaning Street, City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#0A1B3D] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-[#90B3E7]" />
                  </div>
                  <div>
                    <p className="text-[#90B3E7] font-medium">Working Hours</p>
                    <p className="text-white">Mon - Sat: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1E3A6E]/30 backdrop-blur-sm p-8 rounded-2xl border border-[#2D5BA0]/30"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#90B3E7] text-sm mb-2 block">Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#0A1B3D] border border-[#2D5BA0]/30 rounded-xl p-4 text-white focus:border-[#90B3E7] transition-colors outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[#90B3E7] text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#0A1B3D] border border-[#2D5BA0]/30 rounded-xl p-4 text-white focus:border-[#90B3E7] transition-colors outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="text-[#90B3E7] text-sm mb-2 block">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-[#0A1B3D] border border-[#2D5BA0]/30 rounded-xl p-4 text-white focus:border-[#90B3E7] transition-colors outline-none"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="text-[#90B3E7] text-sm mb-2 block">Message</label>
                <textarea
                  className="w-full bg-[#0A1B3D] border border-[#2D5BA0]/30 rounded-xl p-4 text-white focus:border-[#90B3E7] transition-colors outline-none h-32 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#2D5BA0] text-white font-medium py-4 rounded-xl hover:bg-[#1E3A6E] transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 