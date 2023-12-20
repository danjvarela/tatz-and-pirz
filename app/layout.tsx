import type { Metadata } from "next";
import { Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { createClient } from "@/prismicio";
import { config } from "@/site";

const inter = Inter({ subsets: ["latin"] });
const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  weight: "400",
});

const { metadata } = config;

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const { data } = await client.getSingle("metadata");

  return {
    title: data.title || metadata.title,
    description: data.description || metadata.description,
    keywords:
      data.keywords.map((item) => item.keyword).join(",") || metadata.keywords,
    openGraph: {
      title: data.opengraph_title || metadata.openGraph?.title,
      description:
        data.opengraph_description || metadata.openGraph?.description,
      images: {
        url: data.opengraph_image.url || metadata.openGraph?.url || "",
      },
    },
  };
}

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
