import type { Metadata } from "next";
import { Inter, Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/sections/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Nite Life Nav",
  description: "Simplifying Your Nightlife Options",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <body
        className={`${mulish.variable} ${inter.variable} max-w-screen min-h-screen w-full overflow-auto overflow-x-hidden bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
