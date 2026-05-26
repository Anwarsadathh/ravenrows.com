export function IntroSection() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-20">
      <div className="section-shell grid gap-6 md:gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="max-w-2xl">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-400">
            Where Stories Take Flight
          </p>

          <h2 className="text-[34px] font-semibold leading-[0.9] tracking-[-0.06em] text-neutral-950 sm:text-[42px] md:text-[56px] md:leading-[0.94] lg:max-w-[12ch] xl:max-w-[13ch]">
            A more cinematic,
            <span className="block text-neutral-400">premium digital</span>
            <span className="block text-neutral-400">presence</span>
            <span className="block text-neutral-950">for Raven Rows.</span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-white/90 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.04)] backdrop-blur-sm sm:rounded-[28px] sm:p-6 md:p-8">
          <div className="absolute right-[-32px] top-[-32px] h-24 w-24 rounded-full bg-neutral-200/60 blur-2xl" />
          <div className="absolute bottom-[-36px] left-[-24px] h-24 w-24 rounded-full bg-neutral-100/80 blur-2xl" />

          <div className="relative">
            <p className="text-[14px] leading-7 text-neutral-600 md:text-[15px] md:leading-8">
              Raven Rows is a full-service creative agency specializing in films, live events,
              sports experiences, outreach campaigns, and large-scale production.
            </p>

            <div className="my-5 h-px w-full bg-black/[0.06]" />

            <p className="text-[14px] leading-7 text-neutral-500 md:text-[15px] md:leading-8">
              The redesign brings forward a richer brand story, stronger project depth,
              and a clear dual-world identity built around film and experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}