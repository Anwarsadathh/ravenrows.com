"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
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
  X,
  Play,
  ChevronRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const featuredEvents = [
  {
    title: "Free Fire MAX India Cup 2025",
    category: "Esports Event",
    location: "Lucknow",
    description:
      "Venue coordination and execution support at Ekana Indoor Stadium for one of India's biggest esports events, delivered with seamless planning and high-energy on-ground management.",
    tags: ["Esports", "Venue Coordination", "Execution"],
    mediaType: "image",
    image: "/images/events/freefire/cover.jpg",
    gallery: [
      "/images/events/freefire/1.jpg",
      "/images/events/freefire/2.jpg",
      "/images/events/freefire/3.jpg",
    ],
    accent: "from-violet-500/30 via-cyan-400/15 to-transparent",
    accentDot: "#7c3aed",
  },
  {
  title: "Armaan Malik Concert",
  category: "Concert Production",
  location: "India",
   description:
      "Premium concert execution built around audience experience, show energy, and strong on-ground coordination for a memorable live entertainment moment.",
  tags: ["Concert", "Live", "Audience Experience"],
  mediaType: "video",                                          // ← video
  video: "/images/events/armaan-malik/cover.mp4",             // ← your video path
  poster: "/images/events/armaan-malik/cover.jpg",            // ← fallback thumbnail
  image: "/images/events/armaan-malik/cover.jpg",             // ← keep for gallery bg
  gallery: [
    "/images/events/armaan-malik/1.jpg",
    "/images/events/armaan-malik/2.jpg",
     "/images/events/armaan-malik/cover.jpg",
  ],
  accent: "from-orange-500/25 via-pink-400/15 to-transparent",
  accentDot: "f97316",
},
  {
    title: "Jabalpur Royal Lions Outreach",
    category: "Sports Outreach",
    location: "Gwalior & Indore",
    description:
      "Audience-facing outreach experiences connecting players and fans through school activations, community engagement, media moments, and energetic event execution.",
    tags: ["Outreach", "Cricket", "Community"],
    mediaType: "video",
    video: "/images/events/jabalpur-royal-lions/cover.mp4",
    poster: "/images/events/jabalpur-royal-lions/poster.jpg",
    image: "/images/events/jabalpur-royal-lions/cover.jpg",
    gallery: [
      "/images/events/jabalpur-royal-lions/1.jpg",
      "/images/events/jabalpur-royal-lions/2.jpg",
      "/images/events/jabalpur-royal-lions/3.jpg",
    ],
    accent: "from-cyan-500/25 via-violet-400/15 to-transparent",
    accentDot: "#06b6d4",
  },
];

const servicePillars = [
  {
    icon: Mic2,
    title: "Concerts & Live Shows",
    description:
      "Artist-led productions, audience movement, premium stage coordination, and memorable live event execution.",
    color: "rgba(251,146,60,0.12)",
    iconColor: "rgba(251,146,60,0.9)",
  },
  {
    icon: Trophy,
    title: "Sports Promotions",
    description:
      "League marketing, stadium fill, outreach drives, and team-led fan engagement campaigns.",
    color: "rgba(124,58,237,0.12)",
    iconColor: "rgba(167,139,250,0.9)",
  },
  {
    icon: Users,
    title: "On-ground Activations",
    description:
      "Community engagement, promotional activity, crowd interaction, and high-touch brand experiences.",
    color: "rgba(6,182,212,0.12)",
    iconColor: "rgba(34,211,238,0.9)",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Esports",
    description:
      "Venue finalisation, event operations, audience flow, and execution support for large-scale gaming experiences.",
    color: "rgba(16,185,129,0.12)",
    iconColor: "rgba(52,211,153,0.9)",
  },
  {
    icon: GraduationCap,
    title: "Education Outreach",
    description:
      "Admission trials, counselling programs, and campus-facing engagement events across regions.",
    color: "rgba(239,68,68,0.12)",
    iconColor: "rgba(252,165,165,0.9)",
  },
  {
    icon: Flame,
    title: "Promotional Campaigns",
    description:
      "Audience-building campaigns, regional outreach, and visibility programs that drive participation.",
    color: "rgba(234,179,8,0.12)",
    iconColor: "rgba(253,224,71,0.9)",
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
      "/images/events/tss-cricket-talent-hunt/4.jpg",
      "/images/events/tss-cricket-talent-hunt/5.jpg",
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
      "/images/events/jain-university/4.jpg",
      "/images/events/jain-university/5.jpg",
      "/images/events/jain-university/6.jpg",
      "/images/events/jain-university/7.jpg",
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
    title: "UP Warriorz - WPL",
    subtitle: "Ticket sale Lucknow promotions",
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
      "/images/events/upt20-season-2/4.jpg",
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
      "/images/events/kanpur-superstars/4.jpg",
      "/images/events/kanpur-superstars/5.jpg",
      "/images/events/kanpur-superstars/6.jpg",
      "/images/events/kanpur-superstars/7.jpg",
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
      "/images/events/doctors-warrior-season-1/4.jpg",
      "/images/events/doctors-warrior-season-1/5.jpg",
      "/images/events/doctors-warrior-season-1/6.jpg",
      "/images/events/doctors-warrior-season-1/7.jpg",
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
      "/images/events/up-doctors-league-season-3/4.jpg",
      "/images/events/up-doctors-league-season-3/5.jpg",
      "/images/events/up-doctors-league-season-3/6.jpg",
      "/images/events/up-doctors-league-season-3/7.jpg",
      "/images/events/up-doctors-league-season-3/8.jpg",
      "/images/events/up-doctors-league-season-3/9.jpg",
      "/images/events/up-doctors-league-season-3/10.jpg",
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
      "From venue booking management to on-ground coordination, Raven Rows ensured a smooth and professional setup for one of the country's biggest esports events. The event brought together gaming enthusiasts, competitive players, and large-scale audience engagement, creating an electrifying atmosphere for the tournament.",
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
      "/images/events/tss-cricket-talent-hunt/4.jpg",
    ],
    body: [
      "Raven Rows supported sports admission trial outreach with a strong focus on coordination, participant flow, and high-energy engagement across multiple regional touchpoints.",
      "From practice sessions and coaching interactions to branding moments and student participation, the execution balanced structure with community excitement and aspirational storytelling.",
      "The result was a well-managed outreach experience that connected institutions, aspiring athletes, and families through a more engaging admissions journey.",
    ],
  },
];

// ─── Auto-advancing archive card ─────────────────────────────────────────────

function ArchiveCard({
  item,
  index,
  onOpen,
}: {
  item: (typeof eventArchive)[0];
  index: number;
  onOpen: (gallery: string[], idx: number, title: string) => void;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const thumbCount = Math.min(item.gallery.length, 3);

  // Auto-advance every 2.5s
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % thumbCount);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, thumbCount]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => onOpen(item.gallery, 0, item.title)}
      className="group cursor-pointer overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
    >
      {/* Cover image — fades to active gallery thumb */}
      <div className="relative h-44 overflow-hidden">
    <AnimatePresence>
          <motion.div
            key={activeImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(5,5,5,0.72), rgba(5,5,5,0.12)), url('${item.gallery[activeImg]}')`,
            }}
          />
        </AnimatePresence>

        {/* Type badge */}
        <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-sm">
          <Sparkles className="h-3 w-3" />
          {item.type}
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {Array.from({ length: thumbCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImg(i);
              }}
              className="relative h-1 overflow-hidden rounded-full transition-all duration-300"
              style={{ width: i === activeImg ? "20px" : "6px" }}
              aria-label={`Show image ${i + 1}`}
            >
              <span className="absolute inset-0 rounded-full bg-white/30" />
              {i === activeImg && (
                <motion.span
                  className="absolute inset-y-0 left-0 rounded-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: isPaused ? 0 : 2.5, ease: "linear" }}
                  key={`${activeImg}-${isPaused}`}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
          {item.meta}
        </p>
        <h3 className="mt-2.5 text-[19px] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
          {item.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-6 text-white/60">
          {item.subtitle}
        </p>

        {/* Animated thumbnail strip */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {item.gallery.slice(0, 3).map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpen(item.gallery, i, item.title);
              }}
              className={`relative h-14 overflow-hidden rounded-[12px] border transition-all duration-300 ${
                i === activeImg
                  ? "border-white/35 ring-1 ring-white/20 scale-[1.03]"
                  : "border-white/10 hover:border-white/22"
              }`}
              style={{
                backgroundImage: `url('${img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label={`Open ${item.title} image ${i + 1}`}
            />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-white/38 transition-colors group-hover:text-white/65">
          <span>View gallery</span>
          <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.article>
  );
}

// ─── Featured event card ──────────────────────────────────────────────────────

function FeaturedCard({
  event,
  index,
  onOpen,
}: {
  event: (typeof featuredEvents)[0];
  index: number;
  onOpen: (gallery: string[], idx: number, title: string) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:border-white/20"
    >
      {/* Background media */}
     {event.mediaType === "video" ? (
  <video
    autoPlay loop muted playsInline
    preload="metadata"
    poster={event.poster}
    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
  >
    <source src={event.video} type="video/mp4" />
  </video>
) : (
  <div
    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.04]"
    style={{ backgroundImage: `url('${event.image}')` }}
  />
)}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/10" />
      <div className={`absolute inset-0 bg-gradient-to-br ${event.accent}`} />

      {/* Accent glow on hover */}
      <div
        className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
        style={{ background: event.accentDot }}
      />

      {/* Play icon for video */}
      {event.mediaType === "video" && (
        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
          <Play className="h-4 w-4 fill-white text-white" />
        </div>
      )}

      <div className="relative flex min-h-[420px] flex-col justify-between p-5 sm:min-h-[460px] sm:p-6 lg:min-h-[500px]">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
            {event.category}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/65 backdrop-blur-sm">
            <MapPin className="h-3 w-3" />
            {event.location}
          </span>
        </div>

        <div>
          <h3 className="max-w-[14ch] text-[28px] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[32px]">
            {event.title}
          </h3>

          <p className="mt-4 max-w-sm text-[14px] leading-7 text-white/75">
            {event.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] text-white/75"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Gallery strip */}
          <div className="mt-5 flex gap-2">
            {event.gallery.slice(0, 3).map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onOpen(event.gallery, i, event.title)}
                className="h-12 w-12 overflow-hidden rounded-[10px] border border-white/15 bg-white/5 transition-all hover:scale-105 hover:border-white/30"
                style={{
                  backgroundImage: `url('${img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label={`Open ${event.title} gallery image ${i + 1}`}
              />
            ))}
            <button
              type="button"
              onClick={() => onOpen(event.gallery, 0, event.title)}
              className="flex h-12 items-center gap-1.5 rounded-[10px] border border-white/12 bg-white/5 px-3 text-[10px] uppercase tracking-[0.16em] text-white/55 transition hover:bg-white/10 hover:text-white/80"
            >
              View all
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}


// ─── Main component ───────────────────────────────────────────────────────────

export function EventWorld() {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    title: string;
  } | null>(null);

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, index, title });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const showPrev = useCallback(() => {
    setLightbox((cur) =>
      cur
        ? { ...cur, index: cur.index === 0 ? cur.images.length - 1 : cur.index - 1 }
        : cur
    );
  }, []);

  const showNext = useCallback(() => {
    setLightbox((cur) =>
      cur
        ? { ...cur, index: cur.index === cur.images.length - 1 ? 0 : cur.index + 1 }
        : cur
    );
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox, showPrev, showNext]);

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#060606] text-white"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-violet-600/8 blur-[120px]" />
        <div className="absolute right-0 top-[30%] h-[500px] w-[500px] rounded-full bg-cyan-500/7 blur-[120px]" />
        <div className="absolute bottom-0 left-[30%] h-[400px] w-[400px] rounded-full bg-orange-500/6 blur-[100px]" />
      </div>

      <div className="relative">

        {/* ── Hero ── */}
        <section className="px-4 pb-12 pt-10 md:px-6 md:pb-16 md:pt-14">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Kicker */}
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                  LiveWorks · Raven Rows
                </span>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <h1 className="text-[46px] font-semibold leading-[0.9] tracking-[-0.07em] text-white sm:text-[64px] md:text-[80px] lg:text-[96px]">
                    Events.
                    Energy.
                    <br />
                    <span className="text-white/55">Experiences.</span>
                  </h1>

                  <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/65 md:text-[17px] md:leading-8">
                    From concerts and league promotions to esports events,
                    educational outreach, activations, and large-scale execution —
                    Raven Rows creates live experiences that move people and leave
                    a lasting impression.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="#event-archive"
                      className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition-all hover:bg-white/90 hover:gap-3"
                    >
                      Explore Archive
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/85 transition hover:bg-white/10"
                    >
                      Start an Event Project
                    </Link>
                  </div>

                 
                </div>

                {/* Capability pills */}
                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {[
                    { label: "Concerts & live shows", dot: "#f97316" },
                    { label: "Sports leagues, outreach, and activations", dot: "#7c3aed" },
                    { label: "Esports, education, and on-ground execution", dot: "#06b6d4" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-[22px] border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: item.dot }}
                        />
                        <p className="text-[9px] uppercase tracking-[0.24em] text-white/38">
                          Capability
                        </p>
                      </div>
                      <p className="text-[13px] leading-6 text-white/80">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Featured Cases ── */}
        <section className="px-4 py-12 md:px-6 md:py-16">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-end justify-between gap-4"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-white/40">
                  Featured Cases
                </p>
                <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[40px] md:text-[48px]">
                  Event work at scale.
                </h2>
              </div>
              <div className="hidden items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-white/38 md:flex">
                <span>3 featured</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-3">
              {featuredEvents.map((event, index) => (
                <FeaturedCard
                  key={event.title}
                  event={event}
                  index={index}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Pillars ── */}
        <section className="px-4 py-12 md:px-6 md:py-16">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/40">
                What We Execute
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[40px] md:text-[48px]">
                End-to-end event capability.
              </h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {servicePillars.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/18 hover:bg-white/[0.07]"
                  >
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: service.color }}
                    >
                      <Icon className="h-5 w-5" style={{ color: service.iconColor }} />
                    </div>
                    <h3 className="mt-5 text-[21px] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-7 text-white/62">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Event Archive ── */}
        <section id="event-archive" className="px-4 py-12 md:px-6 md:py-16">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/40">
                Event Archive
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[40px] md:text-[48px]">
                Selected event work.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/60">
                Organised as event collections — each card auto-previews its gallery.
                Hover to pause, click any thumbnail to open the full viewer.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {eventArchive.map((item, index) => (
                <ArchiveCard
                  key={`${item.title}-${index}`}
                  item={item}
                  index={index}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Detailed Stories ── */}
        <section className="px-4 py-12 md:px-6 md:py-16">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/40">
                Detailed Case Stories
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[40px] md:text-[48px]">
                Execution, audiences, and impact.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/60">
                A closer look at how Raven Rows handles outreach, venue coordination,
                crowd engagement, and on-ground execution across sports and esports events.
              </p>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-3">
              {detailedStories.map((story, index) => (
                <motion.article
                  key={story.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/18 sm:p-6 md:p-7"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/65">
                    <CalendarRange className="h-3.5 w-3.5" />
                    {story.label}
                  </div>

                  <h3 className="mt-5 text-[23px] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[26px]">
                    {story.title}
                  </h3>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {story.gallery.slice(0, 3).map((image, imageIndex) => (
                      <button
                        key={imageIndex}
                        type="button"
                        onClick={() =>
                          openLightbox(story.gallery, imageIndex, story.title)
                        }
                        className="h-24 overflow-hidden rounded-[16px] border border-white/10 bg-white/5 transition-all hover:scale-[1.03] hover:border-white/22"
                        style={{
                          backgroundImage: `url('${image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        aria-label={`Open ${story.title} image ${imageIndex + 1}`}
                      />
                    ))}
                  </div>

                  <div className="mt-6 space-y-4">
                    {story.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-[13px] leading-7 text-white/62 md:text-[14px] md:leading-8"
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

        {/* ── CTA Banner ── */}
        <section className="px-4 pb-20 pt-8 md:px-6 md:pb-28">
          <div className="section-shell">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm lg:p-12"
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-orange-500/12 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-violet-600/14 blur-3xl" />
              </div>

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-white/40">
                    Final Call
                  </p>
                  <h2 className="mt-3 text-[28px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[36px] md:text-[44px]">
                    Planning a concert, campaign,
                    <br className="hidden sm:block" /> activation, or live event?
                  </h2>
                  <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/60">
                    Raven Rows brings together planning, promotion, audience engagement,
                    on-ground operations, and visual storytelling into one seamless
                    event workflow.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex h-13 items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition-all hover:bg-white/90 hover:gap-3"
                >
                  Enquire Now
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/92 p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.24em] text-white/38">
                    Gallery Viewer
                  </p>
                  <h3 className="mt-0.5 text-[13px] font-medium text-white/80">
                    {lightbox.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/65 transition hover:bg-white/12 hover:text-white"
                  aria-label="Close gallery"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Main image */}
              <div className="relative flex items-center justify-center bg-black px-4 py-5 md:px-8 md:py-8">
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/75 backdrop-blur transition hover:bg-black/72 hover:text-white md:left-4"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={lightbox.index}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.22 }}
                    className="relative mx-auto h-[65vh] w-full"
                  >
                    <Image
                      src={lightbox.images[lightbox.index]}
                      alt={`${lightbox.title} ${lightbox.index + 1}`}
                      fill
                      className="rounded-[18px] object-contain"
                      sizes="100vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/75 backdrop-blur transition hover:bg-black/72 hover:text-white md:right-4"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Footer strip */}
              <div className="border-t border-white/8 px-5 py-3.5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/38">
                    {lightbox.index + 1} / {lightbox.images.length}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lightbox.images.map((img, i) => (
                      <button
                        key={`${img}-${i}`}
                        type="button"
                        onClick={() => setLightbox({ ...lightbox, index: i })}
                        className={`h-12 w-12 overflow-hidden rounded-[10px] border transition-all duration-200 ${
                          i === lightbox.index
                            ? "border-white/35 ring-1 ring-white/18 opacity-100 scale-105"
                            : "border-white/10 opacity-50 hover:opacity-85"
                        }`}
                        aria-label={`View image ${i + 1}`}
                      >
                        <div
                          className="h-full w-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${img}')` }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}