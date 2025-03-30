import { colors } from "../../layouts/colors";

const style: React.CSSProperties = {
  borderRadius: "6px",
  border: `1px solid ${colors.border.foreground}`,
  borderColor: colors.border.foreground,
  display: "flex",
  flexDirection: "column",
  paddingTop: "10px",
  paddingBottom: "10px",
  boxShadow:
    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(20, 20, 20, 0.1)",
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
