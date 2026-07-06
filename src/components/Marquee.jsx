import { marqueeItems } from '../data/content';

function MarqueeTrack({ suffix }) {
  return (
    <>
      {marqueeItems.map((item, index) => (
        <span key={`${suffix}-${index}`}>{item}</span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeTrack suffix="a" />
        <MarqueeTrack suffix="b" />
      </div>
    </div>
  );
}
