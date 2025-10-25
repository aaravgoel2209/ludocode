import { useGoogleLogin } from "@react-oauth/google";
import { useQueryClient } from "@tanstack/react-query";
import { GOOGLE_LOGIN } from "../../../constants/pathConstants.ts";
import { qk } from "../../../constants/qk";
import type { LudoUser } from "../../../Types/User/LudoUser";
import { router } from "../../../routes/router";
import type { LoginUserResponse } from "../../../Types/User/LoginUserResponse.ts";

export function useGoogleAuthEntry() {
  const queryClient = useQueryClient();

  return useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);

      const res = await fetch(GOOGLE_LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: codeResponse.code }),
        credentials: "include",
      });

      const loginResponse: LoginUserResponse = await res.json();
      const user = loginResponse.user
      const stats = loginResponse.userStats

      queryClient.setQueryData(qk.user(user.id), user);
      queryClient.setQueryData(qk.currentUser(), user);
      queryClient.setQueryData(qk.userStats(stats.id), stats)

      router.navigate({ to: "/" });
    },
    onError: (err) => console.error("Google login failed", err),
  });
}
