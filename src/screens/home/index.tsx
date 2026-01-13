import { TodoList } from "../../components/home/TodoList";

const outerContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  minHeight: "100vh",
  paddingTop: "20px",
};

const todoListGoldenContainer: React.CSSProperties = {
  position: "relative",
  width: "578px",
  height: "794px",
  background: "#FFFFFF",
};

const todoListCOntainer: React.CSSProperties = {
  position: "absolute",
  left: "104px",
  top: "85px",
};

export function HomePage() {
  return (
    <div style={outerContainerStyle}>
      <div style={todoListGoldenContainer}>
        <div style={todoListCOntainer}>
          <TodoList />
        </div>
      </div>
    </div>
  );
}
