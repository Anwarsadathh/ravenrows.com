"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:color-mix(in_srgb,var(--background)_82%,transparent)] backdrop-blur-2xl dark:border-white/10">
      <div className="section-shell flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
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

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/film"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Film World
          </Link>
          <Link
            href="/events"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Event World
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            asChild
            className="h-11 rounded-full bg-[var(--foreground)] px-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white hover:opacity-90 dark:bg-white dark:text-black"
          >
            <Link href="/#contact">Start a Project</Link>
          </Button>
        </div>

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
                    <Image
                      src="/images/logo.png"
                      alt="Raven Rows"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-1">
                  <Link
                    href="/film"
                    className="rounded-2xl px-3 py-3 text-base font-medium text-[var(--foreground)] transition hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    Film World
                  </Link>
                  <Link
                    href="/events"
                    className="rounded-2xl px-3 py-3 text-base font-medium text-[var(--foreground)] transition hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    Event World
                  </Link>
                  <Link
                    href="/#contact"
                    className="rounded-2xl px-3 py-3 text-base font-medium text-[var(--foreground)] transition hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    Contact
                  </Link>
                </div>

                <div className="mt-auto pb-6 pt-8">
                  <Button
                    asChild
                    className="h-12 w-full rounded-full bg-[var(--foreground)] text-[11px] font-medium uppercase tracking-[0.22em] text-white hover:opacity-90 dark:bg-white dark:text-black"
                  >
                    <Link href="/#contact">Start a Project</Link>
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