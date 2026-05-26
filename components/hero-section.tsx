import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-8 md:px-6 md:pb-16 md:pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex justify-center md:justify-start">
          <Badge className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-[11px] tracking-[0.25em] text-neutral-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-neutral-200">
            CINEMATIC STORYTELLING • LIVE EXPERIENCES
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-neutral-950 md:p-12">
            <div className="absolute -right-8 -top-10 text-[170px] font-black leading-none tracking-[-0.08em] text-neutral-100 dark:text-white/5 md:text-[240px]">
              RR
            </div>

            <div className="relative z-10 max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
                Raven Rows Universe
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-neutral-950 dark:text-white md:text-6xl">
                We build films, events, and audience experiences that people remember.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-300 md:text-lg">
                From documentaries and branded content to stadium concerts, sports activations, and outreach campaigns — Raven Rows delivers stories and experiences at scale.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-12 rounded-full bg-neutral-950 px-6 text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                  Get a Project Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-12 rounded-full px-6">
                  <Play className="mr-2 h-4 w-4" /> Explore Work
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/5 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-2xl font-semibold">40K+</p>
                  <p className="text-sm text-neutral-500">Audience reach in major campaigns</p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-2xl font-semibold">Multi-city</p>
                  <p className="text-sm text-neutral-500">Outreach and event execution</p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-2xl font-semibold">Film + Live</p>
                  <p className="text-sm text-neutral-500">Production and on-ground experience</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-black/5 bg-neutral-900 shadow-[0_30px_100px_rgba(0,0,0,0.10)] dark:border-white/10"
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.60), rgba(0,0,0,0.18)), url('/images/hero-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex h-full flex-col justify-between p-8 md:p-10">
              <div className="flex justify-end">
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur">
                  Featured Visual
                </div>
              </div>

              <div className="max-w-md">
                <div className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                  <Sparkles className="mr-2 h-4 w-4" /> Premium Production
                </div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                  A cleaner, more premium visual identity for Raven Rows.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/80">
                  Use cinematic imagery, large spacing, soft surfaces, and a bold RR monogram to create a more elegant brand-first landing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}