"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarRange,
  Clapperboard,
  Flame,
  Sparkles,
  Trophy,
  Video,
  Wand2,
  Film,
  X,
} from "lucide-react";

const featuredFilms = [
  {
    title: "Ayodhya Deepotsav",
    category: "Festival Film",
    description:
      "Raven Rows captured the scale, devotion, and cultural magnificence of Ayodhya Deepotsav through cinematic coverage, drone visuals, and emotionally driven visual storytelling.",
    image: "/images/film/ayodhya-deepotsav/cover.jpg",
    gallery: [
      "/images/film/ayodhya-deepotsav/1.jpg",
      "/images/film/ayodhya-deepotsav/cover.jpg",
      "/images/film/ayodhya-deepotsav/2.jpg",
      "/images/film/ayodhya-deepotsav/3.jpg",
      "/images/film/ayodhya-deepotsav/4.jpg",
      "/images/film/ayodhya-deepotsav/5.jpg",
      "/images/film/ayodhya-deepotsav/6.jpg",
    ],
    tags: ["Drone", "Festival", "Cultural", "Cinematic"],
    accent: "from-orange-500/20 via-amber-300/10 to-transparent",
  },
  {
    title: "Dev Deepawali",
    category: "Cultural Coverage",
    description:
      "From illuminated ghats and sacred rituals to performances and devotional gatherings, Raven Rows transformed Dev Deepawali into a visually immersive storytelling experience.",
    image: "/images/film/dev-deepawali/cover.jpg",
    gallery: [
      "/images/film/dev-deepawali/1.jpg",
      "/images/film/dev-deepawali/2.jpg",
      "/images/film/dev-deepawali/3.jpg",
    ],
    tags: ["Event Film", "Visual Storytelling", "Drone"],
    accent: "from-violet-500/18 via-teal-400/10 to-transparent",
  },
  {
    title: "Kumbh",
    category: "Documentary-style Production",
    description:
      "A powerful visual narrative capturing the magnitude, emotion, and spiritual atmosphere of one of India’s most iconic gatherings through cinematic framing and scale-driven coverage.",
    image: "/images/film/kumbh/cover.jpg",
    gallery: [
      "/images/film/kumbh/1.jpg",
      "/images/film/kumbh/2.jpg",
      "/images/film/kumbh/3.jpg",
       "/images/film/kumbh/4.jpg",
        "/images/film/kumbh/5.jpg",
         "/images/film/kumbh/6.jpg",
          "/images/film/kumbh/7.jpg",
           "/images/film/kumbh/8.jpg",
            "/images/film/kumbh/9.jpg",
             "/images/film/kumbh/10.jpg",
              "/images/film/kumbh/11.jpg",
    

    ],
    tags: ["Documentary", "Large Scale", "Emotion"],
    accent: "from-cyan-500/18 via-violet-400/10 to-transparent",
  },
];

const adFilms = [
  {
    title: "EVA YES by Riva Kenko",
    subtitle: "Multivitamin brand campaign",
    description:
      "Multiple promotional shoots created for digital campaigns and brand communication, combining lifestyle-driven visuals with sports-led credibility.",
    image: "/images/film/eva-yes/cover.jpg",
    gallery: [
      "/images/film/eva-yes/1.jpg",
      "/images/film/eva-yes/2.jpg",
      "/images/film/eva-yes/3.jpg",
    ],
    tags: ["Ad Film", "Brand Campaign", "Product Shoot"],
  },
  {
    title: "Zeeshan Ansari Ad Shoot",
    subtitle: "Cricket personality-led branded content",
    description:
      "A campaign featuring Zeeshan Ansari, blending product-led storytelling with strong sports recognition and audience engagement.",
    image: "/images/film/zeeshan-ansari/cover.jpg",
    gallery: [
      "/images/film/zeeshan-ansari/1.jpg",
      "/images/film/zeeshan-ansari/2.jpg",
      "/images/film/zeeshan-ansari/3.jpg",
    ],
    tags: ["Sports Branding", "Commercial", "Talent-led"],
  },
  {
    title: "Priyyam Garg Uni Sex saloon Brand shoot",
    subtitle: "Commercial production",
    description:
      "Promotional content designed for digital-first brand visibility with sharp product communication and visually engaging execution.",
    image: "/images/film/priyam-garm-gennie/cover.jpg",
    gallery: [
      "/images/film/priyam-garm-gennie/1.jpg",
      "/images/film/priyam-garm-gennie/2.jpg",
      "/images/film/priyam-garm-gennie/3.jpg",
    ],
    tags: ["Commercial", "Product", "Campaign"],
  },
];

const storyHighlights = [
  {
    title: "Kumbh",
    label: "Documentary Storytelling",
    body:
      "An immersive cinematic treatment of scale, movement, devotion, and atmosphere — built around visual rhythm, human emotion, and the spiritual magnitude of the gathering.",
  },
  {
    title: "Ayodhya Deepotsav",
    label: "Festival Narrative",
    body:
      "A visually rich storytelling piece blending drone scale, devotional atmosphere, and festival energy into a memorable cultural screen experience.",
  },
];

const screenSports = [
  {
    title: "Lucknow Premiere League Promo",
    category: "Screen Sports",
    description:
      "High-energy promo storytelling created to build excitement, identity, and momentum around league action and audience anticipation.",
  },
  {
    title: "Sports Storytelling",
    category: "Screen Sports",
    description:
      "From athlete-led narratives to league-driven visual campaigns, Raven Rows shapes sports content with emotion, pace, and visual drama.",
  },
];

const processPillars = [
  {
    icon: Film,
    title: "Short Films",
    description:
      "Narrative-led visual storytelling built around mood, emotion, character, and screen presence.",
  },
  {
    icon: Clapperboard,
    title: "Ad Films & Campaign Shoots",
    description:
      "Commercial storytelling, branded content, and digital-first visual campaigns.",
  },
  {
    icon: Video,
    title: "Documentary & Event Films",
    description:
      "Narrative-driven coverage for large-scale gatherings, festivals, and major public moments.",
  },
  {
    icon: Trophy,
    title: "Sports Content",
    description:
      "League promos, athlete films, and performance-led storytelling with cinematic energy.",
  },
  {
    icon: Flame,
    title: "Festival Visual Production",
    description:
      "Drone visuals, rituals, crowd scale, and emotionally resonant cultural storytelling.",
  },
  {
    icon: Wand2,
    title: "Visual Effects & Post",
    description:
      "Finishing, polish, cinematic transitions, and post-production craft that sharpen the final frame.",
  },
];

const detailedStories = [
  {
    title: "Ayodhya Deepotsav",
    label: "Festival Film",
    gallery: [
      "/images/film/ayodhya-deepotsav/1.jpg",
      "/images/film/ayodhya-deepotsav/2.jpg",
      "/images/film/ayodhya-deepotsav/3.jpg",
    ],
    body: [
      "Raven Rows captured the divine grandeur and cultural magnificence of Ayodhya Deepotsav through cinematic event coverage, drone visuals, and immersive storytelling.",
      "From illuminated spaces and devotional atmosphere to performances and ceremonial moments, the production focused on scale, emotion, and cultural resonance across digital-first visual formats.",
      "The result was a memorable storytelling piece that preserved the celebration’s energy while giving it a polished and cinematic visual identity.",
    ],
  },
  {
    title: "Dev Deepawali",
    label: "Cultural Coverage",
    gallery: [
      "/images/film/dev-deepawali/1.jpg",
      "/images/film/dev-deepawali/2.jpg",
      "/images/film/dev-deepawali/3.jpg",
    ],
    body: [
      "Raven Rows transformed Dev Deepawali into a visually immersive storytelling experience through carefully framed coverage of rituals, lights, performances, and audience atmosphere.",
      "The production blended wide visual spectacle with intimate moments, allowing the cultural richness of the event to unfold with cinematic depth.",
      "This approach helped turn a live celebration into a lasting piece of visual storytelling for wider digital audiences.",
    ],
  },
  {
    title: "EVA YES by Riva Kenko",
    label: "Brand Campaign",
    gallery: [
      "/images/film/eva-yes/1.jpg",
      "/images/film/eva-yes/2.jpg",
      "/images/film/eva-yes/3.jpg",
    ],
    body: [
      "Raven Rows created multiple promotional shoots for EVA YES by Riva Kenko, building campaign-ready visuals for digital communication and branded storytelling.",
      "The campaign blended product-led messaging with lifestyle styling and sports credibility, giving the brand a stronger visual identity across audience-facing content.",
      "From planning and creative direction to final execution, the work was designed to feel polished, energetic, and commercially effective.",
    ],
  },
];

export function FilmWorld() {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    title: string;
  } | null>(null);

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ images, index, title });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const showPrev = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index:
        lightbox.index === 0
          ? lightbox.images.length - 1
          : lightbox.index - 1,
    });
  };

  const showNext = () => {
    if (!lightbox) return;
    setLightbox({
      ...lightbox,
      index:
        lightbox.index === lightbox.images.length - 1
          ? 0
          : lightbox.index + 1,
    });
  };

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="film"
      className="relative overflow-hidden bg-[#060606] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.14),transparent_24%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.08),transparent_30%)]" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute right-0 top-96 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

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
                  Screenworks
                </p>

                <h1 className="max-w-[10ch] text-[42px] font-semibold leading-[0.92] tracking-[-0.07em] text-white sm:text-[58px] md:text-[76px] lg:text-[88px]">
                  Films. Stories.
                  <span className="block text-white/72">Emotions.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/72 md:text-[17px] md:leading-8">
                  From short films and ad campaigns to documentary-style coverage,
                  sports promos, festival storytelling, and post-production craft,
                  Raven Rows creates screenwork with cinematic depth and cultural presence.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                 

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white/10"
                  >
                    Let's create a Story together!
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  "Ad films, short films, and branded campaigns",
                  "Festival, documentary, and event coverage",
                  "Sports promos, post, and visual storytelling",
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

        <section id="featured-films" className="px-4 py-10 md:px-6 md:py-14">
          <div className="section-shell">
<div className="mb-6">
  <p className="text-[15px] uppercase tracking-[0.20em] text-white/55">
    Featured Work
  </p>
</div>

            <div className="grid gap-4 lg:grid-cols-3">
              {featuredFilms.map((film, index) => (
                <motion.article
                  key={film.title}
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
                      backgroundImage: `linear-gradient(to top, rgba(5,5,5,0.90), rgba(5,5,5,0.22)), url('${film.image}')`,
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${film.accent}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="relative flex min-h-[380px] flex-col justify-between p-5 sm:min-h-[420px] sm:p-6 lg:min-h-[460px]">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/75">
                        {film.category}
                      </span>
                      
                    </div>

                    <div>
                      <h3 className="max-w-[12ch] text-[30px] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[34px]">
  {film.title}
</h3>

                      <p className="mt-4 max-w-sm text-[14px] leading-7 text-white/78">
                        {film.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {film.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] text-white/78"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                     {/* Thumbnail strip — show 3, indicate overflow */}
<div className="mt-4 grid grid-cols-3 gap-2">
  {film.gallery.slice(0, 3).map((img, i) => {
    const isLast = i === 2;
    const remaining = film.gallery.length - 3;
    return (
      <button
        key={i}
        type="button"
        onClick={() => openLightbox(film.gallery, i, film.title)}
        className="relative h-16 overflow-hidden rounded-[14px] border border-white/10 bg-white/5 transition hover:scale-[1.02] hover:border-white/20"
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label={`Open ${film.title} image ${i + 1}`}
      >
        {/* "+N" overlay on the 3rd thumbnail if more images exist */}
        {isLast && remaining > 0 && (
          <div className="absolute inset-0 flex items-center justify-center rounded-[14px] bg-black/60 backdrop-blur-sm">
            <span className="text-[13px] font-semibold text-white">
              +{remaining}
            </span>
          </div>
        )}
      </button>
    );
  })}
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
                Ad Films
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
                Commercials, campaigns, and branded shoots.
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/68">
                Product-focused campaigns crafted with lifestyle visuals, sports-driven
                credibility, and audience-first storytelling.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {adFilms.map((film, index) => (
                <motion.article
                  key={film.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm"
                >
                  <div className="relative h-72 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `linear-gradient(to top, rgba(5,5,5,0.55), rgba(5,5,5,0.08)), url('${film.image}')`,
                      }}
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/42">
                      {film.subtitle}
                    </p>
                    <h3 className="mt-3 text-[22px] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
                      {film.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-7 text-white/66">
                      {film.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {film.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] text-white/78"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-6 md:py-14">
          <div className="section-shell">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Storytelling
                </p>
                <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px]">
                  Narrative work that stays with people.
                </h2>

                <div className="mt-6 grid gap-4">
                  {storyHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70">
                        <CalendarRange className="h-3.5 w-3.5" />
                        {item.label}
                      </div>
                      <h3 className="mt-4 text-[22px] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-7 text-white/66">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6 md:p-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Screen Sports
                </p>
                <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px]">
                  Motion built for sports energy.
                </h2>

                <div className="mt-6 grid gap-4">
                  {screenSports.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70">
                        <Sparkles className="h-3.5 w-3.5" />
                        {item.category}
                      </div>
                      <h3 className="mt-4 text-[22px] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-7 text-white/66">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-6 md:py-14">
          <div className="section-shell">
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                What We Create
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
                Screen-first production capability.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {processPillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                      <Icon className="h-5 w-5 text-white/82" />
                    </div>
                    <h3 className="mt-5 text-[22px] font-semibold leading-[1] tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-7 text-white/68">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-10 md:px-6 md:py-14">
          <div className="section-shell">
            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                Detailed Film Stories
              </p>
              <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
                Story, scale, and screen presence.
              </h2>
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
  {story.gallery.slice(0, 3).map((image, imageIndex) => {
    const isLast = imageIndex === 2;
    const remaining = story.gallery.length - 3;
    return (
      <button
        key={imageIndex}
        type="button"
        onClick={() => openLightbox(story.gallery, imageIndex, story.title)}
        className="relative h-24 overflow-hidden rounded-[18px] border border-white/10 bg-white/5 transition hover:scale-[1.02] hover:border-white/20"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label={`Open ${story.title} image ${imageIndex + 1}`}
      >
        {isLast && remaining > 0 && (
          <div className="absolute inset-0 flex items-center justify-center rounded-[18px] bg-black/60 backdrop-blur-sm">
            <span className="text-[13px] font-semibold text-white">
              +{remaining}
            </span>
          </div>
        )}
      </button>
    );
  })}
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_28%)]" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Final Frame
                  </p>
                  <h2 className="mt-3 text-[30px] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[38px] md:text-[44px]">
                    Need a film, campaign, documentary, or promo that carries real emotion?
                  </h2>
                  <p className="mt-4 text-[15px] leading-7 text-white/68">
                    Raven Rows combines direction, production planning, visual craft,
                    and cinematic storytelling to create work designed for both impact
                    and memory.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[11px] font-medium uppercase tracking-[0.22em] text-black transition hover:bg-white/90"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/88 p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Gallery Viewer
                  </p>
                  <h3 className="mt-1 text-sm text-white/82 md:text-base">
                    {lightbox.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close gallery"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="relative flex items-center justify-center bg-black px-3 py-3 md:px-6 md:py-6">
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/80 backdrop-blur transition hover:bg-black/70 hover:text-white md:left-5"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>

                <div className="w-full">
                  <img
                    src={lightbox.images[lightbox.index]}
                    alt={`${lightbox.title} ${lightbox.index + 1}`}
                    className="max-h-[70vh] w-full rounded-[20px] object-contain"
                  />
                </div>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/80 backdrop-blur transition hover:bg-black/70 hover:text-white md:right-5"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="border-t border-white/10 px-4 py-3 md:px-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                    {lightbox.index + 1} / {lightbox.images.length}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {lightbox.images.map((img, i) => (
                      <button
                        key={`${img}-${i}`}
                        type="button"
                        onClick={() =>
                          setLightbox({ ...lightbox, index: i })
                        }
                        className={`h-14 w-14 overflow-hidden rounded-[12px] border transition ${
                          i === lightbox.index
                            ? "border-white/30 opacity-100"
                            : "border-white/10 opacity-60 hover:opacity-100"
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