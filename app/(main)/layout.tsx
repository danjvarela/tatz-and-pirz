import { PropsWithChildren } from "react";
import Header from "./header";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
