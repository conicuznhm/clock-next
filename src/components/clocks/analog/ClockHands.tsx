"use client";
import { useEffect, useState } from "react";

export default function ClockHands() {
  const handSizes = {
    hr: "h-[5rem] w-2",
    min: "h-[8rem] w-[0.3rem]",
    sec: "h-[9rem] w-[0.1rem]"
  };
  const handColors = {
    hr: "bg-red-800",
    min: "bg-blue-800",
    sec: "bg-zinc-800"
  };

  // clock hand movement (will be make to module next)
  const getTime = () => {
    const date = new Date();

    // Get current hr,min,sec
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    // Set angle for hr,min,sec hands
    const hrAngle = hr * 30 + min * 0.5;
    const minAngle = min * 6;
    const secAngle = sec * 6;

    return { hr: hrAngle, min: minAngle, sec: secAngle };
  };
  // clock hand movement (will be make to module next)

  const { hr, min, sec } = getTime();
  const [hrAngle, setHrAngle] = useState<number>(hr);
  const [minAngle, setMinAngle] = useState<number>(min);
  const [secAngle, setSecAngle] = useState<number>(sec);

  useEffect(() => {
    // Need real time use getTime.key instead of const {key} = getTime()
    const updateAngle = () => {
      setHrAngle(getTime().hr);
      setMinAngle(getTime().min);
      setSecAngle(getTime().sec);
    };
    const interval = setInterval(updateAngle, 1000);
    return () => clearInterval(interval);
  }, [hrAngle, minAngle, secAngle]);

  return (
    <>
      <span className="h-3 w-3 rounded-full bg-black"></span>
      <span
        className={`${handSizes.hr} ${handColors.hr} absolute bottom-44 origin-bottom rounded-full`}
        style={{ transform: `rotate(${hrAngle}deg)` }}
      ></span>
      <span
        className={`${handSizes.min} ${handColors.min} absolute bottom-44 origin-bottom rounded-full`}
        style={{ transform: `rotate(${minAngle}deg)` }}
      ></span>
      <span
        className={`${handSizes.sec} ${handColors.sec} absolute bottom-44 origin-bottom rounded-full`}
        style={{ transform: `rotate(${secAngle}deg)` }}
      ></span>
    </>
  );
}
