import { create, windowScheduler } from "@yornaath/batshit";
import { GET_LESSONS_FROM_IDS, GET_MODULES_FROM_IDS, TEST_USER_ID } from "../../../constants/apiPaths";
import type { LudoLesson } from "../../../Types/Catalog/LudoLesson";
import { makeIdBatcher } from "./batcherFactory";
import type { LudoModule } from "../../../Types/Catalog/LudoModule";

export const lessonBatcher = makeIdBatcher<LudoLesson>({
  name: "lesson",
  getUrlFn: GET_LESSONS_FROM_IDS,
  idsKey: "lessonIds",
  scheduler: windowScheduler(10),
  createFn: create,
});

export const moduleBatcher = makeIdBatcher<LudoModule>({
  name: "module",
  getUrlFn: GET_MODULES_FROM_IDS,
  idsKey: "moduleIds",
  scheduler: windowScheduler(10),
  createFn: create,
})