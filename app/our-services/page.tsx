"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarRange,
  Camera,
  Clapperboard,
  MapPin,
  Megaphone,
  Stars,
  Video,
} from "lucide-react";
import { Navbar } from "@/components/navbar";

const services = [
  {
    icon: CalendarRange,
    title: "Event Management",
    description:
      "End-to-end planning, coordination, logistics, guest flow, entertainment support, and on-ground execution for events of every scale.",
    points: [
      "Corporate and promotional events",
      "On-ground coordination",
      "Guest and vendor management",
    ],
    accent: "from-orange-500/15 via-transparent to-transparent",
  },
  {
    icon: Clapperboard,
    title: "Documentary Shoot",
    description:
      "Authentic storytelling through concept development, scripting, filming, and post-production that captures emotion and narrative with depth.",
    points: [
      "Research and scripting",
      "Filming and interviews",
      "Post-production finishing",
    ],
    accent: "from-violet-500/15 via-transparent to-transparent",
  },
  {
    icon: Camera,
    title: "Brand Shoot",
    description:
      "High-quality visual content for products, campaigns, and brand identity systems designed to strengthen audience connection and recall.",
    points: [
      "Lifestyle and product shoots",
      "Campaign visuals",
      "Brand-first art direction",
    ],
    accent: "from-cyan-500/15 via-transparent to-transparent",
  },
  {
    icon: MapPin,
    title: "Venue Booking",
    description:
      "Venue sourcing and booking support tailored to event scale, audience type, experience goals, and budget requirements.",
    points: [
      "Luxury and private venues",
      "Location coordination",
      "Theme and scale matching",
    ],
    accent: "from-pink-500/15 via-transparent to-transparent",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Promotional campaigns, audience-building strategies, and digital storytelling designed to increase visibility and participation.",
    points: [
      "Campaign creatives",
      "Audience outreach",
      "Performance-led promotion",
    ],
    accent: "from-amber-500/15 via-transparent to-transparent",
  },
  {
    icon: Video,
    title: "Visual Production",
    description:
      "Short films, branded visuals, promotional edits, and cinematic content built for strong digital presence and memorable storytelling.",
    points: [
      "Short films and promos",
      "Editing and post",
      "Multi-format delivery",
    ],
    accent: "from-teal-500/15 via-transparent to-transparent",
  },
];

const process = [
  {
    step: "01",
    title: "Understand the objective",
    text: "We align the brief, audience, format, and desired impact before moving into planning.",
  },
  {
    step: "02",
    title: "Plan the execution",
    text: "From creative direction to logistics, timelines, vendors, and production needs, every layer is mapped clearly.",
  },
  {
    step: "03",
    title: "Execute with precision",
    text: "Our team handles on-ground management, production flow, coordination, and real-time problem solving.",
  },
  {
    step: "04",
    title: "Deliver polished output",
    text: "Final visuals, edits, campaign assets, and project outcomes are delivered with consistency and quality.",
  },
];

const strengths = [
  "Creative + execution under one team",
  "Large-scale event and outreach capability",
  "Strong visual storytelling approach",
  "Flexible across sports, film, education, and entertainment",
];

export default function ServicesPage() {
  return (
        <>
      <Navbar />
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden px-4 pb-10 pt-10 md:px-6 md:pb-16 md:pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.05),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.08),transparent_30%)]" />
        <div className="section-shell relative">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end"
          >
            <div className="max-w-4xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                Our Services
              </p>

              <h1 className="mt-4 max-w-[10ch] text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-[var(--foreground)] sm:text-[58px] md:text-[76px] lg:text-[88px]">
                Creative services built for scale.
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--muted-foreground)] md:text-[17px] md:leading-8">
                Raven Rows delivers event execution, documentary production, brand
                shoots, venue coordination, digital campaigns, and visual storytelling
                designed to move audiences and build memorable brand presence.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#services-grid"
                  className="inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--background)] transition hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Explore Services
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.03] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--foreground)] transition hover:bg-black/[0.05] dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                "Event planning and execution",
                "Production, shoots, and post",
                "Audience growth and campaign visibility",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-black/5 bg-white/70 px-4 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                    Capability
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="services-grid"
        className="px-4 py-10 md:px-6 md:py-14"
      >
        <div className="section-shell">
          <div className="mb-6">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
              Service Lines
            </p>
            <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--foreground)] sm:text-[38px] md:text-[44px]">
              What Raven Rows delivers.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white/80 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-6"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} dark:opacity-100 opacity-40`} />
                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-black/[0.04] dark:border-white/10 dark:bg-white/10">
                      <Icon className="h-5 w-5 text-[var(--foreground)]" />
                    </div>

                    <h3 className="mt-5 text-[22px] font-semibold leading-[1] tracking-[-0.04em] text-[var(--foreground)]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[var(--muted-foreground)]">
                      {service.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-black/8 bg-black/[0.03] px-3 py-1 text-[11px] text-[var(--foreground)] dark:border-white/10 dark:bg-white/10"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-6 md:py-14">
        <div className="section-shell">
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[30px] border border-black/5 bg-white/80 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                Why Us
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--foreground)] sm:text-[38px] md:text-[44px]">
                Strategy, production, and execution in one flow.
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[var(--muted-foreground)]">
                Raven Rows combines creative direction with real execution strength,
                helping brands and organisers move from idea to outcome with fewer
                gaps and stronger visual quality.
              </p>

              <div className="mt-6 space-y-3">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[20px] border border-black/5 bg-black/[0.02] px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <Stars className="mt-0.5 h-4 w-4 shrink-0 text-[var(--foreground)]" />
                    <p className="text-sm leading-6 text-[var(--foreground)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-black/5 bg-white/80 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
                Process
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {process.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[24px] border border-black/5 bg-black/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
                      Step {item.step}
                    </p>
                    <h3 className="mt-3 text-[20px] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 md:px-6 md:pb-24">
  <div className="section-shell">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.16),transparent_28%)]" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">
            Let’s Build
          </p>

          <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
            Need a creative partner for your next project?
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-white/72">
            From planning and production to storytelling and promotion,
            Raven Rows helps shape experiences that leave a lasting mark.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition hover:bg-white/90"
        >
          Start a Project
        </Link>
      </div>
    </motion.div>
  </div>
</section>
    </main>
       </>
  );
}