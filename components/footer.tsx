export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030303] py-6 md:py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-2 px-4 text-center sm:flex-row sm:px-6 sm:text-left md:px-10">
        <p className="text-[10px] uppercase tracking-[0.18em] text-white/35 sm:text-[11px]">
          © {new Date().getFullYear()} Raven Rows. All rights reserved.
        </p>

        <p className="text-sm italic text-white/30 sm:text-[14px]">
          Producing What People Remember.
        </p>
      </div>
    </footer>
  );
}