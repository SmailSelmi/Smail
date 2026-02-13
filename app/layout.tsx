import type { Metadata, Viewport } from "next";
import localFont from "next/font/local"; // 1. Import localFont
import "@gravity-ui/uikit/styles/styles.scss"; // 2. Import Gravity Styles
import "./globals.css"; // 3. Import global overrides (includes Fonts)
import { Providers } from "./providers"; // 4. Import our wrapper
import { ContentProtection } from "@/components/layout/content-protection"; // 5. Import Content Protection
import { SplashScreen } from "@/components/ui/splash-screen"; // 6. Import Splash Screen
import { KonamiWrapper } from "@/components/features/konami-wrapper"; // 7. Import Konami Code
import { NetworkAware } from "@/components/layout/network-aware"; // 8. Network Optimization
import { SpeedInsights } from "@vercel/speed-insights/next"; // 9. Speed Insights



const chillax = localFont({
  src: "./fonts/Chillax-Variable.woff2",
  variable: "--font-chillax",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000", // Zinc 950 to match theme
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Smail Selmi | UI/UX Designer & Developer",
    template: "%s | Smail Selmi",
  },
  description:
    "Portfolio of Smail Selmi, a UI/UX Designer and Front-end Developer specializing in modern, high-performance web applications using Next.js, React, and Gravity UI.",
  keywords: [
    "UI/UX Design",
    "Front-end Developer",
    "React",
    "Next.js",
    "Gravity UI",
    "Tailwind CSS",
    "Framer Motion",
    "Web Design",
    "Smail Selmi",
    "Kyodai Code",
  ],
  authors: [{ name: "Smail Selmi", url: "https://smailselmi.com" }],
  creator: "Smail Selmi",
  publisher: "Kyodai Code",
  metadataBase: new URL("https://smailselmi.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smailselmi.com",
    title: "Smail Selmi | UI/UX Designer & Developer",
    description:
      "Bridging the gap between brand identity and high-performance code. Explore the portfolio of Smail Selmi.",
    siteName: "Smail Selmi Portfolio",
    images: [
      {
        url: "/og-image.png", // Assuming an og-image exists or will be added
        width: 1200,
        height: 630,
        alt: "Smail Selmi - UI/UX Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smail Selmi | UI/UX Designer & Developer",
    description:
      "Bridging the gap between brand identity and high-performance code.",
    images: ["/og-image.png"],
    creator: "@uixsmail", // Verify handle if possible, otherwise keep
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`g-root g-root_theme_dark ${chillax.variable} ${chillax.className} noselect`} suppressHydrationWarning>
        <SplashScreen />
        <KonamiWrapper />
        <NetworkAware />
        <ContentProtection />
        <Providers>{children}</Providers>
        <SpeedInsights />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7QRB5ZRZDM"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7QRB5ZRZDM');
          `}
        </Script>
      </body>
    </html>
  );
}
