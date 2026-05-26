import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="px-4 py-10 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl rounded-[24px] bg-neutral-950 px-5 py-8 text-white dark:bg-white dark:text-black sm:px-6 sm:py-10 md:rounded-[32px] md:px-12 md:py-16">
        <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-white/70 dark:text-black/60">
          Start a project
        </p>

        <h2 className="max-w-3xl text-[30px] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-[36px] md:text-5xl">
          Let’s turn Raven Rows into a cleaner, more premium brand experience online.
        </h2>

        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/75 dark:text-black/70 md:mt-5 md:leading-8">
          Build the page with a white-first visual system, cinematic image blocks, stronger RR
          branding, and cleaner section hierarchy.
        </p>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
          <Button className="h-12 w-full rounded-full bg-white px-6 text-sm text-black hover:bg-neutral-200 dark:bg-black dark:text-white dark:hover:bg-neutral-800">
            Get a Film Quote
          </Button>

          <Button
            variant="outline"
            className="h-12 w-full rounded-full border-white/20 bg-transparent px-6 text-sm text-white hover:bg-white/10 dark:border-black/20 dark:text-black dark:hover:bg-black/10"
          >
            Get an Event Quote
          </Button>
        </div>
      </div>
    </section>
  );
}