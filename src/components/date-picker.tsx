import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DOBPickerProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
}

const DOBPicker: React.FC<DOBPickerProps> = ({ date, setDate }) => {
  return (
    <div className="relative">
      <DatePicker
        selected={date}
        onChange={(date: Date | null) => setDate(date)}
        showYearDropdown // Enables fast year selection
        showMonthDropdown // Enables fast month selection
        dropdownMode="select" // Ensures dropdown selection for year/month
        dateFormat="dd/MM/yyyy" // Display format
        placeholderText="Select Date of Birth"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DOBPicker;
