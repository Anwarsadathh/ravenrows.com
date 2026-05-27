"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarRange,
  MapPin,
  Mic2,
  Sparkles,
  Trophy,
  Users,
  Gamepad2,
  GraduationCap,
  Flame,
  ImageIcon,
} from "lucide-react";

const featuredEvents = [
  {
    title: "Free Fire MAX India Cup 2025",
    category: "Esports Event",
    location: "Lucknow",
    description:
      "Venue coordination and execution support at Ekana Indoor Stadium for one of India’s biggest esports events, delivered with seamless planning and high-energy on-ground management.",
    tags: ["Esports", "Venue Coordination", "Execution"],
    image: "/images/events/freefire/cover.jpg",
    gallery: [
      "/images/events/freefire/1.jpg",
      "/images/events/freefire/2.jpg",
      "/images/events/freefire/3.jpg",
    ],
    accent: "from-violet-500/25 via-cyan-400/10 to-transparent",
  },
  {
    title: "Armaan Malik Concert",
    category: "Concert Production",
    location: "India",
    description:
      "Premium concert execution built around audience experience, show energy, and strong on-ground coordination for a memorable live entertainment moment.",
    tags: ["Concert", "Live", "Audience Experience"],
    image: "/images/events/armaan-malik/cover.jpg",
    gallery: [
      "/images/events/armaan-malik/1.jpg",
      "/images/events/armaan-malik/2.jpg",
      "/images/events/armaan-malik/3.jpg",
    ],
    accent: "from-orange-500/20 via-pink-400/10 to-transparent",
  },
  {
    title: "Jabalpur Royal Lions Outreach",
    category: "Sports Outreach",
    location: "Gwalior & Indore",
    description:
      "Audience-facing outreach experiences connecting players and fans through school activations, community engagement, media moments, and energetic event execution.",
    tags: ["Outreach", "Cricket", "Community"],
    image: "/images/events/jabalpur-royal-lions/cover.jpg",
    gallery: [
      "/images/events/jabalpur-royal-lions/1.jpg",
      "/images/events/jabalpur-royal-lions/2.jpg",
      "/images/events/jabalpur-royal-lions/3.jpg",
    ],
    accent: "from-cyan-500/20 via-violet-400/10 to-transparent",
  },
];

const servicePillars = [
  {
    icon: Mic2,
    title: "Concerts & Live Shows",
    description:
      "Artist-led productions, audience movement, premium stage coordination, and memorable live event execution.",
  },
  {
    icon: Trophy,
    title: "Sports Promotions",
    description:
      "League marketing, stadium fill, outreach drives, and team-led fan engagement campaigns.",
  },
  {
    icon: Users,
    title: "On-ground Activations",
    description:
      "Community engagement, promotional activity, crowd interaction, and high-touch brand experiences.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Esports",
    description:
      "Venue finalisation, event operations, audience flow, and execution support for large-scale gaming experiences.",
  },
  {
    icon: GraduationCap,
    title: "Education Outreach",
    description:
      "Admission trials, counselling programs, and campus-facing engagement events across regions.",
  },
  {
    icon: Flame,
    title: "Promotional Campaigns",
    description:
      "Audience-building campaigns, regional outreach, and visibility programs that drive participation.",
  },
];

const eventArchive = [
  {
    title: "Sports Admission Trials",
    subtitle: "The Sports School, Bangalore",
    meta: "Uttar Pradesh · Bihar · J&K",
    type: "Education Outreach",
    image: "/images/events/tss-cricket-talent-hunt/cover.jpg",
    gallery: [
      "/images/events/tss-cricket-talent-hunt/1.jpg",
      "/images/events/tss-cricket-talent-hunt/2.jpg",
      "/images/events/tss-cricket-talent-hunt/3.jpg",
    ],
  },
  {
    title: "Jain University Meets",
    subtitle: "Spot counselling, career counselling, educators meet",
    meta: "Bangalore",
    type: "Education Activation",
    image: "/images/events/jain-university/cover.jpg",
    gallery: [
      "/images/events/jain-university/1.jpg",
      "/images/events/jain-university/2.jpg",
      "/images/events/jain-university/3.jpg",
    ],
  },
  {
    title: "Armaan Malik Concert",
    subtitle: "Large-scale concert experience",
    meta: "Live Entertainment",
    type: "Concert",
    image: "/images/events/armaan-malik/cover.jpg",
    gallery: [
      "/images/events/armaan-malik/1.jpg",
      "/images/events/armaan-malik/2.jpg",
      "/images/events/armaan-malik/3.jpg",
    ],
  },
  {
    title: "UP Warriorz Stadium Fill",
    subtitle: "Audience turnout and promotion",
    meta: "WPL",
    type: "Sports Marketing",
    image: "/images/events/up-warriorz/cover.jpg",
    gallery: [
      "/images/events/up-warriorz/1.jpg",
      "/images/events/up-warriorz/2.jpg",
      "/images/events/up-warriorz/3.jpg",
    ],
  },
  {
    title: "UPT20 Season 2",
    subtitle: "Marketing and stadium fill",
    meta: "League Campaign",
    type: "Sports Promotion",
    image: "/images/events/upt20-season-2/cover.jpg",
    gallery: [
      "/images/events/upt20-season-2/1.jpg",
      "/images/events/upt20-season-2/2.jpg",
      "/images/events/upt20-season-2/3.jpg",
    ],
  },
  {
    title: "Kanpur Superstars",
    subtitle: "Outreach and promotional campaign",
    meta: "UPT20 Season 3",
    type: "Team Outreach",
    image: "/images/events/kanpur-superstars/cover.jpg",
    gallery: [
      "/images/events/kanpur-superstars/1.jpg",
      "/images/events/kanpur-superstars/2.jpg",
      "/images/events/kanpur-superstars/3.jpg",
    ],
  },
  {
    title: "South Delhi Superstars",
    subtitle: "League match and stadium visuals",
    meta: "Sports Campaign",
    type: "Sports Promotion",
    image: "/images/events/south-delhi-superstar/cover.jpg",
    gallery: [
      "/images/events/south-delhi-superstar/1.jpg",
      "/images/events/south-delhi-superstar/2.jpg",
      "/images/events/south-delhi-superstar/3.jpg",
    ],
  },
  {
    title: "Free Fire MAX India Cup 2025",
    subtitle: "Venue coordination and event execution",
    meta: "Ekana Indoor Stadium · Lucknow",
    type: "Esports Event",
    image: "/images/events/freefire/cover.jpg",
    gallery: [
      "/images/events/freefire/1.jpg",
      "/images/events/freefire/2.jpg",
      "/images/events/freefire/3.jpg",
    ],
  },
  {
    title: "Doctor's Warrior Cricket League",
    subtitle: "Season 1 · Lucknow edition",
    meta: "Cricket League",
    type: "League Event",
    image: "/images/events/doctors-warrior-season-1/cover.jpg",
    gallery: [
      "/images/events/doctors-warrior-season-1/1.jpg",
      "/images/events/doctors-warrior-season-1/2.jpg",
      "/images/events/doctors-warrior-season-1/3.jpg",
    ],
  },
  {
    title: "Doctor's Cricket League",
    subtitle: "Season 2 · Lucknow edition",
    meta: "Cricket League",
    type: "League Event",
    image: "/images/events/doctors-cricket-season-2/cover.jpg",
    gallery: [
      "/images/events/doctors-cricket-season-2/1.jpg",
      "/images/events/doctors-cricket-season-2/2.jpg",
      "/images/events/doctors-cricket-season-2/3.jpg",
    ],
  },
  {
    title: "UP Doctor's League",
    subtitle: "Season 3 · Lucknow edition",
    meta: "Cricket League",
    type: "League Event",
    image: "/images/events/up-doctors-league-season-3/cover.jpg",
    gallery: [
      "/images/events/up-doctors-league-season-3/1.jpg",
      "/images/events/up-doctors-league-season-3/2.jpg",
      "/images/events/up-doctors-league-season-3/3.jpg",
    ],
  },
  {
    title: "Jabalpur Royal Lions",
    subtitle: "Outreach activity",
    meta: "Madhya Pradesh T20",
    type: "Sports Outreach",
    image: "/images/events/jabalpur-royal-lions/cover.jpg",
    gallery: [
      "/images/events/jabalpur-royal-lions/1.jpg",
      "/images/events/jabalpur-royal-lions/2.jpg",
      "/images/events/jabalpur-royal-lions/3.jpg",
    ],
  },
];

const detailedStories = [
  {
    title: "Jabalpur Royal Lions – Outreach Activity",
    label: "Sports Outreach",
    gallery: [
      "/images/events/jabalpur-royal-lions/1.jpg",
      "/images/events/jabalpur-royal-lions/2.jpg",
      "/images/events/jabalpur-royal-lions/3.jpg",
    ],
    body: [
      "Raven Rows successfully organized and managed engaging outreach activities for Jabalpur Royal Lions across Gwalior and Indore, creating memorable experiences that brought the team closer to young cricket enthusiasts and fans.",
      "The sessions were filled with energy, excitement, and inspiring interactions as players connected with students, shared their journeys, and celebrated the spirit of cricket. Through seamless execution, audience engagement, and impactful on-ground management, Raven Rows helped strengthen the bond between the team and its supporters while building meaningful community engagement.",
      "From coordination and crowd management to media coverage and content creation, Raven Rows ensured the outreach activities reflected the passion, enthusiasm, and growing fan culture surrounding Jabalpur Royal Lions.",
    ],
  },
  {
    title: "Free Fire MAX India Cup 2025",
    label: "Esports Event",
    gallery: [
      "/images/events/freefire/1.jpg",
      "/images/events/freefire/2.jpg",
      "/images/events/freefire/3.jpg",
    ],
    body: [
      "Raven Rows successfully facilitated venue coordination and execution support for the Free Fire MAX India Cup 2025 in Lucknow, with the event hosted at the prestigious Ekana Indoor Stadium.",
      "From venue booking management to on-ground coordination, Raven Rows ensured a smooth and professional setup for one of the country’s biggest esports events. The event brought together gaming enthusiasts, competitive players, and large-scale audience engagement, creating an electrifying atmosphere for the tournament.",
      "With efficient planning, seamless coordination, and strong execution capabilities, Raven Rows played a key role in delivering a high-impact esports experience at a premier venue, further expanding its footprint in large-scale entertainment and gaming events.",
    ],
  },
  {
    title: "Sports Admission Trials",
    label: "Education Outreach",
    gallery: [
      "/images/events/tss-cricket-talent-hunt/1.jpg",
      "/images/events/tss-cricket-talent-hunt/2.jpg",
      "/images/events/tss-cricket-talent-hunt/3.jpg",
    ],
    body: [
      "Raven Rows supported sports admission trial outreach with a strong focus on coordination, participant flow, and high-energy engagement across multiple regional touchpoints.",
      "From practice sessions and coaching interactions to branding moments and student participation, the execution balanced structure with community excitement and aspirational storytelling.",
      "The result was a well-managed outreach experience that connected institutions, aspiring athletes, and families through a more engaging admissions journey.",
    ],
  },
];

export function EventWorld() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#060606] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.10),transparent_28%)]" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-0 top-80 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">
        <section className="px-4 pb-10 pt-8 md:px-6 md:pb-14 md:pt-12">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end"
            >
              <div className="max-w-4xl">
                <p className="mb-4 text-[11px] uppercase tracking-[0.26em] text-white/55">
                  Liveworks
                </p>

                <h1 className="max-w-[10ch] text-[42px] font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-[58px] md:text-[76px] lg:text-[88px]">
                  Events. Energy.
                  <span className="block text-white/72">Experiences.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/72 md:text-[17px] md:leading-8">
                  From concerts and league promotions to esports events,
                  educational outreach, activations, and large-scale execution,
                  Raven Rows creates live experiences that move people and leave
                  a lasting impression.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="#event-archive"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition hover:bg-white/90"
                  >
                    Explore Archive
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
                  >
                    Start an Event Project
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  "Concerts & live shows",
                  "Sports leagues, outreach, and activations",
                  "Esports, education, and on-ground execution",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                      Capability
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/82">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-6 md:py-14">
          <div className="section-shell">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Featured Cases
                </p>
                <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
                  Event work at scale.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {featuredEvents.map((event, index) => (
                <motion.article
                  key={event.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(5,5,5,0.90), rgba(5,5,5,0.22)), url('${event.image}')`,
                    }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${event.accent}`}
                  />

                  <div className="relative flex min-h-[380px] flex-col justify-between p-5 sm:min-h-[420px] sm:p-6 lg:min-h-[460px]">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/75">
                        {event.category}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/60">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                    </div>

                    <div>
                      <h3 className="max-w-[12ch] text-[28px] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[32px]">
                        {event.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-[14px] leading-7 text-white/78">
                        {event.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] text-white/78"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-6 md:py-14">
          <div className="section-shell">
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                What We Execute
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
                End-to-end event capability.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {servicePillars.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                      <Icon className="h-5 w-5 text-white/82" />
                    </div>
                    <h3 className="mt-5 text-[22px] font-semibold leading-[1] tracking-[-0.04em] text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-7 text-white/68">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="event-archive"
          className="px-4 py-10 md:px-6 md:py-14"
        >
          <div className="section-shell">
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Event Archive
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
                Selected event work.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/68">
                Organised as event collections so each project can hold multiple
                images, moments, and outputs — from concerts and league promotions
                to education outreach, esports execution, and on-ground activations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {eventArchive.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.03,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                >
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.05]"
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(5,5,5,0.68), rgba(5,5,5,0.16)), url('${item.image}')`,
                      }}
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70">
                      <Sparkles className="h-3.5 w-3.5" />
                      {item.type}
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/42">
                      {item.meta}
                    </p>
                    <h3 className="mt-3 text-[20px] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {item.subtitle}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/45">
                      <ImageIcon className="h-3.5 w-3.5" />
                      Multi-image project
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-6 md:py-14">
          <div className="section-shell">
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Detailed Case Stories
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
                Execution, audiences, and impact.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/68">
                A closer look at how Raven Rows handles outreach, venue coordination,
                crowd engagement, and on-ground execution across sports and esports events.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {detailedStories.map((story, index) => (
                <motion.article
                  key={story.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6 md:p-7"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70">
                    <CalendarRange className="h-3.5 w-3.5" />
                    {story.label}
                  </div>

                  <h3 className="mt-5 text-[24px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[28px]">
                    {story.title}
                  </h3>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {story.gallery.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="h-24 overflow-hidden rounded-[18px] border border-white/10 bg-white/5"
                        style={{
                          backgroundImage: `url('${image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    ))}
                  </div>

                  <div className="mt-5 space-y-4">
                    {story.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[14px] leading-7 text-white/68 md:text-[15px] md:leading-8"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 pt-8 md:px-6 md:pb-24">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm sm:p-8 lg:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.14),transparent_28%)]" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Final Call
                  </p>
                  <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
                    Planning a concert, campaign, activation, or live event?
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-white/68">
                    Raven Rows brings together planning, promotion, audience
                    engagement, on-ground operations, and visual storytelling
                    into one seamless event workflow.
                  </p>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition hover:bg-white/90"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}