import { useForm } from "@tanstack/react-form";
import type { CourseSnap } from "../../../Types/Snapshot/SnapshotTypes";

type CourseFormProps = {
    initialSnapshot: CourseSnap
};

export function CourseForm({initialSnapshot}: CourseFormProps) {
    const courseForm = useForm({
        defaultValues: initialSnapshot,
        onSubmit: ({ value }) => {
            if (value.modules.length < 1) {
                return "Course must have at least one module"
            }
        }
    })
}