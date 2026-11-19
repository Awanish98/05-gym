import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { currencySymbol, plans } from '../data';
import SectionKicker from './SectionKicker';

type Props = {
  selectedPlanId: string;
  onSelectPlan: (planId: string) => void;
};

const comparisonRows: { key: keyof (typeof plans)[number]['comparison']; label: string }[] = [
  { key: 'openGym', label: 'Open gym access' },
  { key: 'coachedSessions', label: 'Coached sessions' },
  { key: 'recovery', label: 'Recovery zone' },
  { key: 'guestPasses', label: 'Sample guest passes' },
  { key: 'review', label: 'Plan review' },
];

export default function Memberships({ selectedPlanId, onSelectPlan }: Props) {
  const [billing, setBilling] = useState<'monthly' | 'six'>('monthly');
  const [term, setTerm] = useState(6);
  const activePlan = plans.find((plan) => plan.id === selectedPlanId) ?? plans[1];
  const sampleRate = activePlan.sampleMonthlyRate;
  const effectiveRate = billing === 'six' ? sampleRate * 0.9 : sampleRate;
  const total = effectiveRate * term;
  const money = (value: number) => `${currencySymbol}${value.toFixed(2)}`;

  return (
    <section id="memberships" className="section section--memberships" aria-labelledby="memberships-title">
      <div className="shell">
        <SectionKicker index="03" title="MEMBERSHIP PLANS" />
        <div className="section-head">
          <h2 id="memberships-title" className="display-heading">PICK YOUR<br />STANDARD.</h2>
          <p className="section-intro">
            Compare three sample membership tiers. Rates, inclusions and terms below are demo values only —
            no payment is taken anywhere on this site.
          </p>
        </div>

        <p className="sample-notice"><strong>SAMPLE PRICING</strong> All amounts are illustrative placeholders. Replace before launch.</p>

        <div className="plan-grid">
          {plans.map((plan) => {
            const rate = billing === 'six' ? plan.sampleMonthlyRate * 0.9 : plan.sampleMonthlyRate;
            const isSelected = selectedPlanId === plan.id;
            return (
              <article key={plan.id} className={`plan-card${plan.featured ? ' plan-card--featured' : ''}${isSelected ? ' plan-card--selected' : ''}`}>
                <div className="plan-card__top">
                  <span className="plan-card__index">{plan.index}</span>
                  {plan.featured && <span className="plan-card__flag">MOST CHOSEN — SAMPLE</span>}
                </div>
                <h3>{plan.name}</h3>
                <p className="plan-card__tagline">{plan.tagline}</p>
                <div className="plan-card__price">
                  <span className="plan-card__amount">{money(rate)}</span>
                  <span className="plan-card__period">/ sample month</span>
                </div>
                <p className="plan-card__rate-note">
                  {billing === 'six'
                    ? 'Sample 6-month view: 10% demo discount applied.'
                    : 'Sample monthly rate.'}
                </p>
                <ul className="check-list">
                  {plan.perks.map((perk) => <li key={perk}><Check size={16} aria-hidden="true" /><span>{perk}</span></li>)}
                </ul>
                <button
                  type="button"
                  className={`btn ${plan.featured ? 'btn--lime' : 'btn--outline'} plan-card__button`}
                  onClick={() => onSelectPlan(plan.id)}
                  aria-label={`Select the sample ${plan.name} plan and continue to the free-trial form`}
                >
                  {isSelected ? 'Selected — continue' : `Select ${plan.name}`} <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>

        <div className="compare-block">
          <div className="compare-block__head">
            <h3>Compare the sample inclusions</h3>
            <p>Highlighted column = plan currently selected for the trial form.</p>
          </div>
          <div className="table-scroll" role="region" aria-label="Sample membership comparison table" tabIndex={0}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.id} scope="col" className={selectedPlanId === plan.id ? 'is-selected' : ''}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.key}>
                    <th scope="row">{row.label}</th>
                    {plans.map((plan) => (
                      <td key={plan.id} className={selectedPlanId === plan.id ? 'is-selected' : ''}>
                        {plan.comparison[row.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="calculator">
            <div className="calculator__controls">
              <fieldset className="billing-fieldset">
                <legend>Billing view (sample)</legend>
                <label>
                  <input
                    type="radio"
                    name="billing"
                    checked={billing === 'monthly'}
                    onChange={() => setBilling('monthly')}
                  />
                  Monthly rate
                </label>
                <label>
                  <input
                    type="radio"
                    name="billing"
                    checked={billing === 'six'}
                    onChange={() => setBilling('six')}
                  />
                  6-month view · sample 10% off
                </label>
              </fieldset>
              <div className="field field--compact">
                <label htmlFor="compare-term">Comparison term (sample months)</label>
                <select id="compare-term" value={term} onChange={(event) => setTerm(Number(event.target.value))}>
                  <option value={1}>1 month</option>
                  <option value={3}>3 months</option>
                  <option value={6}>6 months</option>
                  <option value={12}>12 months</option>
                </select>
              </div>
            </div>
            <div className="calculator__result" aria-live="polite">
              <span className="calculator__label">Sample total for {activePlan.name}</span>
              <strong>{money(total)}</strong>
              <p className="formula">
                <span>FORMULA INPUTS</span>
                <code>
                  {money(sampleRate)} sample monthly rate × {term} month{term === 1 ? '' : 's'}
                  {billing === 'six' ? ' × 0.90 sample discount' : ''} = {money(total)}
                </code>
              </p>
              <small>Illustrative comparison only. No charges, bookings or contracts are created.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
