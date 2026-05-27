import { Navbar } from "@/components/navbar";
import { EventWorld } from "@/components/event-world";
import { Footer } from "@/components/footer";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <EventWorld />
      <Footer />
    </main>
  );
}