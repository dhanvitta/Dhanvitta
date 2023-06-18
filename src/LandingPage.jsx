import React from 'react'
import Advantanges from './Components/Advantanges'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import LearnSection from './Components/LearnSection'


function LandingPage() {
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

export default LandingPage