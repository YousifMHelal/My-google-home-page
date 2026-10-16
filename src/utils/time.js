// 12-hour clock parts, e.g. { time: "9:05", period: "PM" }.
export function formatTime12(date) {
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return { time: `${hours % 12 || 12}:${minutes}`, period: hours < 12 ? "AM" : "PM" };
}

export function greetingFor(hour) {
  if (hour < 5) return "Up late";
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export const formatDate = (date) =>
  date.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
