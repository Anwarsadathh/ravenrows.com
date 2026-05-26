export function FeaturedSection() {
  return (
    <section id="featured" className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[30px] border border-black/5 bg-neutral-50 p-8 dark:border-white/10 dark:bg-white/5 md:p-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            Featured work
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Big stories deserve a calm, high-end interface.
          </h2>
          <p className="mt-6 max-w-xl leading-8 text-neutral-600 dark:text-neutral-300">
            Your content already has scale — Mahakumbh, stadium concerts, cricket leagues, outreach campaigns. The UI should frame that work with confidence using whitespace, stronger typography, and better image treatment.
          </p>
        </div>

        <div
          className="min-h-[420px] rounded-[30px] border border-black/5 dark:border-white/10"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(15,23,42,0.58), rgba(15,23,42,0.12)), url('/images/split-card-bg.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>
    </section>
  );
}