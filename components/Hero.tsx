"use client";

import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const lines = ["Some dreams", "are built on", "wheels."];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative h-[100svh] min-h-[680px] overflow-hidden bg-night text-paper"
    >
      <motion.div
        className="absolute inset-[-7%]"
        style={reduceMotion ? undefined : { y: imageY }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.105 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/hero-harrier.jpg"
            alt="An orange Tata Harrier photographed against a dark studio wall."
            fill
            priority
            sizes="100vw"
            className="image-hero object-cover object-center"
          />
        </motion.div>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,23,0.52)_0%,rgba(23,23,23,0.04)_32%,rgba(23,23,23,0.16)_56%,rgba(23,23,23,0.88)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,23,23,0.64)_0%,rgba(23,23,23,0.18)_48%,rgba(23,23,23,0)_74%)]"
      />

      <div className="absolute inset-3 z-20 border border-paper/15 md:inset-5" />
      <span className="absolute left-3 top-3 z-20 h-3 w-3 border-l border-t border-paper/50 md:left-5 md:top-5" />
      <span className="absolute bottom-3 right-3 z-20 h-3 w-3 border-b border-r border-paper/50 md:bottom-5 md:right-5" />

      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-9 md:pb-14">
        <div className="container-edge w-full">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <motion.div
              className="max-w-[1120px]"
              style={
                reduceMotion
                  ? undefined
                  : { y: textY, opacity: textOpacity }
              }
            >
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 flex items-center gap-3 md:mb-8"
              >
                <span className="h-px w-10 bg-paper/50" />
                <span className="micro text-paper/75">
                  A PERSONAL AUTOMOTIVE COLLECTION
                </span>
              </motion.div>

              <h1 className="font-display text-[clamp(3.7rem,9.8vw,10rem)] leading-[0.84] tracking-[-0.045em]">
                {lines.map((line, index) => (
                  <span key={line} className="block overflow-hidden pb-[0.065em]">
                    <motion.span
                      className={`block ${
                        index === 2 ? "pl-[0.15em] italic text-latte" : ""
                      }`}
                      initial={reduceMotion ? false : { y: "114%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.5 + index * 0.11,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {line}
                      {index === 2 && (
                        <span className="ml-[0.08em] align-super font-sans text-[0.16em] not-italic text-coffee">
                          ●
                        </span>
                      )}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.98, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7 flex max-w-[760px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between md:mt-9"
              >
                <div>
                  <p className="text-sm font-light tracking-[0.01em] text-paper/80 md:text-base">
                    Seven machines. One dream garage.
                  </p>
                  <p className="micro-sm mt-3 text-paper/40 md:hidden">
                    01 / 07 &nbsp; — &nbsp; McLAREN GT
                  </p>
                </div>

                <a href="#collection" className="link-line micro text-paper">
                  EXPLORE THE COLLECTION
                  <ArrowDown size={13} strokeWidth={1.2} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.12, ease: [0.16, 1, 0.3, 1] }}
              className="hidden shrink-0 flex-col items-end gap-4 md:flex"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-4xl leading-none text-paper">
                  01
                </span>
                <span className="font-mono text-[11px] text-paper/40">/ 07</span>
              </div>
              <div className="text-right">
                <p className="micro text-paper/70">McLAREN GT</p>
                <p className="micro-sm mt-1.5 text-paper/35">GRAND TOURER</p>
              </div>
              <span className="mt-3 h-14 w-px bg-paper/25" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        <span className="vertical-rl micro-sm text-paper/45">
          SCROLL TO DISCOVER
        </span>
        <span className="relative h-20 w-px overflow-hidden bg-paper/20">
          <span className="scroll-pulse absolute inset-x-0 top-0 h-8 bg-paper/80" />
        </span>
      </div>
    </section>
  );
}
