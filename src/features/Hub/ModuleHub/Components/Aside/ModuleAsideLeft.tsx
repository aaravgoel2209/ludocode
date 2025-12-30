import { Aside } from "@/components/design-system/zones/aside.tsx";

type ModuleAsideLeftProps = {};

export function ModuleAsideLeft({}: ModuleAsideLeftProps) {
  return (
    <Aside orientation="LEFT" innerClassName="px-6">
      <div></div>
    </Aside>
  );
}
