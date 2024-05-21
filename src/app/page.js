"use client";
import Advantanges from '@/app/Components/Advantages'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import HeroSection from '@/app/Components/HeroSection'
import LearnSection from '@/app/Components/LearnSection'
import React from 'react'
import Reviews from './Components/Reviews';
import Section from './Components/Section';
import SectionDetails from './Components/SectionDetails';
import VideoFeedback from './Components/VideoFeedback';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      {/* <VideoFeedback /> */}
      <Reviews />
      <SectionDetails />
      <Section />
      {/* <Advantanges /> */}
      {/* <LearnSection /> */}
      <Footer />
    </React.Fragment>
  )
}
