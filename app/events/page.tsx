import { Navbar } from "@/components/navbar";
import { EventWorld } from "@/components/event-world";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <EventWorld />
      <ContactSection />
      <Footer />
    </main>
  );
}