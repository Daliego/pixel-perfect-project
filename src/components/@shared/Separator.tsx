import { colors } from "../../layouts/colors";

const style = {
  line: {
    backgroundColor: colors.border.gray,
    height: "0px",
    borderBottom: `.7px solid ${colors.border.gray}`,
  } as React.CSSProperties,

  container: {
    padding: "10px 15px 10px 15px",
    // gap: "10px",
  } as React.CSSProperties,
};

export function Separator() {
  return (
    <div style={style.container}>
      <div style={style.line} />
    </div>
  );
}
