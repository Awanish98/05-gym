import { useMemo, useState } from 'react';
import { CalendarDays, Clock, RotateCcw } from 'lucide-react';
import { classDays, classSchedule, disciplines, type ClassSession } from '../data';
import SectionKicker from './SectionKicker';

type Props = {
  onRequestClass: (session: ClassSession) => void;
};

type DayFilter = ClassSession['day'] | 'All';

export default function Schedule({ onRequestClass }: Props) {
  const [day, setDay] = useState<DayFilter>('All');
  const [discipline, setDiscipline] = useState<string>('All');

  const visible = useMemo(
    () => classSchedule.filter((item) =>
      (day === 'All' || item.day === day) &&
      (discipline === 'All' || item.discipline === discipline),
    ),
    [day, discipline],
  );

  const reset = () => {
    setDay('All');
    setDiscipline('All');
  };

  return (
    <section id="schedule" className="section section--schedule" aria-labelledby="schedule-title">
      <div className="shell">
        <SectionKicker index="05" title="WEEKLY SCHEDULE" />
        <div className="section-head">
          <h2 id="schedule-title" className="display-heading">FIND YOUR<br />SLOT.</h2>
          <p className="section-intro">
            A demo weekly timetable with sample days, times, coaches and availability. Filter by day and
            discipline; Sunday is intentionally empty to demonstrate the empty state.
          </p>
        </div>

        <p className="sample-notice"><strong>DEMO SCHEDULE</strong> Times and availability are sample placeholders. Confirm with the client before launch.</p>

        <div className="schedule-controls">
          <div className="day-filters" role="group" aria-label="Filter sample classes by day">
            {(['All', ...classDays] as DayFilter[]).map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={day === item}
                className={`day-filter${day === item ? ' day-filter--active' : ''}`}
                onClick={() => setDay(item)}
              >
                {item === 'All' ? 'All days' : item}
              </button>
            ))}
          </div>
          <div className="schedule-controls__right">
            <div className="field field--compact">
              <label htmlFor="discipline-filter">Discipline</label>
              <select
                id="discipline-filter"
                value={discipline}
                onChange={(event) => setDiscipline(event.target.value)}
              >
                <option value="All">All disciplines</option>
                {disciplines.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
            <button type="button" className="btn btn--outline btn--compact" onClick={reset}>
              <RotateCcw size={15} aria-hidden="true" /> Reset
            </button>
          </div>
        </div>

        <p className="schedule-count" aria-live="polite">
          {visible.length === 0
            ? 'No sample sessions match this filter.'
            : `${visible.length} sample session${visible.length === 1 ? '' : 's'} shown`}
          {day !== 'All' ? ` · ${day}` : ''}
          {discipline !== 'All' ? ` · ${discipline}` : ''}
        </p>

        {visible.length === 0 ? (
          <div className="empty-state">
            <CalendarDays size={32} aria-hidden="true" />
            <h3>Nothing on the sample timetable here</h3>
            <p>Try another day or discipline. This is demo availability — no real class has been cancelled.</p>
            <button type="button" className="btn btn--lime" onClick={reset}>Show all sample sessions</button>
          </div>
        ) : (
          <div className="schedule-list">
            {visible.map((session) => (
              <article className="class-row" key={session.id}>
                <div className="class-row__time">
                  <strong>{session.time}</strong>
                  <span><Clock size={13} aria-hidden="true" /> {session.duration} min</span>
                </div>
                <div className="class-row__main">
                  <div className="class-row__title">
                    <span className="class-row__day">{session.day}</span>
                    <h3>{session.title}</h3>
                  </div>
                  <p>{session.coach} · {session.level}</p>
                </div>
                <span className="class-row__tag">{session.discipline}</span>
                <button
                  type="button"
                  className="class-row__cta"
                  onClick={() => onRequestClass(session)}
                  aria-label={`Request information about the sample class ${session.title} on ${session.day} at ${session.time}`}
                >
                  Request info <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
        )}

        <p className="fine-print">Class names, coaches and capacity are illustrative; replace this data with the client’s confirmed timetable.</p>
      </div>
    </section>
  );
}
