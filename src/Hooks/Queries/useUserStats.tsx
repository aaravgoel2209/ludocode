type Args = {};

export type useUserStatsReturn = {
  commits: number;
  hearts: number;
  streak: number;
};

export function useUserStats({}: Args): useUserStatsReturn {
  const commits = 1;
  const hearts = 1;
  const streak = 1;

  return {
    commits,
    hearts,
    streak,
  };
}
