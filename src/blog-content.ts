export type BlogEntry = {
  href: string;
  category: string;
  title: string;
  summary: string;
};

export const blogEntries: BlogEntry[] = [
  {
    href: '/motorsport/',
    category: 'Motorsport',
    title: 'The E46 M3 race car',
    summary:
      'The current specification, the engineering choices behind the build and the data work growing around the car.',
  },
];

export const motorsportSpecification = [
  {
    system: 'Chassis & suspension',
    items: [
      { name: 'Intrax 2K2' },
      { name: 'Full rose-jointed setup', detail: 'Millway' },
      { name: 'Anti-roll bars', detail: 'Turner Motorsport' },
      { name: 'BBS alloy wheels', detail: 'E92 M3 GT4' },
    ],
  },
  {
    system: 'Driveline & engine',
    items: [
      {
        name: 'Engine and gearbox mounts',
        detail: 'Vibra-Technics',
      },
      { name: '3.91 final drive', detail: 'BMW Motorsport' },
      { name: 'VANOS hub', detail: 'VAC Motorsports' },
      { name: 'Oil pump', detail: 'VAC Motorsports' },
    ],
  },
  {
    system: 'Cooling & induction',
    items: [
      { name: 'Custom radiator', detail: 'Creative' },
      { name: 'Oil cooler', detail: 'do88' },
      { name: 'Carbon airbox', detail: 'Karbonius' },
    ],
  },
  {
    system: 'Braking',
    items: [{ name: 'AP Racing PRO5000R' }],
  },
];
