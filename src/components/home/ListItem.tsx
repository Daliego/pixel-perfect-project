import { useMemo, useState } from "react";
import "./css/ListItem.css";
import { Check } from "lucide-react";
import { colors } from "../../layouts/colors";

interface ListItemProps {
  id: string;
  title: string;
  checked: boolean;
  onClick: (id: string) => void;
}

export function ListItem({ id, title, checked, onClick }: ListItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const checkIcon = useMemo(() => {
    if (isHovered) {
      return (
        <Check
          width={28}
          height={23}
          color={
            checked
              ? colors.checkbox.check.gray_selected
              : colors.checkbox.check.gray_hover
          }
          style={{
            position: "absolute",
            top: -1,
            left: -4,
          }}
        />
      );
    }
  }, [isHovered]);

  return (
    <div
      className="list-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        onClick(id);
      }}
    >
      <div>{title}</div>
      <label className="checkbox-wrapper">
        <input
          id={id}
          type="checkbox"
          style={{ display: "none" }}
          checked={checked}
        />
        <span
          className="checkbox"
          onClick={() => {
            onClick(id);
          }}
        >
          {checked ? (
            <Check
              className="test"
              fontWeight={100}
              width={28}
              height={23}
              color={colors.checkbox.check.gray_selected}
              style={{
                position: "absolute",
                top: -1,
                left: -4,
              }}
            />
          ) : (
            checkIcon
          )}
        </span>
      </label>
    </div>
  );
}
