import { useState } from "react";
import { Card } from "../@shared/Card";
import { Separator } from "../@shared/Separator";
import { listData } from "../../mockData/listData";
import { ListItem } from "./ListItem";
import { Button } from "../@shared/Button";
import { Item } from "../../models/item";

const buttonContainer: React.CSSProperties = {
  padding: "10px 15px 10px 15px",
};

const listBodyContainer: React.CSSProperties = {
  overflowY: "scroll",
  scrollbarWidth: "none",
};

export function TodoList() {
  // I didnt look onto other implementation for the heading,
  // because i didnt think it was necessary for a small project
  const [heading, setHeading] = useState<Item>({
    id: "0",
    isChecked: false,
    text: "All pages",
  });

  const [list, setList] = useState(listData);

  const handleChange = (id: string, list: Item[]) => {
    const selectedItem = list.find((i) => i.id === id)!;

    selectedItem.isChecked = !selectedItem.isChecked;

    setList((oldList) =>
      oldList.map((i) =>
        i.id === selectedItem.id
          ? { ...i, isChecked: selectedItem.isChecked }
          : i
      )
    );
  };

  return (
    // Based on the figma component the proportion screen component would
    // be 64%, but i let the size of the figma todo list.
    <Card style={{ width: "370px", height: "326px" }}>
      <ListItem
        title={heading.text}
        checked={heading.isChecked}
        onClick={() =>
          setHeading((old) => ({ ...old, isChecked: !old.isChecked }))
        }
        id={heading.id}
      />
      <Separator />
      <div style={listBodyContainer}>
        {list.map((item) => (
          <ListItem
            id={item.id}
            key={item.id}
            title={item.text}
            checked={item.isChecked}
            onClick={() => handleChange(item.id, list)}
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
