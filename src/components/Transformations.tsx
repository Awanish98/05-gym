import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { transformationStories } from '../data';
import SectionKicker from './SectionKicker';

export default function Transformations() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenIndex(null);
      } else if (event.key === 'ArrowRight') {
        setOpenIndex((index) => (index === null ? null : (index + 1) % transformationStories.length));
      } else if (event.key === 'ArrowLeft') {
        setOpenIndex((index) => (index === null ? null : (index - 1 + transformationStories.length) % transformationStories.length));
      } else if (event.key === 'Tab') {
        const container = document.querySelector<HTMLElement>('.lightbox__inner');
        const focusables = container?.querySelectorAll<HTMLElement>('button');
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [openIndex]);

  const close = () => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  };

  const story = openIndex === null ? null : transformationStories[openIndex];

  return (
    <section id="transformations" className="section section--transformations" aria-labelledby="transformations-title">
      <div className="shell">
        <SectionKicker index="04" title="PROGRESS, ILLUSTRATED" tone="light" />
        <div className="section-head">
          <h2 id="transformations-title" className="display-heading">THE WORK IS<br />THE RESULT.</h2>
          <p className="section-intro">
            This demo shows illustrative environment photography only. There are no before/after photos,
            client results, testimonials or ratings — those must come from verified, permissioned client content.
          </p>
        </div>

        <div className="illustrative-banner" role="note">
          <span>ILLUSTRATIVE ONLY</span>
          <p>Not client results. Not before/after imagery. Sample scenes for layout demonstration.</p>
        </div>

        <div className="story-grid">
          {transformationStories.map((item, index) => (
            <article className="story-card" key={item.id}>
              <div className="story-card__media image-fallback">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={1100}
                  height={735}
                  loading="lazy"
                  decoding="async"
                />
                <button
                  type="button"
                  className="story-card__zoom"
                  aria-label={`Enlarge illustrative sample image: ${item.title}`}
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setOpenIndex(index);
                  }}
                >
                  <Maximize2 size={18} aria-hidden="true" />
                </button>
              </div>
              <div className="story-card__body">
                <span className="story-card__num" aria-hidden="true">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {story && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Illustrative sample image viewer" onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}>
          <div className="lightbox__inner">
            <div className="lightbox__bar">
              <span>Illustrative sample · {openIndex! + 1} / {transformationStories.length}</span>
              <button type="button" ref={closeRef} className="lightbox__close" onClick={close} aria-label="Close illustrative image viewer">
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <img src={story.image} alt={story.imageAlt} width={1100} height={735} decoding="async" />
            <div className="lightbox__foot">
              <button
                type="button"
                onClick={() => setOpenIndex((openIndex! - 1 + transformationStories.length) % transformationStories.length)}
                aria-label="Previous illustrative sample image"
              >
                <ChevronLeft size={20} aria-hidden="true" /> Previous
              </button>
              <p>{story.caption}</p>
              <button
                type="button"
                onClick={() => setOpenIndex((openIndex! + 1) % transformationStories.length)}
                aria-label="Next illustrative sample image"
              >
                Next <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
            <p className="lightbox__hint">Use ← → to browse and Escape to close.</p>
          </div>
        </div>
      )}
    </section>
  );
}
