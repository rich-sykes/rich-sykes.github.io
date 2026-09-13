import { Arrow, Footer, Header } from './components/SiteChrome';
import { profile } from './content';
import { certifications, curriculumVitae } from './cv-content';

export default function CurriculumVitae() {
  return (
    <div id="top" className="cv-page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header page="curriculum-vitae" />
      <main id="main" tabIndex={-1}>
        <section className="cv-hero wrap" aria-labelledby="cv-title">
          <p className="eyebrow">Curriculum vitae</p>
          <h1 id="cv-title">
            {profile.name}
            <span>.</span>
          </h1>
          <p className="cv-role">{profile.role}</p>
          <p className="intro">{curriculumVitae.summary}</p>
          <div className="cv-links">
            <a href={profile.linkedin}>
              LinkedIn <Arrow />
            </a>
            <a href={profile.github}>
              GitHub <Arrow />
            </a>
            <a href="/#projects">
              Projects <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
        <div className="light-section cv-body">
          <div className="wrap cv-layout">
            <aside className="cv-index">
              <nav aria-label="Curriculum vitae sections">
                <a href="#experience">Experience</a>
                <a href="#expertise">Technical expertise</a>
                <a href="#certifications">Azure certifications</a>
                <a href="#education">Education</a>
                <a href="#publications">Publications</a>
              </nav>
            </aside>
            <div className="cv-content">
              <section id="experience" aria-labelledby="experience-heading">
                <h2 id="experience-heading">Experience</h2>
                {curriculumVitae.experience.map((job) => (
                  <article className="cv-job" key={job.company}>
                    <p className="eyebrow">{job.period}</p>
                    <h3>{job.company}</h3>
                    <p className="cv-job-role">{job.role}</p>
                    <p>{job.description}</p>
                    {job.contributions.length > 0 && (
                      <ul>
                        {job.contributions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </section>
              <section id="expertise" aria-labelledby="expertise-heading">
                <h2 id="expertise-heading">Technical expertise</h2>
                <dl className="cv-skills">
                  {curriculumVitae.skills.map((skill) => (
                    <div key={skill.area}>
                      <dt>{skill.area}</dt>
                      <dd>{skill.detail}</dd>
                    </div>
                  ))}
                </dl>
              </section>
              <section
                id="certifications"
                aria-labelledby="certifications-heading"
              >
                <h2 id="certifications-heading">Azure certifications</h2>
                <ul className="certifications">
                  {certifications.map((cert) => (
                    <li key={cert.code}>
                      <div>
                        <span className="eyebrow">
                          {cert.code} · {cert.earned}
                        </span>
                        <h3>{cert.name}</h3>
                      </div>
                      {cert.credentialUrl && (
                        <a href={cert.credentialUrl}>
                          Verify credential <Arrow />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
              <section id="education" aria-labelledby="education-heading">
                <h2 id="education-heading">Education &amp; development</h2>
                {curriculumVitae.education.map((item) => (
                  <article className="cv-education" key={item.qualification}>
                    <p className="eyebrow">{item.period}</p>
                    <h3>{item.qualification}</h3>
                    <p>
                      {item.result} · {item.institution}
                    </p>
                  </article>
                ))}
                <ul className="development-list">
                  {curriculumVitae.development.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section id="publications" aria-labelledby="publications-heading">
                <h2 id="publications-heading">Publications</h2>
                {curriculumVitae.publications.map((item) => (
                  <article className="cv-publication" key={item.title}>
                    <h3>
                      {item.url ? (
                        <a href={item.url}>
                          {item.title} <Arrow />
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p>
                      {item.venue} · {item.date}
                    </p>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer compact />
    </div>
  );
}
