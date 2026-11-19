import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../data';
import SectionKicker from './SectionKicker';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="section section--faq" aria-labelledby="faq-title">
      <div className="shell faq-layout">
        <div className="faq-aside">
          <SectionKicker index="07" title="GOOD QUESTIONS" />
          <h2 id="faq-title" className="display-heading">BEFORE YOU<br />SIGN UP.</h2>
          <p className="section-intro">
            Straight answers about this demo: what is real, what is sample and how the trial form behaves.
            A real client should replace these with their own policies.
          </p>
          <a className="btn btn--outline" href="#free-trial">Try the demo form</a>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => {
            const expanded = openId === faq.id;
            return (
              <div className={`faq-item${expanded ? ' faq-item--open' : ''}`} key={faq.id}>
                <h3>
                  <button
                    type="button"
                    id={`faq-button-${faq.id}`}
                    aria-expanded={expanded}
                    aria-controls={`faq-panel-${faq.id}`}
                    onClick={() => setOpenId(expanded ? null : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <Plus size={20} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${faq.id}`}
                  hidden={!expanded}
                  className="faq-answer"
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
