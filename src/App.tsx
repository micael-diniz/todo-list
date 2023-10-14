import { Fragment } from "react";
import Header from "./components/molecules/CustomHeader";

const TodoListApp = {
  Header
}

export function App() {
  return (
    <Fragment>
      <TodoListApp.Header />
    </Fragment>
  );
}
