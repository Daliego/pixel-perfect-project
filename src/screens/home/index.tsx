import { Card } from "../../components/@shared/Card";
import { TodoList } from "../../components/home/TodoList";

const style: React.CSSProperties = {
  display: "flex",
  paddingTop: "13%",
  justifyContent: "center",
};

export function HomePage() {
  return (
    <div style={style}>
      <TodoList />
    </div>
  );
}
