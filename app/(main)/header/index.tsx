import { headerHeight } from "@/lib/constants";
import HeaderContent from "./header-content";

export default function Header() {
  return (
    <header className="bg-background border-b" style={{ height: headerHeight }}>
      <div className="container h-full flex items-center justify-between">
        <HeaderContent />
      </div>
    </header>
  );
}
