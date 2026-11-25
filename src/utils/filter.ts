/**
 * Project filter and classification logic
 */

export type ProjectCategory = 'all' | 'web' | 'mobile' | 'portals' | 'seo';

export interface ProjectData {
  id: string;
  serviceUri: string;
  badge: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  highlights: { icon: string; label: string }[];
  tags: { name: string; color: 'primary' | 'secondary' | 'tertiary' | 'outline' }[];
  image: string;
  imageAlt: string;
  imageBadge: string;
  metrics: { label: string; value: string; sub: string }[];
  latencyInfo: { label: string; value: string; command: string };
  artifactTitle: string;
  artifactFile: string;
  codeSnippet: string;
}

export function filterProjects(projects: ProjectData[], activeCategory: ProjectCategory): ProjectData[] {
  if (activeCategory === 'all') return projects;
  return projects.filter((project) => project.categories.includes(activeCategory));
}
