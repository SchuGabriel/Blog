import { Outlet } from "react-router-dom";
import background from "../../../assets/background.png";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={background} />
      </HeaderContainer>
      <Outlet />
    </>
  );
}
