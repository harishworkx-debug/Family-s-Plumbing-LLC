import { ArrowUp, Phone, Wrench } from 'lucide-react';
import { LANDING_DATA } from '@/standalone-landing/data/landingData';

export function LandingFooter() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand Identity Column */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue text-white shadow-md">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                {LANDING_DATA.identity}
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Dedicated residential plumbing repairs, water heater replacements, and drain snaking across Colonial Heights, Petersburg, Richmond, Chesterfield, and Chester, Virginia.
            </p>
            <div className="mt-2 flex items-center gap-2">
              <a
                href={LANDING_DATA.phoneTel}
                className="inline-flex items-center gap-2 text-base font-bold text-aqua transition hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{LANDING_DATA.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-3 lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-aqua">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <a href="#services" className="hover:text-aqua transition">Services</a>
              <a href="#about" className="hover:text-aqua transition">About Craft</a>
              <a href="#service-area" className="hover:text-aqua transition">Service Areas</a>
              <a href="#why-us" className="hover:text-aqua transition">Standards</a>
              <a href="#faq" className="hover:text-aqua transition">FAQs</a>
              <a href="#contact" className="hover:text-aqua transition">Contact</a>
            </div>
            <div className="mt-4 border-t border-white/10 pt-4 flex flex-col gap-1.5 text-xs text-slate-400">
              <span>Virginia Uniform Statewide Building Code (USBC) Compliant</span>
              <span>International Plumbing Code (IPC) Standards</span>
            </div>
          </div>

          {/* Legal / Policy Links */}
          <div className="flex flex-col justify-between gap-4 lg:col-span-3">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-aqua">
                Compliance &amp; Legal
              </h4>
              <ul className="mt-3 flex flex-col gap-2 text-xs text-slate-300">
                <li>
                  <a href="/privacy-policy" className="hover:text-aqua transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="hover:text-aqua transition">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-aqua transition"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {LANDING_DATA.identity}. All rights reserved.
          </p>
          <p>
            Primary Dispatch Base: {LANDING_DATA.baseCity}, {LANDING_DATA.baseState} {LANDING_DATA.baseZip}
          </p>
        </div>
      </div>
    </footer>
  );
}
