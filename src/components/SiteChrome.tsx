import { profile } from '../content';

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function Header({
  page = 'home',
}: {
  page?: 'home' | 'blog' | 'motorsport' | 'curriculum-vitae';
}) {
  const home = page === 'home' ? '' : '/';
  return (
    <header className="site-header wrap">
      <a
        className="brand"
        href={`${home}#top`}
        aria-label={`${profile.name}, ${page === 'home' ? 'back to top' : 'home'}`}
      >
        <span className="monogram">
          rs<span>.</span>
        </span>
        <span>{profile.name}</span>
      </a>
      <nav aria-label="Main navigation">
        <a href={`${home}#systems`}>systems &amp; stack</a>
        <a href={`${home}#projects`}>projects</a>
        <a href="/blog/" aria-current={page === 'blog' ? 'page' : undefined}>
          blog
        </a>
        <a href={`${home}#approach`}>approach</a>
        <a
          href={profile.cv}
          aria-current={page === 'curriculum-vitae' ? 'page' : undefined}
        >
          curriculum vitae
        </a>
        <a className="nav-contact" href={`${home}#contact`}>
          Let’s connect <Arrow />
        </a>
      </nav>
    </header>
  );
}

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer
      id="contact"
      className={`contact${compact ? ' compact-footer' : ''}`}
    >
      <div className="wrap">
        {!compact && (
          <div className="contact-main">
            <div>
              <p className="eyebrow">06 / Connect</p>
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
