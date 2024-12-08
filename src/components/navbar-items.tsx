"use client";

import AnimatedBackground from "../components/core/animated-background";

import { NAVBART_ITEMS } from "@/config";
import { useRef, useState } from "react";
import { NavItem } from "./nav-item";
import { useHover } from "@/hooks/use-hover";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export const NavbarItems = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const isAnyOpen = hoveredIndex !== null;

  useOnClickOutside(navRef, () => setHoveredIndex(null));

  const [ref, value] = useHover(navRef);

  const handleItemClick = () => {
    setHoveredIndex(null); // Close modal or reset hoveredIndex
  };

  return (
    <div
      className="flex justify-between space-x-6 items-center h-full"
      ref={navRef}
    >
      {NAVBART_ITEMS.map((item, i) => {
        const isHovered = value ? hoveredIndex === i : false;

        return (
          <NavItem
            onMouseEnter={() => setHoveredIndex(i)}
            key={i}
            navItem={item}
            isOpen={isHovered}
            isAnyOpen={isAnyOpen}
            close={handleItemClick}
          />
        );
      })}
    </div>
  );
};
