"use client";

import { useState, useEffect, useRef } from "react";

export default function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (displayed >= text.length) return;
    const timer = setTimeout(() => setDisplayed((d) => d + 1), 120);
    return () => clearTimeout(timer);
  }, [started, displayed, text.length]);

  return (
    <span ref={ref} className={className}>
      {text.slice(0, displayed)}
      <span className={`inline-block w-[2px] h-[1em] bg-white/80 align-middle ml-0.5 ${displayed < text.length ? "animate-pulse" : "opacity-0"}`} />
    </span>
  );
}
