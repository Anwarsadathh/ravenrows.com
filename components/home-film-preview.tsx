"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function HomeFilmPreview() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-12">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#060606] text-white shadow-[0_30px_120px_rgba(0,0,0,0.35)] md:rounded-[32px] lg:min-h-[430px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_30%)]" />
          <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative grid gap-0 lg:grid-cols-[1.22fr_1fr]">
            <div className="flex flex-col justify-center px-5 py-7 sm:px-6 sm:py-7 md:px-8 md:py-8 lg:px-9 lg:py-10">
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.26em] text-white/70">
                  Film & Production
                </p>

                <h3 className="text-[34px] font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-[44px] md:text-[52px]">
                  We don’t just create videos.
                  <span className="mt-1 block text-white/70">We create emotions.</span>
                </h3>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/72 md:text-base md:leading-8">
                  From documentaries and commercial campaigns to sports storytelling and branded
                  content, Raven Rows brings ideas to life through cinematic narratives.
                </p>

                <div className="mt-5 lg:mt-6">
                  <Link
                    href="/film"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-white/90"
                  >
                    Enter Film World
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[300px] sm:min-h-[340px] lg:h-full lg:min-h-[430px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.18)), url('/images/mahakumbh.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.14),transparent_30%)]" />

              <div className="relative flex h-full min-h-[300px] flex-col justify-end p-6 text-white sm:min-h-[340px] md:p-7 lg:min-h-[430px]">
                <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-white/75 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                  Featured Project
                </p>

                <h4 className="mt-4 max-w-[8ch] text-[28px] font-semibold leading-[0.96] tracking-[-0.05em] sm:text-[34px]">
                  Mahakumbh 2025
                </h4>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">
                  Capturing one of the world’s largest spiritual gatherings through aerial visuals,
                  documentary-style filming, and emotional storytelling.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Documentary", "Government", "Cultural"].map((tag) => (
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
        </motion.div>
      </div>
    </section>
  );
}