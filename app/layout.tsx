import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brian Bundi | Software Development & Cybersecurity",
  description: "Software Development student focused on cybersecurity, building secure systems and technical research.",
  verification: {
    google: "KzYQBWi5PrK_-0pWxvbRvtTe-CrEhbuB_61goJQfAWY",
  },
  openGraph: {
    title: "Brian Bundi | Software Development & Cybersecurity",
    description: "Software Development student focused on cybersecurity, building secure systems and technical research.",
    url: "https://rebornb34.github.io",
    siteName: "Brian Bundi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Bundi | Software Development & Cybersecurity",
    description: "Software Development student focused on cybersecurity, building secure systems and technical research.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1115" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-12HMX6DZ9Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-12HMX6DZ9Z');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white text-[#1E1E1E] dark:bg-[#0F1115] dark:text-zinc-100 flex flex-col min-h-screen selection:bg-[#3858E9]/15 selection:text-[#3858E9] dark:selection:bg-[#3858E9]/30 dark:selection:text-blue-300 transition-colors duration-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
