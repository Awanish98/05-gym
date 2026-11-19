type Props = {
  index: string;
  title: string;
  tone?: 'dark' | 'light';
};

export default function SectionKicker({ index, title, tone = 'dark' }: Props) {
  return (
    <div className={`section-kicker section-kicker--${tone}`}>
      <span className="section-kicker__index">{index}</span>
      <span className="section-kicker__title">{title}</span>
      <span className="section-kicker__rule" aria-hidden="true" />
    </div>
  );
}
