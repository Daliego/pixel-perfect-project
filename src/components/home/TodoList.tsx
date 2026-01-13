import { useState, useEffect } from "react";
import { Card } from "../@shared/Card";
import { Separator } from "../@shared/Separator";
import { listData } from "../../mockData/listData";
import { ListItem } from "./ListItem";
import { Button } from "../@shared/Button";
import { Item } from "../../models/item";
import "./css/ListItem.css";

const buttonContainer: React.CSSProperties = {
  width: "370px",
  height: "60px",
  padding: "10px 15px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  background: "#FFFFFF",
  boxSizing: "border-box",
};

// Card height: 326px
// Card padding: 10px top + 10px bottom = 20px
// Header item: ~42px (max-height)
// Separator: ~20px (10px padding top + 10px bottom)
// Button area: 40px (button) + 20px (10px padding top + 10px bottom) = 60px
// Second separator: ~20px
// Available for list: 326 - 20 - 42 - 20 - 60 - 20 = 164px
const listBodyContainer: React.CSSProperties = {
  width: "370px",
  height: "164px",
  overflowY: "scroll",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  background: "#FFFFFF",
};

export function TodoList() {
  const [heading, setHeading] = useState<Item>({
    id: "0",
    isChecked: false,
    text: "All pages",
  });

  const [list, setList] = useState(listData);

  // Calculate header state: checked, unchecked, or indeterminate
  const headerState = (() => {
    if (list.length === 0) return { checked: false, indeterminate: false };
    const checkedCount = list.filter((item) => item.isChecked).length;
    if (checkedCount === 0) return { checked: false, indeterminate: false };
    if (checkedCount === list.length) return { checked: true, indeterminate: false };
    return { checked: false, indeterminate: true };
  })();

  useEffect(() => {
    // Update heading when list changes (but not when header is manually clicked)
    setHeading((old) => ({
      ...old,
      isChecked: headerState.checked,
    }));
  }, [list, headerState.checked]);

  const handleChange = (id: string) => {
    const selectedItem = list.find((i) => i.id === id)!;
    const newCheckedState = !selectedItem.isChecked;

    setList((oldList) =>
      oldList.map((i) =>
        i.id === selectedItem.id ? { ...i, isChecked: newCheckedState } : i
      )
    );
  };

  const handleHeaderClick = () => {
    // If indeterminate or unchecked, check all; if all checked, uncheck all
    const shouldCheckAll = !headerState.checked;
    
    setHeading((old) => ({ ...old, isChecked: shouldCheckAll }));
    setList((oldList) =>
      oldList.map((item) => ({ ...item, isChecked: shouldCheckAll }))
    );
  };

  return (
    <Card style={{ width: "370px", height: "326px" }}>
      <ListItem
        title={heading.text}
        checked={headerState.checked}
        indeterminate={headerState.indeterminate}
        onClick={handleHeaderClick}
        id={heading.id}
      />
      <Separator />
      <div className="list-body-container" style={listBodyContainer}>
        {list.map((item) => (
          <ListItem
            id={item.id}
            key={item.id}
            title={item.text}
            checked={item.isChecked}
            onClick={() => handleChange(item.id)}
          />
        ))}
      </div>

      <Separator />
      <div style={buttonContainer}>
        <Button>Done</Button>
      </div>
    </Card>
  );
}
