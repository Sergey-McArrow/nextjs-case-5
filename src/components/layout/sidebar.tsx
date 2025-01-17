"use client";

import { Fragment, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { navItems } from "@/const";

export const Sidebar = () => {
  const [selected, setSelected] = useState("property-details");

  return (
    <aside className="h-svh border-r p-8">
      <RadioGroup defaultValue="property-details" onValueChange={setSelected}>
        {navItems.map((item, index) => (
          <Fragment key={item}>
            {index !== 0 && <span className="line" />}
            <div key={item} className="flex items-center space-x-2">
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
