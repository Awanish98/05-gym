import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { programs } from '../data';
import SectionKicker from './SectionKicker';

type Props = {
  onChooseGoal: (goal: string) => void;
};

export default function Programs({ onChooseGoal }: Props) {
  const [activeId, setActiveId] = useState(programs[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = programs.findIndex((program) => program.id === activeId);
  const active = programs[activeIndex];

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % programs.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + programs.length) % programs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = programs.length - 1;
    else return;

    event.preventDefault();
    setActiveId(programs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="programs" className="section section--programs" aria-labelledby="programs-title">
      <div className="shell">
        <SectionKicker index="01" title="TRAINING PROGRAMS" />
        <div className="section-head">
          <h2 id="programs-title" className="display-heading">FOUR WAYS<br />TO GET STRONGER.</h2>
          <p className="section-intro">
            Each pathway is a sample training structure built for this concept site. Select a tab to see how a
            program would be presented — then request a trial with that goal pre-filled.
          </p>
        </div>

        <div className="programs-grid">
          <div className="program-tabs" role="tablist" aria-label="Sample training programs" aria-orientation="vertical">
            {programs.map((program, index) => (
              <button
                key={program.id}
                type="button"
                role="tab"
                id={`program-tab-${program.id}`}
                aria-controls={`program-panel-${program.id}`}
                aria-selected={activeId === program.id}
                tabIndex={activeId === program.id ? 0 : -1}
                ref={(node) => { tabRefs.current[index] = node; }}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                onClick={() => setActiveId(program.id)}
                className={`program-tab${activeId === program.id ? ' program-tab--active' : ''}`}
              >
                <span className="program-tab__index">{program.index}</span>
                <span className="program-tab__text">
                  <strong>{program.name}</strong>
                  <small>{program.short}</small>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>

          <div
            key={active.id}
            role="tabpanel"
            id={`program-panel-${active.id}`}
            aria-labelledby={`program-tab-${active.id}`}
            tabIndex={0}
            className="program-panel"
          >
            <div className="program-panel__media image-fallback">
              <img
                src={active.image}
                alt={active.imageAlt}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <span className="image-tag">SAMPLE PROGRAM</span>
            </div>
            <div className="program-panel__body">
              <div className="program-panel__meta">
                <span>{active.cadence}</span>
                <span>Intensity: {active.intensity}</span>
              </div>
              <p className="program-panel__description">{active.description}</p>
              <ul className="check-list">
                {active.bullets.map((bullet) => (
                  <li key={bullet}><Check size={17} aria-hidden="true" /> <span>{bullet}</span></li>
                ))}
              </ul>
              <button
                type="button"
                className="btn btn--lime"
                onClick={() => onChooseGoal(active.goal)}
              >
                Request a trial in this program <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
