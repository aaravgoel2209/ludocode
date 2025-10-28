import { ListRow } from "../../../components/Atoms/Row/ListRow";
import { ListContainer } from "../../../components/Molecules/List/ListContainer";
import {
  courseFormOpts,
  useFormContext,
  withForm,
} from "../../../form/formKit";
import { AsideComponent } from "../../../Layouts/Aside/AsideComponent";
import { ludoNavigation } from "../../../routes/ludoNavigation";
import { router } from "../../../routes/router";
import type { ModuleSnapshot } from "../../../Types/Snapshot/SnapshotTypes";

export const ModuleForm = withForm({
  ...courseFormOpts,
  props: {
    moduleId: "" as string,
    courseId: "" as string,
  },
  render: ({ form, moduleId, courseId }) => {
    return (
      <form.Field
        name="modules"
        mode="array"
        children={(modules) => (
          <AsideComponent customSpan="col-start-1 col-end-4" orientation="LEFT">
            <div className="flex flex-col py-6">
              <ListContainer title="Modules">
                {modules.state.value.map((module: ModuleSnapshot) => (
                  <ListRow
                    onClick={() =>
                      router.navigate(
                        ludoNavigation.build.toBuilder(
                          courseId,
                          module.moduleId
                        )
                      )
                    }
                    key={module.moduleId}
                    active={moduleId === module.moduleId}
                  >
                    <p>{module.title}</p>
                  </ListRow>
                ))}
                <ListRow alignment="center" fill={true} py="py-2">
                  <p className="text-center text-xl font-bold">+</p>
                </ListRow>
              </ListContainer>
            </div>
          </AsideComponent>
        )}
      />
    );
  },
});
