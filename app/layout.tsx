import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gladys Ouma | Software Engineer",
  description:
    "The portfolio of Gladys Ouma — software engineering, AI and machine learning, backend systems, and thoughtful digital products.",
  keywords: [
    "Gladys Ouma",
    "Software Engineer",
    "Python",
    "AI and Machine Learning",
    "Next.js",
    "Backend Engineering",
  ],
  openGraph: {
    title: "Gladys Ouma | Software Engineer",
    description:
      "Building useful software, intelligent systems, and digital products with purpose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
