import "./css/Button.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
}

export function Button({ children, style: customStyle, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="button"
      style={{ ...customStyle }}
    >
      {children}
    </button>
  );
}
