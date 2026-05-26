"use client";

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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_78%,transparent)] backdrop-blur-2xl">
      <div className="section-shell flex items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--foreground)] text-sm font-bold text-white dark:bg-white dark:text-black">
            RR
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em]">RAVEN ROWS</p>
            <p className="text-xs text-[var(--muted-foreground)]">Where Stories Takes Flight</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#film" className="text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]">
            Film World
          </a>
          <a href="#events" className="text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]">
            Event World
          </a>
          <a href="#contact" className="text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button className="rounded-full bg-[var(--foreground)] px-6 text-white hover:opacity-90 dark:bg-white dark:text-black">
            Start a Project
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="mt-10 flex flex-col gap-6">
                <a href="#film" className="text-base font-medium">Film World</a>
                <a href="#events" className="text-base font-medium">Event World</a>
                <a href="#contact" className="text-base font-medium">Contact</a>
                <Button className="mt-4 rounded-full">Start a Project</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}