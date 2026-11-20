export interface LandingService {
  id: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  checklist: string[];
}

export interface LandingServiceArea {
  name: string;
  state: string;
  zipCode: string;
  tag: string;
  highlight: string;
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPillar {
  title: string;
  body: string;
  badge: string;
}

export const LANDING_DATA = {
  niche: 'Plumber',
  primaryLocation: 'Colonial Heights, VA',
  identity: 'Plumber in Colonial Heights, VA',
  tagline: 'Professional Residential Plumbing & Emergency Repairs in Colonial Heights & the Tri-Cities Area',
  phoneDisplay: '(804) 896-3618',
  phoneTel: 'tel:+18048963618',
  phoneE164: '+18048963618',
  baseCity: 'Colonial Heights',
  baseState: 'VA',
  baseZip: '23834',
  cleanMapEmbedUrl:
    'https://maps.google.com/maps?q=Colonial%20Heights,%20VA&t=&z=13&ie=UTF8&iwloc=&output=embed',
  heroImage:
    'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  heroImageAlt: 'Licensed professional plumber assembling residential copper pipe fittings',

  trustBadges: [
    { title: 'State Licensed & Insured', subtitle: 'Virginia Code Compliant' },
    { title: 'Prompt Local Response', subtitle: 'Tri-Cities Dispatch' },
    { title: 'Transparent Upfront Pricing', subtitle: 'Clear Estimates Before Work' },
    { title: 'Root-Cause Diagnostics', subtitle: 'Lasting Structural Repairs' },
  ],

  pillars: [
    {
      badge: 'Certified Standards',
      title: 'Virginia State Licensed & Fully Insured',
      body: 'Every installation and pipe repair strictly complies with the Virginia Uniform Statewide Building Code (USBC) and International Plumbing Code (IPC) standards to safeguard your property and maintain manufacturer warranty validity.',
    },
    {
      badge: 'Community Knowledge',
      title: 'Local Tri-Cities Craftsmanship',
      body: 'Extensive hands-on experience navigating the unique plumbing profiles of Colonial Heights, Petersburg, and Chesterfield—from historic cast-iron soil pipes to modern PEX supply systems and crawlspace configurations.',
    },
    {
      badge: 'Zero Hidden Fees',
      title: 'Transparent Upfront Pricing',
      body: 'We perform a thorough diagnostic evaluation on-site and explain your repair or replacement options clearly before turning a single wrench. You receive honest, fixed quotes without surprise add-on charges.',
    },
    {
      badge: 'Lasting Solutions',
      title: 'Root-Cause Problem Diagnostics',
      body: 'Instead of applying temporary surface fixes, we pinpoint the underlying hydraulic or structural failures—such as hidden line corrosion, tree root intrusion, or thermal expansion strain—to keep problems from recurring.',
    },
  ] as LandingPillar[],

  services: [
    {
      id: 'water-heater',
      name: 'Water Heater Installation & Repair',
      summary: 'Replacement and repair of traditional gas, electric tanks, and high-efficiency tankless water heaters.',
      description:
        'When hot water runs out prematurely, discolored water pours from faucets, or tank bases leak, prompt professional attention protects your flooring. We handle new tank installations, element replacements, and thermal relief valve repairs.',
      image:
        'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Technician working on a residential water heating unit',
      checklist: [
        'Standard tank & tankless unit installations',
        'Heating element, thermostat & pilot assembly service',
        'Temperature & pressure (T&P) relief valve fixes',
        'Anode rod replacement & sediment flush servicing',
      ],
    },
    {
      id: 'drain-cleaning',
      name: 'Drain Cleaning & Clog Removal',
      summary: 'Clearing stubborn sink, shower, floor, and main sewer line blockages across local homes.',
      description:
        'Persistent slow drains usually signal progressive grease, mineral, or root buildup within drain traps or lateral lines. We clear blockages thoroughly using specialized mechanical equipment without damaging aged pipe walls.',
      image:
        'https://images.pexels.com/photos/7937292/pexels-photo-7937292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Network of residential plumbing pipes and cleanout drain connections',
      checklist: [
        'Kitchen sink & garbage disposal trap clearing',
        'Shower, bathtub & lavatory drain snaking',
        'Main sewer line & cleanout access unclogging',
        'Preventative buildup & root intrusion clearing',
      ],
    },
    {
      id: 'faucet-repair',
      name: 'Faucet Repair & Fixture Installation',
      summary: 'Precision repair and replacement of dripping, seized, or corroded kitchen and bathroom faucets.',
      description:
        'A single dripping faucet can waste hundreds of gallons of treated municipal water every month and erode underlying cabinet subfloors. We repair stems, replace ceramic disc cartridges, and install homeowner-provided fixtures.',
      image:
        'https://images.pexels.com/photos/7578999/pexels-photo-7578999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Hand testing a modern chrome sink faucet fixture',
      checklist: [
        'Single-handle & two-handle cartridge rebuilds',
        'Dripping spout & handle seal replacements',
        'Outdoor frost-proof hose bibb & sillcock installations',
        'Braided stainless steel supply line replacements',
      ],
    },
    {
      id: 'toilet-repair',
      name: 'Toilet Repair & Parts Replacement',
      summary: 'Fixing continuously running, weak-flushing, rocking, or leaking residential toilets.',
      description:
        'Internal tank leaks through worn flappers drive up utility bills quietly, while a leaking wax ring at the toilet base can silently rot bathroom subfloors. We replace internal valve assemblies, wax seals, and closet bolts.',
      image:
        'https://images.pexels.com/photos/10099095/pexels-photo-10099095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Contemporary bathroom with newly installed plumbing fixtures',
      checklist: [
        'Continuous tank running & slow fill diagnostics',
        'Heavy-duty wax ring & floor flange resets',
        'Fill valve, flush valve & flapper mechanism upgrades',
        'Complete toilet removal & high-efficiency replacements',
      ],
    },
    {
      id: 'leak-repair',
      name: 'Plumbing Leak Detection & Pipe Repair',
      summary: 'Pinpointing and repairing concealed water pipe leaks in walls, ceilings, and crawlspaces.',
      description:
        'Unexplained spikes in water bills, faint sounds of flowing water, or damp drywall spots indicate pressurized supply pipe leaks. We locate the failure point accurately and execute permanent repairs using approved copper or PEX solutions.',
      image:
        'https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Plumbing professional inspecting water supply lines',
      checklist: [
        'Pinhole copper pipe & PEX line leak repairs',
        'Crawlspace water supply line insulation & repair',
        'Whole-house main water shutoff valve installations',
        'Pressure testing & line integrity verification',
      ],
    },
    {
      id: 'kitchen-bath',
      name: 'Kitchen & Bathroom Plumbing',
      summary: 'Comprehensive plumbing support for garbage disposals, sink drains, and laundry connections.',
      description:
        'Kitchen sinks and laundry facilities endure high daily volumes. We repair jammed or humming garbage disposals, secure dishwasher drainage lines, and replace aged washing machine rubber hoses with burst-resistant stainless lines.',
      image:
        'https://images.pexels.com/photos/34295401/pexels-photo-34295401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Clean kitchen sink faucet running into stainless steel sink basin',
      checklist: [
        'Garbage disposal repairs & new unit installations',
        'Dishwasher air gap & drain line tie-ins',
        'Washing machine valve & standpipe overflow repairs',
        'Under-sink sanitary tee & P-trap realignment',
      ],
    },
  ] as LandingService[],

  serviceAreas: [
    {
      name: 'Colonial Heights',
      state: 'VA',
      zipCode: '23834',
      tag: 'Primary Service Base',
      highlight:
        'Immediate dispatch hub for full residential repairs, water heater replacements, and emergency drain clearing.',
    },
    {
      name: 'Petersburg',
      state: 'VA',
      zipCode: '23803, 23805',
      tag: 'Tri-Cities Community',
      highlight:
        'Comprehensive plumbing services for historic and contemporary residential properties across Petersburg neighborhoods.',
    },
    {
      name: 'Richmond',
      state: 'VA',
      zipCode: '23219, 23220, 23225',
      tag: 'Greater Richmond',
      highlight:
        'Reliable sink plumbing, garbage disposal installations, and fixture repair calls throughout south and central Richmond.',
    },
    {
      name: 'Chesterfield',
      state: 'VA',
      zipCode: '23832, 23838',
      tag: 'Chesterfield County',
      highlight:
        'Complete kitchen, bath, and pipe leak diagnostics for homeowners throughout suburban Chesterfield communities.',
    },
    {
      name: 'Chester',
      state: 'VA',
      zipCode: '23831, 23836',
      tag: 'Central Virginia',
      highlight:
        'Drain snaking, washing machine line repairs, and fixture upgrades for Chester households.',
    },
  ] as LandingServiceArea[],

  faqs: [
    {
      question: 'How quickly can a plumber arrive at my Colonial Heights home?',
      answer:
        'We prioritize rapid scheduling for active water leaks and sudden hot water loss throughout Colonial Heights and surrounding Tri-Cities neighborhoods. Call (804) 896-3618 directly to confirm our earliest arrival window.',
    },
    {
      question: 'Do you repair and replace both tank and tankless water heaters?',
      answer:
        'Yes. We service conventional atmospheric and power-vented gas storage tanks, electric storage tanks, and on-demand tankless units, ensuring full adherence to manufacturer venting and pressure relief specifications.',
    },
    {
      question: 'Are plumbing permits required for water heater replacement in Virginia?',
      answer:
        'Yes, under the Virginia Uniform Statewide Building Code (USBC), water heater replacements and major water line installations require proper local permitting and inspection to ensure household safety and retain home insurance coverage.',
    },
    {
      question: 'What immediate steps should I take if I spot an active pipe leak?',
      answer:
        'Immediately shut off your home’s main water supply valve—typically located in the crawlspace, basement, or near the street water meter. Open a lower faucet to relieve remaining line pressure, then call (804) 896-3618 for prompt diagnostic dispatch.',
    },
    {
      question: 'How is pricing determined for plumbing repairs?',
      answer:
        'We do not engage in mystery pricing or arbitrary markups. We discuss your symptoms by phone, examine the affected plumbing on site, and present clear, honest pricing options before any repair work commences.',
    },
  ] as LandingFaq[],
} as const;
