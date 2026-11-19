import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { plans, trialGoals } from '../data';
import SectionKicker from './SectionKicker';

type Props = {
  selectedPlanId: string;
  selectedGoal: string;
  selectedCoach: string;
  selectedNote: string;
  onResetPreferences: () => void;
};

type Field =
  | 'name' | 'email' | 'phone' | 'goal' | 'experience' | 'preferredDay' | 'notes' | 'consent';

type Values = Record<Field, string | boolean>;

const initialValues: Values = {
  name: '',
  email: '',
  phone: '',
  goal: '',
  experience: '',
  preferredDay: '',
  notes: '',
  consent: false,
};

const fieldIds: Field[] = ['name', 'email', 'phone', 'goal', 'experience', 'preferredDay', 'notes', 'consent'];

function validate(values: Values): Partial<Record<Field, string>> {
  const errors: Partial<Record<Field, string>> = {};
  const name = String(values.name).trim();
  const email = String(values.email).trim();
  const phone = String(values.phone).trim();

  if (name.length < 2) errors.name = 'Enter your name (at least 2 characters).';
  if (!email) errors.email = 'Enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';
  if (!phone) errors.phone = 'Enter a contact number.';
  else if (phone.replace(/\D/g, '').length < 7) errors.phone = 'Enter a number with at least 7 digits.';
  if (!values.goal) errors.goal = 'Choose a training goal.';
  if (!values.experience) errors.experience = 'Choose your experience level.';
  if (!values.preferredDay) errors.preferredDay = 'Choose a preferred time.';
  if (!values.consent) errors.consent = 'Confirm that you understand this is a demo enquiry.';
  return errors;
}

export default function FreeTrial({ selectedPlanId, selectedGoal, selectedCoach, selectedNote, onResetPreferences }: Props) {
  const [values, setValues] = useState<Values>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => validate(values), [values]);
  const planName = plans.find((plan) => plan.id === selectedPlanId)?.name ?? 'No preference';

  useEffect(() => {
    setValues((current) => ({
      ...current,
      goal: selectedGoal || current.goal,
      notes: selectedNote || current.notes,
    }));
  }, [selectedGoal, selectedNote]);

  const setField = (field: Field, value: string | boolean) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const errorFor = (field: Field) => (touched[field] || submitted ? errors[field] : undefined);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentErrors = validate(values);
    if (Object.keys(currentErrors).length > 0) {
      setTouched(Object.fromEntries(fieldIds.map((field) => [field, true])));
      const firstInvalid = fieldIds.find((field) => currentErrors[field]);
      if (firstInvalid) document.getElementById(`trial-${firstInvalid}`)?.focus();
      return;
    }
    setSubmitted(true);
  };

  const reset = () => {
    setValues(initialValues);
    setTouched({});
    setSubmitted(false);
    onResetPreferences();
    requestAnimationFrame(() => document.getElementById('trial-name')?.focus());
  };

  const inputClass = (field: Field) => `field__input${errorFor(field) ? ' field__input--invalid' : ''}`;
  const describedBy = (field: Field) => errorFor(field) ? `trial-${field}-error` : undefined;

  return (
    <section id="free-trial" className="section section--trial" aria-labelledby="trial-title">
      <div className="shell trial-layout">
        <div className="trial-aside">
          <SectionKicker index="06" title="FREE TRIAL" tone="light" />
          <h2 id="trial-title" className="display-heading">COME SEE<br />THE FLOOR.</h2>
          <p className="section-intro">
            Tell us what you are interested in. This is a demonstration form: your answers stay in this
            browser tab and are never sent anywhere.
          </p>
          <div className="trial-info">
            <div className="trial-info__item"><ShieldCheck size={20} aria-hidden="true" /><span>No data is transmitted or stored.</span></div>
            <div className="trial-info__item"><Check size={20} aria-hidden="true" /><span>Selections from programs, plans and coaches appear below.</span></div>
            <div className="trial-info__item"><Check size={20} aria-hidden="true" /><span>Replace this flow with the client’s confirmed process.</span></div>
          </div>
          <p className="trial-plan-readout">
            <span>PLAN INTEREST (SAMPLE)</span>
            <strong>{planName}</strong>
          </p>
        </div>

        <div className="trial-panel">
          {submitted ? (
            <div className="success-panel" role="status" aria-live="polite">
              <span className="success-panel__mark" aria-hidden="true"><Check size={30} /></span>
              <h3>Demo enquiry received</h3>
              <p className="success-panel__disclaimer">
                Demo enquiry received — no real booking/payment is made. Replace this demo flow with your
                client&apos;s confirmed process before launch.
              </p>
              <dl className="success-summary">
                <div><dt>Name</dt><dd>{String(values.name)}</dd></div>
                <div><dt>Email</dt><dd>{String(values.email)}</dd></div>
                <div><dt>Goal</dt><dd>{String(values.goal)}</dd></div>
                <div><dt>Sample plan</dt><dd>{planName}</dd></div>
                {selectedCoach && <div><dt>Sample coach</dt><dd>{selectedCoach}</dd></div>}
              </dl>
              <button type="button" className="btn btn--lime" onClick={reset}>
                Send another enquiry <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form className="trial-form" onSubmit={handleSubmit} noValidate>
              <p className="trial-form__note">Fields marked * are required · demo form only</p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="trial-name">Your name *</label>
                  <input
                    id="trial-name"
                    className={inputClass('name')}
                    type="text"
                    value={String(values.name)}
                    onChange={(event) => setField('name', event.target.value)}
                    onBlur={() => setTouched((current) => ({ ...current, name: true }))}
                    autoComplete="name"
                    aria-invalid={Boolean(errorFor('name'))}
                    aria-describedby={describedBy('name')}
                  />
                  {errorFor('name') && <p className="field__error" id="trial-name-error">{errorFor('name')}</p>}
                </div>

                <div className="field">
                  <label htmlFor="trial-email">Email address *</label>
                  <input
                    id="trial-email"
                    className={inputClass('email')}
                    type="email"
                    value={String(values.email)}
                    onChange={(event) => setField('email', event.target.value)}
                    onBlur={() => setTouched((current) => ({ ...current, email: true }))}
                    autoComplete="email"
                    aria-invalid={Boolean(errorFor('email'))}
                    aria-describedby={describedBy('email')}
                  />
                  {errorFor('email') && <p className="field__error" id="trial-email-error">{errorFor('email')}</p>}
                </div>

                <div className="field">
                  <label htmlFor="trial-phone">Contact number *</label>
                  <input
                    id="trial-phone"
                    className={inputClass('phone')}
                    type="tel"
                    value={String(values.phone)}
                    onChange={(event) => setField('phone', event.target.value)}
                    onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
                    autoComplete="tel"
                    aria-invalid={Boolean(errorFor('phone'))}
                    aria-describedby={describedBy('phone')}
                  />
                  {errorFor('phone') && <p className="field__error" id="trial-phone-error">{errorFor('phone')}</p>}
                </div>

                <div className="field">
                  <label htmlFor="trial-goal">Training goal *</label>
                  <select
                    id="trial-goal"
                    className={inputClass('goal')}
                    value={String(values.goal)}
                    onChange={(event) => setField('goal', event.target.value)}
                    onBlur={() => setTouched((current) => ({ ...current, goal: true }))}
                    aria-invalid={Boolean(errorFor('goal'))}
                    aria-describedby={describedBy('goal')}
                  >
                    <option value="">Select a goal</option>
                    {trialGoals.map((goal) => <option key={goal} value={goal}>{goal}</option>)}
                  </select>
                  {errorFor('goal') && <p className="field__error" id="trial-goal-error">{errorFor('goal')}</p>}
                </div>

                <div className="field">
                  <label htmlFor="trial-experience">Experience level *</label>
                  <select
                    id="trial-experience"
                    className={inputClass('experience')}
                    value={String(values.experience)}
                    onChange={(event) => setField('experience', event.target.value)}
                    onBlur={() => setTouched((current) => ({ ...current, experience: true }))}
                    aria-invalid={Boolean(errorFor('experience'))}
                    aria-describedby={describedBy('experience')}
                  >
                    <option value="">Select experience</option>
                    <option value="New to training">New to training</option>
                    <option value="Some experience">Some experience</option>
                    <option value="Experienced">Experienced</option>
                  </select>
                  {errorFor('experience') && <p className="field__error" id="trial-experience-error">{errorFor('experience')}</p>}
                </div>

                <div className="field">
                  <label htmlFor="trial-preferredDay">Preferred time *</label>
                  <select
                    id="trial-preferredDay"
                    className={inputClass('preferredDay')}
                    value={String(values.preferredDay)}
                    onChange={(event) => setField('preferredDay', event.target.value)}
                    onBlur={() => setTouched((current) => ({ ...current, preferredDay: true }))}
                    aria-invalid={Boolean(errorFor('preferredDay'))}
                    aria-describedby={describedBy('preferredDay')}
                  >
                    <option value="">Select a time</option>
                    <option value="Weekday mornings">Weekday mornings (sample)</option>
                    <option value="Weekday evenings">Weekday evenings (sample)</option>
                    <option value="Weekends">Weekends (sample)</option>
                    <option value="Flexible">Flexible (sample)</option>
                  </select>
                  {errorFor('preferredDay') && <p className="field__error" id="trial-preferredDay-error">{errorFor('preferredDay')}</p>}
                </div>

                <div className="field field--full">
                  <label htmlFor="trial-notes">Anything else? (optional)</label>
                  <textarea
                    id="trial-notes"
                    className={inputClass('notes')}
                    rows={3}
                    value={String(values.notes)}
                    onChange={(event) => setField('notes', event.target.value)}
                    onBlur={() => setTouched((current) => ({ ...current, notes: true }))}
                    aria-invalid={Boolean(errorFor('notes'))}
                    aria-describedby={describedBy('notes')}
                    placeholder="Sample class interests or questions appear here."
                  />
                </div>
              </div>

              <div className={`consent${errorFor('consent') ? ' consent--invalid' : ''}`}>
                <input
                  id="trial-consent"
                  type="checkbox"
                  checked={Boolean(values.consent)}
                  onChange={(event) => setField('consent', event.target.checked)}
                  onBlur={() => setTouched((current) => ({ ...current, consent: true }))}
                  aria-invalid={Boolean(errorFor('consent'))}
                  aria-describedby={errorFor('consent') ? 'trial-consent-error' : undefined}
                />
                <label htmlFor="trial-consent">
                  I understand this is a demo enquiry, no real booking or payment is made, and my answers
                  stay in this browser. *
                </label>
              </div>
              {errorFor('consent') && <p className="field__error" id="trial-consent-error">{errorFor('consent')}</p>}

              <button type="submit" className="btn btn--lime btn--lg trial-form__submit">
                Send demo enquiry <ArrowUpRight size={18} aria-hidden="true" />
              </button>
              <p className="fine-print">
                Demo form only — no data is transmitted. Coach profiles, plans and availability are samples.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
