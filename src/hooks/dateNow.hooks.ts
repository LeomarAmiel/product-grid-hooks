import { useState } from "react";

export function useDate(): Date {
  const [date] = useState(new Date());
  return date;
}
