import React, { useState, useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [zoomScale, setZoomScale] = useState(1.0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        setZoomScale((prev) => Math.min(1.6, prev + 0.15));
      } else if (e.key === '-') {
        setZoomScale((prev) => Math.max(0.6, prev - 0.15));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vaibhav.jagtap.dev@outlook.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const resumeContent = `VAIBHAV JAGTAP - Full Stack Developer / Software Engineer
Email: vaibhav.jagtap.dev@outlook.com | Phone: +91 9699666915 | Location: Mumbai, Maharashtra, India
GitHub: https://github.com/VaibhavJagtap-dev | LinkedIn: https://linkedin.com/in/vaibhav-jagtap-648a02244/

EXECUTIVE SUMMARY:
Full Stack Developer with 2 years, 7 months of experience architecting scalable web and mobile applications using React, Angular, Next.js, Node.js, and Django. Proven track record boosting organic SEO scores from 35 to 90+, architecting SSR engines, and publishing production hybrid mobile apps across Apple App Store and Google Play Store.

EXPERIENCE:
1. Software Engineer / Full Stack Developer — Unlok (02/2026 - Present / 04/2024 - Present)
   - Revised the Symbol Search user interface by converting legacy design into a responsive, user-friendly layout, enhancing usability by 30%.
   - Engineered an interactive Quadrant UI utilizing Recharts for enhanced data visualization.
   - Constructed the Unlok Insight feature from start to finish, incorporating RESTful CRUD APIs and a complete frontend implementation with React and Tailwind CSS.
   - Introduced dynamic story slides for news content, designed to improve user engagement.

2. Full Stack Developer — Systemstar Infotech India Pvt. Ltd. (03/2025 - 01/2026)
   - Developed dedicated subdomain ordering sites, client price-tier config portals, and integrated NMI, Authorize.net & PayPal gateways.
   - Led comprehensive UI/UX website redesign and published Heatfleet hybrid mobile app to Google Play Store & Apple App Store using Capacitor.js.
   - Built Flyku sports club management platform using Next.js (web), React Native (iOS & Android), TypeScript, and Tailwind CSS.
   - Introduced referral systems, live news feeds, and responsive multi-platform features with ongoing maintenance.

3. Junior Software Engineer — Instient Pvt. Ltd. (09/2023 - 02/2025)
   - Implemented Server-Side Rendering (SSR) to dramatically boost page load performance and Core Web Vitals.
   - Increased site-wide SEO scores from 35 to over 90 via Google Search Console and Screaming Frog auditing.
   - Upgraded legacy Angular + Ionic mobile app to Angular 17+ with Capacitor.js for improved maintainability.

EDUCATION:
B.S. in Information Technology — University of Mumbai (2018 - 2021)
Graduated with First Class Honors. Core coursework: DBMS, Operating Systems, Web Technologies, Software Engineering, Computer Networks.

TECHNICAL SKILLS:
- Languages: JavaScript (ES6+), TypeScript, Python, HTML5, CSS3
- Frontend: React, Angular 17+, Next.js, Redux, Tailwind CSS, Recharts
- Backend: Node.js, Express.js, Django, RESTful CRUD APIs, JWT Authentication
- Databases: MongoDB, PostgreSQL, MySQL, Redis Caching
- Mobile: React Native, Capacitor.js, iOS & Android Store Deployment
- Tools: Git, GitHub, Docker, Postman, Screaming Frog, Google Search Console, Nx Monorepo
`;
      const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Vaibhav_Jagtap_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setIsDownloading(false);
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-surface-container-lowest/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl h-[92vh] max-h-[960px] rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top PDF Chrome Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm px-space-md py-space-sm bg-surface-container border-b border-outline-variant/30 flex-shrink-0">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-label-mono text-label-mono text-on-surface font-semibold truncate">
                  Vaibhav_Jagtap_Resume.pdf
                </span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-outline text-[10px] font-label-mono">
                  142 KB
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-label-mono text-outline-variant">
                <span className="text-primary font-medium">● Verified Candidate</span>
                <span>•</span>
                <span>2 Yrs 7 Mo Exp</span>
                <span>•</span>
                <span>Production Ready</span>
              </div>
            </div>
          </div>

          {/* Center Toolset: Zoom & Page Controls */}
          <div className="flex items-center gap-1 sm:gap-2 bg-surface-container-low px-2 py-1 rounded-lg border border-outline-variant/20 font-label-mono text-label-mono">
            <button
              className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
              onClick={() => setZoomScale((z) => Math.max(0.6, z - 0.15))}
              title="Zoom Out (-)"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">remove</span>
            </button>
            <span className="px-1.5 text-on-surface text-[11px] min-w-[42px] text-center font-semibold">
              {Math.round(zoomScale * 100)}%
            </span>
            <button
              className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
              onClick={() => setZoomScale((z) => Math.min(1.6, z + 0.15))}
              title="Zoom In (+)"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
            <button
              className="px-2 py-0.5 rounded text-[10px] text-outline hover:text-primary transition-colors hidden sm:inline-block"
              onClick={() => setZoomScale(1.0)}
              type="button"
            >
              Reset
            </button>
            <div className="h-3 w-px bg-outline-variant/40 mx-0.5"></div>
            <span className="text-on-surface-variant text-[11px] px-1">Page 1 of 1</span>
          </div>

          {/* Right Action Set */}
          <div className="flex items-center gap-space-xs flex-shrink-0">
            <button
              className="flex items-center gap-1.5 px-space-md py-1.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container font-label-ui text-label-ui font-semibold shadow hover:shadow-primary/20 transition-all cursor-pointer"
              onClick={handleDownload}
              type="button"
              disabled={isDownloading}
            >
              <span className={`material-symbols-outlined text-[16px] ${isDownloading ? 'animate-spin' : ''}`}>
                {isDownloading ? 'sync' : 'download'}
              </span>
              <span className="hidden sm:inline">
                {isDownloading ? 'Preparing...' : 'Download PDF'}
              </span>
            </button>

            <button
              className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors hidden md:flex items-center"
              onClick={() => window.print()}
              title="Print Resume"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
            </button>

            <button
              className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors"
              onClick={onClose}
              title="Close (Esc)"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* PDF Document Viewer Canvas */}
        <div className="flex-1 overflow-y-auto overflow-x-auto bg-[#18181b] p-3 sm:p-6 md:p-8 flex justify-center items-start">
          <div
            className="w-full max-w-[820px] bg-[#ffffff] text-[#0f172a] shadow-2xl rounded-sm p-6 sm:p-9 md:p-10 font-body-sm transition-transform origin-top select-text duration-150"
            style={{ transform: `scale(${zoomScale})` }}
          >
            {/* Header Section */}
            <header className="border-b border-slate-200 pb-5 mb-5">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    Vaibhav Jagtap
                  </h1>
                  <div className="text-sm sm:text-base font-semibold text-emerald-700 mt-0.5 font-label-mono">
                    Full Stack Developer / Software Engineer
                  </div>
                </div>
                <div className="flex flex-wrap md:flex-col md:items-end gap-x-3 gap-y-1 text-xs text-slate-600">
                  <span className="flex items-center gap-1 font-mono text-[12px]">
                    <span className="material-symbols-outlined text-[13px] text-emerald-600">mail</span>
                    vaibhav.jagtap.dev@outlook.com
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-sky-600">call</span>
                    +91 9699666915
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-slate-500">location_on</span>
                    Mumbai, Maharashtra, India
                  </span>
                  <div className="flex items-center gap-2 pt-1 font-mono text-[11px]">
                    <a
                      className="text-emerald-700 font-medium hover:underline"
                      href="https://linkedin.com/in/vaibhav-jagtap-648a02244/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/in/vaibhav-jagtap
                    </a>
                    <span>•</span>
                    <a
                      className="text-emerald-700 font-medium hover:underline"
                      href="https://github.com/VaibhavJagtap-dev"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/VaibhavJagtap-dev
                    </a>
                  </div>
                </div>
              </div>
            </header>

            {/* Summary Section */}
            <section className="mb-5">
              <h2 className="text-xs uppercase font-bold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2 flex items-center gap-1.5 font-label-mono">
                <span className="material-symbols-outlined text-[14px] text-emerald-700">person</span>
                Executive Summary
              </h2>
              <p className="text-[12.5px] leading-relaxed text-slate-700">
                Full Stack Developer with 2 years, 7 months of experience building scalable web and mobile applications using React, Angular, Next.js, Node.js, and Django. Proven track record in improving SEO performance (35 to 90+), implementing SSR, and delivering end-to-end features across frontend and backend. Experienced in cross-platform mobile development (React Native, Capacitor) and collaborating effectively in agile environments.
              </p>
            </section>

            {/* 2-Column Body Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column (7 cols): Work Experience */}
              <div className="md:col-span-7 flex flex-col gap-4">
                <section>
                  <h2 className="text-xs uppercase font-bold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3 flex items-center gap-1.5 font-label-mono">
                    <span className="material-symbols-outlined text-[14px] text-emerald-700">work</span>
                    Work Experience
                  </h2>
                  <div className="space-y-4">
                    {/* Job 1 */}
                    <div className="border-l-2 border-emerald-600 pl-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h3 className="text-[13px] font-bold text-slate-900">Software Engineer</h3>
                        <span className="text-[11px] font-mono text-slate-500">02/2026 — 03/2026</span>
                      </div>
                      <div className="text-[12px] font-medium text-emerald-800">Unlok • New York / Remote</div>
                      <ul className="mt-1.5 space-y-1 text-[12px] text-slate-700 list-disc list-inside leading-snug">
                        <li>Revised Symbol Search user interface, boosting usability by 30%.</li>
                        <li>Engineered interactive Quadrant UI using Recharts for enhanced data visualization.</li>
                        <li>Built Unlok Insight module from scratch with RESTful CRUD APIs using React & Tailwind.</li>
                        <li>Introduced dynamic story slides for news content improving engagement.</li>
                      </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="border-l-2 border-slate-300 pl-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h3 className="text-[13px] font-bold text-slate-900">Full Stack Developer</h3>
                        <span className="text-[11px] font-mono text-slate-500">03/2025 — 01/2026</span>
                      </div>
                      <div className="text-[12px] font-medium text-slate-800">Systemstar Infotech • Mumbai, India</div>
                      <ul className="mt-1.5 space-y-1 text-[12px] text-slate-700 list-disc list-inside leading-snug">
                        <li>Engineered vendor subdomain ordering portals and price-tier configuration systems.</li>
                        <li>Integrated payment gateways including NMI, Authorize.net, and PayPal.</li>
                        <li>Packaged & published Heatfleet hybrid mobile app to Apple App Store & Google Play.</li>
                        <li>Built Flyku sports club management platform using Next.js & React Native.</li>
                      </ul>
                    </div>

                    {/* Job 3 */}
                    <div className="border-l-2 border-slate-300 pl-3">
                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h3 className="text-[13px] font-bold text-slate-900">Junior Software Engineer</h3>
                        <span className="text-[11px] font-mono text-slate-500">09/2023 — 02/2025</span>
                      </div>
                      <div className="text-[12px] font-medium text-slate-800">Instient Pvt. Ltd. • India</div>
                      <ul className="mt-1.5 space-y-1 text-[12px] text-slate-700 list-disc list-inside leading-snug">
                        <li>Implemented Server-Side Rendering (SSR) to lift SEO scores from 35 to 90+.</li>
                        <li>Conducted crawl audits with Screaming Frog and Google Search Console.</li>
                        <li>Upgraded legacy Angular + Ionic app to Angular 17+ with Capacitor.js.</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column (5 cols): Education & Skills Matrix */}
              <div className="md:col-span-5 flex flex-col gap-4">
                {/* Education */}
                <section>
                  <h2 className="text-xs uppercase font-bold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5 flex items-center gap-1.5 font-label-mono">
                    <span className="material-symbols-outlined text-[14px] text-emerald-700">school</span>
                    Education
                  </h2>
                  <div>
                    <h3 className="text-[13px] font-bold text-slate-900">B.Sc. in Information Technology</h3>
                    <div className="text-[12px] text-slate-700">University of Mumbai</div>
                    <div className="text-[11px] font-mono text-slate-500">2018 – 2021 • Mumbai, India</div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-0.5">First Class Honors</div>
                  </div>
                </section>

                {/* Technical Skills Categorized */}
                <section>
                  <h2 className="text-xs uppercase font-bold tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5 flex items-center gap-1.5 font-label-mono">
                    <span className="material-symbols-outlined text-[14px] text-emerald-700">code</span>
                    Technical Proficiencies
                  </h2>
                  <div className="space-y-2.5 text-[11.5px]">
                    <div>
                      <div className="font-bold text-slate-800 uppercase text-[10px] font-mono text-emerald-800">
                        Languages
                      </div>
                      <div className="text-slate-700">JavaScript (ES6+), TypeScript, Python, HTML5, CSS3</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 uppercase text-[10px] font-mono text-emerald-800">
                        Frontend
                      </div>
                      <div className="text-slate-700">React.js, Angular 17+, Next.js (SSR), Tailwind CSS, Recharts</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 uppercase text-[10px] font-mono text-emerald-800">
                        Backend & APIs
                      </div>
                      <div className="text-slate-700">Node.js, Express.js, Django, RESTful CRUD APIs, JWT Auth</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 uppercase text-[10px] font-mono text-emerald-800">
                        Databases & Caching
                      </div>
                      <div className="text-slate-700">MongoDB, PostgreSQL, MySQL, Redis</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 uppercase text-[10px] font-mono text-emerald-800">
                        Mobile Development
                      </div>
                      <div className="text-slate-700">React Native, Capacitor.js, iOS & Android Store Deployment</div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 uppercase text-[10px] font-mono text-emerald-800">
                        Optimization & Tooling
                      </div>
                      <div className="text-slate-700">SSR, SEO (35→90+), Screaming Frog, GSC, Docker, Git</div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Resume Document Footer */}
            <div className="mt-6 pt-3 border-t border-slate-200 flex justify-between items-center text-[10px] font-mono text-slate-400">
              <span>Vaibhav Jagtap — Software Engineer Portfolio</span>
              <span>Page 1 of 1 • Verified Candidate</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar inside Modal */}
        <div className="px-space-md py-space-sm bg-surface-container border-t border-outline-variant/30 flex items-center justify-between flex-wrap gap-2 text-outline font-label-mono text-label-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-on-surface-variant">SHA-256 VERIFIED ATTESTATION</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-ui text-label-ui transition-colors flex items-center gap-1.5 cursor-pointer"
              onClick={handleCopyEmail}
            >
              <span className="material-symbols-outlined text-[16px] text-primary">
                {copiedEmail ? 'check' : 'content_copy'}
              </span>
              <span>{copiedEmail ? 'Copied Email' : 'Copy Email'}</span>
            </button>
            <button
              type="button"
              className="px-space-md py-1.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container font-label-ui text-label-ui font-semibold transition-all flex items-center gap-1.5 shadow cursor-pointer"
              onClick={handleDownload}
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
