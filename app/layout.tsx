import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tatz & Pirz Studio",
  description:
    "Tatz & Pirz Studio, Experience the art of affordable elegance! Located at Guadalupe, Makati City",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-sage-2")}>{children}</body>
    </html>
  );
}
