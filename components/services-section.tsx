import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Film & Production",
    desc: "Documentaries, ad films, branded narratives, cultural storytelling, and visual production with cinematic depth.",
  },
  {
    title: "Events & Experiences",
    desc: "Large-scale events, concerts, activations, experiential campaigns, and production management that feel seamless on-ground.",
  },
  {
    title: "Sports & Outreach",
    desc: "Cricket leagues, talent hunts, sports campaigns, school outreach, and audience engagement built for scale and energy.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            Core services
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Structured sections, standard colors, and a much stronger premium feel.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="rounded-[28px] border-black/5 bg-white shadow-none dark:border-white/10 dark:bg-neutral-950">
              <CardContent className="p-7">
                <div className="mb-6 h-12 w-12 rounded-2xl bg-neutral-100 dark:bg-white/10" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}