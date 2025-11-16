import { SidebarMenu } from "@/components/ui/sidebar";
import { courseFormOpts, withForm } from "@/form/formKit";
import { ModuleNodeForm } from "./ModuleNodeForm";
import { Button } from "@/components/ui/button";
import { uuidv4 } from "zod";

export const ModuleListForm = withForm({
  ...courseFormOpts,
  props: {
    courseId: "" as string,
    currentModuleId: "" as string,
    currentLessonId: "" as string,
  },
  render: ({ form, courseId, currentLessonId, currentModuleId }) => {
    return (
      <form.AppField name="modules" mode="array">
        {(fieldArray) => {
          const modules = fieldArray.state.value;
          const addModule = () => {
            const modulesLength = modules.length;
            fieldArray.pushValue({
              moduleId: crypto.randomUUID(),
              title: `Module ${modulesLength}`,
              isExpanded: false,
              lessons: [],
            });
          };
          return (
            <div className="flex gap-4 flex-col">
              <Button onClick={() => addModule()} className="h-8 w-40">
                Add Module
              </Button>
              <SidebarMenu>
                {modules.map((module, index) => (
                  <ModuleNodeForm
                    currentLessonId={currentLessonId}
                    currentModuleId={currentModuleId}
                    form={form}
                    moduleId={module.moduleId}
                    index={index}
                    courseId={courseId}
                  />
                ))}
              </SidebarMenu>
            </div>
          );
        }}
      </form.AppField>
    );
  },
});
