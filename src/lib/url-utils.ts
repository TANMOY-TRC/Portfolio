export function urlJoin(...parts: string[]) {
  return parts
    .map((part, i) => {
      if (i === 0) return part.replace(/\/+$/g, "");
      return part.replace(/^\/+|\/+$/g, "");
    })
    .filter(Boolean)
    .join("/")
    || "/";
}
