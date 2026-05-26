import { ArrowUpRight, Play, Clapperboard, Camera, Music4, Film, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const filmServices = [
  {
    title: "Documentary Films",
    description:
      "Impactful documentaries capturing culture, real stories, faith, social initiatives, and large-scale experiences with cinematic excellence.",
    icon: Film,
    accent: "from-teal-400/20 to-teal-500/5",
  },
  {
    title: "Commercial Ad Films",
    description:
      "Creative advertising films designed to build identity, emotional connection, and high-value brand perception.",
    icon: Sparkles,
    accent: "from-violet-400/20 to-violet-500/5",
  },
  {
    title: "Sports Films",
    description:
      "Dynamic visual storytelling around athletes, tournaments, fan culture, match moments, and sports energy.",
    icon: Camera,
    accent: "from-orange-400/20 to-orange-500/5",
  },
  {
    title: "Performance Visuals",
    description:
      "Concert aftermovies, artist-focused filming, stage visuals, and immersive entertainment storytelling.",
    icon: Music4,
    accent: "from-fuchsia-400/20 to-fuchsia-500/5",
  },
  {
    title: "Digital Content",
    description:
      "Reels, campaign edits, motion-led content, short-form storytelling, and creative social-first production.",
    icon: Clapperboard,
    accent: "from-cyan-400/20 to-cyan-500/5",
  },
];

const featuredWork = [
  {
    title: "Mahakumbh 2025",
    description:
      "Cinematic storytelling, aerial visuals, documentary-style production, and emotional narratives reflecting the spirit of faith and culture.",
    tags: ["Documentary", "Government", "Cultural"],
    image: "/images/mahakumbh.jpg",
  },
  {
    title: "Sports Documentation",
    description:
      "Visually engaging sports content built around cricket leagues, outreach programs, sports talent hunts, and stadium experiences.",
    tags: ["Sports", "Live", "Dynamic"],
    image: "/images/event-world.jpg",
  },
  {
    title: "Concert Visuals",
    description:
      "Immersive visual experiences for concerts and entertainment through cinematic filming, crowd coverage, and artist-focused storytelling.",
    tags: ["Concert", "Artist", "Live"],
    image: "/images/concert.jpg",
  },
];

export function FilmWorld() {
  return (
    <section id="film" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-[#060606] text-white shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
        <div className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_30%)]" />
          <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative grid gap-8 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.26em] text-white/70">
                <Play className="h-3.5 w-3.5" />
                Film & Production Division
              </div>

              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.07em] md:text-6xl xl:text-7xl">
                We don’t just create videos.
                <span className="mt-2 block text-white/70">We create emotions.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                At Raven Rows, filmmaking is more than production — it is storytelling with purpose.
                We combine cinematic visuals, creative direction, and emotional depth to create films
                that connect with audiences and leave a lasting impact. [file:1]
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/58">
                From documentaries and commercial campaigns to sports storytelling and branded content,
                we bring ideas to life through powerful visual narratives. [file:1]
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button className="h-12 rounded-full bg-white px-6 text-black hover:bg-white/90">
                  Get a Film Quote
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-white/15 bg-white/[0.03] px-6 text-white hover:bg-white/[0.08]"
                >
                  Explore Featured Work
                </Button>
              </div>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-[30px] border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(0,0,0,0.76), rgba(0,0,0,0.18)), url('/images/mahakumbh.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_25%)]" />

              <div className="relative flex h-full flex-col justify-between p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/70 backdrop-blur">
                    Featured Project
                  </div>
                  <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur transition hover:scale-105">
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                    Mahakumbh 2025
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/80 md:text-base">
                    Raven Rows documented and produced visual content for Mahakumbh 2025, one of the
                    world’s largest spiritual and cultural gatherings, through cinematic storytelling,
                    aerial visuals, documentary-style production, and emotional narratives. [file:1]
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Documentary", "Government", "Cultural"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12 lg:p-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-white/45">
                What we create
              </p>
              <h3 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                Storytelling through cinema.
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base">
              Our production division crafts visually compelling stories that inspire, engage, and
              elevate brands. Every frame is shaped with emotion, authenticity, and creativity. [file:1]
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {filmServices.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] text-white shadow-none transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80`} />
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_28%)]" />

                  <CardContent className="relative p-7">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/10 bg-black/20 backdrop-blur">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h4 className="text-[28px] font-semibold leading-[1.15] tracking-[-0.04em]">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-base leading-8 text-white/65">
                      {item.description}
                    </p>

                    <div className="mt-8 h-px w-full bg-white/10" />
                    <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-white/38">
                      Raven Rows Production
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-14">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.22em] text-white/45">
                  Featured work
                </p>
                <h3 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  Selected visual stories.
                </h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                From cultural documentaries to sports storytelling and immersive concert visuals,
                Raven Rows creates visual experiences that feel cinematic, emotional, and memorable. [file:1]
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="group relative min-h-[460px] overflow-hidden rounded-[32px] border border-white/10">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0,0,0,0.76), rgba(0,0,0,0.18)), url('/images/mahakumbh.jpg')",
                  }}
                />
                <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {featuredWork[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                    {featuredWork[0].title}
                  </h4>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 md:text-base">
                    {featuredWork[0].description} [file:1]
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {featuredWork.slice(1).map((item) => (
                  <div
                    key={item.title}
                    className="group relative min-h-[217px] overflow-hidden rounded-[28px] border border-white/10"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.74), rgba(0,0,0,0.15)), url('${item.image}')`,
                      }}
                    />
                    <div className="relative flex h-full flex-col justify-end p-7">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-2xl font-semibold tracking-[-0.04em]">
                        {item.title}
                      </h4>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/78">
                        {item.description} [file:1]
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04]">
            <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.22em] text-white/45">
                  Final frame
                </p>
                <h3 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
                  Ready to bring your vision to life through cinema.
                </h3>
              </div>

              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <p className="max-w-2xl text-base leading-8 text-white/62">
                  Whether it’s a documentary, brand film, sports story, or digital campaign,
                  Raven Rows is ready to create visual work that feels premium, human, and unforgettable. [file:1]
                </p>

                <Button className="h-12 rounded-full bg-white px-6 text-black hover:bg-white/90">
                  Tell us your story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}