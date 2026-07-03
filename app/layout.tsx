import type { Metadata } from "next";
import "./globals.css";
import { grotesk, mono } from "./fonts";
import { Providers } from "@/components/Providers";
import { HERO_BODY, PROFILE } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://devinjohnson.dev"),
  title: "Devin Johnson — Senior AI Engineer",
  description: HERO_BODY,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Devin Johnson — Senior AI Engineer",
    description: HERO_BODY,
    type: "website",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Devin Johnson — Senior AI Engineer",
    description: HERO_BODY
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: PROFILE.title,
    email: PROFILE.email,
    telephone: PROFILE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kansas City",
      addressRegion: "MO",
      addressCountry: "US"
    },
    sameAs: [PROFILE.linkedin]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${grotesk.variable} ${mono.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
