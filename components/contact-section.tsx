"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Globe,
  Play,
} from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#08101c_0%,#0d1626_42%,#0d6b64_100%)] px-4 py-10 text-white md:px-6 md:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.12),transparent_28%)]" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="section-shell relative">
        <div className="grid gap-8 py-2 lg:grid-cols-[1fr_0.88fr] lg:items-center lg:gap-8">
          {/* Left */}
          <div className="relative max-w-3xl">
            {/* Mobile background motif */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[180px] lg:hidden">
              <div className="absolute left-1/2 top-1 -translate-x-1/2 select-none text-[110px] font-semibold leading-none tracking-[-0.1em] text-white/[0.04] sm:text-[140px]">
                RR
              </div>

              <div className="absolute right-1 top-1 h-20 w-20 rounded-full border border-white/[0.08]" />
              <div className="absolute right-4 top-4 h-14 w-14 rounded-full border border-white/[0.06]" />

              <div className="absolute left-[-8px] bottom-3 h-16 w-16 rounded-full bg-cyan-300/10 blur-2xl" />
              <div className="absolute right-[-8px] top-7 h-16 w-16 rounded-full bg-teal-300/10 blur-2xl" />

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 360 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 146C70 122 102 126 138 102C174 80 204 66 254 68"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="5 9"
                />
                <circle cx="24" cy="146" r="3.5" fill="rgba(45,212,191,0.75)" />
                <circle cx="138" cy="102" r="3.5" fill="rgba(45,212,191,0.45)" />
                <circle cx="254" cy="68" r="3.5" fill="rgba(45,212,191,0.75)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-[560px]">
              <div className="mb-4 inline-flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.38em] text-white/28">
                  Raven Rows
                </span>
                <div className="mt-2 flex items-center gap-3">
                  <span className="h-[6px] w-[6px] rounded-full bg-teal-300/80" />
                  <span className="text-[10px] uppercase tracking-[0.34em] text-white/60">
                    Contact Desk
                  </span>
                  <span className="h-px w-8 bg-white/15" />
                </div>
              </div>

              <h2 className="max-w-[10ch] text-[30px] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-[38px] md:text-[48px]">
                Let’s create something unforgettable.
              </h2>

              <p className="mt-3 max-w-[30rem] text-[14px] leading-7 text-white/72 sm:text-[15px]">
                Whether it’s a film, event, or campaign, Raven Rows is ready to bring your vision to life.
              </p>
            </div>

            {/* Mobile project card */}
            <div className="relative z-10 mt-5 overflow-hidden rounded-[22px] border border-white/10 bg-white/8 p-4 shadow-[0_14px_34px_rgba(0,0,0,0.16)] backdrop-blur-xl lg:hidden">
              <div className="absolute right-[-18px] top-[-18px] h-20 w-20 rounded-full bg-teal-300/20 blur-2xl" />
              <div className="absolute bottom-[-8px] left-[-8px] h-16 w-16 rounded-full bg-cyan-300/10 blur-2xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="max-w-[14rem]">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/52">
                    Start a project
                  </p>
                  <h3 className="mt-2 text-[19px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                    Film, events, and campaigns built with impact.
                  </h3>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
                  <Play className="h-4 w-4 fill-white text-white" />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[13px] text-teal-300">
                <span>Tell us your vision</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            {/* Contact info */}
            <div className="relative z-10 mt-5 grid gap-2.5 sm:mt-6">
              <a
                href="mailto:ravenrows@gmail.com"
                className="group flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                  <Mail className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Email
                  </p>
                  <p className="truncate text-[14px]">ravenrows@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918840654061"
                className="group flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                  <Phone className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Phone
                  </p>
                  <p className="truncate text-[14px]">+91 88406 54061</p>
                </div>
              </a>

              <a
                href="https://www.ravenrows.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
                  <Globe className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Website
                  </p>
                  <p className="truncate text-[14px]">www.ravenrows.com</p>
                </div>
              </a>
            </div>

           
          </div>

          {/* Right desktop visual */}
          <div className="relative hidden min-h-[360px] lg:block">
            <div className="absolute right-8 top-8 h-44 w-44 rounded-full bg-teal-400/18 blur-3xl" />
            <div className="absolute bottom-6 left-8 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="select-none text-[170px] font-semibold leading-none tracking-[-0.08em] text-white/[0.05]">
                RR
              </div>
            </div>

            <div className="absolute right-12 top-12 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute right-20 top-20 h-36 w-36 rounded-full border border-white/8" />
            <div className="absolute right-28 top-28 h-24 w-24 rounded-full border border-white/6" />

            <div className="absolute left-4 top-8 w-[230px] rounded-[24px] border border-white/10 bg-white/8 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                Start a project
              </p>
              <h3 className="mt-2 text-[21px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">
                Film, events, and campaigns built with impact.
              </h3>
              <div className="mt-4 flex items-center gap-2 text-[13px] text-teal-300">
                <span>Tell us your vision</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="absolute bottom-6 right-6 w-[210px] rounded-[24px] border border-white/10 bg-black/15 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                Raven Rows
              </p>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="text-[24px] font-semibold leading-none tracking-[-0.05em] text-white">
                    360°
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Creative execution
                  </p>
                </div>
                <div className="h-px w-full bg-white/10" />
                <p className="text-[13px] leading-6 text-white/70">
                  Strategy, production, audience engagement, and on-ground delivery in one seamless flow.
                </p>
              </div>
            </div>

            <div className="absolute bottom-16 left-6 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.22em] text-white/58">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-300/80" />
                Creative Flow
              </div>
            </div>

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 500 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M72 310C128 238 198 256 248 196C296 138 346 112 412 130"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="6 10"
              />
              <circle cx="72" cy="310" r="4" fill="rgba(45,212,191,0.85)" />
              <circle cx="248" cy="196" r="4" fill="rgba(45,212,191,0.5)" />
              <circle cx="412" cy="130" r="4" fill="rgba(45,212,191,0.85)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}