import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const date = new Date();

export const RelojApp = () => {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  const { theme } = useSelector((state) => state.erudito);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(2, 0),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Reloj">
      <div >
        {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
      </div>
    </div>
  );
};
