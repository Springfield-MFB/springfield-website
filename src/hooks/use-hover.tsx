import { RefObject, useEffect, useState } from "react";

export const useHover = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
) => {
  const [value, setValue] = useState<boolean>(false);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref]);

  return [ref, value];
};
