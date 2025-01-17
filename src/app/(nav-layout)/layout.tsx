import { Sidebar } from "@/components/layout/sidebar";
import { PropsWithChildren } from "react";

export default function NavLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[30%_70%]">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
