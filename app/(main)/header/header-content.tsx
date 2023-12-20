"use client";

import ContactUs from "@/components/contact-us";
import NavigationMenu from "./navigation-menu";
import { useScreen } from "@/hooks/useScreen";
import { useIsClient } from "usehooks-ts";
import NavigationMenuMobile from "./navigation-menu-mobile";
import Link from "next/link";
import { useMetadata } from "@/hooks/useMetadata";
import { config } from "@/site";

export default function HeaderContent() {
  const { data: metadata } = useMetadata();
  const { md } = useScreen();
  const isClient = useIsClient();

  if (!isClient) return null;

  return md ? (
    <>
      <Link
        href="/"
        className="font-accent text-base lg:text-xl whitespace-nowrap"
      >
        {metadata?.data.site_name || config.siteName}
      </Link>
      <NavigationMenu />
      <ContactUs />
    </>
  ) : (
    <>
      <NavigationMenuMobile />
      <ContactUs />
    </>
  );
}
