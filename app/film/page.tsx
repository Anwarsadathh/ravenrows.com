import { Navbar } from "@/components/navbar";
import { FilmWorld } from "@/components/film-world";
import { Footer } from "@/components/footer";

export default function FilmPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <FilmWorld />
      <Footer />
    </main>
  );
}