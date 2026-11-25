import React, { useState } from 'react';
import { NavScreen } from '../components/Header.js';

interface OverviewScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({
  onNavigate,
  onOpenResume,
  onOpenTerminal,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippet = `import { Result, Ok, Err } from '@shared/primitives';
import { TelemetryTracer } from '@telemetry/core';

export class DistributedEventBus<TContext = Record<string, unknown>> {
  constructor(
    private readonly pool: RedisConnectionPool,
    private readonly tracer: TelemetryTracer
  ) {}

  public async publish<TPayload>(
    topic: string,
    payload: TPayload
  ): Promise<Result<string, DispatchError>> {
    const traceId = this.tracer.getCurrentSpanId();
    const envelope = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      traceId,
      body: payload
    };

    try {
      await this.pool.xadd(topic, '*', 'data', JSON.stringify(envelope));
      return Ok(envelope.id);
    } catch (error) {
      return Err(new DispatchError('Broker connection drop', { cause: error }));
    }
  }
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Command Telemetry Stream */}
      <section className="w-full bg-surface-container-lowest border-b border-outline-variant/20 px-gutter py-space-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm font-label-mono text-label-mono">
          <div className="flex items-center gap-space-sm text-outline">
            <span className="inline-flex w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-on-surface">SYS_ENV: PROD-US-WEST-2</span>
            <span className="text-outline-variant">/</span>
            <span>CLUSTER: k8s-mesh-v1.30</span>
            <span className="text-outline-variant">/</span>
            <span className="text-secondary">HEALTHY: 48/48 PODS</span>
          </div>
          <div className="flex items-center gap-space-md text-on-surface-variant">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-primary">terminal</span>
              <span>TTY: pts/0</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-secondary">commit</span>
              <span>REV: 9f4e2b0</span>
            </span>
            <span className="bg-surface-container-high px-space-xs py-0.5 rounded text-primary">
              v2.8.4
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative w-full py-space-xl overflow-hidden bg-surface">
        {/* Ambient Glows */}
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-gutter relative z-10 flex flex-col gap-space-xl">
          {/* Eyebrow Meta */}
          <div className="flex flex-wrap items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container border border-primary/20 font-label-mono text-label-mono text-primary">
              <span className="material-symbols-outlined text-[14px]">format_image_left</span>
              <span>SYSTEM ARCHITECT • DISTRIBUTED RUNTIMES • CLOUD-NATIVE</span>
            </div>
            <div className="flex items-center gap-space-sm text-outline font-label-mono text-label-mono">
              <span>LATENCY: 12ms TO EDGE</span>
              <span className="text-outline-variant">•</span>
              <span className="text-on-surface">STATUS: 100% DISPATCH READY</span>
            </div>
          </div>

          {/* Main Headline + Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-display text-display text-on-surface tracking-tight leading-[1.08]">
                Building Scalable Web &amp; Cross-Platform Mobile Applications.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Full Stack Developer with 2 years, 7 months of experience building scalable web and mobile applications using React, Angular, Next.js, Node.js, and Django. Proven track record in improving SEO performance, implementing SSR, and delivering end-to-end features across frontend and backend. Experienced in cross-platform mobile development (React Native, Capacitor) and agile team environments.
              </p>
            </div>

            {/* System Status Mini Card */}
            <div className="lg:col-span-4 flex flex-col gap-space-sm p-space-md rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-md">
              <div className="flex items-center justify-between font-label-mono text-label-mono">
                <span className="text-outline">SYSTEM CONCURRENT LOAD</span>
                <span className="text-primary font-semibold">OPTIMAL</span>
              </div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-display text-headline-lg font-bold text-on-surface">
                  2 Yrs 7 Mo
                </span>
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  Full Stack Experience
                </span>
              </div>
              {/* Realtime Sparkline SVG */}
              <svg className="w-full h-12 text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 200 48">
                <path
                  d="M0,38 L25,32 L45,40 L70,22 L95,26 L120,14 L145,28 L170,8 L200,16 L200,48 L0,48 Z"
                  fill="currentColor"
                  fillOpacity="0.12"
                ></path>
                <path
                  d="M0,38 L25,32 L45,40 L70,22 L95,26 L120,14 L145,28 L170,8 L200,16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                ></path>
                <circle cx="170" cy="8" fill="currentColor" r="3"></circle>
              </svg>
              <div className="flex items-center justify-between text-outline text-label-mono font-label-mono pt-1">
                <span>p50: 24ms</span>
                <span>p95: 140ms</span>
                <span className="text-secondary">EVAL: OK</span>
              </div>
            </div>
          </div>

          {/* Action Button Group */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <button
              onClick={() => onNavigate('projects-and-systems')}
              className="group flex items-center gap-space-sm px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-ui text-label-ui font-semibold shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Selected Projects</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={onOpenResume}
              className="flex items-center gap-space-sm px-space-lg py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-mono text-label-mono transition-colors border border-outline-variant/30 hover:border-primary/50 shadow-sm cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">description</span>
              <span>View Resume PDF</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-primary/10 text-primary uppercase font-bold">
                PDF
              </span>
            </button>
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-space-sm px-space-md py-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-mono text-label-mono transition-colors border border-outline-variant/20 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">terminal</span>
              <span>CLI Shell</span>
            </button>
            <button
              onClick={() => onNavigate('contact-and-inquiries')}
              className="flex items-center gap-space-xs px-space-md py-3 rounded-lg text-on-surface-variant hover:text-on-surface font-label-ui text-label-ui transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-outline">calendar_month</span>
              <span>Book Technical Chat</span>
            </button>
          </div>
        </div>
      </section>

      {/* Live Telemetry & Metrics Counter Bar */}
      <section className="w-full bg-surface-container-low border-y border-outline-variant/20 py-space-lg">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
            {/* Metric 1 */}
            <div className="flex flex-col gap-1 p-space-md rounded-lg bg-surface-container border border-outline-variant/20 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-mono text-label-mono text-outline uppercase">Experience</span>
                <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
              </div>
              <span className="font-display text-headline-lg font-bold text-on-surface">2 Yrs 7 Mo</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Full Stack Web &amp; Mobile</span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col gap-1 p-space-md rounded-lg bg-surface-container border border-outline-variant/20 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-mono text-label-mono text-outline uppercase">SEO Score</span>
                <span className="material-symbols-outlined text-[18px] text-secondary">speed</span>
              </div>
              <span className="font-display text-headline-lg font-bold text-on-surface">90+</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                SSR &amp; Core Web Vitals (from 35)
              </span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col gap-1 p-space-md rounded-lg bg-surface-container border border-outline-variant/20 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-mono text-label-mono text-outline uppercase">Platforms</span>
                <span className="material-symbols-outlined text-[18px] text-tertiary">devices</span>
              </div>
              <span className="font-display text-headline-lg font-bold text-on-surface">Web &amp; App</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                React Native &amp; Capacitor (iOS/Android)
              </span>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col gap-1 p-space-md rounded-lg bg-surface-container border border-outline-variant/20 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-mono text-label-mono text-outline uppercase">Core Stack</span>
                <span className="material-symbols-outlined text-[18px] text-primary-fixed">code</span>
              </div>
              <span className="font-display text-headline-lg font-bold text-on-surface">5+ Core</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                React, Angular, Next, Node, Django
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Production Core Tech Stack Matrix */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-mono text-label-mono text-primary uppercase">
                CAPABILITY MATRIX // 01
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Production Core Tech Stack
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Battle-tested libraries, distributed runtimes, and persistence layers utilized in high-concurrency systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Frontend */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between pb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-tertiary">devices</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Frontend</h3>
                </div>
                <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-tertiary">
                  UI / UX
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Performant web interfaces, SSR optimization, responsive layouts, and interactive dashboards.
              </p>
              <div className="flex flex-wrap gap-space-xs mt-auto">
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-tertiary">
                  React
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-tertiary">
                  Angular
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-tertiary">
                  Next.js
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-on-surface-variant">
                  Tailwind CSS
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-tertiary">
                  TypeScript
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-on-surface-variant">
                  HTML5 &amp; CSS3
                </span>
              </div>
            </div>

            {/* Backend & Runtimes */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between pb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-primary">dns</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Backend &amp; Runtimes</h3>
                </div>
                <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary">
                  API &amp; LOGIC
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Robust RESTful CRUD APIs, business workflows, authentication, and secure third-party integrations.
              </p>
              <div className="flex flex-wrap gap-space-xs mt-auto">
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-primary">
                  Node.js
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-primary">
                  Express.js
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-primary">
                  Django
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-on-surface-variant">
                  RESTful APIs
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-primary">
                  Payment Gateways
                </span>
              </div>
            </div>

            {/* Databases & Storage */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between pb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-secondary">database</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Databases &amp; Storage</h3>
                </div>
                <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-secondary">
                  DATA
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Relational and document storage, schema design, transactional integrity, and optimized indexing.
              </p>
              <div className="flex flex-wrap gap-space-xs mt-auto">
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-secondary">
                  MongoDB
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-secondary">
                  PostgreSQL
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-on-surface-variant">
                  JSON Storage
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-secondary">
                  Redis
                </span>
              </div>
            </div>

            {/* Mobile & Apps */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between pb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-primary-fixed">smartphone</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Mobile &amp; Apps</h3>
                </div>
                <span className="font-label-mono text-label-mono px-2 py-0.5 rounded bg-surface-container-high text-primary-fixed">
                  CROSS-PLATFORM
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Native and hybrid iOS/Android apps published across Apple App Store and Google Play Store.
              </p>
              <div className="flex flex-wrap gap-space-xs mt-auto">
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-primary-fixed">
                  React Native
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-primary-fixed">
                  Capacitor
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-primary-fixed">
                  iOS App Store
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-on-surface-variant">
                  Google Play
                </span>
                <span className="px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono text-on-surface-variant">
                  Hybrid Wrappers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured System Architecture Highlights */}
      <section className="w-full py-space-xl bg-surface-container-lowest border-t border-outline-variant/20" id="featured-projects">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-mono text-label-mono text-secondary uppercase">
                FEATURED CASE STUDIES // 02
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Architectural Blueprint Breakdowns
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects-and-systems')}
              className="flex items-center gap-space-xs font-label-mono text-label-mono text-primary hover:underline cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-primary">hub</span>
              <span>VIEW ALL 4 ARCHITECTURAL SYSTEMS</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {/* Card 1: Unlok */}
            <div className="flex flex-col rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-space-md py-space-sm bg-surface-container border-b border-outline-variant/20">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant ml-space-sm">
                    sys://unlok-symbol-search/v2
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded font-label-mono text-label-mono bg-primary/10 text-primary uppercase">
                  Production Active
                </span>
              </div>
              <div className="p-space-lg flex flex-col gap-space-md">
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    Unlok: Symbol Search &amp; Unlok Insight Quadrant UI
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Redesigned Symbol Search UI improving usability by 30%, implemented interactive Quadrant UI using Recharts, and engineered RESTful CRUD APIs using React, Tailwind CSS, and Node.js.
                  </p>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col gap-space-sm border border-outline-variant/20">
                  <span className="font-label-mono text-label-mono text-outline">
                    FEATURE WORKFLOW &amp; DATA PIPELINE
                  </span>
                  <div className="grid grid-cols-4 gap-2 items-center text-center font-label-mono text-label-mono">
                    <div className="p-2 rounded bg-surface-container flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">search</span>
                      <span className="text-on-surface">Search UI</span>
                      <span className="text-[10px] text-outline">+30% Usability</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">scatter_plot</span>
                      <span className="text-on-surface">Recharts</span>
                      <span className="text-[10px] text-outline">Quadrant Matrix</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">api</span>
                      <span className="text-on-surface">REST API</span>
                      <span className="text-[10px] text-outline">CRUD Ops</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary-fixed">database</span>
                      <span className="text-on-surface">Postgres</span>
                      <span className="text-[10px] text-outline">Financial DB</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-space-sm pt-space-xs font-label-mono text-label-mono">
                  <div className="p-space-sm rounded bg-surface-container flex flex-col">
                    <span className="text-outline">USABILITY BOOST</span>
                    <span className="text-primary font-bold text-[14px]">+30%</span>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container flex flex-col">
                    <span className="text-outline">INTERACTIONS</span>
                    <span className="text-on-surface font-bold text-[14px]">Quadrant UI</span>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container flex flex-col">
                    <span className="text-outline">STACK</span>
                    <span className="text-secondary font-bold text-[14px]">React / Node</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-primary">
                    React
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-secondary">
                    Tailwind CSS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-tertiary">
                    Recharts
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-on-surface-variant">
                    Node.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-on-surface-variant">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Systemstar */}
            <div className="flex flex-col rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-space-md py-space-sm bg-surface-container border-b border-outline-variant/20">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant ml-space-sm">
                    sys://systemstar-vendor-portal/v1
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded font-label-mono text-label-mono bg-secondary/10 text-secondary uppercase">
                  Production Deployed
                </span>
              </div>
              <div className="p-space-lg flex flex-col gap-space-md">
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    Systemstar: Vendor Portal &amp; Gateway Integrations
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Built a comprehensive vendor-facing portal for customizable price tiers, product configurations, subdomain secure ordering, and integrated payment gateways (NMI, Authorize.net, PayPal).
                  </p>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col gap-space-sm border border-outline-variant/20">
                  <span className="font-label-mono text-label-mono text-outline">
                    CHECKOUT &amp; PAYMENT TOPOLOGY
                  </span>
                  <div className="grid grid-cols-4 gap-2 items-center text-center font-label-mono text-label-mono">
                    <div className="p-2 rounded bg-surface-container flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">storefront</span>
                      <span className="text-on-surface">Portal UI</span>
                      <span className="text-[10px] text-outline">Vendor Tiering</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">domain</span>
                      <span className="text-on-surface">Subdomain</span>
                      <span className="text-[10px] text-outline">Multi-tenant</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">payments</span>
                      <span className="text-on-surface">NMI / Auth</span>
                      <span className="text-[10px] text-outline">PCI Compliant</span>
                    </div>
                    <div className="p-2 rounded bg-surface-container flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary-fixed">mobile_friendly</span>
                      <span className="text-on-surface">Heatfleet</span>
                      <span className="text-[10px] text-outline">App &amp; Play Store</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-space-sm pt-space-xs font-label-mono text-label-mono">
                  <div className="p-space-sm rounded bg-surface-container flex flex-col">
                    <span className="text-outline">PAYMENTS</span>
                    <span className="text-primary font-bold text-[14px]">NMI / PayPal</span>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container flex flex-col">
                    <span className="text-outline">MOBILE HYBRID</span>
                    <span className="text-secondary font-bold text-[14px]">Capacitor</span>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container flex flex-col">
                    <span className="text-outline">STORES</span>
                    <span className="text-tertiary font-bold text-[14px]">iOS &amp; Android</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-tertiary">
                    React
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-secondary">
                    Node.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-primary">
                    Next.js
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-primary-fixed">
                    React Native
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-label-mono text-on-surface-variant">
                    Capacitor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Code Engine & Event Bus Snippet */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Explanatory Column */}
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-primary">
                <span className="material-symbols-outlined text-[16px]">code_blocks</span>
                <span>CLEAN CODE ARCHITECTURE</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                Strong Types. Resilient Dispatches. Zero Magic.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                I craft backends that treat failure modes as first-class citizens. Here is a production slice of a generic Distributed Event Dispatcher featuring typed envelope guarantees, backoff retry policies, and zero memory leaks.
              </p>
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <div className="flex items-center gap-space-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                  <span>Strict algebraic data types &amp; envelope validation via Zod</span>
                </div>
                <div className="flex items-center gap-space-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                  <span>Circuit breakers preventing cascading service collapse</span>
                </div>
                <div className="flex items-center gap-space-sm text-body-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-primary">check_circle</span>
                  <span>Sub-millisecond correlation ID propagation via AsyncLocalStorage</span>
                </div>
              </div>
            </div>

            {/* Code Window Card */}
            <div className="lg:col-span-7 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-space-md py-space-sm bg-surface-container-low border-b border-outline-variant/20">
                <div className="flex items-center gap-space-xs">
                  <span className="w-3 h-3 rounded-full bg-error/70"></span>
                  <span className="w-3 h-3 rounded-full bg-secondary-container/70"></span>
                  <span className="w-3 h-3 rounded-full bg-primary/70"></span>
                  <span className="font-label-mono text-label-mono text-on-surface ml-space-sm">
                    src/core/event-bus/dispatcher.ts
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 font-label-mono text-label-mono text-outline hover:text-primary transition-colors cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedCode ? 'check' : 'content_copy'}
                  </span>
                  <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-space-md font-code-block text-code-block text-on-surface overflow-x-auto leading-relaxed select-all">
                <code>{codeSnippet}</code>
              </pre>
              <div className="px-space-md py-space-xs bg-surface-container-low border-t border-outline-variant/20 flex items-center justify-between font-label-mono text-label-mono text-outline">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>TypeScript strict: true</span>
                </span>
                <span>Target: ES2023 • UTF-8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Architecture Notes */}
      <section className="w-full py-space-xl bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-mono text-label-mono text-tertiary uppercase">
                PUBLIC WRITING // 03
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Systems Architecture Notes
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects-and-systems')}
              className="flex items-center gap-space-xs font-label-mono text-label-mono text-primary hover:underline cursor-pointer"
            >
              <span>EXPLORE CASE STUDIES</span>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {/* Note 1 */}
            <article
              className="flex flex-col p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/20 hover:border-primary/40 hover:bg-surface-container transition-all shadow-sm gap-space-md cursor-pointer"
              onClick={() => onNavigate('projects-and-systems')}
            >
              <div className="flex items-center justify-between font-label-mono text-label-mono">
                <span className="text-primary">SPORTS CLUB PLATFORM</span>
                <span className="text-outline">WEB &amp; APP</span>
              </div>
              <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                Flyku: Sports Club Booking &amp; Member Management
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                Architected full-stack sports platform using Next.js and React Native, delivering synchronized court scheduling and real-time member subscriptions.
              </p>
              <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-outline">
                <span>NEXT.JS • REACT NATIVE</span>
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">north_east</span>
              </div>
            </article>

            {/* Note 2 */}
            <article
              className="flex flex-col p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/20 hover:border-secondary/40 hover:bg-surface-container transition-all shadow-sm gap-space-md cursor-pointer"
              onClick={() => onNavigate('projects-and-systems')}
            >
              <div className="flex items-center justify-between font-label-mono text-label-mono">
                <span className="text-secondary">HYBRID APP DEPLOYMENT</span>
                <span className="text-outline">CROSS-PLATFORM</span>
              </div>
              <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                Heatfleet: Oil Delivery Hybrid App via Capacitor
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                Wrapped responsive web architecture into production-ready iOS and Android builds, deployed across Apple App Store and Google Play Store.
              </p>
              <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-outline">
                <span>CAPACITOR • STORES</span>
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">north_east</span>
              </div>
            </article>

            {/* Note 3 */}
            <article
              className="flex flex-col p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/20 hover:border-tertiary/40 hover:bg-surface-container transition-all shadow-sm gap-space-md cursor-pointer"
              onClick={() => onNavigate('projects-and-systems')}
            >
              <div className="flex items-center justify-between font-label-mono text-label-mono">
                <span className="text-tertiary">PERFORMANCE AUDIT</span>
                <span className="text-outline">SEO 35 → 90+</span>
              </div>
              <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                Scaling SEO Scores: From 35 to 90+ with SSR &amp; Next.js
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-1">
                Implemented server-side rendering, dynamic metadata generation, schema tags, and optimized asset delivery to drastically boost search indexing.
              </p>
              <div className="flex items-center justify-between pt-space-xs font-label-mono text-label-mono text-outline">
                <span>SEO • CORE WEB VITALS</span>
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">north_east</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};
