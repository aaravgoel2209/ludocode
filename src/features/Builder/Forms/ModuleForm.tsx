import { useForm } from "@tanstack/react-form";
import type { ModuleSnapshot } from "../../../Types/Snapshot/SnapshotTypes";

type ModuleFormProps = {};

export function ModuleForm({}: ModuleFormProps) {

    const moduleForm = useForm<ModuleSnapshot>({
        defaultValues: {

        }
    })


}