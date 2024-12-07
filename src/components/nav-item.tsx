"use client";

import { FC } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { NAVBART_ITEMS } from "@/config";
import AnimatedBackground from "./core/animated-background";
import { FlipText } from "./flip-text";

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
        className="relative flex gap-x-1 text-xs items-center text-dark-primary cursor-pointer
      "
        onMouseEnter={onMouseEnter}
      >
        {/* <span>{navItem.label}</span> */}
        <FlipText>{navItem.label}</FlipText>
        <ChevronDown
          size={14}
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
              <div className="grid grid-cols-3 gap-x-8 gap-y-10 pt-4 pb-8">
                <div className="col-span-4 col-start-1 grid  grid-cols-3">
                  <AnimatedBackground
                    className={`rounded-lg bg-yellow-50`}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                    enableHover
                  >
                    {navItem.content.map((item, i) => (
                      <Link href={item.href} key={i} data-id={`card-${i}`}>
                        <div className="flex rounded-lg p-4">
                          <div className="flex gap-x-2 ">
                            <div
                              style={{ backgroundColor: item.color }}
                              className={`flex size-[48px] bg-[${item.color}] items-center justify-center rounded-[8px]`}
                            >
                              <item.icon
                                color={item.iconColor}
                                className="size-[24px] text-muted-foreground"
                                aria-hidden="true"
                              />
                            </div>

                            <div className="flex flex-col flex-1 ">
                              <span className="text-xs text-grey-200 font-bold">
                                {item.title}
                              </span>
                              <span className="text-xs font-light text-grey-150 leading-6">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </AnimatedBackground>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
