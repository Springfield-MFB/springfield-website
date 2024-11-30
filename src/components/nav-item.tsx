"use client";

import { NAVBART_ITEMS } from "@/config";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { FC } from "react";

type NavItem = (typeof NAVBART_ITEMS)[number];

interface NavItemProps {
  navItem: NavItem;
  handleopen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

export const NavItem: FC<NavItemProps> = ({
  handleopen,
  isOpen,
  isAnyOpen,
  navItem,
}) => {
  return (
    <div className="flex">
      <div
        onClick={handleopen}
        className="relative flex gap-x-1 items-center text-dark-primary text-sm cursor-pointer"
      >
        <span>{navItem.label}</span>
        <ChevronDown
          size={18}
          className={cn("transition-all", {
            "-rotate-180": isOpen,
          })}
        />
      </div>

      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm animate-slide-down",
            isOpen ? "animate-slide-down" : "animate-slide-up"
          )}
        >
          <div className="relative  bg-white">
            <div className="mx-auto w-full">
              <div className="grid grid-cols-3 gap-x-8 gap-y-10 pt-8">
                <div className="col-span-4 col-start-1 grid  grid-cols-3">
                  {navItem.content.map((item, i) => (
                    <div key={i} className="flex rounded-lg  bg-white p-4">
                      <div className="flex gap-x-2 ">
                        <div
                          style={{ backgroundColor: item.color }}
                          className={`flex size-[54px] bg-[${item.color}] items-center justify-center rounded-[8px]`}
                        >
                          <item.icon
                            color={item.iconColor}
                            className="size-[27px] text-muted-foreground"
                            aria-hidden="true"
                          />
                        </div>

                        <div className="flex flex-col flex-1 ">
                          <span className="text-base text-grey-200 font-bold">
                            {item.title}
                          </span>
                          <span className="text-sm font-light text-grey-150 leading-6">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
