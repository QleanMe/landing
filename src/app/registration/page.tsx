"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaApple, FaAndroid, FaCloudUploadAlt } from 'react-icons/fa';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  deviceType: string;
  profilePicture: File | null;
}

export default function Registration() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    deviceType: '',
    profilePicture: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const FileUploadField = ({ name, label, required = true }: { name: keyof Pick<FormData, 'profilePicture'>; label: string; required?: boolean }) => (
    <div className="relative">
      <input
        type="file"
        name={name}
        onChange={handleFileChange}
        className="hidden"
        id={name}
        accept="image/*"
        required={required}
      />
      <label
        htmlFor={name}
        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#E1EEFF] text-[#4B6A9B] cursor-pointer hover:border-[#2D5BA0] transition-colors"
      >
        <FaCloudUploadAlt className="text-xl" />
        <span>{formData[name] ? 'File selected' : label}</span>
      </label>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F0F7FF] py-20">
      <div className="w-[90%] max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-[#1E3A6E] mb-2">Join Our Exclusive Beta</h1>
          <div className="bg-[#E1EEFF] rounded-xl p-6 mb-8">
            <p className="text-[#4B6A9B] leading-relaxed">
              But that&apos;s not all—right now, we&apos;re running an exclusive closed beta test for our app. Every two weeks, we&apos;ll randomly select 10 lucky users from those who sign up to join our beta team. This is your golden opportunity to be among the very first to experience our innovative service!
            </p>
            <p className="text-[#2D5BA0] font-medium mt-4">
              Don&apos;t miss out—sign up now and be part of something extraordinary! 🚀
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#1E3A6E] font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-[#E1EEFF] focus:border-[#2D5BA0] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-[#1E3A6E] font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-[#E1EEFF] focus:border-[#2D5BA0] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-[#1E3A6E] font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-[#E1EEFF] focus:border-[#2D5BA0] focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-[#1E3A6E] font-medium mb-2">Your Device</label>
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData(prev => ({ ...prev, deviceType: 'ios' }))}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border ${
                    formData.deviceType === 'ios' 
                      ? 'border-[#2D5BA0] bg-[#2D5BA0] text-white' 
                      : 'border-[#E1EEFF] text-[#4B6A9B]'
                  } transition-all`}
                >
                  <FaApple className="text-xl" />
                  <span>iPhone</span>
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFormData(prev => ({ ...prev, deviceType: 'android' }))}
                  className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border ${
                    formData.deviceType === 'android' 
                      ? 'border-[#2D5BA0] bg-[#2D5BA0] text-white' 
                      : 'border-[#E1EEFF] text-[#4B6A9B]'
                  } transition-all`}
                >
                  <FaAndroid className="text-xl" />
                  <span>Android</span>
                </motion.button>
              </div>
            </div>

            <div>
              <label className="block text-[#1E3A6E] font-medium mb-2">Profile Picture</label>
              <FileUploadField name="profilePicture" label="Upload your photo" />
              <p className="text-sm text-[#4B6A9B] mt-2">Please upload a clear photo of your face</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-[#2D5BA0] text-white rounded-xl font-medium hover:bg-[#1E3A6E] transition-colors"
            >
              Join the waitlist
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 