"use client";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Bangers, Tinos } from "next/font/google";
import BottomBar from "./components/BottomBar";
import { useEffect } from "react";
import { updateVisitCount } from "@/api/articles";

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tinos",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    window.addEventListener("beforeunload", async () => {
      const visitData = JSON.parse(localStorage.getItem("visitCounts")!) || {};
      updateVisitCount(visitData);

      localStorage.removeItem("visitCounts");
    });
  }, []);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bangers.variable} ${tinos.variable} w-full antialiased max-h-screen overflow-y-hidden h-screen flex flex-col justify-between bg-gray-50`}
      >
        <title>NewsRead</title>
        <div className="py-4 flex justify-center bg-white border-b">
          <Navbar />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>

        <BottomBar />
      </body>
    </html>
  );
}
