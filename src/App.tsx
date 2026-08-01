import React, { useState } from 'react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ArchitectureEstimator } from './components/ArchitectureEstimator';
import { TechStackSection } from './components/TechStackSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { AboutSection } from './components/AboutSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

// Generated image asset
import heroBgAsset from './assets/images/celestial_hero_bg_1785554448064.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [contactCategoryPrefill, setContactCategoryPrefill] = useState<string>('');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenContact = (categoryPrefill?: string) => {
    if (categoryPrefill) {
      setContactCategoryPrefill(categoryPrefill);
    } else {
      setContactCategoryPrefill('');
    }
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans relative selection:bg-amber-400 selection:text-slate-950">
      
      {/* Background Deep Space Interactive Canvas */}
      <StarfieldCanvas />

      {/* Top Glass Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8">
        
        {/* Section 1: Hero Overview */}
        <div id="overview">
          <Hero
            onNavigate={handleNavigate}
            onOpenContact={() => handleOpenContact()}
            heroBgPath={heroBgAsset}
          />
        </div>

        {/* Section 2: Core Services & Disciplines */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* Section 3: Interactive AI Architecture Blueprint Generator */}
        <ArchitectureEstimator onOpenContact={handleOpenContact} />

        {/* Section 4: The Celestial Engineering Stack */}
        <TechStackSection />

        {/* Section 5: Selected Portfolio & Case Studies */}
        <PortfolioSection />

        {/* Section 6: Live Agent Sandbox Simulator */}
        <InteractiveSandbox />

        {/* Section 7: Studio Philosophy & Manifesto */}
        <AboutSection />

        {/* Section 8: Insights & Research Whitepapers */}
        <InsightsSection />

      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Project Consultation Intake Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefillCategory={contactCategoryPrefill}
      />

    </div>
  );
}
