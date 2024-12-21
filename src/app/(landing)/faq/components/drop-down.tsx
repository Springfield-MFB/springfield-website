"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Dot, Plus, Minus } from "lucide-react";
import { FAQ_DATA } from "@/config";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "border rounded-[20px]  ",
        isOpen ? "border-yellow-400 bg-white" : "border-[#DDDDDD] bg-[#FAFAFA]"
      )}
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-4 text-left text-lg font-medium focus:outline-none"
      >
        <span className="flex items-center gap-4">
          <Dot />
          <p className="text-black text-sm font-medium font-satoshi">
            {question}
          </p>
        </span>
        {isOpen ? (
          <span className="size-[30px] rounded-full border border-[#6D6D6D] bg-[#FAFAFA] flex justify-center items-center">
            <Minus color="#6D6D6D" />
          </span>
        ) : (
          <span className="size-[30px] rounded-full border border-[#6D6D6D] bg-[#FAFAFA] flex justify-center items-center">
            <Plus color="#6D6D6D" />
          </span>
        )}
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
        className={`overflow-hidden transition-all duration-500 ease-all ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-10 p-2 lg:p-6 lg:w-[80%] text-xs text-[#151516] leading-7">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Dropdown = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg space-y-4">
      {FAQ_DATA.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => toggleFaq(index)}
        />
      ))}
    </div>
  );
};

export default Dropdown;
