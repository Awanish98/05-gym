/**
 * All content in this file is invented demo content for IRON DISTRICT.
 * Names, rates, times, profiles and availability are sample placeholders and
 * must be replaced with the real client's confirmed information before launch.
 */

export type Program = {
  id: string;
  index: string;
  name: string;
  short: string;
  goal: string;
  cadence: string;
  intensity: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export const programs: Program[] = [
  {
    id: 'strength',
    index: '01',
    name: 'Strength & Power',
    short: 'Barbell work, built on progression.',
    goal: 'Strength & Power',
    cadence: 'Sample: 3 sessions / week',
    intensity: 'High',
    description:
      'A coached barbell pathway built around the squat, hinge, press and pull. Every session has a clear target, a logged lift and a next step — no mystery programming, no filler.',
    bullets: [
      'Progressive weekly programming with logged loads',
      'Small-group coaching on technique and setup',
      'Accessory work chosen for the lift you are developing',
      'Sample session length: 75 minutes',
    ],
    image: 'images/weights.jpg',
    imageAlt: 'Weights and training equipment in the demo strength studio',
  },
  {
    id: 'conditioning',
    index: '02',
    name: 'Conditioning Engine',
    short: 'Hard work, measured and repeatable.',
    goal: 'Conditioning Engine',
    cadence: 'Sample: 2–4 sessions / week',
    intensity: 'High',
    description:
      'Controlled conditioning sessions that leave you sharper, not wrecked. Sleds, rows, ski and bike intervals are paired with recovery guidance so the work actually adds up.',
    bullets: [
      'Interval blocks with clear effort targets',
      'Scalable options for every starting point',
      'Coach-led warm-up and cooldown structure',
      'Sample session length: 45–60 minutes',
    ],
    image: 'images/training.jpg',
    imageAlt: 'Training floor used to illustrate the demo conditioning program',
  },
  {
    id: 'mobility',
    index: '03',
    name: 'Mobility & Reset',
    short: 'Move better between the hard days.',
    goal: 'Mobility & Reset',
    cadence: 'Sample: 1–3 sessions / week',
    intensity: 'Low–Medium',
    description:
      'Deliberate range-of-motion work, breathing and light strength for the positions your training asks of you. A useful anchor for busy weeks and long desk days.',
    bullets: [
      'Guided joint-by-joint mobility sequences',
      'Breathing and down-regulation practice',
      'No previous mobility experience assumed',
      'Sample session length: 45 minutes',
    ],
    image: 'images/recovery.jpg',
    imageAlt: 'Recovery space used to illustrate the demo mobility program',
  },
  {
    id: 'foundations',
    index: '04',
    name: 'Foundations',
    short: 'Learn the movements first.',
    goal: 'Foundations',
    cadence: 'Sample: 2 sessions / week',
    intensity: 'Medium',
    description:
      'A patient introduction to the core movement patterns, gym etiquette and training vocabulary. Build confidence before you build load.',
    bullets: [
      'Step-by-step coaching on core lifts',
      'Small groups with close coach attention',
      'A simple plan you can follow between visits',
      'Sample session length: 60 minutes',
    ],
    image: 'images/studio.jpg',
    imageAlt: 'Studio interior used to illustrate the demo foundations program',
  },
];

export type Coach = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  focus: string;
  sampleBio: string;
  sampleSpecialties: string[];
  sampleAvailability: string;
};

export const coaches: Coach[] = [
  {
    id: 'coach-a',
    name: 'Alex R.',
    role: 'Sample strength coach',
    image: 'images/coach-1.jpg',
    imageAlt: 'Portrait used for a sample coach profile',
    focus: 'Barbell fundamentals',
    sampleBio:
      'Sample profile only. Alex is an invented coach used to demonstrate how a profile reads in this layout. No real person, employment history or qualification is represented.',
    sampleSpecialties: ['Squat and hinge technique', 'Beginner onboarding', 'Training logs'],
    sampleAvailability: 'Sample availability: Tuesday–Saturday, by appointment.',
  },
  {
    id: 'coach-b',
    name: 'Jordan M.',
    role: 'Sample conditioning coach',
    image: 'images/coach-2.jpg',
    imageAlt: 'Portrait used for a second sample coach profile',
    focus: 'Conditioning & engine work',
    sampleBio:
      'Sample profile only. Jordan is an invented coach shown to demonstrate the profile layout. No real person, employment history or qualification is represented.',
    sampleSpecialties: ['Interval design', 'Sled and bike work', 'Return-to-training weeks'],
    sampleAvailability: 'Sample availability: Monday–Friday, by appointment.',
  },
  {
    id: 'coach-c',
    name: 'Sam K.',
    role: 'Sample mobility coach',
    image: 'images/coach-3.jpg',
    imageAlt: 'Portrait used for a third sample coach profile',
    focus: 'Mobility & reset',
    sampleBio:
      'Sample profile only. Sam is an invented coach shown to demonstrate the profile layout. No real person, employment history or qualification is represented.',
    sampleSpecialties: ['Mobility screening', 'Breathing practice', 'Desk-day resets'],
    sampleAvailability: 'Sample availability: Wednesday–Sunday, by appointment.',
  },
];

export type Plan = {
  id: string;
  name: string;
  index: string;
  sampleMonthlyRate: number;
  tagline: string;
  featured?: boolean;
  perks: string[];
  comparison: {
    openGym: string;
    coachedSessions: string;
    recovery: string;
    guestPasses: string;
    review: string;
  };
};

export const currencySymbol = '$';

export const plans: Plan[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    index: '01',
    sampleMonthlyRate: 39,
    tagline: 'For a steady, self-directed routine.',
    perks: ['Open gym access', '1 coached session / week', 'Training plan template'],
    comparison: {
      openGym: 'Included',
      coachedSessions: '1 / week',
      recovery: 'Sample add-on',
      guestPasses: '—',
      review: 'Quarterly (sample)',
    },
  },
  {
    id: 'performance',
    name: 'Performance',
    index: '02',
    sampleMonthlyRate: 59,
    tagline: 'For people who want a coach in the room.',
    featured: true,
    perks: [
      'Everything in Foundation',
      '3 coached sessions / week',
      'Recovery zone access',
      'Monthly plan review',
    ],
    comparison: {
      openGym: 'Included',
      coachedSessions: '3 / week',
      recovery: 'Included',
      guestPasses: '1 / month',
      review: 'Monthly (sample)',
    },
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    index: '03',
    sampleMonthlyRate: 79,
    tagline: 'Maximum access, maximum structure.',
    perks: [
      'Everything in Performance',
      'Unlimited coached sessions',
      'Priority session booking',
      '2 guest passes / month',
    ],
    comparison: {
      openGym: 'Included',
      coachedSessions: 'Unlimited',
      recovery: 'Included',
      guestPasses: '2 / month',
      review: 'Fortnightly (sample)',
    },
  },
];

export type ClassSession = {
  id: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  time: string;
  duration: number;
  title: string;
  discipline: string;
  coach: string;
  level: string;
};

export const classDays: ClassSession['day'][] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const disciplines = ['Strength', 'Conditioning', 'Mobility', 'Foundations'] as const;

export const classSchedule: ClassSession[] = [
  { id: 's1', day: 'Mon', time: '06:00', duration: 60, title: 'Early Strength', discipline: 'Strength', coach: 'Alex R. (sample)', level: 'All levels' },
  { id: 's2', day: 'Mon', time: '12:15', duration: 45, title: 'Lunch Reset', discipline: 'Mobility', coach: 'Sam K. (sample)', level: 'All levels' },
  { id: 's3', day: 'Mon', time: '18:30', duration: 60, title: 'Conditioning Engine', discipline: 'Conditioning', coach: 'Jordan M. (sample)', level: 'Intermediate' },
  { id: 's4', day: 'Tue', time: '07:00', duration: 60, title: 'Foundations', discipline: 'Foundations', coach: 'Alex R. (sample)', level: 'Beginner' },
  { id: 's5', day: 'Tue', time: '17:30', duration: 75, title: 'Barbell Power', discipline: 'Strength', coach: 'Alex R. (sample)', level: 'Intermediate' },
  { id: 's6', day: 'Tue', time: '19:00', duration: 45, title: 'Mobility & Reset', discipline: 'Mobility', coach: 'Sam K. (sample)', level: 'All levels' },
  { id: 's7', day: 'Wed', time: '06:00', duration: 60, title: 'Early Strength', discipline: 'Strength', coach: 'Alex R. (sample)', level: 'All levels' },
  { id: 's8', day: 'Wed', time: '18:00', duration: 45, title: 'Interval Lab', discipline: 'Conditioning', coach: 'Jordan M. (sample)', level: 'All levels' },
  { id: 's9', day: 'Thu', time: '07:30', duration: 45, title: 'Mobility Flow', discipline: 'Mobility', coach: 'Sam K. (sample)', level: 'All levels' },
  { id: 's10', day: 'Thu', time: '17:30', duration: 60, title: 'Foundations', discipline: 'Foundations', coach: 'Alex R. (sample)', level: 'Beginner' },
  { id: 's11', day: 'Thu', time: '19:00', duration: 75, title: 'Strength & Power', discipline: 'Strength', coach: 'Alex R. (sample)', level: 'Intermediate' },
  { id: 's12', day: 'Fri', time: '06:30', duration: 45, title: 'Conditioning Engine', discipline: 'Conditioning', coach: 'Jordan M. (sample)', level: 'All levels' },
  { id: 's13', day: 'Fri', time: '12:15', duration: 45, title: 'Lunch Reset', discipline: 'Mobility', coach: 'Sam K. (sample)', level: 'All levels' },
  { id: 's14', day: 'Fri', time: '18:00', duration: 60, title: 'Barbell Fundamentals', discipline: 'Strength', coach: 'Alex R. (sample)', level: 'All levels' },
  { id: 's15', day: 'Sat', time: '08:00', duration: 75, title: 'Long Strength Session', discipline: 'Strength', coach: 'Alex R. (sample)', level: 'Intermediate' },
  { id: 's16', day: 'Sat', time: '10:00', duration: 45, title: 'Weekend Mobility', discipline: 'Mobility', coach: 'Sam K. (sample)', level: 'All levels' },
  { id: 's17', day: 'Sat', time: '11:00', duration: 60, title: 'Conditioning Engine', discipline: 'Conditioning', coach: 'Jordan M. (sample)', level: 'All levels' },
];

export type TransformationStory = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  caption: string;
};

/**
 * These are environment photographs only. There are deliberately no before/after
 * images, body transformations or client testimonials in this demo.
 */
export const transformationStories: TransformationStory[] = [
  {
    id: 't1',
    title: 'The training block',
    image: 'images/floor.jpg',
    imageAlt: 'Training floor environment used as an illustrative scene',
    caption: 'Illustrative scene — not a client result, before/after image or testimonial.',
  },
  {
    id: 't2',
    title: 'The recovery block',
    image: 'images/recovery.jpg',
    imageAlt: 'Recovery area environment used as an illustrative scene',
    caption: 'Illustrative scene — not a client result, before/after image or testimonial.',
  },
  {
    id: 't3',
    title: 'The strength block',
    image: 'images/weights.jpg',
    imageAlt: 'Weights area environment used as an illustrative scene',
    caption: 'Illustrative scene — not a client result, before/after image or testimonial.',
  },
];

export type Faq = { id: string; question: string; answer: string };

export const faqs: Faq[] = [
  {
    id: 'faq-1',
    question: 'What happens on a free trial?',
    answer:
      'In this demo, the free-trial form is a sample enquiry flow. It collects your details in the browser only and shows a confirmation panel. No session is booked and no message is sent. A real gym would replace this with its own confirmed booking process.',
  },
  {
    id: 'faq-2',
    question: 'Do I need experience to start?',
    answer:
      'No prior experience is assumed for the sample Foundations pathway. If you are returning to training or managing an injury, a real studio would ask you to discuss your situation with its staff before joining. This demo makes no medical or suitability claims.',
  },
  {
    id: 'faq-3',
    question: 'Are the membership prices real?',
    answer:
      'No. Every rate on this site is a clearly labelled sample value used to demonstrate the comparison tool. Replace the rates, terms, inclusions and any taxes in the data file with the client’s confirmed pricing before launch.',
  },
  {
    id: 'faq-4',
    question: 'Is the class schedule accurate?',
    answer:
      'No. The weekly schedule is a demo timetable with sample days, times, coaches and availability. Sunday is intentionally left empty to show the empty state. Replace the schedule with the client’s live, confirmed timetable.',
  },
  {
    id: 'faq-5',
    question: 'Are the coaches and transformations real?',
    answer:
      'No. Coach names, profiles, specialties and availability are invented samples, and the transformation area uses environment photos only — there are no real client results or testimonials. Replace or remove all of it with verified, permissioned client content.',
  },
  {
    id: 'faq-6',
    question: 'How do I contact the studio?',
    answer:
      'The contact area contains placeholder address, email, phone and WhatsApp details. The WhatsApp button uses a demo number and an accessible label saying so. Supply the client’s real contact details before publishing.',
  },
];

export const trialGoals = [
  'Strength & Power',
  'Conditioning Engine',
  'Mobility & Reset',
  'Foundations',
  'General fitness',
] as const;
