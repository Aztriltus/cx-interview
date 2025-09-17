import { RootLayout } from "@/components/root-layout";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-family-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CX Interview",
  description: "CX Interview",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${dmSans.variable} h-full`}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
