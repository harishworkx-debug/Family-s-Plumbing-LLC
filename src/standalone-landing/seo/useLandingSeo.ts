import { useEffect } from 'react';
import { BUSINESS } from '@/data/business';
import { LANDING_DATA } from '@/standalone-landing/data/landingData';

interface LandingSeoProps {
  currentPath: string;
}

export function useLandingSeo({ currentPath }: LandingSeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const pageTitle = `${LANDING_DATA.identity} | Professional Plumbing Services & Repairs`;
    const metaDescription = `Trusted residential plumber in ${LANDING_DATA.primaryLocation}. Water heater repair & installation, drain clearing, faucet, toilet, and leak repairs. Call ${LANDING_DATA.phoneDisplay}.`;
    const siteOrigin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : BUSINESS.siteUrl;
    const canonicalUrl = `${siteOrigin}${currentPath === '/' ? '/' : currentPath}`;

    document.title = pageTitle;

    function setMeta(attribute: 'name' | 'property', key: string, content: string): HTMLMetaElement {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    }

    setMeta('name', 'description', metaDescription);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', metaDescription);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', LANDING_DATA.identity);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = canonicalUrl;

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Plumber',
      name: LANDING_DATA.identity,
      description: metaDescription,
      telephone: LANDING_DATA.phoneE164,
      url: canonicalUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: LANDING_DATA.baseCity,
        addressRegion: LANDING_DATA.baseState,
        postalCode: LANDING_DATA.baseZip,
        addressCountry: 'US',
      },
      areaServed: LANDING_DATA.serviceAreas.map((area) => `${area.name}, ${area.state}`),
      priceRange: '$$',
    };

    let script = document.getElementById('standalone-landing-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'standalone-landing-jsonld';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);

    return () => {
      document.title = previousTitle;
      if (canonical) {
        canonical.href = previousCanonical;
      }
      const existingScript = document.getElementById('standalone-landing-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [currentPath]);
}
