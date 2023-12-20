import type { Metadata } from "next";
import { Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  weight: "400",
});

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, permanentMarker.variable)}>
        {children}
      </body>
    </html>
  );
}
