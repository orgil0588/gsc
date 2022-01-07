import React, { useState, useRef, useEffect } from "react";

function Coutdown() {
  const [timerDays, setTimerDays] = useState("");
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Jan 20 2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="fixed mt-20 bg-dark p-6 top-0 left-1/2 -translate-x-1/2  z-50 rounded-xl border border-yellow bg-opacity-80">
      <div className="text-center mb-4 font-bold">Нээлт хийхэд:</div>
      <div className="flex text-center">
        <div className="flex flex-col mx-4">
          <div className="font-light text-gray ">Өдөр</div>
          <div className="font-bold text-xl">{timerDays}</div>
        </div>
        <div className="flex flex-col mx-4">
          <div className="font-light text-gray ">Цаг</div>
          <div className="font-bold text-xl">{timerHours}</div>
        </div>
        <div className="flex flex-col mx-4">
          <div className="font-light text-gray ">Минут</div>
          <div className="font-bold text-xl">{timerMinutes}</div>
        </div>
        <div className="flex flex-col mx-4">
          <div className="font-light text-gray ">Секунд</div>
          <div className="font-bold text-xl">{timerSeconds}</div>
        </div>
      </div>
    </div>
  );
}

export default Coutdown;
