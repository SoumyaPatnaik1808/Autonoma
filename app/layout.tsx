import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const customFont = localFont({
  src: "./fonts/font-3.woff2",
  variable: "--font-custom",
  weight: "400 900",
});

export const metadata: Metadata = {
  title: "Autonoma - AI Video Automation",
  description: "Autonomous AI agents for faceless YouTube automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${customFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
