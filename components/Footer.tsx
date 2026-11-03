import { ArrowUp } from "lucide-react";
import { credits } from "@/lib/cars";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-paper">
      <div className="container-edge pb-8 pt-16 md:pt-24">
        <div className="flex items-center justify-between border-t border-paper/15 pt-4">
          <span className="micro text-paper/40">
            A PERSONAL AUTOMOTIVE COLLECTION
          </span>
          <a href="#top" className="link-line micro text-paper/60">
            BACK TO TOP
            <ArrowUp size={13} strokeWidth={1.2} />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-y-12 md:mt-24">
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-[clamp(4.6rem,15.4vw,17rem)] leading-[0.78] tracking-[-0.06em]">
              DREAM
              <br />
              <span className="italic text-latte">GARAGE</span>
            </h2>
          </div>

          <div className="col-span-12 flex flex-col justify-end gap-7 md:col-span-3 md:pb-4">
            <p className="max-w-[15rem] font-display text-xl italic leading-[1.25] text-paper/70 md:text-2xl">
              Some dreams are built on wheels.
            </p>

            <nav aria-label="Footer" className="flex flex-col gap-3">
              <a
                href="#collection"
                className="micro text-paper/45 transition-colors hover:text-paper"
              >
                COLLECTION
              </a>
              <a
                href="#about"
                className="micro text-paper/45 transition-colors hover:text-paper"
              >
                ABOUT
              </a>
              <a
                href="#date"
                className="micro text-paper/45 transition-colors hover:text-paper"
              >
                16.11.24
              </a>
            </nav>

            <p className="micro-sm text-paper/30">
              A GIFT, IN SEVEN PARTS.
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between md:mt-28">
          <p className="micro-sm text-paper/30">
            © 2024 DREAM GARAGE. A PERSONAL COLLECTION.
          </p>
          <div className="flex items-center gap-7">
            <p className="micro-sm text-paper/30">DESIGNED WITH INTENTION</p>
            <p className="micro-sm text-paper/30">7 CARS / 1 GARAGE</p>
          </div>
        </div>

        <details className="group mt-8 border-t border-paper/15 pt-5">
          <summary className="flex list-none cursor-pointer items-center justify-between micro text-paper/35 transition-colors hover:text-paper/70 [&::-webkit-details-marker]:hidden">
            PHOTOGRAPHY CREDITS
            <span className="font-sans text-base leading-none transition-transform duration-500 group-open:rotate-45">
              +
            </span>
          </summary>

          <ul className="mt-7 grid gap-x-10 gap-y-2 md:grid-cols-2">
            {credits.map((credit) => (
              <li
                key={credit.source}
                className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-paper/10 pb-3 text-[11px] font-light leading-relaxed text-paper/35"
              >
                <span className="text-paper/65">{credit.label}</span>
                <span>&mdash; {credit.author}</span>
                <a
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-paper/20 underline-offset-2 transition-colors hover:text-paper"
                >
                  {credit.license}
                </a>
                <a
                  href={credit.source}
                  target="_blank"
                  rel="noreferrer"
                  className="micro-sm ml-auto text-paper/25 transition-colors hover:text-paper"
                >
                  SOURCE ↗
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-2xl text-[11px] font-light leading-relaxed text-paper/25">
            Photography is used under the respective Creative Commons licences
            listed above. This is a personal, non-commercial tribute.
          </p>
        </details>
      </div>
    </footer>
  );
}
