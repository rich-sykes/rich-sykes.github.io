import { profile } from '../content';

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function Header({
  curriculumVitae = false,
}: {
  curriculumVitae?: boolean;
}) {
  const home = curriculumVitae ? '/' : '';
  return (
    <header className="site-header wrap">
      <a
        className="brand"
        href={`${home}#top`}
        aria-label={`${profile.name}, ${curriculumVitae ? 'home' : 'back to top'}`}
      >
        <span className="monogram">
          rs<span>.</span>
        </span>
        <span>{profile.name}</span>
      </a>
      <nav aria-label="Main navigation">
        <a href={`${home}#systems`}>Systems &amp; stack</a>
        <a href={`${home}#work`}>Selected work</a>
        <a href={`${home}#approach`}>Approach</a>
        <a
          href={profile.cv}
          aria-current={curriculumVitae ? 'page' : undefined}
        >
          Curriculum vitae
        </a>
        <a className="nav-contact" href={`${home}#contact`}>
          Let’s connect <Arrow />
        </a>
      </nav>
    </header>
  );
}

export function Footer({
  curriculumVitae = false,
}: {
  curriculumVitae?: boolean;
}) {
  return (
    <footer
      id="contact"
      className={`contact${curriculumVitae ? ' compact-footer' : ''}`}
    >
      <div className="wrap">
        {!curriculumVitae && (
          <div className="contact-main">
            <div>
              <p className="eyebrow">05 / Connect</p>
              <h2>
                Complex problem?
                <br />
                <span>Let’s talk it through.</span>
              </h2>
              <p>
                For conversations about quantitative platforms,
                <br className="desktop-break" /> engineering and working
                together.
              </p>
            </div>
            <div className="contact-links">
              <a href={profile.linkedin}>
                Connect on LinkedIn <Arrow />
              </a>
              <a href={profile.github}>
                Explore my GitHub <Arrow />
              </a>
              <a href={profile.cv}>
                Curriculum vitae <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        )}
        <div className="footer-bottom">
          <a className="brand" href="/#top">
            <span className="monogram">
              rs<span>.</span>
            </span>
            <span>{profile.name}</span>
          </a>
          <p>Complex models. Clear interfaces.</p>
          <a href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
