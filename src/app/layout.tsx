import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Kurenaido } from "next/font/google";
import ScrollTruck from "@/components/ScrollTruck";
import MobileNav from "@/components/MobileNav";
import MobileCTA from "@/components/MobileCTA";
import { navIcons } from "@/components/NavIcons";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const zenKurenaido = Zen_Kurenaido({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "軽貨物ドライバー採用｜グリーンロジスティクス株式会社",
  description:
    "大阪で軽貨物ドライバーになろう！月収28万〜35万円、未経験歓迎。車両リース完備・初期費用ゼロ。グリーンロジスティクス株式会社の採用情報ページです。",
  keywords: [
    "軽貨物ドライバー",
    "大阪",
    "求人",
    "未経験歓迎",
    "ドライバー募集",
    "配送",
    "正社員",
    "業務委託",
  ],
  openGraph: {
    title: "軽貨物ドライバー採用｜グリーンロジスティクス株式会社",
    description:
      "大阪で軽貨物ドライバーになろう！月収28万〜35万円、未経験歓迎。車両リース完備・初期費用ゼロ。",
    type: "website",
    locale: "ja_JP",
    siteName: "グリーンロジスティクス株式会社",
  },
  twitter: {
    card: "summary_large_image",
    title: "軽貨物ドライバー採用｜グリーンロジスティクス",
    description:
      "大阪で月収28万〜35万円。未経験歓迎・車両リース完備。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const navLinks = [
  { href: "#reasons", label: "選ばれる理由" },
  { href: "#jobs", label: "求人情報" },
  { href: "#benefits", label: "待遇・福利厚生" },
  { href: "#daily", label: "1日の流れ" },
  { href: "#voices", label: "先輩の声" },
  { href: "#faq", label: "よくある質問" },
  { href: "#gallery", label: "ギャラリー" },
  { href: "#company", label: "会社概要" },
  { href: "#access", label: "アクセス" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${zenKurenaido.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              title: "軽貨物ドライバー",
              description:
                "大阪府内で軽貨物の配送を行うドライバー。未経験歓迎、車両リース完備。",
              hiringOrganization: {
                "@type": "Organization",
                name: "グリーンロジスティクス株式会社",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "大阪市中央区",
                  addressRegion: "大阪府",
                  addressCountry: "JP",
                },
              },
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "大阪市",
                  addressRegion: "大阪府",
                  addressCountry: "JP",
                },
              },
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "JPY",
                value: {
                  "@type": "QuantitativeValue",
                  minValue: 280000,
                  maxValue: 350000,
                  unitText: "MONTH",
                },
              },
              employmentType: ["FULL_TIME", "CONTRACTOR"],
              datePosted: "2025-01-15",
            }),
          }}
        />
      </head>
      <body className="bg-bg font-[family-name:var(--font-noto-sans-jp)] text-gray-700 antialiased">
        <ScrollTruck />
        <MobileCTA />

        {/* ヘッダー */}
        <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
            <a href="/" className="flex items-center gap-2">
              <svg viewBox="0 0 40 28" fill="none" className="h-7 w-10 text-brand" aria-hidden="true">
                {/* 荷台 */}
                <rect x="1" y="6" width="20" height="13" rx="2" fill="currentColor" />
                {/* 葉マーク */}
                <path d="M7 10c3-3 8-2 8 2s-4 5-8 4c2-1 4-3 4-5s-2-2-4-1Z" fill="white" opacity="0.9" />
                {/* キャビン */}
                <path d="M21 10h8c2 0 3.5 1 4.5 3l2.5 4c.5 1 0 2-1 2h-1v-1h-13Z" fill="currentColor" opacity="0.85" />
                {/* フロントガラス */}
                <path d="M25 11h3.5l3 5H25Z" fill="white" opacity="0.3" />
                {/* 後輪 */}
                <circle cx="8" cy="21" r="3.5" fill="currentColor" />
                <circle cx="8" cy="21" r="1.5" fill="white" opacity="0.2" />
                {/* 前輪 */}
                <circle cx="29" cy="21" r="3.5" fill="currentColor" />
                <circle cx="29" cy="21" r="1.5" fill="white" opacity="0.2" />
                {/* シャーシ */}
                <rect x="4" y="18" width="28" height="1.5" rx="0.75" fill="currentColor" opacity="0.6" />
              </svg>
              <span className="text-[15px] font-extrabold tracking-tight text-brand">
                グリーンロジスティクス
              </span>
            </a>

            <nav className="hidden items-center gap-5 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link flex items-center gap-1.5 text-[13px] text-gray-500 transition-colors hover:text-brand"
                >
                  {navIcons[link.href]}
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#apply"
              className="hidden rounded-md bg-cta px-5 py-2 text-[13px] font-bold text-white transition-colors hover:bg-cta-hover lg:inline-block"
            >
              応募する
            </a>

            <MobileNav />
          </div>
        </header>

        <main>{children}</main>

        {/* 背景画像 — 画面下に固定、フッターの裏に隠れている */}
        <div className="fixed bottom-0 left-0 right-0 -z-10 h-[60vh] md:h-[70vh]">
          <div className="absolute inset-0 bg-[url('/keikamotsu-hp/images/footer-bg.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/30" />
          <p className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-handwriting)] text-2xl tracking-widest text-white/80 md:text-4xl">
            あなたの道は、ここから始まる。
          </p>
        </div>

        {/* フッター — 普通にスクロールする。背景白で画像を隠す */}
        <footer className="relative z-10 border-t border-gray-200 bg-white pb-20 md:pb-0">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto_auto]">
              <div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 40 28" fill="none" className="h-6 w-8 text-brand" aria-hidden="true">
                    <rect x="1" y="6" width="20" height="13" rx="2" fill="currentColor" />
                    <path d="M7 10c3-3 8-2 8 2s-4 5-8 4c2-1 4-3 4-5s-2-2-4-1Z" fill="white" opacity="0.9" />
                    <path d="M21 10h8c2 0 3.5 1 4.5 3l2.5 4c.5 1 0 2-1 2h-1v-1h-13Z" fill="currentColor" opacity="0.85" />
                    <circle cx="8" cy="21" r="3.5" fill="currentColor" />
                    <circle cx="8" cy="21" r="1.5" fill="white" opacity="0.2" />
                    <circle cx="29" cy="21" r="3.5" fill="currentColor" />
                    <circle cx="29" cy="21" r="1.5" fill="white" opacity="0.2" />
                    <rect x="4" y="18" width="28" height="1.5" rx="0.75" fill="currentColor" opacity="0.6" />
                  </svg>
                  <p className="text-sm font-bold text-gray-900">
                    グリーンロジスティクス株式会社
                  </p>
                </div>
                <p className="mt-2 text-xs leading-[1.9] text-gray-400">
                  〒541-0053
                  <br />
                  大阪府大阪市中央区本町1-1-1 グリーンビル5F
                </p>
              </div>

              <div className="text-sm">
                <p className="text-xs text-gray-400">電話番号</p>
                <a
                  href="tel:06-1234-5678"
                  className="mt-0.5 block whitespace-nowrap font-bold text-gray-800"
                >
                  06-1234-5678
                </a>
                <p className="mt-0.5 text-xs text-gray-400">
                  平日 9:00〜18:00
                </p>
              </div>

              <div className="flex items-end">
                <p className="text-[11px] text-gray-400">
                  &copy; {new Date().getFullYear()} Green Logistics
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* スペーサー — この分だけスクロールするとフッターが上に去り、固定画像が現れる */}
        <div className="relative z-10 h-[60vh] md:h-[70vh]" />
      </body>
    </html>
  );
}
