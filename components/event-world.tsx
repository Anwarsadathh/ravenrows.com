"use client";

import {
  ArrowUpRight,
  Zap,
  Mic2,
  Trophy,
  Gamepad2,
  Megaphone,
  Camera,
} from "lucide-react";

const eventServices = [
  {
    icon: Mic2,
    num: "01",
    title: "Concert Management",
    desc: "End-to-end planning and execution for live concerts, artist performances, and entertainment experiences.",
    accent: "#7c3aed",
    items: ["Stage Production", "Artist Management", "Lighting & Sound", "Crowd Management"],
  },
  {
    icon: Trophy,
    num: "02",
    title: "Sports League Management",
    desc: "Comprehensive tournament operations, fan engagement, branding, promotions, and league management.",
    accent: "#06b6d4",
    items: ["Tournament Ops", "Team Coordination", "Fan Engagement", "Broadcast Support"],
  },
  {
    icon: Gamepad2,
    num: "03",
    title: "Gaming & Youth Events",
    desc: "Interactive gaming events and youth-focused entertainment experiences designed for participation and energy.",
    accent: "#10b981",
    items: ["Gaming Tournaments", "Live Streaming", "Stage Setup", "Audience Activities"],
  },
  {
    icon: Megaphone,
    num: "04",
    title: "Outreach Campaigns",
    desc: "School activations, college campaigns, community programs, and on-ground promotional experiences.",
    accent: "#f97316",
    items: ["School Activations", "College Campaigns", "Influencer Outreach", "Community Programs"],
  },
  {
    icon: Camera,
    num: "05",
    title: "Event Coverage",
    desc: "Real-time content production, reels, photography, videography, highlights, and social media management.",
    accent: "#e879f9",
    items: ["Live Coverage", "Social Media", "Reels & Highlights", "Photography"],
  },
];

const featuredCases = [
  {
    title: "Armaan Malik Live Concert",
    venue: "Ekana Stadium, Lucknow",
    desc: "Successfully organized and executed a large-scale entertainment experience with premium production quality and audience engagement.",
    color: "#7c3aed",
    size: "large",
  },
  {
    title: "King Live Concert",
    venue: "Full Production Management",
    desc: "Complete event production including stage design, lighting, sound, artist hospitality, crowd engagement, and venue operations.",
    color: "#06b6d4",
    size: "medium",
  },
  {
    title: "Doctor's Cricket League — Own IP",
    venue: "Season 1: 8 Hospitals → Season 2: 16 Hospitals",
    desc: "Raven Rows conceptualized and created Doctor’s Cricket League, a unique sports and networking platform for the medical community with strong season-over-season growth.",
    color: "#f97316",
    size: "large",
  },
  {
    title: "UP T20 & WPL Campaigns",
    venue: "40K+ Audience Reach",
    desc: "Sports outreach campaigns, audience engagement, social media coverage, and promotional support for major cricket tournaments.",
    color: "#10b981",
    size: "small",
  },
];

const listCases = [
  {
    title: "MC Square Live",
    venue: "Lulu Mall, Lucknow",
  },
  {
    title: "Free Fire Event",
    venue: "Ekana Indoor Stadium",
  },
  {
    title: "Delhi Pradesh Premier League",
    venue: "Season-Long Partnership",
  },
  {
    title: "UP Doctors League — Season 3",
    venue: "Lucknow",
  },
  {
    title: "Jabalpur Royal Lions — MPL",
    venue: "3-Year Collaboration",
  },
  {
    title: "Sports School Talent Hunt",
    venue: "Lucknow · Jammu · Gorakhpur · Noida · Purnea",
  },
  {
    title: "Riva Kenko Pharma",
    venue: "Outreach & Digital Campaigns",
  },
];

const stats = [
  { num: "40K+", label: "Fans Reached", color: "bg-violet-500" },
  { num: "8→16", label: "DCL Growth", color: "bg-cyan-500" },
  { num: "3yr", label: "Collaborations", color: "bg-orange-500" },
];

export function EventWorld() {
  return (
    <section id="events" className="relative overflow-hidden px-4 py-16 md:px-6 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fcfcfb_0%,#f7f8fb_50%,#f9f6ff_100%)]" />
      <div className="absolute left-[-120px] top-[80px] -z-10 h-[320px] w-[320px] rounded-full bg-violet-300/10 blur-3xl" />
      <div className="absolute right-[-80px] top-[180px] -z-10 h-[280px] w-[280px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-[-140px] left-[35%] -z-10 h-[340px] w-[340px] rounded-full bg-orange-200/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* HERO */}
        <div className="grid gap-12 border-b border-black/[0.06] pb-16 pt-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/85 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-neutral-500 shadow-sm backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5 text-teal-600" />
              Events & Experiences
            </div>

           <h2 className="max-w-[7.6ch] text-[46px] font-semibold leading-[0.92] tracking-[-0.06em] text-neutral-950 sm:text-[52px] md:text-[56px] lg:text-[60px] xl:text-[64px]">
              We create
              <span className="block">experiences</span>
            <span className="mt-1 block text-neutral-300">people remember.</span>
            </h2>

            <p className="mt-6 max-w-[33rem] text-[15px] leading-8 text-neutral-600 md:text-[16px]">
              Raven Rows specializes in large-scale event production, sports activations,
              live entertainment, outreach campaigns, and experiential marketing built
              with planning, energy, and audience connection.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-full bg-neutral-950 px-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-neutral-800"
              >
                Get an Event Quote
              </a>
              <a
                href="#event-cases"
                className="inline-flex h-11 items-center rounded-full border border-black/[0.08] bg-white/85 px-6 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-900 transition hover:bg-neutral-50"
              >
                Explore Major Events
              </a>
            </div>
          </div>

         <div className="grid gap-5 lg:grid-cols-[1.22fr_0.78fr]">
           <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-black/[0.05] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 hover:scale-[1.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(8,12,24,0.76), rgba(8,12,24,0.14)), url('/images/concert.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.16),transparent_30%)]" />

              <div className="relative flex h-full flex-col justify-between p-7 text-white">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                  <span className="text-[10px] uppercase tracking-[0.24em] text-white/80">
                    Major events
                  </span>
                </div>

                <div>
                  <h3 className="max-w-[13ch] text-[26px] font-semibold leading-[1.06] tracking-[-0.04em] md:text-[34px]">
                    Concerts, leagues, gaming events, and campaigns at scale.
                  </h3>
                  <p className="mt-4 max-w-md text-[14px] leading-7 text-white/82">
                    From sold-out stadium concerts to sports leagues, gaming activations,
                    and outreach campaigns, Raven Rows builds experiences that carry
                    energy, scale, and audience impact.
                  </p>
                </div>
              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[26px] border border-black/[0.05] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.035)]"
                >
                  <div className={`mb-3 h-1.5 w-16 rounded-full ${item.color}`} />
                  <p className="text-[32px] font-semibold tracking-[-0.05em] text-neutral-950">
                    {item.num}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                    {item.label}
                  </p>
                </div>
              ))}

              <div className="relative overflow-hidden rounded-[26px] border border-black/[0.05] bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#0f766e_100%)] p-5 text-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:col-span-3 lg:col-span-1">
                <div className="absolute right-[-18px] top-[-18px] h-24 w-24 rounded-full bg-teal-300/20 blur-2xl" />
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">
                  Raven Rows
                </p>
                <p className="mt-3 text-[22px] font-semibold leading-[1.08] tracking-[-0.04em]">
                  Events that carry scale and audience energy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className="py-16 md:py-20">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-neutral-400">
                Event services
              </p>
              <h3 className="text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-neutral-950 md:text-6xl">
                Experience design
                <span className="block text-neutral-400">with execution depth.</span>
              </h3>
            </div>
            <p className="max-w-xl text-[15px] leading-8 text-neutral-600">
              Strategic planning, flawless coordination, creative production, and audience
              engagement — from concerts and leagues to outreach and digital coverage.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-12">
            {/* Featured service */}
            <div className="xl:col-span-5">
              <div className="relative overflow-hidden rounded-[34px] border border-black/[0.06] bg-[linear-gradient(135deg,#ffffff_0%,#f7f8fc_56%,#eefcf7_100%)] p-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full bg-violet-300/15 blur-3xl" />
                <div className="absolute bottom-[-20px] left-[-20px] h-28 w-28 rounded-full bg-teal-300/10 blur-3xl" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-400">
                      Signature service · 01
                    </p>
                    <h4 className="mt-3 max-w-[10ch] text-[34px] font-semibold leading-[1.02] tracking-[-0.05em] text-neutral-950 md:text-[42px]">
                      Concert Management
                    </h4>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.05]">
                    <Mic2 className="h-5 w-5 text-violet-600" />
                  </div>
                </div>

                <p className="mt-6 max-w-md text-[15px] leading-8 text-neutral-600">
                  End-to-end planning and execution for live concerts, artist performances,
                  and entertainment experiences with seamless delivery and strong audience connection.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {eventServices[0].items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/[0.05] bg-white/80 px-4 py-3 text-sm text-neutral-700 shadow-[0_8px_20px_rgba(15,23,42,0.03)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service list */}
            <div className="space-y-4 xl:col-span-3">
              {eventServices.slice(1, 4).map(({ icon: Icon, num, title, desc, accent }) => (
                <div
                  key={title}
                  className="group border-b border-black/[0.06] pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${accent}12`,
                        border: `1px solid ${accent}20`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: accent }} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[10px] uppercase tracking-[0.22em]"
                          style={{ color: accent }}
                        >
                          {num}
                        </span>
                        <div className="h-px flex-1 bg-black/[0.06]" />
                      </div>

                      <h4 className="mt-3 text-[24px] font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-950">
                        {title}
                      </h4>
                      <p className="mt-2 text-[14px] leading-7 text-neutral-600">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Layered visual / info block */}
            <div className="xl:col-span-4">
              <div className="relative min-h-[420px] overflow-hidden rounded-[34px] bg-[linear-gradient(145deg,#0b1220_0%,#111827_40%,#0f766e_100%)] p-7 text-white shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.18),transparent_30%)]" />
                <div className="absolute right-8 top-8 h-36 w-36 rounded-full border border-white/10" />
                <div className="absolute right-16 top-16 h-20 w-20 rounded-full border border-white/10" />
                <div className="absolute left-8 bottom-10 text-[160px] font-semibold leading-none tracking-[-0.1em] text-white/[0.04]">
                  RR
                </div>

                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">
                    Event coverage · 05
                  </p>
                  <h4 className="mt-3 max-w-[11ch] text-[30px] font-semibold leading-[1.04] tracking-[-0.04em]">
                    Real-time stories for live moments.
                  </h4>
                  <p className="mt-4 max-w-[28ch] text-[14px] leading-7 text-white/78">
                    Reels, highlights, videography, photography, and social-first content management
                    designed to keep event energy moving online and on-ground.
                  </p>
                </div>

                <div className="relative mt-8 space-y-3">
                  {eventServices[4].items.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/82 backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.24em] text-white/58">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-300/80" />
                    Creative Flow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDIES */}
        <div id="event-cases" className="border-t border-black/[0.06] py-16 md:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-neutral-400">
                Major projects
              </p>
              <h3 className="text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-neutral-950 md:text-6xl">
                Case studies
                <span className="block text-neutral-400">at scale.</span>
              </h3>
            </div>
            <p className="max-w-xl text-[15px] leading-8 text-neutral-600">
              Concerts, cricket leagues, gaming events, outreach campaigns, and branded
              activations executed with premium quality and audience-first thinking.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-12">
            <div className="space-y-6 xl:col-span-8">
              {featuredCases.map((item, idx) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[32px] border border-black/[0.06] bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-8 ${
                    idx % 2 === 0 ? "md:ml-0" : "md:ml-12"
                  }`}
                >
                  <div
                    className="mb-5 h-1.5 w-16 rounded-full"
                    style={{ background: item.color }}
                  />

                  <div className="grid gap-5 md:grid-cols-[1fr_0.78fr] md:items-start">
                    <div>
                      <h4 className="max-w-[15ch] text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-neutral-950 md:text-[36px]">
                        {item.title}
                      </h4>
                      <p
                        className="mt-3 text-[11px] uppercase tracking-[0.22em]"
                        style={{ color: item.color }}
                      >
                        {item.venue}
                      </p>
                    </div>

                    <div>
                      <p className="text-[14px] leading-7 text-neutral-600">
                        {item.desc}
                      </p>
                      <div className="mt-6 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-neutral-400">
                        View project
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="xl:col-span-4">
              <div className="sticky top-24 rounded-[32px] border border-black/[0.06] bg-[linear-gradient(180deg,#ffffff_0%,#fafbfc_100%)] p-6 shadow-[0_12px_35px_rgba(15,23,42,0.04)] md:p-7">
                <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-400">
                  Additional projects
                </p>

                <div className="mt-6 space-y-5">
                  {listCases.map((item, index) => (
                    <div
                      key={item.title}
                      className="border-b border-black/[0.05] pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-neutral-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h5 className="text-[18px] font-semibold leading-[1.15] tracking-[-0.03em] text-neutral-950">
                            {item.title}
                          </h5>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                            {item.venue}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA BAND */}
        <div className="pb-4 pt-4 md:pt-6">
          <div className="relative overflow-hidden rounded-[34px] border border-black/[0.06] bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_40%,#f3f0ff_100%)] px-8 py-8 shadow-[0_14px_35px_rgba(15,23,42,0.05)] md:px-10 md:py-10">
            <div className="absolute right-[-30px] top-[-30px] h-32 w-32 rounded-full bg-violet-300/12 blur-3xl" />
            <div className="absolute left-[-30px] bottom-[-30px] h-32 w-32 rounded-full bg-cyan-300/12 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.22em] text-neutral-400">
                  Final call
                </p>
                <p className="max-w-[18ch] text-[30px] font-semibold leading-[1.02] tracking-[-0.05em] text-neutral-950 md:text-[40px]">
                  Ready to build the next unforgettable experience?
                </p>
              </div>

              <div className="max-w-2xl">
                <p className="text-[15px] leading-8 text-neutral-600">
                  Whether it’s a concert, sports league, gaming event, or outreach campaign,
                  Raven Rows is ready to build the experience.
                </p>

                <div className="mt-5">
                  <a
                    href="#contact"
                    className="inline-flex h-11 items-center rounded-full bg-neutral-950 px-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-neutral-800"
                  >
                    Tell us your vision
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}