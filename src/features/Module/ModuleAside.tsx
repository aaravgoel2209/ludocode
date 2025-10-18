import { mockModules } from "../../Types/mockData/mockExercises";

type ModuleAsideProps = {};

export function ModuleAside({}: ModuleAsideProps) {
  const modules = mockModules;

  return (
    <aside className="hidden lg:block col-start-9 col-end-12 h-full border-l border-l-ludoGrayLight">
      <div className="sticky top-0 py-6 pl-6">
        <div className="border rounded-xl border-ludoGrayLight flex flex-col items-center">
          <div className="border-b border-ludoGrayLight w-full">
            <p className="text-white text-xl font-bold p-2 text-center">
              Python Developer
            </p>
          </div>
          {modules.map((module) => (
            <div className="text-white w-full px-2 py-4 text-lg border-b border-b-ludoGrayLight">
              <p>
                {module.orderIndex}.{module.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
