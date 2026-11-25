/**
 * Terminal command execution engine
 */

export interface TerminalOutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'info';
  content: string;
  isHtml?: boolean;
}

export const INITIAL_TERMINAL_LINES: TerminalOutputLine[] = [
  {
    id: 'init-1',
    type: 'info',
    content: 'FSD Terminal Shell v3.1.0 [x86_64-apple-darwin]',
  },
  {
    id: 'init-2',
    type: 'info',
    content: "Type 'help', 'resume', 'skills', 'projects', 'contact', or 'clear'.",
  },
  {
    id: 'init-3',
    type: 'success',
    content: '> Loaded profile: Vaibhav Jagtap // Full Stack Developer / Software Engineer',
  },
];

export function executeTerminalCommand(
  rawInput: string,
  onNavigate?: (path: string) => void
): TerminalOutputLine[] {
  const trimmed = rawInput.trim();
  if (!trimmed) return [];

  const [command, ...args] = trimmed.split(/\s+/);
  const cmd = command.toLowerCase();

  switch (cmd) {
    case 'help':
      return [
        {
          id: crypto.randomUUID(),
          type: 'output',
          content: `Available commands:
• resume   : View education, verified production background & stats
• skills   : Summary of core languages, frameworks & platforms
• projects : List deployed applications and production case studies
• contact  : Direct email, phone, location & communication links
• goto <screen> : Navigate to overview | projects | experience | contact
• whoami   : Current authenticated user session
• clear    : Clear the terminal console output`,
        },
      ];

    case 'resume':
      return [
        {
          id: crypto.randomUUID(),
          type: 'success',
          content: `VAIBHAV JAGTAP • Full Stack Developer & Software Engineer
Production Experience: 2 Yrs 7 Mos (2023 - Present)
Education: B.S. in Information Technology, University of Mumbai (First Class Honors)
Track Record:
• Unlok: Symbol Search redesign (+30% usability), Recharts Quadrant UI, RESTful CRUD APIs
• Systemstar Infotech: Multi-gateway billing (NMI, Auth.net, PayPal), published Heatfleet to iOS/Android App Stores
• Instient: Boosted SEO 35 to 90+, implemented SSR, upgraded Angular 17+ with Capacitor`,
        },
      ];

    case 'skills':
      return [
        {
          id: crypto.randomUUID(),
          type: 'output',
          content: `CORE COMPETENCY MATRIX:
Languages: JavaScript (ES6+), TypeScript, Python, HTML5, CSS3
Frontend:  React, Next.js (App Router, SSR), Angular 17+, Tailwind CSS, Recharts
Backend:   Node.js, Express.js, Django, RESTful CRUD APIs, JWT Auth
Databases: PostgreSQL, MongoDB, Redis Caching
Mobile:    React Native, Capacitor.js (iOS App Store & Google Play Store deployed)
Tooling:   Git/GitHub, Docker, Screaming Frog, Google Search Console, Nx Monorepo`,
        },
      ];

    case 'projects':
      return [
        {
          id: crypto.randomUUID(),
          type: 'output',
          content: `PRODUCTION CASE STUDIES:
1. Unlok: Symbol Search & Quadrant Intelligence (React, Recharts, REST CRUD, +30% usability)
2. Systemstar: Vendor Enterprise Portal & Multi-Gateway Billing (Next.js, NMI, Auth.net, PayPal)
3. Heatfleet & Flyku: Hybrid Sports & Delivery Ecosystem (Capacitor, React Native, iOS & Play Stores)
4. SSR Technical SEO Re-engineering: Lighthouse & Core Web Vitals (35 → 90+ Score, Screaming Frog)`,
        },
      ];

    case 'contact':
      return [
        {
          id: crypto.randomUUID(),
          type: 'output',
          content: `DIRECT ENDPOINTS:
Email:    vaibhav.jagtap.dev@outlook.com
Phone:    +91 9699666915
Location: Mumbai, Maharashtra, India (IST / UTC+05:30)
GitHub:   https://github.com/VaibhavJagtap-dev
LinkedIn: https://linkedin.com/in/vaibhav-jagtap-648a02244/`,
        },
      ];

    case 'whoami':
      return [
        {
          id: crypto.randomUUID(),
          type: 'output',
          content: 'guest@obsidian-runtime (read-only guest session with TLS 1.3 verified)',
        },
      ];

    case 'date':
      return [
        {
          id: crypto.randomUUID(),
          type: 'output',
          content: new Date().toISOString() + ' (UTC)',
        },
      ];

    case 'goto':
      const target = args[0]?.toLowerCase();
      if (!target) {
        return [
          {
            id: crypto.randomUUID(),
            type: 'error',
            content: 'Usage: goto <overview | projects | experience | contact>',
          },
        ];
      }
      const validTargets: Record<string, string> = {
        overview: 'overview',
        projects: 'projects-and-systems',
        'projects-and-systems': 'projects-and-systems',
        experience: 'experience-and-stack',
        'experience-and-stack': 'experience-and-stack',
        contact: 'contact-and-inquiries',
        'contact-and-inquiries': 'contact-and-inquiries',
      };
      if (validTargets[target]) {
        onNavigate?.(validTargets[target]);
        return [
          {
            id: crypto.randomUUID(),
            type: 'success',
            content: `Navigating to ${validTargets[target]}...`,
          },
        ];
      }
      return [
        {
          id: crypto.randomUUID(),
          type: 'error',
          content: `Unknown target: ${target}. Options: overview, projects, experience, contact`,
        },
      ];

    default:
      return [
        {
          id: crypto.randomUUID(),
          type: 'error',
          content: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`,
        },
      ];
  }
}
