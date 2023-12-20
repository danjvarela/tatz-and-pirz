"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuTrigger as RxNavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { isEmpty } from "lodash";
import { ListItemProps, navigationItems } from "./navigation-items";
import { useState } from "react";
import { useMetadata } from "@/hooks/useMetadata";
import { config } from "@/site";

function ListItem({ href = "", title, subItems }: ListItemProps) {
  return isEmpty(subItems) ? (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          "w-full justify-start font-semibold",
        )}
      >
        {title}
      </NavigationMenuLink>
    </Link>
  ) : (
    <>
      <div
        className={cn(
          navigationMenuTriggerStyle(),
          "pointer-events-none select-none font-semibold",
        )}
      >
        {title}
      </div>
      {subItems!.map(({ href, title }, i) => (
        <Link key={`${href}${i}`} href={href || ""} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              "w-full pl-6 justify-start",
            )}
          >
            {title}
          </NavigationMenuLink>
        </Link>
      ))}
    </>
  );
}

export default function NavigationMenuMobile() {
  const { data: metadata } = useMetadata();
  const [value, setValue] = useState("");
  const isToggled = value === "toggled";

  return (
    <NavigationMenu
      orientation="vertical"
      value={value}
      onValueChange={setValue}
    >
      <NavigationMenuList>
        <NavigationMenuItem value="toggled">
          <RxNavigationMenuTrigger>
            {isToggled ? <X /> : <Menu />}
          </RxNavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[300px] p-2 flex flex-col">
              <ListItem
                href="/"
                title={
                  <span className="font-bold text-xl font-accent">
                    {metadata?.data.site_name || config.siteName}
                  </span>
                }
              />
              {navigationItems.map((item, i) => (
                <ListItem key={i} {...item} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
