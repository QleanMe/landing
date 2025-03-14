"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaApple, FaAndroid, FaCloudUploadAlt } from 'react-icons/fa';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  status: string;
  sinNumber: string;
  deviceType: string;
  profilePicture: File | null;
  workPermitPhoto: File | null;
  secondDocument: File | null;
}

export default function NewCleaner() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    status: '',
    sinNumber: '',
    deviceType: '',
    profilePicture: null,
    workPermitPhoto: null,
    secondDocument: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const FileUploadField = ({ name, label, required = true }: { name: keyof Pick<FormData, 'profilePicture' | 'workPermitPhoto' | 'secondDocument'>; label: string; required?: boolean }) => (
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
          <h1 className="text-3xl font-bold text-[#1E3A6E] mb-2">Join Our Cleaning Team</h1>
          <div className="bg-[#E1EEFF] rounded-xl p-6 mb-8">
            <p className="text-[#4B6A9B] leading-relaxed">
              We're currently expanding our team of professional cleaners! By submitting this application, you acknowledge and agree to:
            </p>
            <ul className="list-disc list-inside text-[#4B6A9B] mt-4 space-y-2">
              <li>Undergo a comprehensive background check</li>
              <li>Provide references from previous employers</li>
              <li>Maintain high standards of professionalism and quality</li>
              <li>Follow our safety and service protocols</li>
            </ul>
            <p className="text-[#2D5BA0] font-medium mt-4">
              Join our team of professionals and build a rewarding career! 🌟
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
              <label className="block text-[#1E3A6E] font-medium mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-[#E1EEFF] focus:border-[#2D5BA0] focus:outline-none"
                required
              >
                <option value="">Select your status</option>
                <option value="work_permit">Work Permit</option>
                <option value="permanent_resident">Permanent Resident</option>
                <option value="citizen">Citizen</option>
              </select>
            </div>

            <div>
              <label className="block text-[#1E3A6E] font-medium mb-2">SIN Number</label>
              <input
                type="text"
                name="sinNumber"
                value={formData.sinNumber}
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

            <div className="space-y-4">
              <label className="block text-[#1E3A6E] font-medium mb-2">Required Documents</label>
              <FileUploadField name="profilePicture" label="Upload Profile Picture" />
              <FileUploadField 
                name="workPermitPhoto" 
                label={formData.status === 'citizen' 
                  ? 'Upload Passport Photo' 
                  : 'Upload Work Permit / PR Card Photo'} 
              />
              {formData.status !== 'citizen' && (
                <FileUploadField 
                  name="secondDocument" 
                  label="Upload Second Government ID" 
                />
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-[#2D5BA0] text-white rounded-xl font-medium hover:bg-[#1E3A6E] transition-colors"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 