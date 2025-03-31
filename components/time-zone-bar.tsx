"use client";

import React, { useState, useEffect } from "react";

export function TimeZoneBar() {
  const [times, setTimes] = useState({
    newYork: "",
    dubai: "",
    tokyo: "",
    london: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setTimes({
        newYork: formatter.format(
          new Date(
            new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
          )
        ),
        dubai: formatter.format(
          new Date(
            new Date().toLocaleString("en-US", { timeZone: "Asia/Dubai" })
          )
        ),
        tokyo: formatter.format(
          new Date(
            new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" })
          )
        ),
        london: formatter.format(
          new Date(
            new Date().toLocaleString("en-US", { timeZone: "Europe/London" })
          )
        ),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 flex flex-wrap justify-between text-sm text-gray-500 gap-4">
      <span>{times.newYork} New York, USA</span>
      <span>{times.dubai} Dubai, UAE</span>
      <span>Best time to get your website online</span>
      <span>{times.tokyo} Tokyo, Japan</span>
      <span>{times.london} London, UK</span>
    </div>
  );
}
