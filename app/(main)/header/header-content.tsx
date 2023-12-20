"use client";

import ContactUs from "./contact-us";
import NavigationMenu from "./navigation-menu";
import { useScreen } from "@/hooks/useScreen";
import { useIsClient } from "usehooks-ts";
import NavigationMenuMobile from "./navigation-menu-mobile";
import Link from "next/link";

export default function HeaderContent() {
  const { md } = useScreen();
  const isClient = useIsClient();

  if (!isClient) return null;

  return md ? (
    <>
      <Link
        href="/"
        className="font-accent text-base lg:text-xl whitespace-nowrap"
      >
        Tatz & Pirz Studio
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
