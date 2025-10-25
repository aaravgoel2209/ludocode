export async function ludoPost<T>(
  path: string,
  body: any,
  credentials: boolean = false,
): Promise<T> {

  const res = await fetch(path, {
    credentials: credentials ? "include" : "same-origin",
  });

  if (!res.ok) throw new Error("Failed to fetch " + name);
  return res.json() as Promise<T>;
}
