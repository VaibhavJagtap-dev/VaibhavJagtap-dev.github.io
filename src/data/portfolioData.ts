import { ProjectCategory, ProjectData } from '../utils/filter.js';

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  badgeType: 'primary' | 'secondary' | 'tertiary';
  location: string;
  points: string[];
  tags: { name: string; color: string }[];
}

export interface EducationItem {
  badge: string;
  title: string;
  subtitle: string;
  meta: string;
  badgeColor: 'primary' | 'secondary';
  icon?: string;
}

export interface CompetencyRadarItem {
  category: string;
  percentage: number;
  colorClass: string;
  skills: string;
}

export interface PhilosophyTenet {
  tenetNumber: string;
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface FAQItem {
  number: string;
  question: string;
  answer: string;
  tags: string;
  color: 'primary' | 'secondary' | 'tertiary';
  icon: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'unlok',
    serviceUri: 'service://unlok.financial/symbol-quadrant',
    badge: 'FinTech & Market Intelligence',
    title: 'Unlok: Financial Symbol Search & Quadrant Intelligence',
    description:
      'Revamped legacy market search interface into responsive high-usability layout, boosting UX by 30%. Engineered interactive Quadrant UI using Recharts for data visualization, dynamic story slides for news content, and end-to-end Unlok Insight module with RESTful CRUD APIs.',
    categories: ['web', 'portals'],
    highlights: [
      { icon: 'monitoring', label: 'Recharts Interactive Quadrant UI' },
      { icon: 'search', label: 'Responsive Symbol Search Engine' },
      { icon: 'view_carousel', label: 'Dynamic Story Slides Carousel' },
      { icon: 'api', label: 'Unlok Insight REST CRUD Engine' },
    ],
    tags: [
      { name: 'React', color: 'primary' },
      { name: 'Tailwind CSS', color: 'secondary' },
      { name: 'Recharts', color: 'tertiary' },
      { name: 'RESTful APIs', color: 'primary' },
      { name: 'JavaScript', color: 'outline' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPOyaBAwpDtK_-UowO2L1AOH0f9oBbXd2Cyeowa1MnuTtyoBfao3e-cGYkcblKa4whOZU6aYyHhX2UIWhGPIEFZ9Ck-6vdUEiw5_09-bRTciB-9IOkzBnQrzhcs80FJp91bq0fnk7HYVaP5CiiwtiHCDpGwlQltaKbqTDoD7TVmaheIE4ITizvcE0HH3_Vd0Bi1fAWclIyzxq3mzqBd9fE6itTMX0K7kJY4sp2sLw',
    imageAlt: 'Financial symbol search interface with interactive quadrant charts and responsive stock market insights',
    imageBadge: 'QUADRANT_INSIGHT_LIVE',
    metrics: [
      { label: 'USABILITY', value: '+30%', sub: 'UX Enhanced' },
      { label: 'QUADRANT', value: 'Recharts', sub: 'Interactive Viz' },
      { label: 'CRUD API', value: 'RESTful', sub: 'Full Engine' },
    ],
    latencyInfo: {
      label: 'INSIGHT RETRIEVAL LATENCY',
      value: '32ms AVG',
      command: 'GET /api/v1/market/symbols/quadrant?metric=relative_momentum',
    },
    artifactTitle: 'Artifact // Recharts Quadrant Visualizer Component',
    artifactFile: 'src/components/Quadrant/QuadrantScatterChart.tsx',
    codeSnippet: `export const MarketQuadrantChart = ({ symbols, onSelectSymbol }: QuadrantProps) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis type="number" dataKey="volatility" name="Volatility" unit="%" />
        <YAxis type="number" dataKey="alpha" name="Alpha Score" />
        <ReferenceLine x={50} stroke="#3c4a42" strokeDasharray="3 3" />
        <ReferenceLine y={0} stroke="#3c4a42" strokeDasharray="3 3" />
        <Scatter name="Equities" data={symbols} fill="#4edea3" onClick={onSelectSymbol} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};`,
  },
  {
    id: 'systemstar',
    serviceUri: 'service://systemstar.instient/enterprise-billing',
    badge: 'Enterprise SaaS & FinTech',
    title: 'Systemstar & Instient: Vendor Enterprise Portal & Multi-Gateway Billing',
    description:
      'Engineered secure subdomain ordering portal, user account management, and multi-tier vendor pricing configuration. Integrated secure checkout with NMI, Authorize.net, and PayPal payment gateways. Led comprehensive UI/UX redesign ensuring brand consistency.',
    categories: ['web', 'portals'],
    highlights: [
      { icon: 'credit_card', label: 'Multi-Gateway: NMI, Authorize.net, PayPal' },
      { icon: 'domain', label: 'Secure Subdomain Ordering Portal' },
      { icon: 'tune', label: 'Dynamic Multi-Tier Pricing Matrix' },
      { icon: 'manage_accounts', label: 'Vendor Role & Account Management' },
    ],
    tags: [
      { name: 'Next.js', color: 'secondary' },
      { name: 'Node.js', color: 'tertiary' },
      { name: 'NMI', color: 'primary' },
      { name: 'Authorize.net', color: 'secondary' },
      { name: 'PayPal', color: 'primary' },
      { name: 'Tailwind CSS', color: 'outline' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNBETnlzFUO-x9RRM1p_BSW2VWxhE8BieAyLoT89z672ScasBvbV5YOGPnt7c6htFAKucmuu0V22CBEG7uj2U5rNUrqFM_0W7Qi6pIpHsLMlVx8TibJ0hk0PgqxhUWC64yJaFHh0KB-Jmt0V5jrrau56MwM9zoqaXNtBIADIWbGcM3fm7BLIeF0EKSINDTbYRNFcaCqYd3rPLQmyjAKoeeDrevNZeTTBqgqZ0yldY',
    imageAlt: 'Modern vendor ordering portal dashboard showing payment gateway router and pricing tier settings',
    imageBadge: 'MULTI_GATEWAY_REDUNDANCY',
    metrics: [
      { label: 'GATEWAYS', value: '3 Integrations', sub: 'NMI/Auth.net/PayPal' },
      { label: 'TIER PRICING', value: 'Dynamic', sub: 'Vendor Multi-Tier' },
      { label: 'SUBDOMAINS', value: 'Isolated', sub: 'Tenant Security' },
    ],
    latencyInfo: {
      label: 'CHECKOUT GATEWAY LOAD SPLIT',
      value: 'ACTIVE FAILOVER',
      command: 'NMI (55%) • AUTH.NET (30%) • PAYPAL (15%)',
    },
    artifactTitle: 'Artifact // Gateway Orchestrator & Fallback Handler',
    artifactFile: 'src/services/billing/gatewayRouter.ts',
    codeSnippet: `export async function processVendorCheckout(req: CheckoutRequest): Promise<PaymentResult> {
  const primary = selectGateway(req.vendorConfig);
  try {
    return await primary.charge(req.payload);
  } catch (err) {
    console.warn(\`Primary gateway \${primary.name} failover triggered:\`, err);
    const secondary = getFallbackGateway(primary.name);
    return await secondary.charge(req.payload);
  }
}`,
  },
  {
    id: 'heatfleet',
    serviceUri: 'service://flyku-heatfleet.app/v2.1',
    badge: 'Cross-Platform Mobile & Web',
    title: 'Heatfleet & Flyku: Cross-Platform Sports & Delivery Hybrid Ecosystem',
    description:
      'Built Flyku, a comprehensive sports club management platform across Web and Mobile with referral engines and live feeds. Packaged and published Heatfleet hybrid mobile app to both Google Play Store and Apple App Store using Capacitor.js and React Native.',
    categories: ['mobile', 'web'],
    highlights: [
      { icon: 'phone_iphone', label: 'Capacitor iOS & Android Deployments' },
      { icon: 'sports_soccer', label: 'Sports Club Roster & Feed Management' },
      { icon: 'share', label: 'User Referral & Reward System' },
      { icon: 'sync', label: 'Real-Time Cloud State Sync' },
    ],
    tags: [
      { name: 'React Native', color: 'tertiary' },
      { name: 'Capacitor.js', color: 'primary' },
      { name: 'Next.js', color: 'secondary' },
      { name: 'iOS & Android', color: 'outline' },
      { name: 'TypeScript', color: 'tertiary' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJk_x32l7b9qRxvqxuLtt0tDrxwDpm37s5zZpuoWjFBZBciSDuwPen3GiG4j7hROzQokI5ehyL2Avm2czVZcDJGt4YvBS6jZyjDKH25NbtEtNfhiPEwN2H0vq3qwCvWWzEW1U7GT1aCYg6jPxOz1Qg5tRw4j9KOaqQWps-CuYjPKCV1RdDljMa4DktK-hGawm9dn8bVQ666jow1po0Q7wbkYcd0BNm3WHgYZW4b8k',
    imageAlt: 'Mobile device sports club schedule feed and delivery tracking hybrid interface',
    imageBadge: 'CAPACITOR_BRIDGES_ACTIVE',
    metrics: [
      { label: 'STORES', value: '2 Platforms', sub: 'App Store & Play' },
      { label: 'SYNC SPEED', value: 'Real-Time', sub: 'Cross-Device' },
      { label: 'REFERRALS', value: 'Engine', sub: 'Active Growth' },
    ],
    latencyInfo: {
      label: 'APP STORE DISTRIBUTION TARGET',
      value: 'IOS & ANDROID VERIFIED',
      command: '@capacitor/core: 5.x • native push & biometric auth configured',
    },
    artifactTitle: 'Artifact // Capacitor Bridge Setup & Push Registration',
    artifactFile: 'capacitor.config.ts',
    codeSnippet: `import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.heatfleet.mobile',
  appName: 'Heatfleet',
  webDir: 'out',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;`,
  },
  {
    id: 'ssr-seo',
    serviceUri: 'service://seo-infra.ssr-migration/v17.0',
    badge: 'Performance & SEO Optimization',
    title: 'Next.js & Angular 17+ SSR Architecture & Technical SEO Re-engineering',
    description:
      'Architected Server-Side Rendering (SSR) for enterprise web properties, upgrading legacy Angular/Ionic to Angular 17+ with Capacitor. Conducted deep site audits using Screaming Frog and Google Search Console to resolve crawl bottlenecks.',
    categories: ['seo', 'web', 'portals'],
    highlights: [
      { icon: 'speed', label: 'Next.js SSR Hydration & Cache Strategy' },
      { icon: 'upgrade', label: 'Angular 17+ Hydration Migration' },
      { icon: 'bug_report', label: 'Screaming Frog In-Depth Crawl Audits' },
      { icon: 'query_stats', label: 'Google Search Console Indexing Fixes' },
    ],
    tags: [
      { name: 'Angular 17+', color: 'primary' },
      { name: 'Next.js SSR', color: 'secondary' },
      { name: 'Capacitor.js', color: 'tertiary' },
      { name: 'Screaming Frog', color: 'outline' },
      { name: 'Search Console', color: 'primary' },
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDuSfaLMDXkOlQJWi4sY0V_o3fe1LaNigCNNAopxEb0uPqFGr8rKyfnp-LeoylKB8zU0HTsVyWyHIpQqi81H6_LOkm17RisSU7SesxjvyiH_0fk4NxTaUnNx_GtqrYed50Y6oxx5bDyAb8WorYOglRDRNrUG4rLr9usiZWFen6YD5dFOCz-ZqaxMKTtNfVuCNROaiSG5HTWCdefICj_Mxq0JzunU49DIGpOj6vKCs',
    imageAlt: 'Google Search Console and Screaming Frog audit reports displaying 90+ Lighthouse performance and technical SEO indexing graph',
    imageBadge: 'LIGHTHOUSE_SCORE_98',
    metrics: [
      { label: 'AUDIT SCORE', value: '35 → 90+', sub: 'SEO Score' },
      { label: 'RENDER TTI', value: 'Instant', sub: 'SSR Hydrated' },
      { label: 'UPGRADE', value: 'Angular 17+', sub: 'Capacitor Modern' },
    ],
    latencyInfo: {
      label: 'TECHNICAL SEO CRAWL HEALTH',
      value: 'SCREAMING FROG 100% CLEAN',
      command: 'Zero canonical loops • 100% crawl budget utilization on Googlebot',
    },
    artifactTitle: 'Artifact // Angular 17 Application Config with ProvideClientHydration',
    artifactFile: 'src/app/app.config.server.ts',
    codeSnippet: `import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideClientHydration } from '@angular/platform-browser';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideClientHydration()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);`,
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'unlok-job',
    role: 'Software Engineer',
    company: 'Unlok',
    period: '02/2026 — 03/2026 • RECENT ROLE',
    badgeType: 'primary',
    location: 'New York City / Remote',
    points: [
      'Revised the Symbol Search user interface by converting legacy design into a responsive, user-friendly layout, enhancing usability by 30%.',
      'Engineered an interactive Quadrant UI utilizing Recharts for enhanced data visualization.',
      'Constructed the Unlok Insight feature from start to finish, incorporating RESTful CRUD APIs and a complete frontend implementation with React and Tailwind CSS.',
      'Introduced dynamic story slides for news content, designed to improve user engagement.',
    ],
    tags: [
      { name: 'React', color: 'primary' },
      { name: 'Tailwind CSS', color: 'secondary' },
      { name: 'Recharts', color: 'tertiary' },
      { name: 'REST APIs', color: 'secondary' },
      { name: 'JavaScript', color: 'outline' },
    ],
  },
  {
    id: 'systemstar-job',
    role: 'Full Stack Developer',
    company: 'Systemstar Infotech India Pvt. Ltd.',
    period: '03/2025 — 01/2026',
    badgeType: 'secondary',
    location: 'Mumbai, Maharashtra',
    points: [
      'Developed dedicated subdomain ordering sites, client price-tier config portals, and integrated NMI, Authorize.net & PayPal gateways.',
      'Led comprehensive UI/UX website redesign and published Heatfleet hybrid mobile app to Google Play Store & Apple App Store using Capacitor.js.',
      'Built Flyku sports club management platform using Next.js (web), React Native (iOS & Android), TypeScript, and Tailwind CSS.',
      'Introduced referral systems, live news feeds, and responsive multi-platform features with ongoing maintenance.',
    ],
    tags: [
      { name: 'Next.js', color: 'primary' },
      { name: 'React Native', color: 'secondary' },
      { name: 'Capacitor.js', color: 'tertiary' },
      { name: 'TypeScript', color: 'secondary' },
      { name: 'Payment Gateways', color: 'outline' },
    ],
  },
  {
    id: 'instient-job',
    role: 'Junior Software Engineer',
    company: 'Instient Pvt. Ltd.',
    period: '09/2023 — 02/2025',
    badgeType: 'tertiary',
    location: 'Hathras, Uttar Pradesh',
    points: [
      'Implemented Server-Side Rendering (SSR) to dramatically boost page load performance and Core Web Vitals.',
      'Increased site-wide SEO scores from 35 to over 90 via Google Search Console and Screaming Frog auditing.',
      'Upgraded legacy Angular + Ionic mobile app to Angular 17+ with Capacitor.js for improved maintainability.',
    ],
    tags: [
      { name: 'Angular 17+', color: 'primary' },
      { name: 'Ionic', color: 'secondary' },
      { name: 'Capacitor.js', color: 'tertiary' },
      { name: 'SSR', color: 'primary' },
      { name: 'SEO Auditing', color: 'outline' },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    badge: 'DEGREE',
    title: 'B.S. in Information Technology',
    subtitle: 'University of Mumbai (07/2018 — 05/2021 | Mumbai, MH)',
    meta: 'Graduated • First Class',
    badgeColor: 'secondary',
  },
  {
    badge: 'KEY COURSEWORK',
    title: 'Core Engineering Subjects',
    subtitle: 'Database Management Systems, Web Technologies, Software Engineering, Operating Systems, Computer Networks.',
    meta: 'Foundational CS / IT',
    badgeColor: 'primary',
    icon: 'verified',
  },
];

export const COMPETENCY_RADAR: CompetencyRadarItem[] = [
  {
    category: 'Languages',
    percentage: 95,
    colorClass: 'bg-primary',
    skills: 'JavaScript, TypeScript, Python, HTML5, CSS3',
  },
  {
    category: 'Frontend Engineering',
    percentage: 95,
    colorClass: 'bg-secondary',
    skills: 'React, Angular, Next.js, Tailwind CSS',
  },
  {
    category: 'Backend & APIs',
    percentage: 90,
    colorClass: 'bg-primary-fixed',
    skills: 'Node.js, Express.js, Django, RESTful CRUD APIs',
  },
  {
    category: 'Mobile Development',
    percentage: 92,
    colorClass: 'bg-tertiary',
    skills: 'React Native, Capacitor (iOS & Android App Stores)',
  },
  {
    category: 'Databases & Tooling',
    percentage: 90,
    colorClass: 'bg-secondary-fixed-dim',
    skills: 'MongoDB, PostgreSQL, Git, Screaming Frog, GSC, Agile',
  },
];

export const PHILOSOPHY_TENETS: PhilosophyTenet[] = [
  {
    tenetNumber: 'TENET 01',
    title: 'Pragmatic Architecture over Resume-Driven Development',
    description:
      'Choose the simplest primitive that satisfies latency, availability, and growth metrics. Avoid premature distributed orchestration when a monolithic module accomplishes the objective with 10x less operational overhead.',
    icon: 'account_tree',
    color: 'primary',
  },
  {
    tenetNumber: 'TENET 02',
    title: 'Type Safety across the Wire',
    description:
      'End-to-end contracts defined in code (tRPC, gRPC protobufs, Zod). Eliminate untyped payloads at the network boundary to guarantee compile-time verification across client and server.',
    icon: 'format_image_left',
    color: 'secondary',
  },
  {
    tenetNumber: 'TENET 03',
    title: 'Observability as a First-Class Citizen',
    description:
      'If it cannot be measured, it cannot be run in production. Distributed tracing via OpenTelemetry, structured JSON logging, and calibrated p99 alert budgets are non-negotiable pull request requirements.',
    icon: 'monitoring',
    color: 'tertiary',
  },
];

export const FAQS: FAQItem[] = [
  {
    number: 'Expertise 01',
    question: 'What are your core engineering specialties?',
    answer:
      'Full stack web and mobile development with 2 years, 7 months of experience across React, Next.js, Angular 17+, Node.js, Django, React Native, and Capacitor.',
    tags: 'React • Next.js • Angular • Django',
    color: 'primary',
    icon: 'code',
  },
  {
    number: 'Expertise 02',
    question: 'How do you approach performance and SEO?',
    answer:
      'Proven track record in scaling SEO from 35 to 90+ using Server-Side Rendering (SSR), Screaming Frog audits, Google Search Console optimization, and Core Web Vitals remediation.',
    tags: 'SSR • SEO Audit 35→90+ • Core Web Vitals',
    color: 'secondary',
    icon: 'speed',
  },
  {
    number: 'Expertise 03',
    question: 'Can you build and ship cross-platform mobile apps?',
    answer:
      'Yes, proven experience building and publishing hybrid apps to both Apple App Store and Google Play Store using Capacitor.js and React Native.',
    tags: 'App Store & Play Store Published',
    color: 'tertiary',
    icon: 'phone_iphone',
  },
];
