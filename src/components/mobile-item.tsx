"use client";

import { NAVBART_ITEMS } from "@/config";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

type NavItem = (typeof NAVBART_ITEMS)[number];

interface AccordionItemProps {
  item: NavItem;
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  onClick: () => void;
}

function AccordionItem({ item, close, isOpen, onClick }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full text-left p-4"
      >
        <span className="text-lg font-medium">{item.label}</span>
        <ChevronDown
          size={18}
          className={cn("transition-all", {
            "-rotate-180": isOpen,
          })}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="p-4 border rounded-md">
          {item.content.map((item, i) => (
            <Link
              onClick={close}
              href={item.href}
              key={i}
              data-id={`card-${i}`}
            >
              <div className="flex rounded-lg py-4 animate-fadeInUp">
                <div className="flex gap-x-4">
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
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
