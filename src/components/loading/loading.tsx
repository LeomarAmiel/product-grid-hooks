import React, { useEffect, useState } from "react";

function Loading() {
  const [dots, setDots] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      if (dots === 3) {
        return setDots(1);
      }
      return setDots(dots + 1);
    }, 200);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <p>Loading{".".repeat(dots)}</p>
    </div>
  );
}

export default Loading;
