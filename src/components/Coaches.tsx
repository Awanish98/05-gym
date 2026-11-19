import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { coaches, type Coach } from '../data';
import SectionKicker from './SectionKicker';

type Props = {
  onBookCoach: (coachName: string) => void;
};

export default function Coaches({ onBookCoach }: Props) {
  const [selected, setSelected] = useState<Coach | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected && !dialog.open) dialog.showModal();
    if (!selected && dialog.open) dialog.close();
  }, [selected]);

  const openProfile = (coach: Coach, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelected(coach);
  };

  const closeProfile = () => setSelected(null);

  return (
    <section id="coaches" className="section section--coaches" aria-labelledby="coaches-title">
      <div className="shell">
        <SectionKicker index="02" title="THE COACHING TEAM" />
        <div className="section-head">
          <h2 id="coaches-title" className="display-heading">PEOPLE IN<br />YOUR CORNER.</h2>
          <p className="section-intro">
            Every profile below is an invented sample used to demonstrate the layout. No real coach,
            credential, employment history or availability is represented.
          </p>
        </div>

        <div className="coach-grid">
          {coaches.map((coach, index) => (
            <article className="coach-card" key={coach.id}>
              <div className="coach-card__media image-fallback">
                <img
                  src={coach.image}
                  alt={coach.imageAlt}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <span className="coach-card__index" aria-hidden="true">0{index + 1}</span>
              </div>
              <div className="coach-card__body">
                <span className="sample-badge">SAMPLE PROFILE</span>
                <h3>{coach.name}</h3>
                <p className="coach-card__role">{coach.role}</p>
                <p className="coach-card__focus">{coach.focus}</p>
                <button
                  type="button"
                  className="text-link"
                  onClick={(event) => openProfile(coach, event.currentTarget)}
                >
                  View sample profile <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
        <p className="fine-print">
          Sample profiles only — replace with verified, permissioned coach profiles before launch.
        </p>
      </div>

      <dialog
        ref={dialogRef}
        className="coach-dialog"
        aria-labelledby="coach-dialog-title"
        onClose={() => {
          setSelected(null);
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeProfile();
        }}
      >
        {selected && (
          <div className="coach-dialog__inner">
            <button type="button" className="dialog-close" onClick={closeProfile} aria-label="Close sample coach profile">
              <X size={20} aria-hidden="true" />
            </button>
            <div className="coach-dialog__media image-fallback">
              <img src={selected.image} alt={selected.imageAlt} width={900} height={600} loading="lazy" decoding="async" />
            </div>
            <div className="coach-dialog__content">
              <span className="sample-badge">SAMPLE PROFILE · NOT A REAL PERSON</span>
              <h3 id="coach-dialog-title">{selected.name}</h3>
              <p className="coach-dialog__role">{selected.role} · {selected.focus}</p>
              <p>{selected.sampleBio}</p>
              <h4>Sample areas of focus</h4>
              <ul className="check-list">
                {selected.sampleSpecialties.map((item) => (
                  <li key={item}><span aria-hidden="true">—</span><span>{item}</span></li>
                ))}
              </ul>
              <p className="coach-dialog__availability">{selected.sampleAvailability}</p>
              <button
                type="button"
                className="btn btn--lime"
                onClick={() => {
                  const name = selected.name;
                  closeProfile();
                  onBookCoach(name);
                }}
              >
                Ask about this sample coach <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
