import React from 'react';
import HeroSection from '../../components/hero';
import FeaturesSection from '../../components/feature';
import HowItWorksSection from '../../components/howItWorks';
import DriverBenefitsSection from '../../components/driver';
import Testimonials from '../../components/testimonial';
import DownloadAppSection from '../../components/downloadAppSection';
// import TeamSection from '../../components/teamSection';
import FAQSection from '../../components/faqSection';
import HowItWorks from '../../components/howItWorksTab';
function Home() {
    return ( 
        <>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DriverBenefitsSection />
        <Testimonials />
        <DownloadAppSection />
        {/* <TeamSection /> */}
        <HowItWorks />
        <FAQSection />
      
        </>
     );
}

export default Home;