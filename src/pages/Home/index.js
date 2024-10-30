import React from 'react';
import Navbar from '../../components/navbar';
import HeroSection from '../../components/hero';
import FeaturesSection from '../../components/feature';
import HowItWorksSection from '../../components/howItWorks';
import DriverBenefitsSection from '../../components/driver';
import Testimonials from '../../components/testimonial';
import DownloadAppSection from '../../components/downloadAppSection';
import TeamSection from '../../components/teamSection';
import FAQSection from '../../components/faqSection';
import Footer from '../../components/footer';
function Home() {
    return ( 
        <>
       
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DriverBenefitsSection />
        <Testimonials />
        <DownloadAppSection />
        <TeamSection />
        <FAQSection />
      
        </>
     );
}

export default Home;