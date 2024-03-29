"use client";
// import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToTopButton from "@/components/toTopButton";
import TrailCursor from "@/components/trailCursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <html lang="en">
      <body className="bg-[#1A1A1A] overflow-x-hidden">
        <TrailCursor />
        <ToTopButton />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
