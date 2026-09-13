import { blogEntries } from './blog-content';
import { Arrow, Footer, Header } from './components/SiteChrome';

export default function Blog() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header page="blog" />
      <main id="main" tabIndex={-1}>
        <section className="editorial-hero wrap" aria-labelledby="blog-title">
          <p className="eyebrow">Blog</p>
          <h1 id="blog-title">
            Notes from
            <br />
            <span>the workshop.</span>
          </h1>
          <p className="intro">
            Engineering, quantitative systems and motorsport. The practical
            detail behind what I build and what I learn along the way.
          </p>
        </section>
        <section
          className="blog-index light-section section-pad"
          aria-labelledby="writing-heading"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Latest</p>
                <h2 id="writing-heading">Writing &amp; build notes.</h2>
              </div>
              <p>
                A growing record of projects, technical decisions and lessons
                from the track.
              </p>
            </div>
            <div className="blog-list">
              {blogEntries.map((entry, index) => (
                <a className="blog-row" href={entry.href} key={entry.href}>
                  <span className="blog-number">0{index + 1}</span>
                  <span className="blog-row-copy">
                    <span className="eyebrow">{entry.category}</span>
                    <strong>{entry.title}</strong>
                    <span>{entry.summary}</span>
                  </span>
                  <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer compact />
    </div>
  );
}
