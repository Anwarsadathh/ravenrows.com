"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function HomeEventPreview() {
  return (
    <section className="px-4 pb-16 pt-4 md:px-6 md:pb-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#060606] text-white shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.10),transparent_30%)]" />
          <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.02fr_1fr]">
            <div className="flex flex-col justify-center px-5 py-7 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <p className="mb-3 text-[11px] uppercase tracking-[0.26em] text-white/70">
                Events & Experiences
              </p>

              <h3 className="max-w-[11ch] text-[34px] font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-[44px] md:text-[52px]">
                We create experiences
                <span className="mt-1 block text-white/70">people remember.</span>
              </h3>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/72 md:text-base md:leading-8">
                From stadium concerts and sports leagues to gaming activations
                and outreach campaigns, Raven Rows designs and delivers
                high-energy experiences at scale.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Concerts", "Sports", "Activations", "Outreach"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/78"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href="/events"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-white/90"
                >
                  Enter Liveworks
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] p-4 sm:p-5 md:p-6 lg:min-h-[520px] lg:p-7">
              <div className="relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-[1.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(8,12,24,0.84), rgba(8,12,24,0.20)), url('/images/concert.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.14),transparent_35%)]" />

                <div className="relative flex h-full min-h-[360px] flex-col justify-end p-5 text-white sm:p-6 md:p-7 lg:min-h-[460px]">
                  <div className="max-w-[520px]">
                    <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-white/75 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      Featured Event
                    </p>

                    <h4 className="mt-4 text-[26px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[30px] lg:text-[34px]">
                      Concerts & leagues at scale
                    </h4>

                    <p className="mt-4 max-w-[500px] text-sm leading-7 text-white/80">
                      Armaan Malik, King, MC Square, Free Fire events, and doctor
                      leagues executed with premium production and audience-first
                      thinking.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Armaan Malik", "King", "Live", "Sports"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/80 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}