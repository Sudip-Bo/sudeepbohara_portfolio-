import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sudip Bohara | Web Designer • Web Developer • UI/UX Designer",
  description: "I help businesses build trust, attract customers, and grow through premium digital experiences. Web design, development, and UI/UX services.",
  keywords: ["web design", "web development", "UI/UX design", "premium websites", "digital experiences"],
  openGraph: {
    title: "Sudip Bohara | Web Designer • Web Developer • UI/UX Designer",
    description: "I help businesses build trust, attract customers, and grow through premium digital experiences.",
    type: "website",
    url: "https://sudeepbohara.com.np",
    siteName: "Sudip Bohara Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sudip Bohara - Web Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudip Bohara | Web Designer • Web Developer • UI/UX Designer",
    description: "I help businesses build trust, attract customers, and grow through premium digital experiences.",
    images: ["/og-image.png"],
    creator: "@sudeepbohara",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sudeepbohara.com.np",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sudip Bohara",
    jobTitle: "Web Designer • Web Developer • UI/UX Designer",
    email: "sudeepbohara@gmail.com",
    url: "https://sudeepbohara.com.np",
    sameAs: [
      "https://linkedin.com/in/sudeepbohara",
      "https://github.com/sudeepbohara",
      "https://twitter.com/sudeepbohara",
    ],
    description: "I help businesses build trust, attract customers, and grow through premium digital experiences.",
    knowsAbout: ["Web Design", "Web Development", "UI/UX Design", "Next.js", "TypeScript", "Tailwind CSS"],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-indigo focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
