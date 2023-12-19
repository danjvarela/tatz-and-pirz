"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactUs() {
  return (
    <Button size="sm" asChild>
      <Link href="/#contact-us">Contact us</Link>
    </Button>
  );
}
