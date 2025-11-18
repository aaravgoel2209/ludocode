import { z } from "zod";
import { ExerciseSnapSchema } from "./ExerciseSnapSchema";

const nonEmpty = z.string().trim().min(1, "Required");

export const LessonSnapSchema = z
  .object({
    id: z.string(),
    title: nonEmpty,
    exercises: z.array(ExerciseSnapSchema),
    orderIndex: z.number().int().positive(),
  })
  .superRefine((v, ctx) => {
    let hasError = false;

    if (!v.title) {
      hasError = true;
      ctx.addIssue({
        code: "custom",
        path: ["title"],
        message: "Title required",
      });
    }

    const badExercise = v.exercises.findIndex(
      (ex) => !ExerciseSnapSchema.safeParse(ex).success
    );
    if (badExercise !== -1) {
      hasError = true;
      ctx.addIssue({
        code: "custom",
        path: ["exercises"],
        message: `Contains an invalid exercise (e.g. item #${badExercise + 1})`,
      });
    }

    if (hasError) {
      ctx.addIssue({
        code: "custom",
        path: [],
        message: "Module has validation errors.",
      });
    }
  });
