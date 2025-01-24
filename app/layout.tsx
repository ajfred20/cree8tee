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
  title: "Cre8tee - Creative Design Agency",
  description:
    "Transform your brand with our creative design services. We offer website design, mobile app design, branding, and more with a subscription-based model.",
  openGraph: {
    title: "Cre8tee - Creative Design Agency",
    description:
      "Transform your brand with our creative design services. We offer website design, mobile app design, branding, and more with a subscription-based model.",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Cre8tee Logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
