import { useState } from 'react';
import { Menu, Phone, Wrench, X } from 'lucide-react';
import { LANDING_DATA } from '@/standalone-landing/data/landingData';

interface LandingHeaderProps {
  onNavigateSection?: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function LandingHeader({ onNavigateSection }: LandingHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleNavClick(href: string) {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Text-Based Identity */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 text-navy transition"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue text-white shadow-md transition duration-200 group-hover:bg-navy">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-base font-bold leading-tight tracking-tight text-navy sm:text-lg">
              {LANDING_DATA.identity}
            </span>
            <span className="text-xs font-semibold tracking-wider text-blue uppercase">
              Licensed Local Plumbing
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Landing Page Navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Phone Button */}
        <div className="flex items-center gap-3">
          <a
            href={LANDING_DATA.phoneTel}
            className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-bold text-white shadow-md transition duration-200 hover:bg-navy hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Call Now:</span>
            <span>{LANDING_DATA.phoneDisplay}</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-navy ring-1 ring-navy/15 transition hover:bg-slate-100 lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav aria-label="Mobile Navigation" className="border-t border-navy/10 bg-white px-5 py-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-blue"
              >
                {item.label}
              </button>
            ))}
            <a
              href={LANDING_DATA.phoneTel}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue py-3.5 text-center text-base font-bold text-white shadow-md transition hover:bg-navy"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {LANDING_DATA.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
