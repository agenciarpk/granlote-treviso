"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Voltar ao início"
      className={cn(
        "fixed bottom-36 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-earth-deep text-off-white shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-all hover:bg-ocre md:right-10",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 19V5m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
