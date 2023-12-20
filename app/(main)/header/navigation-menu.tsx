"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu as RxNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItemProps, navigationItems } from "./navigation-items";
import { isEmpty } from "lodash";

function ListItem({ title, href, subItems }: ListItemProps) {
  return isEmpty(subItems) ? (
    <NavigationMenuItem>
      <Link href={href || ""} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ) : (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {subItems!.map(({ href, description, title }, i) => (
            <li key={i}>
              <NavigationMenuLink asChild>
                <Link
                  href={href || ""}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">
                    {title}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default function NavigationMenu() {
  return (
    <RxNavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item, i) => (
          <ListItem key={i} {...item} />
        ))}
      </NavigationMenuList>
    </RxNavigationMenu>
  );
}
