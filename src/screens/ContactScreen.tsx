import React, { useState } from 'react';

interface ContactScreenProps {
  onOpenResume: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopy = (type: 'email' | 'phone') => {
    if (type === 'email') {
      navigator.clipboard.writeText('vaibhav.jagtap.dev@outlook.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      navigator.clipboard.writeText('+91 9699666915');
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
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
1. Software Engineer / Full Stack Developer — Unlok (02/2026 - 03/2026)
   - Revised Symbol Search UI, boosting usability by 30%.
   - Built interactive Quadrant UI using Recharts.
   - Built Unlok Insight module with RESTful CRUD APIs using React & Tailwind.

2. Full Stack Developer — Systemstar Infotech India Pvt. Ltd. (03/2025 - 01/2026)
   - Built vendor portal with price tiers and subdomain ordering.
   - Integrated NMI, Authorize.net, and PayPal payment gateways.
   - Packaged Heatfleet mobile apps for App Store & Google Play via Capacitor.

3. Junior Software Engineer — Instient Pvt. Ltd. (09/2023 - 02/2025)
   - Migrated apps to Next.js SSR, lifting SEO from 35 to 90+.
   - Upgraded legacy Angular + Ionic to Angular 17+ with Capacitor.

EDUCATION:
B.S. in Information Technology — University of Mumbai (2018 - 2021)
Graduated with First Class Honors.

SKILLS:
React, Angular 17+, Next.js, Node.js, Express, Django, TypeScript, JavaScript, Python, MongoDB, PostgreSQL, Redis, React Native, Capacitor, Docker, Git.
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
    <div className="flex flex-col w-full flex-1">
      <section className="relative w-full max-w-7xl mx-auto px-gutter pt-space-lg pb-space-xl overflow-hidden flex-1 flex flex-col justify-center">
        {/* Background Ambient Glow */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Block */}
        <div className="relative flex flex-col gap-space-xs mb-space-xl items-center text-center">
          <div className="flex items-center gap-space-sm font-label-mono text-label-mono text-primary">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>GET_IN_TOUCH</span>
          </div>
          <h1 className="font-display text-display text-on-surface tracking-tight">
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-center">
            Feel free to reach out for opportunities, collaborations, or just a technical chat.
          </p>
        </div>

        {/* Clean Centered Content Grid */}
        <div className="max-w-2xl mx-auto flex flex-col gap-space-md w-full">
          {/* Card 1: Contact Information */}
          <div className="bg-surface-container-low p-space-lg sm:p-space-xl rounded-xl shadow-xl flex flex-col gap-space-md border border-outline-variant/20">
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-space-sm">
              <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                Contact Information
              </span>
              <span className="font-label-mono text-label-mono text-primary flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>OPEN TO WORK</span>
              </span>
            </div>

            <div className="flex flex-col gap-space-sm">
              {/* Email row */}
              <div className="flex items-center justify-between p-space-sm bg-surface-container rounded-lg border border-outline-variant/20">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="p-2 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">
                      Email
                    </span>
                    <span className="font-code-inline text-code-inline text-on-surface truncate">
                      vaibhav.jagtap.dev@outlook.com
                    </span>
                  </div>
                </div>
                <button
                  className="px-space-xs py-1 rounded bg-surface-container-high hover:bg-surface-bright text-primary font-label-mono text-label-mono transition-colors flex-shrink-0 cursor-pointer min-w-[54px] text-center"
                  onClick={() => handleCopy('email')}
                  type="button"
                >
                  {copiedEmail ? 'COPIED' : 'COPY'}
                </button>
              </div>

              {/* Phone row */}
              <div className="flex items-center justify-between p-space-sm bg-surface-container rounded-lg border border-outline-variant/20">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="p-2 rounded-lg bg-surface-container-high text-primary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">call</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">
                      Phone
                    </span>
                    <span className="font-code-inline text-code-inline text-on-surface truncate">
                      +91 9699666915
                    </span>
                  </div>
                </div>
                <button
                  className="px-space-xs py-1 rounded bg-surface-container-high hover:bg-surface-bright text-primary font-label-mono text-label-mono transition-colors flex-shrink-0 cursor-pointer min-w-[54px] text-center"
                  onClick={() => handleCopy('phone')}
                  type="button"
                >
                  {copiedPhone ? 'COPIED' : 'COPY'}
                </button>
              </div>

              {/* Location row */}
              <div className="flex items-center justify-between p-space-sm bg-surface-container rounded-lg border border-outline-variant/20">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="p-2 rounded-lg bg-surface-container-high text-tertiary flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-mono text-[10px] text-on-surface-variant uppercase">
                      Location
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface truncate">
                      Mumbai, Maharashtra, India
                    </span>
                  </div>
                </div>
                <span className="font-label-mono text-label-mono text-outline flex-shrink-0">
                  IST (UTC+5:30)
                </span>
              </div>
            </div>

            {/* Developer Profiles */}
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider">
                Developer Profiles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                <a
                  className="flex items-center gap-space-xs p-space-sm bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors group border border-outline-variant/20"
                  href="https://github.com/VaibhavJagtap-dev"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary flex-shrink-0">
                    terminal
                  </span>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-on-surface truncate">
                    GitHub Profile
                  </span>
                  <span className="material-symbols-outlined text-[14px] text-outline ml-auto group-hover:text-secondary transition-colors">
                    open_in_new
                  </span>
                </a>
                <a
                  className="flex items-center gap-space-xs p-space-sm bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors group border border-outline-variant/20"
                  href="https://linkedin.com/in/vaibhav-jagtap-648a02244/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px] text-tertiary flex-shrink-0">
                    hub
                  </span>
                  <span className="font-label-ui text-label-ui text-on-surface-variant group-hover:text-on-surface truncate">
                    LinkedIn Network
                  </span>
                  <span className="material-symbols-outlined text-[14px] text-outline ml-auto group-hover:text-tertiary transition-colors">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Resume Card */}
          <div className="bg-surface-container-low p-space-md rounded-xl shadow-xl flex items-center justify-between gap-space-sm border border-outline-variant/20">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="p-2.5 rounded-lg bg-surface-container-high text-primary flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">description</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-ui text-label-ui font-semibold text-on-surface truncate">
                  Vaibhav Jagtap - Full Stack Resume (PDF)
                </span>
                <span className="font-code-inline text-code-inline text-outline truncate">
                  2 Yrs 7 Mo Exp • PDF • 142 KB
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                className="px-2.5 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-primary font-label-ui text-[12px] font-semibold transition-colors flex items-center gap-1 cursor-pointer border border-primary/20"
                onClick={onOpenResume}
                title="Preview PDF"
              >
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                <span>View</span>
              </button>
              <button
                type="button"
                className="p-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-outline hover:text-primary transition-colors flex items-center justify-center cursor-pointer border border-outline-variant/20"
                onClick={handleDownload}
                title="Download Resume PDF"
                disabled={isDownloading}
              >
                <span className={`material-symbols-outlined text-[18px] ${isDownloading ? 'animate-spin' : ''}`}>
                  {isDownloading ? 'sync' : 'download'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
