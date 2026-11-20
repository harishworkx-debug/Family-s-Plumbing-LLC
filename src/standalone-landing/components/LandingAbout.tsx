import { AlertTriangle, Award, CheckCircle2, Droplets, ShieldCheck } from 'lucide-react';
import { LANDING_DATA } from '@/standalone-landing/data/landingData';

export function LandingAbout() {
  return (
    <section id="about" className="scroll-mt-24 bg-mist px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7">
            <p className="text-sm font-bold tracking-widest text-blue uppercase">
              Local Craftsmanship &amp; Engineering
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Plumbing Solutions Engineered for Colonial Heights Homes
            </h2>
            
            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Homes throughout Colonial Heights and the greater Tri-Cities area present distinct plumbing challenges. From classic mid-century builds with aging cast-iron soil stacks and galvanized supply piping to newer suburban subdivisions utilizing multi-manifold PEX lines, no two residential plumbing systems behave identically.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Our service philosophy is rooted in technical thoroughness. We inspect the entire mechanical assembly—including pressure regulators, shutoff valves, and thermal expansion dynamics—so you never face recurring failures or concealed water rot.
            </p>

            {/* Local Challenges Callout Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 ring-1 ring-navy/10 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue/10 text-blue">
                    <Droplets className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-navy">Water Hardness &amp; Scale</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Central Virginia mineral density precipitates scale buildup in water heater tanks and degrades faucet cartridges prematurely. We install scale-resistant components.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 ring-1 ring-navy/10 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue/10 text-blue">
                    <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold text-navy">Winter Freeze Protection</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Sub-freezing winter cold snaps threaten uninsulated crawlspace piping and exterior hose connections. We retrofit frost-free sillcocks and secure supply lines.
                </p>
              </div>
            </div>

            {/* Code Compliance Bullets */}
            <ul className="mt-8 flex flex-col gap-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-aqua" aria-hidden="true" />
                <span>Strict compliance with the Virginia Uniform Statewide Building Code (USBC)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-aqua" aria-hidden="true" />
                <span>Clean municipal permit pull for major replacements and water heaters</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-aqua" aria-hidden="true" />
                <span>Quality mechanical parts sourced directly from licensed plumbing supply houses</span>
              </li>
            </ul>
          </div>

          {/* Right Column Highlights Visual */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-xl">
                <Award className="h-10 w-10 text-aqua" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-bold">Code-Certified Standards</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  Plumbing isn&apos;t just about stopping leaks—it&apos;s about safeguarding potable municipal drinking water and protecting sanitary wastewater seals for your household&apos;s health.
                </p>
                <div className="mt-6 border-t border-white/15 pt-6">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span>Base Location</span>
                    <span className="text-aqua">{LANDING_DATA.baseCity}, {LANDING_DATA.baseState} {LANDING_DATA.baseZip}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm font-semibold">
                    <span>Service Standards</span>
                    <span className="text-aqua">IPC / Virginia USBC</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-7 ring-1 ring-navy/10 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-blue" aria-hidden="true" />
                  <h4 className="text-base font-bold text-navy">Direct Technician Access</h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  When you reach out, you talk directly with a seasoned local professional who understands Tri-Cities plumbing and confirms exact job availability upfront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
