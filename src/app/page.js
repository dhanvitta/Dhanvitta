"use client";
import Advantanges from '@/Components/Advantages'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import HeroSection from '@/Components/HeroSection'
import LearnSection from '@/Components/LearnSection'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <LearnSection />
      <Advantanges />
      <Footer />
    </React.Fragment>
  )
}
