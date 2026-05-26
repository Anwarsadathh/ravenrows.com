"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SplitHero() {
  return (
    <section className="px-4 pb-6 pt-6 md:px-6 md:pb-10 md:pt-8">
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
            Raven Rows is a full-service creative agency specializing in films, live events,
            sports experiences, outreach campaigns, and large-scale production.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)] lg:rounded-[36px] lg:grid-cols-2"
      >
        <div
          className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden p-5 text-white sm:min-h-[410px] sm:p-7 md:min-h-[460px] md:p-12"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.84), rgba(0,0,0,0.18)), url('/images/film-world.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_30%)]" />

          <div className="relative z-10 max-w-[88%] sm:max-w-md">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/65 sm:text-[11px]">
              Film & Production
            </p>
            <h2 className="mt-3 max-w-[8ch] text-[34px] font-semibold leading-[0.92] tracking-[-0.07em] sm:max-w-lg sm:text-[42px] md:mt-4 md:text-6xl md:leading-[0.95]">
              Films. Stories. Emotions.
            </h2>
            <p className="mt-4 max-w-[18rem] text-[13px] leading-6 text-white/78 sm:max-w-sm sm:text-sm sm:leading-7 md:mt-5 md:max-w-md md:text-base">
              Step into the cinematic world of Raven Rows where stories are crafted
              with emotion, creativity, and visual excellence.
            </p>
          </div>

          <div className="relative z-10 mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[10rem] text-[13px] leading-6 text-white/58 sm:max-w-[12rem] sm:text-sm">
              We don’t shoot videos. We tell stories.
            </p>

            <Button
              asChild
              className="h-11 w-full rounded-full bg-white px-5 text-black hover:bg-white/90 sm:w-auto sm:min-w-[170px] sm:px-6"
            >
              <Link href="/film" className="flex items-center justify-center">
                Enter Film World <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div
          className="group relative flex min-h-[360px] flex-col justify-between overflow-hidden p-5 text-white sm:min-h-[410px] sm:p-7 md:min-h-[460px] md:p-12"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(4,8,20,0.84), rgba(20,20,40,0.16)), url('/images/event-world.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.12),transparent_35%)]" />

          <div className="relative z-10 max-w-[88%] sm:max-w-md">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/65 sm:text-[11px]">
              Events & Experiences
            </p>
            <h2 className="mt-3 max-w-[8ch] text-[34px] font-semibold leading-[0.92] tracking-[-0.07em] sm:max-w-lg sm:text-[42px] md:mt-4 md:text-6xl md:leading-[0.95]">
              Events. Energy. Experiences.
            </h2>
            <p className="mt-4 max-w-[18rem] text-[13px] leading-6 text-white/78 sm:max-w-sm sm:text-sm sm:leading-7 md:mt-5 md:max-w-md md:text-base">
              From stadium concerts and sports leagues to outreach campaigns and gaming activations,
              we create unforgettable moments at scale.
            </p>
          </div>

          <div className="relative z-10 mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[10rem] text-[13px] leading-6 text-white/58 sm:max-w-[12rem] sm:text-sm">
              We create moments people never forget.
            </p>

            <Button
              asChild
              className="h-11 w-full rounded-full bg-white px-5 text-black hover:bg-white/90 sm:w-auto sm:min-w-[175px] sm:px-6"
            >
              <Link href="/events" className="flex items-center justify-center">
                Enter Event World <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}