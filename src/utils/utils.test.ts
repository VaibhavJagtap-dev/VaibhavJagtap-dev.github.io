import test from 'node:test';
import assert from 'node:assert/strict';
import { executeTerminalCommand } from './terminal.js';
import { getBudgetLabel } from './budget.js';
import { filterProjects, ProjectData } from './filter.js';

test('budget label returns accurate tier string', () => {
  assert.equal(getBudgetLabel(1), '< $15,000 (Sprint Audit)');
  assert.equal(getBudgetLabel(2), '$15,000 - $35,000 (Feature / Subsystem)');
  assert.equal(getBudgetLabel(3), '$35,000 - $75,000 (Core MVP / Re-architecture)');
  assert.equal(getBudgetLabel(4), '$75,000+ (Enterprise Multi-Month Embed)');
  assert.equal(getBudgetLabel('2'), '$15,000 - $35,000 (Feature / Subsystem)');
});

test('terminal executes known commands', () => {
  const helpOutput = executeTerminalCommand('help');
  assert.ok(helpOutput.length > 0);
  assert.match(helpOutput[0].content, /Available commands/);

  const skillsOutput = executeTerminalCommand('skills');
  assert.ok(skillsOutput.length > 0);
  assert.match(skillsOutput[0].content, /CORE COMPETENCY MATRIX/);

  const unknownOutput = executeTerminalCommand('invalid_command_xyz');
  assert.equal(unknownOutput[0].type, 'error');
  assert.match(unknownOutput[0].content, /Command not recognized/);
});

test('terminal goto triggers onNavigate callback', () => {
  let navigatedTo = '';
  const result = executeTerminalCommand('goto contact', (path) => {
    navigatedTo = path;
  });
  assert.equal(navigatedTo, 'contact-and-inquiries');
  assert.equal(result[0].type, 'success');
});

test('project filter correctly filters categories', () => {
  const dummyProjects: ProjectData[] = [
    {
      id: 'p1',
      serviceUri: 'uri1',
      badge: 'b1',
      title: 'Web Project',
      description: 'd1',
      categories: ['web', 'portals'],
      highlights: [],
      tags: [],
      image: '',
      imageAlt: '',
      imageBadge: '',
      metrics: [],
      latencyInfo: { label: '', value: '', command: '' },
      artifactTitle: '',
      artifactFile: '',
      codeSnippet: '',
    },
    {
      id: 'p2',
      serviceUri: 'uri2',
      badge: 'b2',
      title: 'Mobile Project',
      categories: ['mobile'],
      highlights: [],
      tags: [],
      image: '',
      imageAlt: '',
      imageBadge: '',
      metrics: [],
      latencyInfo: { label: '', value: '', command: '' },
      artifactTitle: '',
      artifactFile: '',
      codeSnippet: '',
      description: 'd2',
    },
  ];

  const allFiltered = filterProjects(dummyProjects, 'all');
  assert.equal(allFiltered.length, 2);

  const mobileFiltered = filterProjects(dummyProjects, 'mobile');
  assert.equal(mobileFiltered.length, 1);
  assert.equal(mobileFiltered[0].id, 'p2');

  const seoFiltered = filterProjects(dummyProjects, 'seo');
  assert.equal(seoFiltered.length, 0);
});
