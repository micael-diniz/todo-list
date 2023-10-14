import { Header } from "../atoms/Header";
import { Logo } from "../atoms/Logo";

import logoIcon from "../../assets/logo.svg";

export default function CustomHeader() {
  return (
    <Header className="h-[12.5rem]">
      <Logo src={logoIcon} />
    </Header>
  );
}
