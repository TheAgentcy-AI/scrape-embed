import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peak Haus | Luxury Ski Home at Jay Peak, Vermont",
  description:
    "The only private luxury ski-in/ski-out home at Jay Peak. Four bedrooms, private sauna, hot tub, and true ski-in/ski-out access. Book direct for the best rates.",
  keywords: [
    "Jay Peak",
    "luxury ski rental",
    "Vermont vacation home",
    "ski-in ski-out",
    "Peak Haus",
    "Jay Peak lodging",
  ],
  openGraph: {
    title: "Peak Haus | Luxury Ski Home at Jay Peak, Vermont",
    description:
      "The only private luxury ski-in/ski-out home at Jay Peak. Four bedrooms, private sauna & hot tub.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-text-secondary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
