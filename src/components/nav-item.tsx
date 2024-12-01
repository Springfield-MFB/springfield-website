"use client";

import { NAVBART_ITEMS } from "@/config";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { FC, RefObject } from "react";
import AnimatedBackground from "./core/animated-background";

const ITEMS = [
  {
    id: 1,
    title: "Dialog",
    description: "Enhances modal presentations.",
  },
  {
    id: 2,
    title: "Popover",
    description: "For small interactive overlays.",
  },
  {
    id: 3,
    title: "Accordion",
    description: "Collapsible sections for more content.",
  },
  {
    id: 4,
    title: "Collapsible",
    description: "Collapsible sections for more content.",
  },
  {
    id: 5,
    title: "Drag to Reorder",
    description: "Reorder items with drag and drop.",
  },
  {
    id: 6,
    title: "Swipe to Delete",
    description: "Delete items with swipe gestures.",
  },
];

type NavItem = (typeof NAVBART_ITEMS)[number];

interface NavItemProps {
  navItem: NavItem;
  isOpen: boolean;
  isAnyOpen: boolean;
  onMouseEnter: () => void;
}

export const NavItem: FC<NavItemProps> = ({
  isOpen,
  isAnyOpen,
  navItem,
  onMouseEnter,
}) => {
  return (
    <div className="flex">
      <div
        className="relative flex gap-x-1 items-center text-dark-primary text-sm cursor-pointer
      "
        onMouseEnter={onMouseEnter}
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
            isOpen && "animate-slide-down",
            {
              "animate-in  fade-in-10 slide-in-from-top-16": !isAnyOpen,
            }
          )}
        >
          <div className="relative  bg-white">
            <div className="mx-auto w-full">
              {/* <div className="grid grid-cols-3 gap-x-8 gap-y-10 pt-4 pb-8">
                <div className="col-span-4 col-start-1 grid  grid-cols-3">
                  {navItem.content.map((item, i) => (
                    <AnimatedBackground
                      className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
                      transition={{
                        type: "spring",
                        bounce: 0.8,
                        duration: 1,
                      }}
                      enableHover
                    >
                      <div
                        key={item.title}
                        className="flex rounded-lg  bg-white p-4"
                      >
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
                    </AnimatedBackground>
                  ))}
                </div>
              </div> */}

              <div className="grid grid-cols-2 p-10 md:grid-cols-3">
                <AnimatedBackground
                  className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                  enableHover
                >
                  {ITEMS.map((item, index) => (
                    <div key={index} data-id={`card-${index}`}>
                      <div className="flex select-none flex-col space-y-1 p-4">
                        <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-50">
                          {item.title}
                        </h3>
                        <p className="text-base text-zinc-600 dark:text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </AnimatedBackground>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
