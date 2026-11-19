import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#programs', label: 'Programs' },
  { href: '#coaches', label: 'Coaches' },
  { href: '#memberships', label: 'Memberships' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#transformations', label: 'Transformations' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!navRef.current?.contains(target) && !toggleRef.current?.contains(target)) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="IRON DISTRICT demo — back to top">
          <span className="brand__mark" aria-hidden="true">ID</span>
          <span className="brand__name">
            IRON <span>DISTRICT</span>
            <small>Strength studio · demo concept</small>
          </span>
        </a>

        <nav
          id="primary-nav"
          ref={navRef}
          className={`primary-nav${open ? ' primary-nav--open' : ''}`}
          aria-label="Primary navigation"
        >
          <div className="primary-nav__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="btn btn--lime primary-nav__cta" href="#free-trial" onClick={closeMenu}>
            Free trial <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          ref={toggleRef}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
