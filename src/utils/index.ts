export function formatDate(date: string, dateNow: Date) {
  const now = dateNow.getTime() / 1000;
  const newDate = new Date(date).getTime() / 1000;
  const secondsFromNow = now - newDate;

  if (
    Math.ceil(secondsFromNow / 3600) >= 24 ||
    (secondsFromNow >= 86400 && secondsFromNow < 604800)
  ) {
    const isOneDay =
      Math.ceil(secondsFromNow / 3600) >= 24 ||
      Math.ceil(secondsFromNow / 86400) === 1;
    return `${isOneDay ? "1" : Math.ceil(secondsFromNow / 86400)} ${
      isOneDay ? "day" : "days"
    } ago`;
  }
  if (secondsFromNow >= 3600 && secondsFromNow < 86400) {
    return `${Math.ceil(secondsFromNow / 3600)} hours ago`;
  }
  if (secondsFromNow >= 60 && secondsFromNow < 3600) {
    return `${Math.ceil(secondsFromNow / 60)} minutes ago`;
  }
  if (secondsFromNow < 60) {
    return `${Math.ceil(secondsFromNow)} seconds ago`;
  }

  return date;
}
