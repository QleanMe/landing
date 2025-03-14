"use client";

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Features = dynamic(() => import('@/components/Features'), { ssr: false });
const Statistics = dynamic(() => import('@/components/Statistics'), { ssr: false });
const Specialists = dynamic(() => import('@/components/Specialists'), { ssr: false });
const Tools = dynamic(() => import('@/components/Tools'), { ssr: false });

export default function ClientPage() {
  return (
    <main>
      <Hero />
      <Features />
      <Statistics />
      <Specialists />
      <Tools />
    </main>
  );
} 