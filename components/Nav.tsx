"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Collection", href: "#collection", meta: "Seven machines" },
  { label: "About", href: "#about", meta: "The story" },
  { label: "16.11.24", href: "#date", meta: "The date" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] text-paper mix-blend-difference">
        <div className="flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
          <a
            href="#top"
            className="group flex flex-col leading-none"
            aria-label="Dream Garage, back to top"
          >
            <span className="text-[11px] font-medium tracking-[0.24em]">
              DREAM GARAGE
            </span>
            <span className="micro-sm mt-1.5 hidden text-paper/55 sm:block">
              A PERSONAL COLLECTION
            </span>
          </a>

          <nav
            aria-label="Primary"
            className={`hidden items-center gap-9 transition-opacity duration-500 md:flex ${
              open ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="micro group relative py-1"
              >
                {link.label.toUpperCase()}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="group flex items-center gap-3"
          >
            <span className="micro hidden sm:block">{open ? "CLOSE" : "MENU"}</span>
            <span className="relative block h-3.5 w-7">
              <span
                className={`absolute left-0 top-1 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-1 left-0 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "w-full -translate-y-[5px] -rotate-45" : "w-2/3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { clipPath: "inset(0% 0% 100% 0%)" }
            }
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { clipPath: "inset(0% 0% 0% 0%)" }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { clipPath: "inset(0% 0% 100% 0%)" }
            }
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[95] overflow-hidden bg-night text-paper"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-[8%] right-[2%] select-none font-display text-[32vw] leading-none text-paper/[0.035]"
            >
              DG
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between px-5 pb-8 pt-28 md:px-10 md:pb-10 md:pt-36">
              <nav aria-label="Menu">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={reduceMotion ? false : { y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.22 + index * 0.075,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex items-baseline justify-between gap-6 border-b border-paper/15 py-3 md:py-4"
                  >
                    <span className="font-display text-[clamp(2.7rem,7.8vw,7.5rem)] leading-[0.9] tracking-[-0.04em] transition-colors duration-500 group-hover:text-latte">
                      {link.label}
                    </span>
                    <span className="micro hidden text-right text-paper/35 sm:block">
                      {link.meta}
                      <span className="ml-3 text-paper/20">0{index + 1}</span>
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="grid grid-cols-2 gap-6 border-t border-paper/15 pt-6 md:grid-cols-3"
              >
                <p className="micro text-paper/45">
                  A PERSONAL
                  <br />
                  AUTOMOTIVE COLLECTION
                </p>
                <p className="micro hidden text-paper/45 md:block">
                  SEVEN MACHINES.
                  <br />
                  ONE DREAM GARAGE.
                </p>
                <p className="micro text-right text-paper/45">
                  EST. 16.11.24
                  <br />
                  THE GARAGE IS OPEN.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
