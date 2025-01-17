import { Sidebar } from "@/components/layout/sidebar";
import { FC, PropsWithChildren } from "react";

const NavLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-[30%_70%]">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default NavLayout;
