import { headerHeight } from "@/lib/constants";
import Link from "next/link";
import Navigation from "./navigation";
import ContactUs from "./contact-us";

export default function Header() {
  return (
    <header className="bg-background border-b" style={{ height: headerHeight }}>
      <div className="container h-full flex items-center justify-between">
        <Link href="/" className="font-accent text-xl">
          Tatz & Pirz
        </Link>

        <Navigation />

        <ContactUs />
      </div>
    </header>
  );
}
