import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AUTH_ME } from "../../constants/apiPaths";
import { qk } from "../../constants/qk";

export function useCurrentUser() {
  const qc = useQueryClient();

  return useQuery({
    queryKey: qk.currentUser(),
    queryFn: async () => {
      const res = await fetch(AUTH_ME, { credentials: "include" });
      if (!res.ok) throw new Error("Not authenticated");
      const user = await res.json();

      qc.setQueryData(qk.currentUser(), user);
      qc.setQueryData(qk.user(user.id), user);

      return user;
    },
    initialData: () => {
      return qc.getQueryData(qk.currentUser());
    },
    staleTime: 60 * 1000,
    retry: false,
  });
}