"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Mic2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SplitHero() {
  return (
    <section className="px-4 pb-8 pt-6 md:px-6 md:pb-12 md:pt-8">
      <div className="section-shell mb-6 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="home-kicker mb-4">Raven Rows</p>

          <h1 className="home-heading mx-auto max-w-[10ch] text-[40px] leading-[0.9] sm:text-[52px] md:max-w-none md:text-[76px] xl:text-[96px]">
            Where stories take flight.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-neutral-600 sm:text-[15px] md:mt-5 md:text-[17px] md:leading-8">
            Raven Rows is a full-service creative agency specializing in films,
            live events, sports experiences, outreach campaigns, and
            large-scale production.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="section-shell"
      >
        <div className="grid overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)] lg:grid-cols-2 lg:rounded-[36px]">
          <SplitCard
            href="/film"
            label="Screenworks"
            eyebrow="Film & Production"
            titleTop="Films. Stories."
            titleBottom="Emotions."
            description="Step into the cinematic world of Raven Rows where stories are crafted with emotion, creativity, and visual excellence."
            note="Narrative-led production with cinematic clarity."
            tags={["Docs", "Brand Films", "Sports"]}
            image="/images/film-world.jpg"
            icon={<Play className="h-3.5 w-3.5" />}
            overlay="bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.16),transparent_34%)]"
            accentClass="bg-teal-300"
          />

          <SplitCard
            href="/events"
            label="Liveworks"
            eyebrow="Events & Experiences"
            titleTop="Events. Energy."
            titleBottom="Experiences."
            description="From stadium concerts and sports leagues to outreach campaigns and gaming activations, we create unforgettable moments at scale."
            note="Large-format execution with audience-first energy."
            tags={["Concerts", "Leagues", "Activations"]}
            image="/images/event-world.jpg"
            icon={<Mic2 className="h-3.5 w-3.5" />}
            overlay="bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.12),transparent_35%)]"
            accentClass="bg-violet-300"
          />
        </div>
      </motion.div>
    </section>
  );
}

type SplitCardProps = {
  href: string;
  label: string;
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  note: string;
  tags: string[];
  image: string;
  icon: React.ReactNode;
  overlay: string;
  accentClass: string;
};

function SplitCard({
  href,
  label,
  eyebrow,
  titleTop,
  titleBottom,
  description,
  note,
  tags,
  image,
  icon,
  overlay,
  accentClass,
}: SplitCardProps) {
  return (
    <article
      className="group relative flex min-h-[340px] flex-col justify-between overflow-hidden p-5 text-white sm:min-h-[390px] sm:p-7 md:min-h-[450px] md:p-9 lg:min-h-[520px] lg:p-10"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.18)), url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white/75 backdrop-blur-md sm:text-[11px]">
          {icon}
          {label}
        </div>

        <div className="rounded-full border border-white/12 bg-black/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-md sm:text-[10px]">
          Raven Rows
        </div>
      </div>

      <div className="relative z-10 mt-8 max-w-[92%] sm:max-w-lg">
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/55 sm:text-[11px]">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-[30px] font-semibold leading-[0.96] tracking-[-0.06em] sm:text-[36px] md:mt-4 md:text-[42px] lg:text-[46px]">
          <span className="block whitespace-nowrap">{titleTop}</span>
          <span className="block">{titleBottom}</span>
        </h2>

        <p className="mt-4 max-w-[19rem] text-[13px] leading-6 text-white/78 sm:max-w-sm sm:text-[14px] sm:leading-7 md:mt-5 md:max-w-md md:text-[15px]">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/78 backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <div className="mb-4 flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${accentClass}`} />
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/42">
            Signature world
          </span>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[13rem] text-[13px] leading-6 text-white/58 sm:max-w-[14rem] sm:text-sm">
            {note}
          </p>

          <Button
            asChild
            className="h-11 w-full rounded-full bg-white px-5 text-[11px] font-medium uppercase tracking-[0.18em] text-black hover:bg-white/90 sm:w-auto sm:min-w-[190px] sm:px-6"
          >
            <Link href={href} className="flex items-center justify-center">
              Enter {label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}