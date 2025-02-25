import { Fragment, ReactNode, useEffect, useState } from "react";
import { Caption3 } from "../../ui/tipography";
import {
  DropDownArrow,
  DropDownButton,
  DropDownList,
  DropDownRoot,
  DropDownSeparator,
  ListItem,
} from "./styled";

interface Props {
  justify: "left" | "right";
  title: string;
  items: { text: ReactNode; value: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

export function DropDownComponent({
  items,
  onChange,
  title,
  justify,
  defaultValue,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    defaultValue
  );

  function handleClickItem(item: { text: ReactNode; value: string }) {
    setSelectedOption(item.value);
    onChange(item.value);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("button") === null) {
        console.log("click outside");
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropDownRoot>
      <DropDownButton onClick={() => setIsOpen(!isOpen)} __justify={justify}>
        {title}
        <DropDownArrow __isOpen={isOpen} />
      </DropDownButton>
      {isOpen && (
        <DropDownList __justify={justify}>
          {items.map((item) => (
            <Fragment key={item.value}>
              <ListItem
                selected={selectedOption === item.value}
                onClick={() => handleClickItem(item)}
              >
                <Caption3>{item.text}</Caption3>
              </ListItem>
              <DropDownSeparator />
            </Fragment>
          ))}
        </DropDownList>
      )}
    </DropDownRoot>
  );
}
