interface ThemeProps {
  children: React.ReactNode;
}

const style: React.CSSProperties = {
  height: "100vh",
  width: "100vw",
};

export function Theme({ children }: ThemeProps) {
  return <div style={style}>{children}</div>;
}
