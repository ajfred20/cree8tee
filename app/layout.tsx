import { AuthProvider } from "@/lib/auth/AuthContext";
import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hustle - Web3 Talent at your fingertips",
  description:
    "Hustle is a platform that connects you with the best web3 talent at your fingertips.",
  openGraph: {
    title: "Hustle - Web3 Talent at your fingertips",
    description:
      "Hustle is a platform that connects you with the best web3 talent at your fingertips.",
    siteName: "Hustle",
    url: "https://hustle-aj.vercel.app",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Hustle Logo",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
