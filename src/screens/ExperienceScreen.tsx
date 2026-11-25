import React from 'react';
import { NavScreen } from '../components/Header.js';
import {
  TIMELINE,
  EDUCATION,
  COMPETENCY_RADAR,
  PHILOSOPHY_TENETS,
} from '../data/portfolioData.js';

interface ExperienceScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenResume: () => void;
}

export const ExperienceScreen: React.FC<ExperienceScreenProps> = ({
  onNavigate,
  onOpenResume,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden pb-space-xl">
        {/* Ambient atmospheric glows */}
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 -right-24 w-[32rem] h-[32rem] rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>

        {/* Hero Card Container */}
        <div className="max-w-7xl mx-auto px-gutter pt-space-lg">
          <div className="relative p-space-lg md:p-space-xl rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-md">
              <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-primary uppercase">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span>SYSLOG // CAREER_RUNTIME_TRACE</span>
              </div>
              <div className="flex items-center gap-space-sm font-label-mono text-label-mono text-outline">
                <span>INDEX_VER: 2024.4</span>
                <span>•</span>
                <span className="text-secondary">PROD_READY</span>
              </div>
            </div>

            <div className="max-w-3xl">
              <h1 className="font-headline-lg text-headline-lg font-semibold text-on-surface tracking-tight">
                Engineering Track Record &amp; Competency Matrix
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
                From seed-stage MVPs to high-scale distributed enterprise platforms.
              </p>
            </div>

            {/* 4 Key Stat Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-lg pt-space-md border-t border-outline-variant/20">
              <div className="p-space-md rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                  Production Experience
                </span>
                <div className="font-headline-md text-headline-md font-semibold text-primary mt-0.5">
                  2 Yrs 7 Mos
                </div>
                <span className="font-label-ui text-label-ui text-outline">2023 to Present</span>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                  SEO &amp; Performance
                </span>
                <div className="font-headline-md text-headline-md font-semibold text-secondary mt-0.5">
                  35 → 90+
                </div>
                <span className="font-label-ui text-label-ui text-outline">
                  GSC &amp; Screaming Frog
                </span>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                  Usability Lift
                </span>
                <div className="font-headline-md text-headline-md font-semibold text-tertiary mt-0.5">
                  +30% Usability
                </div>
                <span className="font-label-ui text-label-ui text-outline">
                  Unlok Search Redesign
                </span>
              </div>

              <div className="p-space-md rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                  Mobile Apps Shipped
                </span>
                <div className="font-headline-md text-headline-md font-semibold text-on-surface mt-0.5">
                  2+ Apps
                </div>
                <span className="font-label-ui text-label-ui text-outline">
                  App Store &amp; Play Store
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Asymmetric Content Grid */}
        <div className="max-w-7xl mx-auto px-gutter mt-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Left Column: Timeline & Education (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              {/* Timeline Header */}
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[22px]">route</span>
                  <h2 className="font-headline-md text-headline-md font-semibold text-on-surface">
                    Chronological Timeline
                  </h2>
                </div>
                <span className="font-label-mono text-label-mono text-outline">2023 — PRESENT</span>
              </div>

              {/* Vertical Timeline */}
              <div className="relative pl-6 space-y-space-lg">
                <div className="absolute left-2 top-3 bottom-3 w-0.5 bg-surface-container-highest"></div>

                {TIMELINE.map((item) => {
                  let dotColor = 'bg-primary';
                  let dotRing = 'bg-primary/20';
                  let badgeText = 'text-primary';
                  if (item.badgeType === 'secondary') {
                    dotColor = 'bg-secondary';
                    dotRing = 'bg-secondary/20';
                    badgeText = 'text-secondary';
                  } else if (item.badgeType === 'tertiary') {
                    dotColor = 'bg-tertiary';
                    dotRing = 'bg-tertiary/20';
                    badgeText = 'text-tertiary';
                  }

                  return (
                    <div key={item.id} className="relative group">
                      <div
                        className={`absolute -left-6 top-1.5 w-4 h-4 rounded-full ${dotRing} flex items-center justify-center`}
                      >
                        <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
                      </div>
                      <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 transition-all duration-300 hover:bg-surface-container hover:border-outline-variant/60 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-space-xs mb-space-xs">
                          <span className={`font-label-mono text-label-mono ${badgeText} uppercase`}>
                            {item.period}
                          </span>
                          <div className="flex items-center gap-1 font-label-mono text-label-mono text-outline bg-surface-container-high px-space-sm py-0.5 rounded">
                            <span className="material-symbols-outlined text-[13px] text-secondary">
                              location_on
                            </span>
                            <span>{item.location}</span>
                          </div>
                        </div>

                        <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                          {item.role}
                        </h3>
                        <div className="font-label-ui text-label-ui text-secondary font-medium mt-0.5">
                          {item.company}
                        </div>

                        <div className="space-y-space-xs mt-space-sm font-body-sm text-body-sm text-on-surface-variant">
                          {item.points.map((pt, i) => (
                            <p key={i}>• {pt}</p>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-1.5 mt-space-md">
                          {item.tags.map((tag, i) => {
                            let tagColor = 'text-outline';
                            if (tag.color === 'primary') tagColor = 'text-primary';
                            if (tag.color === 'secondary') tagColor = 'text-secondary';
                            if (tag.color === 'tertiary') tagColor = 'text-tertiary';
                            return (
                              <span
                                key={i}
                                className={`px-space-sm py-0.5 rounded bg-surface-container-high font-label-mono text-label-mono border border-outline-variant/20 ${tagColor}`}
                              >
                                {tag.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Education Block */}
              <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
                <div className="flex items-center gap-space-sm mb-space-md">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    workspace_premium
                  </span>
                  <h3 className="font-headline-md text-headline-md font-semibold text-on-surface">
                    Education &amp; Academic Background
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  {EDUCATION.map((edu, i) => (
                    <div
                      key={i}
                      className="p-space-md rounded-lg bg-surface-container border border-outline-variant/20 flex flex-col justify-between"
                    >
                      <div>
                        <span
                          className={`font-label-mono text-label-mono uppercase ${
                            edu.badgeColor === 'primary' ? 'text-primary' : 'text-secondary'
                          }`}
                        >
                          {edu.badge}
                        </span>
                        <h4 className="font-headline-md text-headline-md font-semibold text-on-surface text-base mt-1">
                          {edu.title}
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          {edu.subtitle}
                        </p>
                      </div>
                      <div
                        className={`font-label-mono text-label-mono mt-space-md flex items-center gap-1 ${
                          edu.icon ? 'text-primary' : 'text-outline'
                        }`}
                      >
                        {edu.icon && (
                          <span className="material-symbols-outlined text-[14px]">
                            {edu.icon}
                          </span>
                        )}
                        <span>{edu.meta}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Competency Radar, Philosophy & Shell (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              {/* Competency Radar */}
              <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between mb-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[22px]">radar</span>
                    <h2 className="font-headline-md text-headline-md font-semibold text-on-surface">
                      Competency Radar
                    </h2>
                  </div>
                  <span className="font-label-mono text-label-mono text-primary">AUDITED 2024</span>
                </div>

                <div className="flex flex-col gap-space-md">
                  {COMPETENCY_RADAR.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-label-ui text-label-ui text-on-surface font-semibold">
                          {item.category}
                        </span>
                        <span
                          className={`font-label-mono text-label-mono ${
                            i === 0
                              ? 'text-primary'
                              : i === 1
                              ? 'text-secondary'
                              : i === 2
                              ? 'text-primary-fixed'
                              : i === 3
                              ? 'text-tertiary'
                              : 'text-secondary-fixed-dim'
                          }`}
                        >
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded bg-surface-container-highest overflow-hidden">
                        <div
                          className={`h-full ${item.colorClass} rounded transition-all duration-1000 ease-out`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="font-body-sm text-body-sm text-outline mt-1 block">
                        {item.skills}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Overall Maturity Pill */}
                <div className="mt-space-lg p-space-md rounded bg-surface-container border border-outline-variant/20 flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
                    <div>
                      <div className="font-label-ui text-label-ui text-on-surface font-semibold">
                        Overall Architecture Maturity
                      </div>
                      <div className="font-label-mono text-label-mono text-outline">
                        Tier-4 Production Ready
                      </div>
                    </div>
                  </div>
                  <span className="px-space-sm py-1 rounded bg-surface-container-high font-label-mono text-label-mono text-primary font-bold border border-primary/30">
                    92.6 AVG
                  </span>
                </div>
              </div>

              {/* System Design Philosophy */}
              <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
                <div className="flex items-center gap-space-sm mb-space-md">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    psychology
                  </span>
                  <h2 className="font-headline-md text-headline-md font-semibold text-on-surface">
                    System Design Philosophy
                  </h2>
                </div>

                <div className="space-y-space-md">
                  {PHILOSOPHY_TENETS.map((tenet, i) => {
                    let accentColor = 'text-primary';
                    if (tenet.color === 'secondary') accentColor = 'text-secondary';
                    if (tenet.color === 'tertiary') accentColor = 'text-tertiary';
                    return (
                      <div
                        key={i}
                        className="p-space-md rounded-lg bg-surface-container border border-outline-variant/20"
                      >
                        <div
                          className={`flex items-center gap-space-xs font-label-mono text-label-mono ${accentColor} mb-1`}
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            {tenet.icon}
                          </span>
                          <span>{tenet.tenetNumber}</span>
                        </div>
                        <h4 className="font-headline-md text-headline-md font-semibold text-on-surface text-base">
                          {tenet.title}
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                          {tenet.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Active Runtime Shell Box */}
              <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-mono text-label-mono text-outline uppercase">
                    Active Runtime Shell
                  </span>
                  <span className="font-label-mono text-label-mono text-primary font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span>SESSION_LIVE</span>
                  </span>
                </div>
                <div className="p-space-md rounded bg-surface-container-lowest border border-outline-variant/20 font-code-block text-code-block text-on-surface-variant overflow-x-auto space-y-1 select-text">
                  <div>
                    <span className="text-secondary">$</span>{' '}
                    <span className="text-tertiary">sys_probe</span> --target=vaibhav-portfolio
                  </div>
                  <div className="text-outline">
                    &gt; Validating runtime: React 19, Next.js, Angular, Node.js, Capacitor
                  </div>
                  <div className="text-outline">
                    &gt; Verification tests: All cross-platform builds passing
                  </div>
                  <div>
                    <span className="text-primary">
                      &gt; Status: Ready for Full Stack &amp; Mobile Engineering.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
