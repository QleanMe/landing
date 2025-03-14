"use client";

import { motion } from 'framer-motion';

export default function Team() {
  const team = [
    {
      name: "Michael Anderson",
      role: "CEO & Founder",
      description: "Over 15 years of experience in the cleaning industry. Expert in business development and team management.",
      achievements: ["Best Service Provider 2023", "Industry Innovation Award"]
    },
    {
      name: "Sarah Williams",
      role: "Operations Manager",
      description: "Responsible for coordinating cleaning teams and ensuring service quality. Certified in project management.",
      achievements: ["Employee of the Year 2022", "Quality Excellence Award"]
    },
    {
      name: "David Thompson",
      role: "Quality Control Specialist",
      description: "Develops and implements quality control standards. Expert in eco-friendly cleaning methods.",
      achievements: ["Green Cleaning Certification", "Safety Excellence Award"]
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
            Meet Our <span className="text-[#2D5BA0]">Experts</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#4B6A9B] text-lg max-w-2xl mx-auto"
          >
            Professional team with years of experience in the cleaning industry
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-[#E1EEFF] hover:border-[#C5DCFF] transition-all shadow-lg"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#1E3A6E] mb-2">{member.name}</h3>
                <p className="text-[#2D5BA0] font-medium">{member.role}</p>
              </div>
              <p className="text-[#4B6A9B] mb-6">{member.description}</p>
              <div>
                <h4 className="text-[#1E3A6E] font-medium mb-3">Achievements:</h4>
                <ul className="space-y-2">
                  {member.achievements.map((achievement, i) => (
                    <li key={i} className="text-[#4B6A9B] flex items-center">
                      <span className="w-2 h-2 bg-[#2D5BA0] rounded-full mr-3" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 