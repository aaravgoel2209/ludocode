import { courseFormOpts, withForm } from "@/form/formKit";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { OrderSelector } from "@/features/Builder/UI/OrderSelector";

export const EditNodeDialog = withForm({
  ...courseFormOpts,
  props: {
    updateOrder: null as ((oldIndex: number, newIndex: number) => void) | null,
    type: "module" as "module" | "lesson",
    arrayLength: 0 as number,
    moduleIndex: 0 as number,
    lessonIndex: 0 as number,
    children: null as ReactNode | null,
  },
  render: ({
    form,
    updateOrder,
    arrayLength,
    children,
    type,
    moduleIndex,
    lessonIndex,
  }) => {
    const base = {
      module: `modules[${moduleIndex}]`,
      lesson: `modules[${moduleIndex}].lessons[${lessonIndex}]`,
    };
    const formKey = base[type];

    const currentIndex = type == "module" ? moduleIndex : lessonIndex;

    return (
      <Dialog>
        <form>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit {type}</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
                <OrderSelector onChange={updateOrder} index={currentIndex} count={arrayLength} />
            </DialogHeader>
            <div className="grid gap-4"></div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    );
  },
});
