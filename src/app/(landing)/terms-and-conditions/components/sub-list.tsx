import React from "react";

interface ListItem {
  text: string | JSX.Element; // Allow both strings and JSX for bold text
  subItems?: (string | JSX.Element)[];
}

interface SubListProps {
  items: ListItem[];
}

const SubList: React.FC<SubListProps> = ({ items }) => {
  return (
    <ul className="list-disc pl-10 my-3 text-sm lg:text-base">
      {items.map((item, index) => (
        <li key={index} className="text-black font-medium">
          {item.text} {/* Text can be plain or contain bold elements */}
          {item.subItems && item.subItems.length > 0 && (
            <ul className="list-disc pl-16 my-4">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className="text-gray-700">
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SubList;
