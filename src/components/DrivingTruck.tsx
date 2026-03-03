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
      className="relative mt-auto h-48 w-full overflow-hidden md:h-44"
    >
      {/* 背景ビルシルエット — 奥行き演出 */}
      <div className="absolute bottom-6 left-0 right-0 md:bottom-8">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-28 w-full md:h-32"
          fill="none"
        >
          {/* 遠景ビル群（薄い） */}
          <rect x="60"  y="40" width="28" height="80" fill="white" opacity="0.03" />
          <rect x="95"  y="55" width="22" height="65" fill="white" opacity="0.025" />
          <rect x="140" y="35" width="35" height="85" fill="white" opacity="0.03" />
          <rect x="180" y="50" width="20" height="70" fill="white" opacity="0.02" />
          <rect x="250" y="30" width="40" height="90" fill="white" opacity="0.035" />
          <rect x="295" y="48" width="25" height="72" fill="white" opacity="0.025" />
          <rect x="370" y="42" width="30" height="78" fill="white" opacity="0.03" />
          <rect x="420" y="55" width="18" height="65" fill="white" opacity="0.02" />
          <rect x="500" y="28" width="45" height="92" fill="white" opacity="0.035" />
          <rect x="550" y="50" width="22" height="70" fill="white" opacity="0.025" />
          <rect x="620" y="38" width="32" height="82" fill="white" opacity="0.03" />
          <rect x="700" y="45" width="28" height="75" fill="white" opacity="0.025" />
          <rect x="760" y="32" width="38" height="88" fill="white" opacity="0.03" />
          <rect x="850" y="50" width="24" height="70" fill="white" opacity="0.02" />
          <rect x="920" y="36" width="35" height="84" fill="white" opacity="0.035" />
          <rect x="980" y="52" width="20" height="68" fill="white" opacity="0.025" />
          <rect x="1040" y="40" width="30" height="80" fill="white" opacity="0.03" />
          <rect x="1100" y="55" width="25" height="65" fill="white" opacity="0.02" />
          {/* 近景ビル群（やや濃い） */}
          <rect x="80"  y="60" width="24" height="60" fill="white" opacity="0.045" />
          <rect x="160" y="55" width="30" height="65" fill="white" opacity="0.05" />
          <rect x="270" y="58" width="20" height="62" fill="white" opacity="0.04" />
          <rect x="400" y="52" width="35" height="68" fill="white" opacity="0.05" />
          <rect x="530" y="60" width="26" height="60" fill="white" opacity="0.04" />
          <rect x="660" y="54" width="32" height="66" fill="white" opacity="0.05" />
          <rect x="800" y="58" width="22" height="62" fill="white" opacity="0.04" />
          <rect x="950" y="52" width="28" height="68" fill="white" opacity="0.05" />
          <rect x="1060" y="58" width="24" height="62" fill="white" opacity="0.04" />
          {/* ビル窓の光 */}
          <rect x="65"  y="48" width="3" height="3" fill="white" opacity="0.06" />
          <rect x="75"  y="55" width="3" height="3" fill="white" opacity="0.04" />
          <rect x="148" y="42" width="3" height="3" fill="white" opacity="0.05" />
          <rect x="155" y="52" width="3" height="3" fill="white" opacity="0.04" />
          <rect x="258" y="38" width="3" height="3" fill="white" opacity="0.06" />
          <rect x="265" y="48" width="3" height="3" fill="white" opacity="0.04" />
          <rect x="507" y="36" width="3" height="3" fill="white" opacity="0.05" />
          <rect x="520" y="45" width="3" height="3" fill="white" opacity="0.04" />
          <rect x="768" y="40" width="3" height="3" fill="white" opacity="0.06" />
          <rect x="780" y="50" width="3" height="3" fill="white" opacity="0.04" />
          <rect x="928" y="42" width="3" height="3" fill="white" opacity="0.05" />
          <rect x="940" y="52" width="3" height="3" fill="white" opacity="0.04" />
        </svg>
      </div>

      {/* テキスト - トラックの後ろから出現 */}
      <p
        className={`font-handwriting absolute bottom-[7rem] left-2 text-xl tracking-widest text-white/90 md:bottom-[5.5rem] md:left-4 md:text-3xl ${
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
