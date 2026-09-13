import { motorsportSpecification } from './blog-content';
import { Arrow, Footer, Header } from './components/SiteChrome';

export default function Motorsport() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header page="motorsport" />
      <main id="main" tabIndex={-1}>
        <section
          className="editorial-hero motorsport-hero wrap"
          aria-labelledby="motorsport-title"
        >
          <a className="back-link" href="/blog/">
            <span aria-hidden="true">←</span> Blog
          </a>
          <p className="eyebrow">Motorsport / E46 M3</p>
          <h1 id="motorsport-title">
            The E46 M3
            <br />
            <span>race car.</span>
          </h1>
          <p className="intro">
            A personal motorsport project and a place to document the car, its
            development and the data work around it.
          </p>
        </section>
        <section
          className="motorsport-spec light-section section-pad"
          aria-labelledby="spec-heading"
        >
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The car</p>
                <h2 id="spec-heading">Current specification.</h2>
              </div>
              <p>
                An E46 M3 built around a focused chassis, upgraded cooling and a
                3.91 final drive.
              </p>
            </div>
            <div className="specification-grid">
              {motorsportSpecification.map((group, index) => (
                <section className="spec-group" key={group.system}>
                  <div className="spec-group-heading">
                    <span className="eyebrow">0{index + 1}</span>
                    <h3>{group.system}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <span>{item.name}</span>
                        {'detail' in item && item.detail && (
                          <span>{item.detail}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>
        <section
          className="motorsport-data section-pad"
          aria-labelledby="data-heading"
        >
          <div className="wrap motorsport-data-grid">
            <div>
              <p className="eyebrow">Car → data</p>
              <h2 id="data-heading">
                Beyond
                <br />
                the lap time.
              </h2>
            </div>
            <div className="motorsport-data-copy">
              <p>
                TrackApp is the open-source project growing alongside the car:
                an idea for bringing lap, sector and telemetry data together for
                richer motorsport analysis.
              </p>
              <a href="https://github.com/rich-sykes/track-app">
                Explore TrackApp on GitHub <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer compact />
    </div>
  );
}
