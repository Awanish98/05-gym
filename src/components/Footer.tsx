import { ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { href: '#programs', label: 'Programs' },
  { href: '#coaches', label: 'Sample coaches' },
  { href: '#memberships', label: 'Sample plans' },
  { href: '#schedule', label: 'Demo schedule' },
  { href: '#transformations', label: 'Illustrative gallery' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact placeholders' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div>
            <span className="footer-wordmark" aria-hidden="true">IRON<br />DISTRICT</span>
            <p>A premium strength-studio concept site. Built as a website demo, not a live gym.</p>
          </div>
          <nav aria-label="Footer navigation" className="footer-nav">
            {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </nav>
          <div className="footer-cta">
            <h2>READY TO SEE IT?</h2>
            <a className="btn btn--lime" href="#free-trial">Try the demo form <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>Demo concept — sample information. No real bookings, payments, client results, credentials or business details.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
