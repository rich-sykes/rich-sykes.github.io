import { Arrow, Footer, Header } from './components/SiteChrome';
import {
  background,
  capabilities,
  caseStudies,
  delivery,
  highlights,
  principles,
  profile,
} from './content';

function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-heading">
      <p className="eyebrow">{profile.role}</p>
      <h1 id="hero-heading">
        Efficient model
        <br />
        execution platforms.
        <br />
        <span>Auditable by design.</span>
      </h1>
      <div className="hero-bottom">
        <p className="intro">{profile.introduction}</p>
        <a className="button primary" href="#work">
          Explore my work <span aria-hidden="true">↓</span>
        </a>
      </div>
      <dl className="highlights">
        {highlights.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Systems() {
  return (
    <section
      id="systems"
      className="systems light-section section-pad"
      aria-labelledby="systems-heading"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Systems &amp; stack</p>
            <h2 id="systems-heading">
              Python at the interface.
              <br />
              Azure underneath.
            </h2>
          </div>
          <p>
            From model logic to production services: the tools, abstractions and
            controls that let quantitative teams work independently.
          </p>
        </div>
        <div className="capabilities">
          {capabilities.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="capability-tools">{item.tools}</p>
            </article>
          ))}
        </div>
        <div className="delivery-detail">
          <div>
            <h3>{delivery.title}</h3>
            <p>{delivery.description}</p>
          </div>
          <a href={delivery.source}>
            Systems &amp; stack on GitHub <Arrow />
          </a>
        </div>
        <a className="text-link" href={`${profile.cv}#certifications`}>
          Azure certifications <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="work light-section section-pad"
      aria-labelledby="work-heading"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Selected work</p>
            <h2 id="work-heading">
              Engineering that
              <br />
              moves work forward.
            </h2>
          </div>
          <p>
            Two examples from credit risk platform delivery at Investec. The
            systems around the models, and the difference they make.
          </p>
        </div>
        <div className="case-studies">
          {caseStudies.map((study, index) => (
            <article
              key={study.id}
              id={study.id}
              className="case-study"
              aria-labelledby={`${study.id}-title`}
            >
              <div className="case-meta">
                <span className="case-number">{study.number}</span>
                <p className="eyebrow">{study.category}</p>
                <span className="case-company">Investec</span>
              </div>
              <div className="case-grid">
                <div className="case-copy">
                  <h3 id={`${study.id}-title`}>
                    {study.title.split('\n').map((line) => (
                      <span className="title-line" key={line}>
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p className="case-summary">{study.summary}</p>
                  <dl className="case-detail">
                    <div>
                      <dt>The problem</dt>
                      <dd>{study.problem}</dd>
                    </div>
                    <div>
                      <dt>My contribution</dt>
                      <dd>{study.contribution}</dd>
                    </div>
                    <div>
                      <dt>The approach</dt>
                      <dd>{study.approach}</dd>
                    </div>
                  </dl>
                </div>
                <aside
                  className="case-outcome"
                  aria-label={`${study.category}: outcome`}
                >
                  <p className="eyebrow">The outcome</p>
                  {index === 0 ? (
                    <h4 className="outcome-heading">
                      Less waiting.
                      <br />
                      More assessment.
                    </h4>
                  ) : (
                    <div className="platform-stats">
                      <div>
                        <p className="outcome-number">
                          15+<span>modeller teams</span>
                        </p>
                        <p>Using hierarchical Python SDK patterns.</p>
                      </div>
                      <div>
                        <p className="outcome-number">
                          100+<span>concurrent users</span>
                        </p>
                        <p>Supported by self-service model interrogation.</p>
                      </div>
                    </div>
                  )}
                  <p className="outcome-description">{study.outcome}</p>
                </aside>
              </div>
              <div className="case-footer">
                <p>{study.technologies}</p>
                <a href={`${profile.github}#background`}>
                  Public delivery evidence <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section
      id="approach"
      className="approach section-pad"
      aria-labelledby="approach-heading"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Engineering approach</p>
            <h2 id="approach-heading">
              Boring in production.
              <br />
              <span>Expressive in development.</span>
            </h2>
          </div>
          <p>
            Good abstractions make a system easier to use and easier to
            question. I make the boundaries explicit.
          </p>
        </div>
        <div className="principles">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <div className="principle-meta">
                <span>0{index + 1}</span>
                <p>{principle.boundary}</p>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
        <div className="stack-line">
          <p className="eyebrow">Tools of the trade</p>
          <p>Python / SQL / FastAPI / Pydantic / Azure / Docker / pytest</p>
        </div>
      </div>
    </section>
  );
}

function Background() {
  return (
    <section
      id="background"
      className="background light-section section-pad"
      aria-labelledby="background-heading"
    >
      <div className="wrap background-grid">
        <div className="background-intro">
          <p className="eyebrow">04 / Background</p>
          <h2 id="background-heading">
            {background.introduction.split('\n').map((line) => (
              <span className="title-line" key={line}>
                {line}
              </span>
            ))}
          </h2>
          {background.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="text-link" href={profile.cv}>
            Curriculum vitae <span aria-hidden="true">→</span>
          </a>
        </div>
        <ol className="experience">
          {background.roles.map((role) => (
            <li key={role.company}>
              <p className="eyebrow">{role.area}</p>
              <h3>{role.company}</h3>
              <p className="role">{role.role}</p>
              <p>{role.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Systems />
        <Work />
        <Approach />
        <Background />
      </main>
      <Footer />
    </div>
  );
}
