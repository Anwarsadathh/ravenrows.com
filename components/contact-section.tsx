"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Globe,
  Play,
  Zap,
} from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-14 md:px-6 md:py-24">
      <div className="section-shell overflow-hidden rounded-[32px] md:rounded-[36px] bg-[linear-gradient(135deg,#0b1220_0%,#111827_42%,#0f766e_100%)] text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)]">
        <div className="grid gap-8 px-6 py-7 sm:px-7 sm:py-8 md:px-10 md:py-12 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-10 lg:px-12 lg:py-16">
          {/* Left */}
          <div className="relative max-w-3xl">
            {/* Mobile RR + circles + dotted line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[240px] lg:hidden">
              <div className="absolute left-1/2 top-4 -translate-x-1/2 select-none text-[140px] font-semibold leading-none tracking-[-0.1em] text-white/[0.04] sm:text-[180px]">
                RR
              </div>

              <div className="absolute right-2 top-2 h-28 w-28 rounded-full border border-white/[0.08]" />
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-white/[0.06]" />
              <div className="absolute right-10 top-10 h-12 w-12 rounded-full border border-white/[0.05]" />

              <div className="absolute left-[-10px] bottom-2 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />
              <div className="absolute right-[-10px] top-8 h-24 w-24 rounded-full bg-teal-300/10 blur-2xl" />

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 360 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 194C64 162 106 170 142 136C174 106 208 86 266 90"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="5 9"
                />
                <circle cx="22" cy="194" r="3.5" fill="rgba(45,212,191,0.75)" />
                <circle cx="142" cy="136" r="3.5" fill="rgba(45,212,191,0.45)" />
                <circle cx="266" cy="90" r="3.5" fill="rgba(45,212,191,0.75)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-[320px] sm:max-w-[420px] md:max-w-none">
              {/* Custom label */}
              <div className="mb-6 inline-flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.42em] text-white/30">
                  Raven Rows
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-teal-300/80" />
                  <span className="text-[11px] uppercase tracking-[0.38em] text-white/62">
                    Contact Desk
                  </span>
                  <span className="h-px w-10 bg-white/15" />
                </div>
              </div>

              <h2 className="max-w-[9ch] text-[36px] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
                Let’s create something unforgettable.
              </h2>

              <p className="mt-4 max-w-[26rem] text-[14px] leading-7 text-white/72 sm:text-[15px] sm:leading-8">
                Whether it’s a film, event, or campaign, Raven Rows is ready to bring your vision to life.
              </p>
            </div>

            {/* Mobile project card */}
            <div className="relative z-10 mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-white/8 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:hidden">
              <div className="absolute right-[-20px] top-[-20px] h-24 w-24 rounded-full bg-teal-300/20 blur-2xl" />
              <div className="absolute bottom-[-10px] left-[-10px] h-20 w-20 rounded-full bg-cyan-300/10 blur-2xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="max-w-[15rem]">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">
                    Start a project
                  </p>
                  <h3 className="mt-2 text-[22px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                    Film, events, and campaigns built with impact.
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
                  <Play className="h-4 w-4 fill-white text-white" />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm text-teal-300">
                <span>Tell us your vision</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            {/* Contact info */}
            <div className="relative z-10 mt-6 grid gap-3 sm:mt-8">
              <a
                href="mailto:ravenrows@gmail.com"
                className="group flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                  <Mail className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Email
                  </p>
                  <p className="truncate text-[14px] sm:text-[15px]">
                    ravenrows@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+918840654061"
                className="group flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                  <Phone className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Phone
                  </p>
                  <p className="truncate text-[14px] sm:text-[15px]">
                    +91 88406 54061
                  </p>
                </div>
              </a>

              <a
                href="https://www.ravenrows.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                  <Globe className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Website
                  </p>
                  <p className="truncate text-[14px] sm:text-[15px]">
                    www.ravenrows.com
                  </p>
                </div>
              </a>
            </div>

            {/* CTA buttons */}
            <div className="relative z-10 mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              <Button className="h-12 rounded-full bg-white px-6 text-black hover:bg-white/90">
                Get a Film Quote
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10"
              >
                Get an Event Quote
              </Button>
            </div>
          </div>

          {/* Right desktop visual */}
          <div className="relative hidden min-h-[480px] lg:block">
            <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />
            <div className="absolute bottom-8 left-10 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="select-none text-[220px] font-semibold leading-none tracking-[-0.08em] text-white/[0.05]">
                RR
              </div>
            </div>

            <div className="absolute right-16 top-16 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute right-24 top-24 h-48 w-48 rounded-full border border-white/8" />
            <div className="absolute right-32 top-32 h-32 w-32 rounded-full border border-white/6" />

            <div className="absolute left-6 top-10 w-[260px] rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/50">
                Start a project
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                Film, events, and campaigns built with impact.
              </h3>
              <div className="mt-5 flex items-center gap-2 text-sm text-teal-300">
                <span>Tell us your vision</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="absolute bottom-8 right-8 w-[240px] rounded-[28px] border border-white/10 bg-black/15 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/50">
                Raven Rows
              </p>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-[28px] font-semibold leading-none tracking-[-0.05em] text-white">
                    360°
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                    Creative execution
                  </p>
                </div>
                <div className="h-px w-full bg-white/10" />
                <p className="text-sm leading-7 text-white/70">
                  Strategy, production, audience engagement, and on-ground delivery in one seamless flow.
                </p>
              </div>
            </div>

<div className="absolute bottom-20 left-8 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 backdrop-blur-sm">
  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.24em] text-white/58">
    <span className="h-1.5 w-1.5 rounded-full bg-teal-300/80" />
    Creative Flow
  </div>
</div>

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80 380C140 290 220 320 270 240C320 160 370 130 430 150"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="6 10"
              />
              <circle cx="80" cy="380" r="4" fill="rgba(45,212,191,0.85)" />
              <circle cx="270" cy="240" r="4" fill="rgba(45,212,191,0.5)" />
              <circle cx="430" cy="150" r="4" fill="rgba(45,212,191,0.85)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}