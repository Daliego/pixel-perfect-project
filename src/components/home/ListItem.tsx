import { useEffect, useRef } from "react";
import "./css/ListItem.css";
import { Check } from "lucide-react";

interface ListItemProps {
  id: string;
  title: string;
  checked: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onClick: (id: string) => void;
}

export function ListItem({ 
  id, 
  title, 
  checked, 
  indeterminate = false,
  disabled = false,
  onClick 
}: ListItemProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!disabled) {
      onClick(id);
    }
  };

  return (
    <div
      className={`list-item ${disabled ? "disabled" : ""}`}
      onClick={handleClick}
    >
      <div>{title}</div>
      <label className="checkbox-wrapper" onClick={handleClick}>
        <input
          ref={checkboxRef}
          id={id}
          type="checkbox"
          style={{ display: "none" }}
          checked={checked}
          disabled={disabled}
          readOnly
        />
        <span className="checkbox">
          {indeterminate ? (
            <div
              className="check-icon-indeterminate"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "10px",
                height: "2px",
                backgroundColor: "#FFFFFF",
                borderRadius: "1px",
              }}
            />
          ) : checked ? (
            <Check
              className="check-icon"
              width={16}
              height={16}
              color="#FFFFFF"
              strokeWidth={1.5}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ) : null}
        </span>
      </label>
    </div>
  );
}
