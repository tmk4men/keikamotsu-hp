"use client";

import { useEffect, useRef, useState } from "react";

export default function DrivingTruck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateEnd = () => {
      const width = el.offsetWidth;
      el.style.setProperty("--drive-end", `${width - 150}px`);
    };

    updateEnd();
    requestAnimationFrame(() => setReady(true));

    window.addEventListener("resize", updateEnd);
    return () => window.removeEventListener("resize", updateEnd);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mt-auto h-36 w-full overflow-hidden md:h-44"
    >
      {/* テキスト - トラックの後ろから出現 */}
      <p
        className={`font-handwriting absolute bottom-12 left-2 text-xl tracking-widest text-white/90 md:bottom-[5.5rem] md:left-4 md:text-3xl ${
          ready ? "text-behind-truck" : "opacity-0"
        }`}
      >
        あなたと届けたい笑顔がある。
      </p>

      {/* 道路ライン */}
      <div className="absolute bottom-6 left-0 right-0 h-px bg-white/20 md:bottom-8" />
      <div
        className={`absolute bottom-6 left-0 h-px w-full ${ready ? "road-dash" : ""}`}
      />

      {/* トラック本体 - 右方向に走行して停止 */}
      <div
        className={`absolute bottom-7 md:bottom-9 ${ready ? "truck-drive" : ""}`}
        style={!ready ? { transform: "translateX(-150px)" } : undefined}
      >
        <svg
          width="120"
          height="64"
          viewBox="0 0 200 110"
          fill="none"
          className="text-white/90 md:scale-125"
        >
          {/* 荷台 */}
          <rect x="10" y="15" width="100" height="60" rx="3" fill="currentColor" opacity="0.9" />
          <rect x="12" y="17" width="96" height="20" rx="2" fill="white" opacity="0.08" />

          {/* キャビン */}
          <path
            d="M110 30 H155 C160 30 164 33 167 37 L178 55 C180 59 178 63 173 63 L173 75 L110 75 Z"
            fill="currentColor"
            opacity="0.95"
          />
          {/* フロントガラス */}
          <path
            d="M128 35 H153 L165 55 H128 Z"
            fill="white"
            opacity="0.25"
          />
          {/* ヘッドライト */}
          <rect x="172" y="55" width="6" height="8" rx="1" fill="#fbbf24" opacity="0.7" />

          {/* シャーシ */}
          <rect x="25" y="73" width="150" height="4" rx="2" fill="currentColor" opacity="0.7" />

          {/* 後輪 */}
          <g className={ready ? "wheel-spin" : ""} style={{ transformOrigin: "45px 82px" }}>
            <circle cx="45" cy="82" r="14" fill="currentColor" />
            <circle cx="45" cy="82" r="7" fill="white" opacity="0.1" />
            <line x1="45" y1="68" x2="45" y2="96" stroke="white" opacity="0.06" strokeWidth="1" />
            <line x1="31" y1="82" x2="59" y2="82" stroke="white" opacity="0.06" strokeWidth="1" />
          </g>

          {/* 前輪 */}
          <g className={ready ? "wheel-spin" : ""} style={{ transformOrigin: "148px 82px" }}>
            <circle cx="148" cy="82" r="14" fill="currentColor" />
            <circle cx="148" cy="82" r="7" fill="white" opacity="0.1" />
            <line x1="148" y1="68" x2="148" y2="96" stroke="white" opacity="0.06" strokeWidth="1" />
            <line x1="134" y1="82" x2="162" y2="82" stroke="white" opacity="0.06" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* 風のライン（走行中に表示） */}
      {ready && (
        <>
          <div className="wind-line absolute bottom-14 h-px w-8 bg-white/10 md:bottom-20" style={{ animationDelay: "0s" }} />
          <div className="wind-line absolute bottom-12 h-px w-12 bg-white/8 md:bottom-16" style={{ animationDelay: "0.6s" }} />
          <div className="wind-line absolute bottom-16 h-px w-6 bg-white/8 md:bottom-24" style={{ animationDelay: "1.2s" }} />
        </>
      )}
    </div>
  );
}
