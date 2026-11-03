"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cars } from "@/lib/cars";
import { LineReveal, Reveal } from "./Reveal";

export default function Collection() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        });
      },
      { rootMargin: "-34% 0px -52% 0px", threshold: 0 },
    );

    itemRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="collection" className="relative bg-paper text-ink">
      <div className="container-edge pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="flex items-center justify-between border-t border-ink/15 pt-4">
          <span className="micro text-stone">02 / THE COLLECTION</span>
          <span className="micro hidden text-stone md:block">
            SEVEN MACHINES / ONE GARAGE
          </span>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-20">
          <h2 className="col-span-12 font-display text-[clamp(3.3rem,7.4vw,8.5rem)] leading-[0.88] tracking-[-0.045em] md:col-span-8">
            <LineReveal>The garage,</LineReveal>
            <LineReveal className="italic text-coffee" delay={0.1}>
              in seven parts.
            </LineReveal>
          </h2>

          <Reveal
            className="col-span-12 flex flex-col justify-end gap-6 md:col-span-4"
            delay={0.16}
          >
            <p className="max-w-sm text-sm leading-[1.85] text-stone">
              "There's a lot of stress in life. But once you sit in a car, a lot of it goes out the window."
              <br></br>~Dan Brown
            </p>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-ink/25" />
              <span className="micro text-stone">
                HOVER / TAP TO PREVIEW
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Desktop editorial index */}
      <div className="container-edge hidden grid-cols-12 gap-x-8 lg:grid">
        <div className="col-span-6">
          <div className="sticky top-[11vh]">
            <div
              id="collection-viewer"
              className="group relative h-[62vh] min-h-[470px] max-h-[700px] overflow-hidden bg-sand"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={cars[active].id}
                  className="absolute inset-0"
                  initial={
                    reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.035 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={cars[active].image}
                    alt={cars[active].alt}
                    fill
                    sizes="(min-width: 1024px) 50vw"
                    className="image-warm object-cover"
                    style={{ objectPosition: cars[active].position }}
                  />
                </motion.div>
              </AnimatePresence>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,23,0.36)_0%,rgba(23,23,23,0)_38%,rgba(23,23,23,0.08)_62%,rgba(23,23,23,0.68)_100%)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 border border-paper/20"
              />

              <div className="pointer-events-none absolute inset-x-5 top-5 flex items-start justify-between">
                <span className="micro text-paper/75">
                  FIG. {cars[active].index} / 07
                </span>
                <span className="micro text-paper/65">
                  {cars[active].category}
                </span>
              </div>

              <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                <span className="font-display text-[clamp(1.8rem,3vw,3.1rem)] leading-none text-paper">
                  {cars[active].name}
                </span>
                <span className="micro-sm hidden text-right text-paper/45 xl:block">
                  {cars[active].ref}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-6">
              <div className="flex flex-1 gap-1.5" aria-hidden="true">
                {cars.map((car, index) => (
                  <span
                    key={car.id}
                    className={`h-px flex-1 transition-colors duration-500 ${
                      index === active ? "bg-coffee" : "bg-ink/15"
                    }`}
                  />
                ))}
              </div>
              <span className="micro-sm text-stone">
                {String(active + 1).padStart(2, "0")} / 07
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-6 pb-[14vh]">
          <div className="border-b border-ink/15">
            {cars.map((car, index) => (
              <button
                key={car.id}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                type="button"
                data-index={index}
                aria-controls="collection-viewer"
                aria-pressed={active === index}
                aria-label={`Preview ${car.name}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`group flex min-h-[24vh] w-full items-start gap-5 border-t border-ink/15 py-8 text-left transition-opacity duration-500 ${
                  active === index
                    ? "opacity-100"
                    : "opacity-35 hover:opacity-75"
                }`}
              >
                <span
                  className={`micro pt-2 transition-colors duration-500 ${
                    active === index ? "text-coffee" : "text-stone"
                  }`}
                >
                  {car.index}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="micro block text-coffee/90">
                    {car.category}
                  </span>
                  <span className="mt-2 block font-display text-[clamp(2rem,3.35vw,4rem)] leading-[0.95] tracking-[-0.035em]">
                    {car.name}
                  </span>
                  <span className="mt-3 block max-w-md text-[13px] leading-relaxed text-stone">
                    {car.tagline}
                  </span>
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1}
                  className={`mt-2 shrink-0 transition-all duration-500 ${
                    active === index
                      ? "translate-x-0 opacity-60"
                      : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet collection */}
      <div className="container-edge pb-20 lg:hidden">
        {cars.map((car, index) => (
          <Reveal
            key={car.id}
            className="border-t border-ink/15 py-9 first:border-t-0 first:pt-0"
            delay={index * 0.03}
          >
            <div className="flex items-center justify-between">
              <span className="micro text-coffee">{car.index} / 07</span>
              <span className="micro text-stone">{car.category}</span>
            </div>

            <div className="group relative mt-5 aspect-[4/3] overflow-hidden bg-sand">
              <Image
                src={car.image}
                alt={car.alt}
                fill
                sizes="100vw"
                className="image-warm object-cover"
                style={{ objectPosition: car.position }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 border border-paper/20"
              />
            </div>

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[clamp(2rem,8.4vw,3.6rem)] leading-[0.92] tracking-[-0.035em]">
                  {car.name}
                </h3>
                <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-stone">
                  {car.tagline}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                strokeWidth={1}
                className="mt-2 shrink-0 text-stone"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
