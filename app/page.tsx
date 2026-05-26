import { Navbar } from "@/components/navbar";
import { SplitHero } from "@/components/split-hero";
import { IntroSection } from "@/components/intro-section";
import { HomeFilmPreview } from "@/components/home-film-preview";
import { HomeEventPreview } from "@/components/home-event-preview";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SplitHero />
      <IntroSection />
      <HomeFilmPreview />
      <HomeEventPreview />
      <ContactSection />
      <Footer />
    </main>
  );
}