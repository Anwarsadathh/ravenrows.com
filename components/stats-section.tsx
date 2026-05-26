const stats = [
  { value: "40K+", label: "Fans engaged through major cricket campaigns" },
  { value: "7 Cities", label: "Multi-city outreach events executed" },
  { value: "16 Hospitals", label: "Expanded sports league scale across seasons" },
  { value: "Large Scale", label: "Concerts, stadium shows, and cultural gatherings" },
];

export function StatsSection() {
  return (
    <section id="stats" className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-black/5 bg-white p-8 dark:border-white/10 dark:bg-neutral-950 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl font-semibold tracking-[-0.05em]">{stat.value}</p>
              <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}