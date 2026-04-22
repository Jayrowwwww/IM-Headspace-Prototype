import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lgc = localFont({
  variable: "--font-lgc",
  src: [
    {
      path: "../assets/fonts/Louis-George-Cafe.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const brother = localFont({
  variable: "--font-brother",
  src: [
    {
      path: "../assets/fonts/07-brother1816-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});


export const metadata: Metadata = {
  title: "Log In"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lgc.variable} ${brother.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
