import { ReactNode } from "react";

export type ListItemProps = {
  href?: string;
  title?: ReactNode;
  subItems?: Omit<ListItemProps, "subItems">[];
  description?: ReactNode;
};

export const navigationItems: ListItemProps[] = [
  { href: "/#about-us", title: "About us" },
  {
    title: "Works",
    subItems: [
      {
        href: "/#tattoo-works",
        title: "Tattoo works",
        description: (
          <>
            Our tattoo services encompass a wide range, from minimalistic
            designs to UV ink, medium to large tattoos, and cover-up solutions.
            Explore a glimpse of our portfolio showcasing these specialties and
            more.
          </>
        ),
      },
      {
        href: "/#piercing-works",
        title: "Piercing works",
        description: (
          <>
            Our piercing services offer an extensive selection, covering ear,
            lip, eyebrow, nose, and navel piercings. Additionally, we provide
            cleaning, jewelry changes, and an array of other options to meet
            your piercing needs.
          </>
        ),
      },
    ],
  },
  { href: "/#artists", title: "Artists" },
  {
    title: "Preparations and Aftercare",
    subItems: [
      {
        href: "/preparations-and-aftercare#tattoo-preparations",
        title: "Tattoo preparations and aftercare",
        description: "Things to do before and after getting a tattoo",
      },
      {
        href: "/preparations-and-aftercare#piercing-preparations",
        title: "Piercing preparations and aftercare",
        description:
          "How to prepare before a piercing session and what to do after",
      },
    ],
  },
];
