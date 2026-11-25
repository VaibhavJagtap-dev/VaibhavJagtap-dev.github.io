import React, { useState } from 'react';
import { NavScreen } from '../components/Header.js';
import { ProjectCategory, filterProjects } from '../utils/filter.js';
import { PROJECTS } from '../data/portfolioData.js';

interface ProjectsScreenProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenResume: () => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({
  onNavigate,
  onOpenResume,
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [openDrawers, setOpenDrawers] = useState<Record<string, boolean>>({
    unlok: false,
    systemstar: false,
    heatfleet: false,
    'ssr-seo': false,
  });
  const [copiedArtifact, setCopiedArtifact] = useState<string | null>(null);

  const toggleDrawer = (id: string) => {
    setOpenDrawers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedArtifact(id);
    setTimeout(() => setCopiedArtifact(null), 2000);
  };

  const filteredList = filterProjects(PROJECTS, activeFilter);

  const filterButtons: { category: ProjectCategory; label: string }[] = [
    { category: 'all', label: 'All Projects (4)' },
    { category: 'web', label: 'Web Applications' },
    { category: 'mobile', label: 'Mobile (React Native & Capacitor)' },
    { category: 'portals', label: 'Portals & APIs' },
    { category: 'seo', label: 'SEO & Performance' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Subtle Matrix Glow Layer */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-96 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-gutter py-space-xl flex flex-col gap-space-xl">
          {/* Section Header */}
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
            <div className="flex flex-col gap-space-xs max-w-3xl">
              <div className="flex items-center gap-space-xs font-label-mono text-label-mono text-primary uppercase">
                <span className="material-symbols-outlined text-[14px]">terminal</span>
                <span>index://systems-and-case-studies</span>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface-variant">live-production</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Production Systems &amp; Case Studies
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                End-to-end full-stack architectures engineered for scale, reliability, and developer velocity.
              </p>
            </div>

            {/* Telemetry Summary Pill */}
            <div className="flex items-center gap-space-md p-space-sm rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm flex-shrink-0">
              <div className="flex flex-col px-space-sm">
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  CLUSTER HEALTH
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="font-code-inline text-code-inline text-on-surface font-semibold">
                    ALL NODES OK
                  </span>
                </div>
              </div>
              <div className="h-8 w-px bg-surface-container-highest"></div>
              <div className="flex flex-col px-space-sm">
                <span className="font-label-mono text-label-mono text-on-surface-variant">
                  DEPLOY PIPELINES
                </span>
                <span className="font-code-inline text-code-inline text-secondary font-semibold">
                  100% PASSING
                </span>
              </div>
            </div>
          </section>

          {/* Filter Controls & Quick Search */}
          <section className="flex flex-wrap items-center justify-between gap-space-md bg-surface-container-low border border-outline-variant/30 p-space-sm rounded-xl shadow-sm">
            <div className="flex flex-wrap items-center gap-space-xs" id="filter-container">
              {filterButtons.map((btn) => {
                const isActive = activeFilter === btn.category;
                return (
                  <button
                    key={btn.category}
                    type="button"
                    onClick={() => setActiveFilter(btn.category)}
                    className={`px-space-md py-1.5 rounded-lg font-label-mono text-label-mono transition-all cursor-pointer ${
                      isActive
                        ? 'bg-surface-container-highest text-on-surface font-semibold border border-primary/40 shadow-sm'
                        : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-lg bg-surface-container-lowest text-on-surface-variant border border-outline-variant/20">
              <span className="material-symbols-outlined text-[16px] text-outline">tune</span>
              <span className="font-code-inline text-code-inline text-outline uppercase">
                FILTER: {activeFilter} ({filteredList.length})
              </span>
            </div>
          </section>

          {/* Projects Grid */}
          <div className="flex flex-col gap-space-xl" id="projects-list">
            {filteredList.map((project) => {
              const isDrawerOpen = openDrawers[project.id];
              return (
                <article
                  key={project.id}
                  className="project-card flex flex-col rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden shadow-md transition-all hover:shadow-xl hover:border-outline-variant/60"
                >
                  {/* Card Header Bar */}
                  <div className="px-space-lg py-space-sm bg-surface-container border-b border-outline-variant/20 flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                      <span className="font-label-mono text-label-mono text-on-surface-variant ml-space-xs">
                        {project.serviceUri}
                      </span>
                    </div>
                    <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-mono text-label-mono uppercase tracking-wider">
                      {project.badge}
                    </span>
                  </div>

                  {/* Main Card Content */}
                  <div className="p-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                    {/* Left Column (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between gap-space-lg">
                      <div className="flex flex-col gap-space-md">
                        <div className="flex flex-col gap-space-xs">
                          <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                            {project.title}
                          </h2>
                          <p className="font-body-md text-body-md text-on-surface-variant">
                            {project.description}
                          </p>
                        </div>

                        {/* Capabilities Checklist */}
                        <div className="flex flex-col gap-space-xs bg-surface-container-lowest p-space-md rounded-xl border border-outline-variant/20">
                          <span className="font-label-mono text-label-mono text-primary uppercase">
                            Core Architecture &amp; Modules
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm font-body-sm text-body-sm text-on-surface">
                            {project.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-space-xs">
                                <span className="material-symbols-outlined text-secondary text-[16px]">
                                  {h.icon}
                                </span>
                                <span>{h.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Tag Pills */}
                        <div className="flex flex-wrap items-center gap-space-xs">
                          {project.tags.map((t, i) => {
                            let colorCls = 'text-on-surface-variant';
                            if (t.color === 'primary') colorCls = 'text-primary';
                            if (t.color === 'secondary') colorCls = 'text-secondary';
                            if (t.color === 'tertiary') colorCls = 'text-tertiary';
                            return (
                              <span
                                key={i}
                                className={`px-space-sm py-1 rounded bg-surface-container font-label-mono text-label-mono border border-outline-variant/20 ${colorCls}`}
                              >
                                {t.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Interactive Buttons */}
                      <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                        <button
                          type="button"
                          onClick={() => onNavigate('contact-and-inquiries')}
                          className="flex items-center gap-space-xs px-space-lg py-2 rounded-lg bg-primary-container text-on-primary-container font-label-mono text-label-mono font-semibold hover:bg-primary transition-all shadow-sm cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                          <span>DISPATCH INQUIRY</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleDrawer(project.id)}
                          className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-high text-secondary font-label-mono text-label-mono hover:bg-surface-bright transition-colors ml-auto cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            {isDrawerOpen ? 'unfold_less' : 'unfold_more'}
                          </span>
                          <span>{isDrawerOpen ? 'COLLAPSE CODE' : 'INSPECT ARTIFACTS'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Column (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-space-md">
                      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant/20 shadow-inner">
                        <img
                          className="w-full h-full object-cover"
                          data-alt={project.imageAlt}
                          src={project.image}
                          alt={project.imageAlt}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                        <div className="absolute bottom-2 left-3 flex items-center gap-space-xs">
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                          <span className="font-code-inline text-code-inline text-on-surface">
                            {project.imageBadge}
                          </span>
                        </div>
                      </div>

                      {/* 3 Metric Pills */}
                      <div className="grid grid-cols-3 gap-space-xs bg-surface-container-lowest p-space-sm rounded-xl border border-outline-variant/20">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="flex flex-col p-space-xs">
                            <span className="font-label-mono text-label-mono text-on-surface-variant">
                              {m.label}
                            </span>
                            <span
                              className={`font-headline-md text-headline-md font-bold ${
                                i === 0 ? 'text-primary' : i === 1 ? 'text-secondary' : 'text-tertiary'
                              }`}
                            >
                              {m.value}
                            </span>
                            <span className="font-code-inline text-code-inline text-outline truncate">
                              {m.sub}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Latency info bar */}
                      <div className="flex flex-col gap-1 p-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant/20 font-label-mono text-label-mono">
                        <div className="flex justify-between text-on-surface-variant">
                          <span>{project.latencyInfo.label}</span>
                          <span className="text-primary font-code-inline text-code-inline">
                            {project.latencyInfo.value}
                          </span>
                        </div>
                        <div className="text-outline truncate">{project.latencyInfo.command}</div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Code Drawer */}
                  {isDrawerOpen && (
                    <div className="px-space-lg pb-space-lg pt-space-xs bg-surface-container-low border-t border-outline-variant/20 transition-all animate-in fade-in duration-200">
                      <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col gap-space-md">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="font-label-mono text-label-mono text-secondary uppercase">
                            {project.artifactTitle}
                          </span>
                          <div className="flex items-center gap-3">
                            <span className="font-code-inline text-code-inline text-outline">
                              {project.artifactFile}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopyCode(project.id, project.codeSnippet)}
                              className="px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-mono text-[11px] transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[13px] text-primary">
                                {copiedArtifact === project.id ? 'check' : 'content_copy'}
                              </span>
                              <span>{copiedArtifact === project.id ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                        </div>
                        <pre className="font-code-block text-code-block text-on-surface overflow-x-auto p-space-md rounded-lg bg-surface-container-high leading-relaxed select-all">
                          <code>{project.codeSnippet}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* RFC Banner */}
          <section className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm">
            <div className="flex items-center gap-space-md">
              <div className="p-space-sm rounded-xl bg-surface-container-high text-primary border border-primary/20">
                <span className="material-symbols-outlined text-[28px]">terminal</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md font-semibold text-on-surface">
                  Need a custom technical design document?
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Review RFCs, system architectural schematics, and load test scripts.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm flex-shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('contact-and-inquiries')}
                className="px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary-container font-label-mono text-label-mono font-semibold hover:bg-primary transition-all shadow-sm cursor-pointer"
              >
                REQUEST SYSTEM RFCs
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
