import { useState } from 'react';
import { useCurrentPath } from '@/lib/router';
import { LandingHeader } from '@/standalone-landing/components/LandingHeader';
import { LandingHero } from '@/standalone-landing/components/LandingHero';
import { LandingServices } from '@/standalone-landing/components/LandingServices';
import { LandingAbout } from '@/standalone-landing/components/LandingAbout';
import { LandingServiceArea } from '@/standalone-landing/components/LandingServiceArea';
import { LandingWhyUs } from '@/standalone-landing/components/LandingWhyUs';
import { LandingFaqSection } from '@/standalone-landing/components/LandingFaq';
import { LandingContact } from '@/standalone-landing/components/LandingContact';
import { LandingFooter } from '@/standalone-landing/components/LandingFooter';
import { useLandingSeo } from '@/standalone-landing/seo/useLandingSeo';
import { LANDING_DATA } from '@/standalone-landing/data/landingData';

export function StandaloneLandingPage() {
  const currentPath = useCurrentPath();
  const [selectedService, setSelectedService] = useState<string>(LANDING_DATA.services[0].name);

  // Isolated SEO & Structured Data (cleans up upon unmount)
  useLandingSeo({ currentPath });

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleSelectService(serviceName: string) {
    setSelectedService(serviceName);
    scrollToSection('contact');
  }

  return (
    <div id="top" className="flex min-h-screen flex-col bg-white font-sans text-navy antialiased selection:bg-blue selection:text-white">
      {/* Standalone Landing Header (No Main Website Nav/Branding) */}
      <LandingHeader onNavigateSection={scrollToSection} />

      <main className="flex-1">
        {/* Hero Section */}
        <LandingHero
          onScrollToContact={() => scrollToSection('contact')}
          onScrollToServices={() => scrollToSection('services')}
        />

        {/* Genuine Services Section (#services) */}
        <LandingServices onSelectService={handleSelectService} />

        {/* About & Craftsmanship Section (#about) */}
        <LandingAbout />

        {/* Service Area & Clean Map Embed (#service-area) */}
        <LandingServiceArea />

        {/* 4 Verifiable Pillars (#why-us) */}
        <LandingWhyUs />

        {/* FAQs (#faq) */}
        <LandingFaqSection />

        {/* Contact / Service Request Form (#contact) */}
        <LandingContact
          selectedService={selectedService}
          onServiceChange={(svc) => setSelectedService(svc)}
        />
      </main>

      {/* Standalone Landing Footer */}
      <LandingFooter />
    </div>
  );
}
