"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis } from "@/app/lib/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
    });

    setLenis(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}