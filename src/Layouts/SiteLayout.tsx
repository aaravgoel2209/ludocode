import { Outlet } from "@tanstack/react-router";
import { GlobalFooter } from "../components/Footer/GlobalFooter";
import { MainGridWrapper } from "./LayoutWrappers/MainGridWrapper";

export function SiteLayout() {
  return (
      <MainGridWrapper gridRows={"OUTLET_FOOTER"}>
      <Outlet/>
      <GlobalFooter />
      </MainGridWrapper>

  );
}
