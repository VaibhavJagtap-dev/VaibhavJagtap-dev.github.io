/**
 * Budget slider conversion logic
 */

export function getBudgetLabel(step: number | string): string {
  const numericStep = typeof step === 'string' ? parseInt(step, 10) : step;
  switch (numericStep) {
    case 1:
      return '< $15,000 (Sprint Audit)';
    case 2:
      return '$15,000 - $35,000 (Feature / Subsystem)';
    case 3:
      return '$35,000 - $75,000 (Core MVP / Re-architecture)';
    case 4:
      return '$75,000+ (Enterprise Multi-Month Embed)';
    default:
      return '$15,000 - $35,000';
  }
}
