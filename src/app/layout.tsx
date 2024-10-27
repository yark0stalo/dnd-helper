import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const firwaenRegular = localFont({
  src: "./fonts/firwaen.regular.otf",
  variable: "--font-firwaen",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DnD Tools",
  description: "Making rootin actions faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firwaenRegular.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
