"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 30 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

type LineRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function LineReveal({ children, className, delay = 0 }: LineRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={reduceMotion ? false : { y: "112%" }}
        whileInView={reduceMotion ? undefined : { y: "0%" }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
