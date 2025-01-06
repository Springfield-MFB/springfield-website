"use client";

import * as React from "react";
import { subYears, format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DatePickerWithPresets({
  date,
  setDate,
}: {
  date?: Date;
  setDate: (date: Date) => void;
}) {
  const handlePresetSelection = (value: string) => {
    const yearsAgo = parseInt(value, 10);
    if (!isNaN(yearsAgo)) {
      const calculatedDate = subYears(new Date(), yearsAgo);
      setDate(calculatedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full z-20 py-3 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2 bg-white"
      >
        <Select onValueChange={handlePresetSelection}>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="18">18 years ago</SelectItem>
            <SelectItem value="25">25 years ago</SelectItem>
            <SelectItem value="30">30 years ago</SelectItem>
            <SelectItem value="50">50 years ago</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border bg-white">
          <Calendar
            mode="single"
            selected={date}
            // onSelect={setDate}
            // initialFocus={date} // Focus the calendar on the selected date
            disabled={(date) => date > new Date()} // Disable future dates
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
