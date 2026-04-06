import { sitemap } from "@/config";

export function getBlogSearchUrl(query: string) {
  return `${sitemap.blog.path}?search=${encodeURIComponent(query)}`;
}

export function getBlogUrl(slug: string) {
  return `${sitemap.blog.path}/${slug}`;
}

export function formatDate(date: string, includeRelative = false) {
  if (!date) {
    return "Invalid date";
  }

  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
