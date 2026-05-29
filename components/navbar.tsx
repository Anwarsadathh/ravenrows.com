"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown, Film, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const screenworksItems = [
  { label: "Documentary",        href: "/film#documentary" },
  { label: "Brand Ad Shoot",     href: "/film#brand-ad-shoot" },
  { label: "Product Ad Shoot",   href: "/film#product-ad-shoot" },
  { label: "Photo Shoot",        href: "/film#photo-shoot" },
  { label: "Digital Marketing",  href: "/film#digital-marketing" },
  { label: "Visual Production",  href: "/film#visual-production" },
  { label: "Event After Videos", href: "/film#event-after-videos" },
];

const liveworksItems = [
  { label: "Events End to End Solution",                   href: "/events#events-end-to-end" },
  { label: "Outreach Activation",                          href: "/events#outreach-activation" },
  { label: "Promotional On-Ground Activities",             href: "/events#promotional-activities" },
  { label: "Reaching Target Audience through Activations", href: "/events#target-audience-activations" },
  { label: "Venue Booking",                                href: "/events#collaborations" },
];

export function Navbar() {
  const [screenOpen, setScreenOpen] = useState(false);
  const [liveOpen,   setLiveOpen]   = useState(false);
  const screenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const liveTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [mobileScreenOpen, setMobileScreenOpen] = useState(false);
  const [mobileLiveOpen,   setMobileLiveOpen]   = useState(false);

  const openScreen  = () => { if (screenTimer.current) clearTimeout(screenTimer.current); setScreenOpen(true); };
  const closeScreen = () => { screenTimer.current = setTimeout(() => setScreenOpen(false), 120); };
  const openLive    = () => { if (liveTimer.current)  clearTimeout(liveTimer.current);  setLiveOpen(true); };
  const closeLive   = () => { liveTimer.current  = setTimeout(() => setLiveOpen(false),  120); };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:color-mix(in_srgb,var(--background)_82%,transparent)] backdrop-blur-2xl dark:border-white/10">
      <div className="section-shell flex items-center justify-between px-4 py-3 md:px-6 md:py-4">

        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-[132px] shrink-0 md:h-11 md:w-[148px]">
            <Image
              src="/images/logo.png"
              alt="Raven Rows"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden items-center gap-7 md:flex">

          {/* ScreenWorks */}
          <div
            className="relative"
            onMouseEnter={openScreen}
            onMouseLeave={closeScreen}
          >
            <button className="flex items-center gap-1 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
              ScreenWorks
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", screenOpen && "rotate-180")} />
            </button>

            {screenOpen && (
              <div
                onMouseEnter={openScreen}
                onMouseLeave={closeScreen}
                className="absolute left-1/2 top-full mt-3 w-[230px] -translate-x-1/2 overflow-hidden rounded-[20px] border border-black/[0.07] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.13),0_2px_8px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#1a1a1a]"
              >
                <div className="flex items-center gap-2 border-b border-black/[0.06] bg-white/80 px-4 py-3 dark:border-white/8 dark:bg-white/[0.04]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-500/15">
                    <Film className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40 dark:text-white/40">
                    ScreenWorks
                  </span>
                </div>

                <div className="bg-white p-1.5 dark:bg-[#1a1a1a]">
                  {screenworksItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setScreenOpen(false)}
                      className="group flex items-center gap-2.5 rounded-[12px] px-3 py-2.5 transition-all hover:bg-black/[0.05] dark:hover:bg-white/[0.07]"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-black/20 transition group-hover:bg-teal-500 dark:bg-white/20 dark:group-hover:bg-teal-400" />
                      <span className="text-[13px] font-medium text-black/70 transition group-hover:text-black dark:text-white/65 dark:group-hover:text-white">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* LiveWorks */}
          <div
            className="relative"
            onMouseEnter={openLive}
            onMouseLeave={closeLive}
          >
            <button className="flex items-center gap-1 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
              LiveWorks
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", liveOpen && "rotate-180")} />
            </button>

            {liveOpen && (
              <div
                onMouseEnter={openLive}
                onMouseLeave={closeLive}
                className="absolute left-1/2 top-full mt-3 w-[290px] -translate-x-1/2 overflow-hidden rounded-[20px] border border-black/[0.07] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.13),0_2px_8px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-[#1a1a1a]"
              >
                <div className="flex items-center gap-2 border-b border-black/[0.06] bg-white/80 px-4 py-3 dark:border-white/8 dark:bg-white/[0.04]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/15">
                    <Zap className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40 dark:text-white/40">
                    LiveWorks
                  </span>
                </div>

                <div className="bg-white p-1.5 dark:bg-[#1a1a1a]">
                  {liveworksItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setLiveOpen(false)}
                      className="group flex items-center gap-2.5 rounded-[12px] px-3 py-2.5 transition-all hover:bg-black/[0.05] dark:hover:bg-white/[0.07]"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-black/20 transition group-hover:bg-violet-500 dark:bg-white/20 dark:group-hover:bg-violet-400" />
                      <span className="text-[13px] font-medium text-black/70 transition group-hover:text-black dark:text-white/65 dark:group-hover:text-white">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/our-services" className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Our Services
          </Link>
          <Link href="/#contact" className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            asChild
            className="h-11 rounded-full bg-[var(--foreground)] px-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white hover:opacity-90 dark:bg-white dark:text-black"
          >
            <Link href="/#contact">Enquire Now</Link>
          </Button>
        </div>

        {/* ── Mobile ── */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[var(--foreground)] backdrop-blur-md transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] border-l border-black/10 bg-[var(--background)] px-6 pt-8 dark:border-white/10"
            >
              <div className="flex h-full flex-col">
                <div className="border-b border-black/5 pb-5 dark:border-white/10">
                  <div className="relative h-9 w-[132px]">
                    <Image src="/images/logo.png" alt="Raven Rows" fill className="object-contain object-left" />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-1">

                  {/* ScreenWorks accordion */}
                  <div>
                    <button
                      onClick={() => setMobileScreenOpen((p) => !p)}
                      className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-[var(--foreground)] transition hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      ScreenWorks
                      <ChevronDown className={cn("h-4 w-4 text-black/35 transition-transform duration-200 dark:text-white/35", mobileScreenOpen && "rotate-180")} />
                    </button>

                    {mobileScreenOpen && (
                      <div className="mb-2 ml-2 mt-1 overflow-hidden rounded-[16px] border border-black/[0.07] bg-white shadow-sm dark:border-white/10 dark:bg-[#1e1e1e]">
                        {screenworksItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="group flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium text-black/85 transition-colors first:pt-3 last:pb-3 hover:bg-black/[0.05] hover:text-black dark:text-white/90 dark:hover:bg-white/[0.07] dark:hover:text-white"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-black/20 group-hover:bg-teal-500 dark:bg-white/20 dark:group-hover:bg-teal-400" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* LiveWorks accordion */}
                  <div>
                    <button
                      onClick={() => setMobileLiveOpen((p) => !p)}
                      className="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-[var(--foreground)] transition hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      LiveWorks
                      <ChevronDown className={cn("h-4 w-4 text-black/35 transition-transform duration-200 dark:text-white/35", mobileLiveOpen && "rotate-180")} />
                    </button>

                    {mobileLiveOpen && (
                      <div className="mb-2 ml-2 mt-1 overflow-hidden rounded-[16px] border border-black/[0.07] bg-white shadow-sm dark:border-white/10 dark:bg-[#1e1e1e]">
                        {liveworksItems.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="group flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium text-black/85 transition-colors first:pt-3 last:pb-3 hover:bg-black/[0.05] hover:text-black dark:text-white/90 dark:hover:bg-white/[0.07] dark:hover:text-white"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-black/20 group-hover:bg-violet-500 dark:bg-white/20 dark:group-hover:bg-violet-400" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link href="/our-services" className="rounded-2xl px-3 py-3 text-base font-medium text-[var(--foreground)] transition hover:bg-black/5 dark:hover:bg-white/5">
                    Our Services
                  </Link>
                  <Link href="/#contact" className="rounded-2xl px-3 py-3 text-base font-medium text-[var(--foreground)] transition hover:bg-black/5 dark:hover:bg-white/5">
                    Contact
                  </Link>
                </div>

                <div className="mt-auto pb-6 pt-8">
                  <Button
                    asChild
                    className="h-12 w-full rounded-full bg-[var(--foreground)] text-[11px] font-medium uppercase tracking-[0.22em] text-white hover:opacity-90 dark:bg-white dark:text-black"
                  >
                    <Link href="/#contact">Enquire Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}