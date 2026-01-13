const style = {
  container: {
    width: "370px",
    height: "20px",
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  } as React.CSSProperties,

  line: {
    width: "340px",
    height: "0px",
    borderBottom: "0.7px solid #CDCDCD",
  } as React.CSSProperties,
};

export function Separator() {
  return (
    <div style={style.container}>
      <div style={style.line} />
    </div>
  );
}
