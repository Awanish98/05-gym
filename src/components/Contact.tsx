import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import SectionKicker from './SectionKicker';

export default function Contact() {
  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-title">
      <div className="shell">
        <SectionKicker index="08" title="FIND THE STUDIO" tone="light" />
        <div className="contact-layout">
          <div className="contact-hero">
            <h2 id="contact-title" className="display-heading">COME.<br />TRAIN.<br /><span>REPEAT.</span></h2>
            <p className="section-intro">
              Ready to see the concept in motion? Start the demo enquiry, or inspect the placeholder
              contact details a real client will replace before launch.
            </p>
            <div className="contact-actions">
              <a className="btn btn--lime btn--lg" href="#free-trial">
                Start your free trial <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="btn btn--outline btn--lg"
                href="https://wa.me/000000000000"
                target="_blank"
                rel="noreferrer"
                aria-label="Demo WhatsApp link — replace with client number (opens in a new tab)"
              >
                <Phone size={17} aria-hidden="true" /> Demo WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-details">
            <div className="contact-row">
              <MapPin size={20} aria-hidden="true" />
              <div>
                <span className="contact-row__label">Address — placeholder</span>
                <p>Studio address to be supplied by the client. No real location is shown in this demo.</p>
              </div>
            </div>
            <div className="contact-row">
              <Mail size={20} aria-hidden="true" />
              <div>
                <span className="contact-row__label">Email — placeholder</span>
                <p>
                  <a href="mailto:hello@example.com" aria-label="Demo email address — replace with the client's email">
                    hello@example.com
                  </a>
                  {' '}· replace before launch
                </p>
              </div>
            </div>
            <div className="contact-row">
              <Phone size={20} aria-hidden="true" />
              <div>
                <span className="contact-row__label">Phone / WhatsApp — placeholder</span>
                <p>Demo number 000000000000. Replace with the client&apos;s confirmed contact number.</p>
              </div>
            </div>
            <div className="contact-row">
              <Clock size={20} aria-hidden="true" />
              <div>
                <span className="contact-row__label">Hours — sample</span>
                <p>Sample week: Mon–Fri 06:00–21:00 · Sat 08:00–14:00 · Sun closed. Replace with real hours.</p>
              </div>
            </div>
            <p className="contact-demo-note">Demo concept — sample information. Do not publish these details as business facts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
