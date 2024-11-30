"use client";

import { NAVBART_ITEMS } from "@/config";
import { useEffect, useRef, useState } from "react";
import { NavItem } from "./nav-item";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export const NavbarItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [activeIndex]);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div
      className="flex justify-between space-x-6 items-center h-full"
      ref={navRef}
    >
      {NAVBART_ITEMS.map((item, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = activeIndex === i;

        return (
          <NavItem
            key={i}
            navItem={item}
            handleopen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};
