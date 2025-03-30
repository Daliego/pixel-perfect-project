import { useState } from "react";
import { Card } from "../@shared/Card";
import { Separator } from "../@shared/Separator";
import { listData } from "../../mockData/listData";
import { ListItem } from "./ListItem";
import { Button } from "../@shared/Button";

const buttonContainer: React.CSSProperties = {
  // Talvez fixar os 60px
  padding: "10px 15px 10px 15px",
};

const listBodyContainer: React.CSSProperties = {
  // maxHeight: "200px",
  overflowY: "scroll",
  scrollbarWidth: "none",
};

export function TodoList() {
  const [list, setList] = useState(listData);

  return (
    // Based on the figma component the proportion screen component would
    // be 64%, but i let the size of the figma todo list.
    <Card style={{ width: "370px", height: "326px" }}>
      <ListItem title="All pages" checked={false} onClick={() => {}} id={"0"} />
      <Separator />
      <div style={listBodyContainer}>
        {list.map((item) => (
          <ListItem
            id={item.id}
            key={item.id}
            title={item.text}
            checked={item.isChecked}
            onClick={() => {
              const selectedItem = list.find((i) => i.id === item.id)!;

              selectedItem.isChecked = !selectedItem.isChecked;

              setList((oldList) =>
                oldList.map((i) =>
                  i.id === selectedItem.id
                    ? { ...i, isChecked: selectedItem.isChecked }
                    : i
                )
              );
              console.log(item);
              // const newList = list.map((i) =>
              //   i.id === item.id ? { ...i, isChecked: !i.isChecked } : i
              // );
              // setList(newList);
            }}
          />
        ))}
      </div>

      <Separator />
      <div style={buttonContainer}>
        <Button
          onClick={
            // TODO - add a function to handle the click event
            () => {}
          }
        >
          Done
        </Button>
      </div>
    </Card>
  );
}
