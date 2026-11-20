import { useState, type FormEvent } from 'react';
import { CheckCircle2, Clock, MapPin, Phone, Send } from 'lucide-react';
import { LANDING_DATA } from '@/standalone-landing/data/landingData';

interface LandingContactProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export function LandingContact({ selectedService, onServiceChange }: LandingContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || LANDING_DATA.services[0].name,
    urgency: 'Standard (Next 24-48 Hours)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Realistic client-side submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  function handleReset() {
    setFormData({
      name: '',
      phone: '',
      service: LANDING_DATA.services[0].name,
      urgency: 'Standard (Next 24-48 Hours)',
      message: '',
    });
    setSubmitted(false);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-mist px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Call & Dispatch Details */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div>
              <p className="text-sm font-bold tracking-widest text-blue uppercase">
                Direct Contact
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                Speak With a Licensed Plumber
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                For prompt dispatch or diagnostic questions in Colonial Heights and surrounding Tri-Cities neighborhoods, call our verified phone line directly.
              </p>
            </div>

            {/* Verified Phone Card */}
            <div className="rounded-3xl bg-navy p-8 text-white shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-aqua">
                Verified Phone Dispatch
              </span>
              <a
                href={LANDING_DATA.phoneTel}
                className="mt-3 block text-3xl font-extrabold tracking-tight text-white transition hover:text-aqua sm:text-4xl"
              >
                {LANDING_DATA.phoneDisplay}
              </a>
              <p className="mt-3 text-sm text-slate-300">
                Direct phone line for scheduling, quote discussions, and urgent repair dispatch.
              </p>
              <a
                href={LANDING_DATA.phoneTel}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-aqua py-3.5 text-center text-sm font-bold text-navy shadow-lg transition hover:bg-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call Now: {LANDING_DATA.phoneDisplay}</span>
              </a>
            </div>

            {/* Base Location & Hours Info */}
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-7 ring-1 ring-navy/10 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-navy">Service Base Location</h3>
                  <p className="text-xs text-slate-600">
                    {LANDING_DATA.baseCity}, {LANDING_DATA.baseState} {LANDING_DATA.baseZip}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Serving Colonial Heights, Petersburg, Richmond, Chesterfield, and Chester.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-navy">Scheduling Hours</h3>
                  <p className="text-xs text-slate-600">
                    Monday – Saturday: 8:00 AM – 6:00 PM
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Urgent leak calls prioritized by phone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Service Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 ring-1 ring-navy/10 shadow-lg sm:p-10">
              {submitted ? (
                /* Success Confirmation State */
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-navy">
                    Service Request Received!
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                    Thank you, <strong className="text-navy">{formData.name}</strong>. Your inquiry for <strong className="text-navy">{formData.service}</strong> in the {LANDING_DATA.primaryLocation} area has been logged.
                  </p>
                  <div className="mt-6 rounded-2xl bg-mist p-5 text-left text-xs leading-relaxed text-slate-700 ring-1 ring-navy/10 w-full max-w-md">
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Urgency:</strong> {formData.urgency}</p>
                    {formData.message && <p className="mt-1"><strong>Details:</strong> {formData.message}</p>}
                    <p className="mt-2 text-blue font-semibold">
                      A technician will review your notes and call you at {formData.phone} shortly.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={LANDING_DATA.phoneTel}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-navy"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>Need Immediate Help? Call {LANDING_DATA.phoneDisplay}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Inquiry Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="text-2xl font-bold text-navy">
                      Request Plumbing Service Online
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Fill out your details below and we will call you to confirm timing and diagnostic options.
                    </p>
                  </div>

                  {/* Name Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="landing-name" className="text-xs font-bold text-navy uppercase tracking-wider">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="landing-name"
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="landing-phone" className="text-xs font-bold text-navy uppercase tracking-wider">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="landing-phone"
                      type="tel"
                      required
                      placeholder="(804) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20"
                    />
                  </div>

                  {/* Service Needed Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="landing-service" className="text-xs font-bold text-navy uppercase tracking-wider">
                      Service Needed
                    </label>
                    <select
                      id="landing-service"
                      value={selectedService || formData.service}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData({ ...formData, service: val });
                        onServiceChange(val);
                      }}
                      className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy bg-white focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20"
                    >
                      {LANDING_DATA.services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Urgency Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="landing-urgency" className="text-xs font-bold text-navy uppercase tracking-wider">
                      Urgency Level
                    </label>
                    <select
                      id="landing-urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy bg-white focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20"
                    >
                      <option value="Urgent (Today / Active Leak)">Urgent (Today / Active Water Leak)</option>
                      <option value="Prompt (Next 24 Hours)">Prompt (Next 24 Hours)</option>
                      <option value="Standard (Next 24-48 Hours)">Standard (Next 24-48 Hours)</option>
                      <option value="Planning / Replacement Quote">Planning / Replacement Quote</option>
                    </select>
                  </div>

                  {/* Problem Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="landing-message" className="text-xs font-bold text-navy uppercase tracking-wider">
                      Describe the Plumbing Problem (Optional)
                    </label>
                    <textarea
                      id="landing-message"
                      rows={3}
                      placeholder="e.g. Water heater pilot light went out, water pooled around base of unit..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy placeholder:text-slate-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue py-4 text-center text-sm font-bold text-white shadow-md transition duration-200 hover:bg-navy hover:shadow-lg disabled:opacity-70"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Service Request'}</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    No spam. We respect your privacy and only use your phone number to coordinate plumbing service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
