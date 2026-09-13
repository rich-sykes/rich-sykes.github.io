// Professional copy lives here. See CONTENT-SOURCES.md before changing claims.
export const profile = {
  name: 'Richard Sykes',
  role: 'Quantitative developer & platform engineer',
  introduction:
    'I build the engineering around the model: trusted platforms, usable tools and repeatable execution. Bringing quantitative teams closer to the decisions their work supports.',
  github: 'https://github.com/rich-sykes',
  linkedin: 'https://uk.linkedin.com/in/richsykes',
  cv: 'https://github.com/rich-sykes/rich-sykes/blob/9671a0a5a82c03c9a166afaa621404b9e5161f13/curriculum-vitae/rich-sykes-cv.md',
};

export const highlights = [
  { value: '2–3 → 8', label: 'Critical model tests per day' },
  { value: '15+', label: 'Modeller teams using SDK patterns' },
  { value: '100+', label: 'Concurrent self-service users' },
];

export const caseStudies = [
  {
    id: 'model-testing',
    number: '01',
    category: 'Model execution & impact assessment',
    title: 'More model tests.\nLess waiting.',
    summary: 'Removing the bottlenecks around critical model testing.',
    problem:
      'Infrastructure and workflow bottlenecks limited critical model testing to 2–3 runs per day, constraining impact assessment for capital planning.',
    contribution:
      'I delivered the impact assessment system as part of credit risk platform delivery at Investec, addressing the infrastructure and workflow constraints around model execution.',
    approach:
      'Focus on the path from a model change to a completed assessment. Remove execution bottlenecks so teams can run critical tests more often.',
    outcome:
      'Critical testing throughput increased to 8 runs per day, giving teams more opportunities to assess model changes within the working day.',
    technologies: 'Model lifecycle · Azure · Workflow engineering',
  },
  {
    id: 'python-platforms',
    number: '02',
    category: 'Python SDKs & self-service platforms',
    title: 'Make the domain usable.\nLet teams work independently.',
    summary:
      'A shared foundation for modellers. A clearer interface for the business.',
    problem:
      'Modelling teams needed reusable access to platform capabilities, while Credit, Risk and Operations needed to interrogate outputs without relying on the quantitative team for every question.',
    contribution:
      'I designed hierarchical Python SDK patterns for the Model Development Environment and built the Credit Modelling Portal for self-service model interrogation.',
    approach:
      'Layer thin API clients beneath domain-specific abstractions for models, data and workflows. Keep package and version governance consistent across teams, and give business users direct access to model outputs and drivers.',
    outcome:
      'SDK patterns used across 15+ modeller teams, alongside self-service model interrogation tooling supporting 100+ concurrent users.',
    technologies: 'Python · APIs & SDKs · Developer experience',
  },
];

export const principles = [
  {
    boundary: 'Data → models',
    title: 'Make assumptions explicit.',
    description:
      'Validate inputs, define typed contracts and keep assumptions traceable. A result is only useful when you can understand what went into it.',
  },
  {
    boundary: 'Models → workflows',
    title: 'Give complexity a boundary.',
    description:
      'Separate model logic from orchestration and presentation. Use composable layers that let teams work with the domain at the right level.',
  },
  {
    boundary: 'Workflows → decisions',
    title: 'Make execution observable.',
    description:
      'Keep outputs explainable and evidence reviewable. Build data lineage and model lifecycle controls into the platform.',
  },
  {
    boundary: 'Development → production',
    title: 'Test behaviour. Control change.',
    description:
      'Use behaviour-focused tests, automated delivery and controlled release paths. Make repeatability part of everyday engineering.',
  },
];

export const background = {
  introduction: 'From physical systems\nto financial decisions.',
  paragraphs: [
    'I started in automotive engineering, working on powertrain optimisation, emissions modelling and predictive analytics. Physical systems and noisy time-series data taught me to understand the system, measure what matters and make hidden complexity visible.',
    'Today, I lead credit risk model platform delivery at Investec, working hands-on across Python, Azure, APIs and SDKs. The domain has changed; the need for trustworthy models and clear engineering has stayed the same.',
  ],
  roles: [
    {
      company: 'Investec',
      role: 'Lead Quantitative Developer',
      area: 'Credit risk & model platforms',
      description:
        'Platform delivery across IFRS 9, IRB and FCA MCOB 11.6 contexts. Big Four reviews with no findings within my owned implementation and control evidence scope.',
    },
    {
      company: 'Ford Motor Company',
      role: 'Predictive analytics & systems',
      area: 'Engineering analytics',
      description:
        'Automated around 70% of recurring analytical workload and designed engineering data pipelines processing 50M+ daily observations.',
    },
    {
      company: 'Prodrive Automotive',
      role: 'Powertrain optimisation',
      area: 'Simulation & numerical methods',
      description:
        'Developed predictive emissions models using neural networks and numerical optimisation. The simulation methodology was later adopted as a Ford Motor Company standard.',
    },
  ],
};
