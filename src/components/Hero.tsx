import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src="images/hero.jpg"
          alt="High-contrast training photography used for the demo strength studio"
          width={1800}
          height={1200}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__diagonal" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" /> IRON DISTRICT · DEMO CONCEPT</p>
          <h1 id="hero-title" className="hero__title">
            <span>BUILD</span>
            <span>WHAT</span>
            <span>OTHERS</span>
            <span className="hero__title-accent">QUIT ON.</span>
          </h1>
          <p className="hero__lede">
            A disciplined strength studio concept. Coached sessions, a clear plan and a training floor that
            rewards showing up. Everything on this page is sample content for a website demo.
          </p>
          <div className="hero__actions">
            <a className="btn btn--lime btn--lg" href="#free-trial">
              Claim a free trial <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn--outline btn--lg" href="#programs">
              Explore the training <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <a className="hero__scroll" href="#programs" aria-label="Scroll to training programs">
          <span>SCROLL / 01</span>
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </div>

      <div className="hero__stats">
        <div className="shell hero__stats-inner">
          <span className="hero__stats-label">Sample figures — demo only</span>
          <dl>
            <div><dt>Training paths</dt><dd>04</dd></div>
            <div><dt>Sample coaches</dt><dd>03</dd></div>
            <div><dt>Sample sessions / week</dt><dd>17</dd></div>
            <div><dt>Standard</dt><dd>01</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
