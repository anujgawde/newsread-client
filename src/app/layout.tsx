import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Bangers } from "next/font/google";

const bangers = Bangers({
  subsets: ["latin"], // Specify the required subset
  weight: "400", // Bangers only supports 400 weight
  variable: "--font-bangers", // CSS variable for easier Tailwind integration
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

export const metadata: Metadata = {
  title: "NewsRead",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bangers.variable} antialiased max-h-screen overflow-y-hidden h-screen flex flex-col justify-between`}
      >
        <div className="py-4 flex justify-center bg-white border-b">
          <Navbar />
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
