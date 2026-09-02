import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hqconstruct.com"),
  title: "HQ Construct Ltd | Commercial Scaffolding Contractor",
  description:
    "Commercial scaffolding, access and project support for main contractors, developers and construction teams across the North West and UK.",
  openGraph: {
    title: "HQ Construct Ltd | Commercial Scaffolding Contractor",
    description:
      "Scaffolding, access and project support for main contractors, developers and commercial site teams.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "HQ Construct commercial scaffolding preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HQ Construct Ltd | Commercial Scaffolding Contractor",
    description:
      "Scaffolding, access and project support for main contractors, developers and commercial site teams.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/assets/hqconstruct-site-icon-270.png",
    shortcut: "/assets/hqconstruct-site-icon-270.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
