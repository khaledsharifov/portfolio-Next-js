
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToTopButton from "@/components/toTopButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1A1A1A] overflow-x-hidden">
        <ToTopButton/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
