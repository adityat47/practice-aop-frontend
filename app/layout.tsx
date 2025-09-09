import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter, Kadwa } from "next/font/google";
import "./globals.css";
import QueryClientProviderWrapper from "@/components/providers/query-client-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const kadwa = Kadwa({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-kadwa",
});

export const metadata: Metadata = {
  title: "AOP - Admin Operations Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${kadwa.variable} antialiased`}
    >
      <body className= {`bg-[#fff] font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
     
        <QueryClientProviderWrapper>
          {children}
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
