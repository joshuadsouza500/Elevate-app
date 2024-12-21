import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Footer1 from "./components/ui/Footer1";

export const metadata: Metadata = {
  verification: {
    google: "m3YkuK-Y4S-R_8lvq_jMpg2khDcoUQJKPe0TmD0r9ms",
  },
  title: "Elevate-app",
  description: "Marketing agency",
  keywords: [
    "SocialMedia",
    "Marketing",
    "ads",
    "WebDesign",
    "WebDevelopement",
    "GCC",
    "SEO",
    "Brand ",
  ],
  openGraph: {
    title: "Elevate-app",
    description: "Marketing agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="
font-Poppins"
    >
      <body className="bg-background">
        {children}

        <Footer />
      </body>
    </html>
  );
}
