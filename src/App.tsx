import { Fragment } from "react";
import { Header } from "./components/atoms/Header";

export function App() {
  return (
    <Fragment>
      <Header className="h-[12.5rem]"><p className="text-warmGray-50">Header</p></Header>
    </Fragment>
  );
}
