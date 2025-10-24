import { useLocation } from "@tanstack/react-router";
import type { LessonSubmission } from "../../../Types/Exercise/LessonSubmissionTypes";
import type { SyncState } from "../../../routes/Packets/SyncState";
import { useSubmitLesson } from "../../../Hooks/Queries/Mutations/useSubmitLesson";
import { useEffect } from "react";

type SyncingPageProps = {};

function isSyncState(s: any): s is SyncState {
  return s && typeof s === "object" && "submission" in s;
}

export function SyncingPage({}: SyncingPageProps) {

//   const { state } = useLocation();
//   const submission = isSyncState(state) ? state.submission : undefined;

//   const submitLessonMutation = useSubmitLesson()

//   useEffect(() => {
//     if (!submission) return
//     submitLessonMutation.mutate(submission)
//   }, [])

  return (
    <>
      <p>SyncingPage</p>
    </>
  );
}
