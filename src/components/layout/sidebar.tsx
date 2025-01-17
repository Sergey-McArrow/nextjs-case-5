"use client";

import { Fragment, useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { navItems } from "@/const";
import { usePathname, useRouter } from "next/navigation";

export const Sidebar = () => {
  const [selected, setSelected] = useState("property-details");
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (value: string) => {
    setSelected(value);
    router.push(`/${value}`);
  };
  useEffect(() => {
    setSelected(pathname.slice(1));
  }, [pathname]);

  return (
    <aside className="h-svh border-r p-8">
      <RadioGroup
        defaultValue="property-details"
        value={selected}
        onValueChange={handleNavigation}
      >
        {navItems.map((item, index) => (
          <Fragment key={item}>
            {index !== 0 && <span className="line" />}
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={item} id={item} />
              <Label
                htmlFor={item}
                className={selected === item ? "text-teal" : ""}
              >
                {item}
              </Label>
            </div>
          </Fragment>
        ))}
      </RadioGroup>
    </aside>
  );
};
