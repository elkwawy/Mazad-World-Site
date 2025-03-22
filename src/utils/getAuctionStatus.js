import { useEffect, useState } from "react";

export function getAuctionStatus(start_time, end_time) {
  const calculateTimeRemaining = () => {
    const now = Date.now();
    const endTime = new Date(end_time).getTime();
    return Math.max(endTime - now, 0);
  };

  const isAuctionActiveNow = () => {
    const now = Date.now();
    const startTime = new Date(start_time).getTime();
    const endTime = new Date(end_time).getTime();
    // return now >= startTime && now <= endTime;
    return  now <= endTime;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [isAuctionActive, setIsAuctionActive] = useState(isAuctionActiveNow());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
      setIsAuctionActive(isAuctionActiveNow());
    }, 1000);

    return () => clearInterval(interval);
  }, [start_time, end_time]);

  const formatTime = (time) => {
    if (time <= 0) return "00:00:00";
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days > 0 ? `${days}d ` : ""}${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  return {
    timeRemaining,
    isAuctionActive,
    formatTime,
  };
}
