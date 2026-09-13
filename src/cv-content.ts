// Adapted from the public CV and latest profile. See CONTENT-SOURCES.md.
// Credential names and issue dates verified against the linked Microsoft records.
export type Certification = {
  name: string;
  code: string;
  earned: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    code: 'AZ-900',
    earned: '4 February 2026',
    credentialUrl:
      'https://learn.microsoft.com/en-gb/users/richardsykes-5576/credentials/69ccfc080401ab6a',
  },
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    code: 'AI-900',
    earned: '18 February 2026',
    credentialUrl:
      'https://learn.microsoft.com/en-gb/users/richardsykes-5576/credentials/b0324e5eaba12742',
  },
  {
    name: 'Microsoft Certified: Azure Data Fundamentals',
    code: 'DP-900',
    earned: '15 April 2026',
    credentialUrl:
      'https://learn.microsoft.com/en-us/users/richardsykes-5576/credentials/487155a29bb91877',
  },
];

export const curriculumVitae = {
  summary:
    'I connect quantitative research, cloud infrastructure and model governance. I lead credit risk model platform delivery at Investec, building Python APIs, SDKs and Azure services that make complex models usable, repeatable and auditable.',
  experience: [
    {
      company: 'Investec',
      role: 'Lead Quantitative Developer — Credit Risk',
      period: 'July 2017 – present',
      description:
        'Lead credit risk model platform delivery, working hands-on across quantitative systems, Python developer tooling, Azure infrastructure and model lifecycle controls.',
      contributions: [
        'Delivered model platforms across IFRS 9, IRB and FCA MCOB 11.6 contexts, with data lineage, evidence tracking and controlled release paths.',
        'Designed hierarchical Python SDK patterns used across 15+ modeller teams, with shared abstractions for risk models, data and workflows.',
        'Built self-service model interrogation tooling supporting 100+ concurrent users across Credit, Risk and Operations.',
        'Removed infrastructure and workflow bottlenecks in impact assessment, increasing critical model testing throughput from 2–3 to 8 runs per day.',
        'Supported Big Four reviews with no findings within my owned implementation and control evidence scope.',
      ],
    },
    {
      company: 'Ford Motor Company',
      role: 'Predictive Analytics & System Architecture',
      period: 'February 2014 – July 2017',
      description:
        'Led an analytics team of seven, applying predictive modelling and data engineering to automotive systems.',
      contributions: [
        'Automated around 70% of recurring analytical workload with SQL and Python tooling.',
        'Designed pipelines for heterogeneous engineering datasets processing 50M+ daily time-series observations.',
        'Applied neural networks and predictive modelling to CO₂ and noise, vibration and harshness analysis.',
        'Introduced GitHub source control for MATLAB projects involving 10+ collaborators, improving reproducibility and review practices.',
      ],
    },
    {
      company: 'Prodrive Automotive Technology',
      role: 'Lead CAE Engineer — Powertrain Optimisation',
      period: 'December 2009 – February 2014',
      description:
        'Led engineering work on the UK Government-funded CREO research programme, involving three universities and four industry partners.',
      contributions: [
        'Developed predictive emissions models using MATLAB neural networks and multi-objective genetic algorithms.',
        'Developed simulation methodology later adopted as a Ford Motor Company standard for commercial vehicle emissions work.',
      ],
    },
    {
      company: 'Caterpillar',
      role: 'Control Systems Engineer',
      period: 'August 2009 – December 2009',
      description:
        'Control-system debugging, fault diagnosis, CANape calibration, wiring validation and powertrain system verification.',
      contributions: [],
    },
  ],
  skills: [
    {
      area: 'Python & APIs',
      detail:
        'Python, FastAPI, Pydantic, SQLAlchemy, layered SDKs, typed contracts, package and version governance.',
    },
    {
      area: 'Azure & platforms',
      detail:
        'Container Apps, Functions, Azure SQL, Cosmos DB, Azure Machine Learning, Application Insights, Docker.',
    },
    {
      area: 'Data & models',
      detail:
        'SQL, pandas, NumPy, time-series pipelines, Monte Carlo simulation, numerical optimisation, PD/LGD calibration.',
    },
    {
      area: 'Delivery & governance',
      detail:
        'Azure DevOps, CI/CD, pytest, coverage gates, vulnerability scanning, data lineage, model lifecycle controls and audit evidence.',
    },
  ],
  education: [
    {
      qualification: 'BEng Automotive Engineering',
      result: 'First class honours',
      institution: 'Swansea Metropolitan University',
      period: '2007–2009',
    },
    {
      qualification: 'HND Motorsport Engineering',
      result: 'Distinction',
      institution: 'Swansea Metropolitan University',
      period: '2005–2007',
    },
  ],
  development: [
    'Development Team Leader programme — Investec Leadership Academy, 2024',
    'Self-Mastery programme — Investec Leadership Academy, 2024',
  ],
  publications: [
    {
      title:
        'Optimal Behavior based Dynamic Calibration for Diesel Engine-Fueling',
      venue: 'IEEE',
      date: 'October 2014',
    },
    {
      title: 'MATLAB Expo 2013 – CREO Project',
      venue: 'MathWorks presentation (PDF)',
      date: 'October 2013',
      url: 'https://www.mathworks.com/content/dam/mathworks/mathworks-dot-com/solutions/automotive/files/uk-expo-2013/the-creo-project-ford.pdf',
    },
    {
      title:
        'Prospects of Transient Calibration for Forthcoming Legislated Drive Cycles',
      venue:
        'Powertrain Modelling and Control Conference, University of Bradford',
      date: 'September 2012',
    },
  ],
};
