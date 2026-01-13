import { colors } from "../../layouts/colors";

const style: React.CSSProperties = {
  borderRadius: "6px",
  border: `1px solid ${colors.border.foreground}`,
  borderColor: colors.border.foreground,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "10px 0px",
  background: "#FFFFFF",
  boxShadow:
    "0px 0px 4px rgba(20,20,20,0.1), 0px 8px 15px rgba(20,20,20,0.12)",
  boxSizing: "border-box",
};

interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}

export function Card({ children, style: customStyle, ...rest }: CardProps) {
  return (
    <div
      style={{
        ...style,
        ...customStyle,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
