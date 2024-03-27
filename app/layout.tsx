import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Elevate-app",
  description: "Digital Marketing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>      
      <Navbar />

      {children}
     
      <Footer />

      </body>
    </html>
  );
}
