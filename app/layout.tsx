import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
