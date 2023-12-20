import { Metadata } from "next";

export type SiteConfig = {
  metadata: Metadata;
};

export const config: SiteConfig = {
  metadata: {
    title: "Tatz and Pirz Studio",
    description:
      "A tattoo and piercing shop. We are located at 8222 Sgt. Fabian Yabut Circle Guadalupe Nuevo, Makati City",
    keywords:
      "Tattoo, Ink, Tattoo Makati, Tattoo BGC, Tattoo Taguig, Tattoos, Piercing, Piercing Makati, Piercing BGC, Piercing Taguig, Pierce, Guadalupe, Makati, BGC, Tattoo Studio, Piercing Studio, Tatz, Pirz, Cheap Tattoo, Cheap Piercing, Affordable Tattoo, Affordable Piercing",
    openGraph: {
      title: "Tatz and Pirz Studio",
      description: "Experience the art of affordable elegance",
      url: "",
    },
  },
};
