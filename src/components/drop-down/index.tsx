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
  className?: string;
}

export function DropDownComponent({
  items,
  onChange,
  title,
  justify,
  defaultValue,
  className,
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
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <DropDownRoot className={className}>
      <DropDownButton onClick={() => setIsOpen(!isOpen)} $justify={justify}>
        {title}
        <DropDownArrow $isOpen={isOpen} />
      </DropDownButton>
      {isOpen && (
        <DropDownList $justify={justify}>
          {items.map((item, index) => (
            <Fragment key={item.value}>
              <ListItem
                selected={selectedOption === item.value}
                onClick={() => handleClickItem(item)}
              >
                <Caption3>{item.text}</Caption3>
              </ListItem>
              {index < items.length - 1 && <DropDownSeparator />}
            </Fragment>
          ))}
        </DropDownList>
      )}
    </DropDownRoot>
  );
}
