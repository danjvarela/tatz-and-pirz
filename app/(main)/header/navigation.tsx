"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/#about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Works</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem title="Tattoo works" href="/#tattoo-works">
                Our tattoo services encompass a wide range, from minimalistic
                designs to UV ink, medium to large tattoos, and cover-up
                solutions. Explore a glimpse of our portfolio showcasing these
                specialties and more.
              </ListItem>

              <ListItem title="Piercing works" href="/#piercing-works">
                Our piercing services offer an extensive selection, covering
                ear, lip, eyebrow, nose, and navel piercings. Additionally, we
                provide cleaning, jewelry changes, and an array of other options
                to meet your piercing needs.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/#artists" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Artists
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Preparations and Aftercare
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem
                title="Tattoo preparations and aftercare"
                href="/preparations-and-aftercare#tattoo-preparations"
              >
                Things to do before and after getting a tattoo
              </ListItem>

              <ListItem
                title="Piercing preparations and aftercare"
                href="/preparations-and-aftercare#piercing-preparations"
              >
                Things to do before and after having a piercing
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
