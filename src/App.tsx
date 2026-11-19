import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Coaches from './components/Coaches';
import Memberships from './components/Memberships';
import Transformations from './components/Transformations';
import Schedule from './components/Schedule';
import FreeTrial from './components/FreeTrial';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { ClassSession } from './data';

function scrollToTrial() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('free-trial')?.scrollIntoView({
    behavior: reduced ? 'auto' : 'smooth',
    block: 'start',
  });
  requestAnimationFrame(() => document.getElementById('trial-name')?.focus({ preventScroll: true }));
}

export default function App() {
  const [planId, setPlanId] = useState('');
  const [goal, setGoal] = useState('');
  const [coach, setCoach] = useState('');
  const [note, setNote] = useState('');

  const chooseGoal = (nextGoal: string) => {
    setGoal(nextGoal);
    scrollToTrial();
  };

  const selectPlan = (nextPlanId: string) => {
    setPlanId(nextPlanId);
    scrollToTrial();
  };

  const bookCoach = (coachName: string) => {
    setCoach(coachName);
    scrollToTrial();
  };

  const requestClass = (session: ClassSession) => {
    setNote(`Interested in the sample class: ${session.title} (${session.day} ${session.time}).`);
    scrollToTrial();
  };

  const resetPreferences = () => {
    setPlanId('');
    setGoal('');
    setCoach('');
    setNote('');
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Hero />
        <div className="discipline-strip" aria-hidden="true">
          <div className="discipline-strip__track">
            <span>DISCIPLINE</span><i>/</i><span>PROGRESS</span><i>/</i><span>REPEAT</span><i>/</i>
            <span>DISCIPLINE</span><i>/</i><span>PROGRESS</span><i>/</i><span>REPEAT</span><i>/</i>
          </div>
        </div>
        <Programs onChooseGoal={chooseGoal} />
        <Coaches onBookCoach={bookCoach} />
        <Memberships selectedPlanId={planId} onSelectPlan={selectPlan} />
        <Transformations />
        <Schedule onRequestClass={requestClass} />
        <FreeTrial
          selectedPlanId={planId}
          selectedGoal={goal}
          selectedCoach={coach}
          selectedNote={note}
          onResetPreferences={resetPreferences}
        />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
