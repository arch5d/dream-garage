const items = [
  "A PERSONAL AUTOMOTIVE COLLECTION",
  "SEVEN MACHINES",
  "ONE DREAM GARAGE",
  "EST. 16.11.24",
];

export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee overflow-hidden border-y border-ink/15 bg-paper py-3.5"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center">
                <span className="micro px-6 text-stone md:px-9">{item}</span>
                <span className="h-1 w-1 rotate-45 bg-coffee/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
