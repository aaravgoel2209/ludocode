import { Outlet, useMatches } from "@tanstack/react-router";
import { DefaultHeader } from "../components/Header/DefaultHeader";
import { MainContentWrapper } from "./LayoutWrappers/MainContentWrapper";
import { SubGridWrapper } from "./LayoutWrappers/SubGridWrapper";

export function DefaultSectionLayout() {
  const matches = useMatches();
  const active = matches[matches.length - 1];
  const title =
    (active?.staticData as { headerTitle?: string })?.headerTitle ?? "LudoCode";

  return (
    <SubGridWrapper>
      <DefaultHeader title={title} />
      <MainContentWrapper>
        <Outlet />
      </MainContentWrapper>
    </SubGridWrapper>
  );
}
