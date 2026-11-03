import { Reveal } from "./Reveal";

function AnniversarySeal() {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center md:h-44 md:w-44">
      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        className="animate-spin-slow absolute inset-0 h-full w-full"
      >
        <defs>
          <path
            id="seal-path"
            d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
          />
        </defs>
        <text
          className="fill-ink"
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "8.2px",
            letterSpacing: "0.31em",
          }}
        >
          <textPath href="#seal-path">
            DREAM GARAGE · SEVEN MACHINES · ONE DREAM · 16.11.24 ·
          </textPath>
        </text>
      </svg>

      <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-ink/20 text-center md:h-24 md:w-24">
        <span className="font-display text-2xl leading-none md:text-3xl">
          16.11
        </span>
        <span className="micro-sm mt-1.5 text-stone">THE GARAGE</span>
      </div>
    </div>
  );
}

export default function Anniversary() {
  return (
    <section id="date" className="relative overflow-hidden bg-paper py-24 md:py-36">
      <div className="container-edge">
        <div className="flex items-center justify-between border-t border-ink/15 pt-4">
          <span className="micro text-stone">04 / THE DATE</span>
          <span className="micro hidden text-stone md:block">
            A DAY WORTH KEEPING
          </span>
        </div>

        <div className="mt-16 flex flex-col items-center md:mt-24">
          <Reveal>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
              <h2 className="font-display text-[clamp(4rem,17vw,17rem)] leading-[0.78] tracking-[-0.065em]">
                16<span className="text-coffee">.</span>11
                <span className="text-coffee">.</span>24
              </h2>
              <div className="shrink-0 text-ink">
                <AnniversarySeal />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 max-w-2xl text-center md:mt-16">
            <p className="font-display text-2xl italic leading-[1.2] text-ink md:text-4xl">
              The day the garage became home.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-stone">
              Some anniversaries are marked by candles. Ours is marked by seven
              engines, one garage, and every road still waiting.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-20 md:mt-28">
          <div className="relative h-px bg-ink/15">
            <span className="absolute left-0 top-1/2 h-2 w-px -translate-y-1/2 bg-ink/40" />
            <span className="absolute left-1/2 top-1/2 h-2 w-px -translate-y-1/2 bg-ink/40" />
            <span className="absolute right-0 top-1/2 h-2 w-px -translate-y-1/2 bg-ink/40" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="micro-sm text-stone">16.11.24</span>
            <span className="micro-sm text-stone">THE BEGINNING</span>
            <span className="micro-sm text-right text-stone">
              EVERY MILE SINCE
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
