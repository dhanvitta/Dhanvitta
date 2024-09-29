"use client";
import Advantanges from '@/app/Components/Advantages'
import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import HeroSection from '@/app/Components/HeroSection'
import LearnSection from '@/app/Components/LearnSection'
import React from 'react'
import CoursesSection from './Components/CoursesSection';
import Featured from './Components/Featured';
import Reviews from './Components/Reviews';
import Section from './Components/Section';
import SectionDetails from './Components/SectionDetails';
import VideoFeedback from './Components/VideoFeedback';
import Social from './Components/widgets/Social';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <Reviews />
      <CoursesSection />
      {/* <Featured /> */}
      {/* <VideoFeedback /> */}
      <SectionDetails />
      <Section />
      {/* <Advantanges /> */}
      {/* <LearnSection /> */}
      <Footer />
      {/* <Social /> */}
    </React.Fragment>
  )
}
