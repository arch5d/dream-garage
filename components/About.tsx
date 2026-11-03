import Image from "next/image";
import { LineReveal, Reveal } from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-night text-paper"
    >
      <div className="container-edge py-24 md:py-36">
        <div className="flex items-center justify-between border-t border-paper/15 pt-4">
          <span className="micro text-paper/45">03 / THE STORY</span>
          <span className="micro hidden text-paper/30 md:block">
            THE GARAGE, IN PRIVATE
          </span>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-y-14 md:mt-24 md:gap-x-8">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="md:sticky md:top-24">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink md:aspect-[4/5]">
                <Image
                  src="/images/about-mclaren-evening.jpg"
                  alt="A silver McLaren GT photographed in warm evening light."
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="image-night object-cover"
                  style={{ objectPosition: "center 52%" }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,23,0.08)_0%,rgba(23,23,23,0)_48%,rgba(23,23,23,0.72)_100%)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 border border-paper/20"
                />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <span className="micro text-paper/70">
                    THE LONG WAY HOME
                  </span>
                  <span className="micro-sm text-paper/45">FIG. 08</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <h2 className="font-display text-[clamp(2.9rem,6.3vw,7.2rem)] leading-[0.88] tracking-[-0.045em]">
              <LineReveal>Not a showroom.</LineReveal>
              <LineReveal className="italic text-latte" delay={0.1}>
                A sanctuary.
              </LineReveal>
            </h2>

            <Reveal delay={0.18} className="mt-10 max-w-xl">
              <div className="space-y-5 text-sm leading-[1.95] text-paper/60 md:text-[15px]">
                <p>
                  Not to the count of cars. But to the count of moments we'll make. The
                  first mile. The empty road at six in the morning.
                  The detour to the ice cream shop. The speed drives at 2 a.m.
                </p>
                <p>
                  A lifetime of reasons to take the long way home.
                </p>
              </div>

              <blockquote className="mt-10 border-l border-coffee/70 pl-5 font-display text-2xl italic leading-[1.25] text-paper/85 md:text-[2rem]">
                “The best roads are the ones travelled together.”
              </blockquote>
            </Reveal>

            <Reveal delay={0.26} className="mt-14 md:mt-16">
              <div className="grid grid-cols-3 gap-5 border-t border-paper/15 pt-6">
                <div>
                  <p className="font-display text-3xl leading-none md:text-4xl">
                    07
                  </p>
                  <p className="micro-sm mt-3 text-paper/35">MACHINES</p>
                </div>
                <div>
                  <p className="font-display text-3xl leading-none md:text-4xl">
                    01
                  </p>
                  <p className="micro-sm mt-3 text-paper/35">GARAGE</p>
                </div>
                <div>
                  <p className="font-display text-3xl leading-none md:text-4xl">
                    2024
                  </p>
                  <p className="micro-sm mt-3 text-paper/35">EST. 16.11.24</p>
                </div>
              </div>

              <p className="micro mt-12 text-paper/35">
                A COLLECTION BUILT SLOWLY.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
