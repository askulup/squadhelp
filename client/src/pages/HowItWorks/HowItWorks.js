import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HowItWorks.module.sass';
import HowItWorksIntro from '../../components/HowItWorks/HowItWorksIntro/HowItWorksIntro';
import ServicesSection from '../../components/HowItWorks/ServicesSection/ServicesSection';
import NamingContestsSection from '../../components/HowItWorks/NamingContestsSection/NamingContestsSection';
import LaunchingContestSection from '../../components/HowItWorks/LaunchingContestSection/LaunchingContestSection';
import CTASection from '../../components/HowItWorks/CTASection/CTASection';
import StatisticsSection from '../../components/HowItWorks/StatisticsSection/StatisticsSection';
import PricingSection from '../../components/HowItWorks/PricingSection/PricingSection';
import ClientsSection from '../../components/HowItWorks/ClientsSection/ClientsSection';


const HowItWorks = () => (
  <div id="HowItWorks" className={styles.HowItWorks}>
    <Header />
    <article>
      {HowItWorksIntro}
      {ServicesSection}
      {NamingContestsSection}
      {LaunchingContestSection}
    </article>
    {CTASection}
    {StatisticsSection}
    {PricingSection}
    {ClientsSection}
    <Footer />
  </div>
);
export default HowItWorks;
