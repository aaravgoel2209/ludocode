import { Textarea } from "@/components/ui/textarea";
import { useFieldContext } from "../../../form/formKit";

export default function TitleField({
  deletable,
  arrayLength,
  onDelete,
}: {
  arrayLength: number;
  deletable?: boolean;
  onDelete?: () => void;
}) {
  const field = useFieldContext<string>();

  const isEmpty = !(field.state.value ?? "").trim();

  const canDelete = isEmpty && arrayLength > 1

  return (
    <>
      <Textarea
        className="pl-2 text-white min-h-6 py-2 rounded-lg border-2 border-ludoLightPurple"
        placeholder={field.state.value}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      {deletable && (
        <button
          onClick={() => {
            if (isEmpty && arrayLength > 1) {
              onDelete?.()
            }
          }}
          disabled={!isEmpty}
          className={
            canDelete
              ? "flex items-center justify-center hover:cursor-pointer hover:bg-ludoGrayLight/80 rounded-md border-2 border-ludoLightPurple px-2"
              : "flex items-center justify-center rounded-md border-2 hover:cursor-not-allowed hover:bg-ludoGrayLight/40 border-ludoLightPurple/40 px-2"
          }
        >
          x
        </button>
      )}
    </>
  );
}
