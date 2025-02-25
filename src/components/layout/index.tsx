import { Outlet } from "react-router";
import { FooterComponent } from "./footer";
import { HeaderComponent } from "./header";

export function Layout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}
