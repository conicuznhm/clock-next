"use client";
import { useEffect, useState } from "react";

export default function ClockHands() {
  const hands = {
    hr: "h-[4rem] w-2",
    min: "h-[8rem] w-1.5",
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
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const hrAngle = hr * 30 + min / 2;
    const minAngle = min * 6;
    const secAngle = sec * 6;

    return { hr: hrAngle, min: minAngle, sec: secAngle };
  };
  const { hr, min, sec } = getTime();
  // clock hand movement (will be make to module next)

  return (
    <>
      <span className="h-2.5 w-2.5 rounded-full bg-black"></span>
      <span
        className={`${hands.hr} ${handColors.hr} absolute bottom-44 origin-bottom rounded-full`}
      ></span>
      <span
        className={`${hands.min} ${handColors.min} absolute bottom-44 origin-bottom rounded-full`}
      ></span>
      <span
        className={`${hands.sec} ${handColors.sec} absolute bottom-44 origin-bottom rounded-full`}
        style={{ transform: "rotate(" + sec + "deg)" }}
      ></span>
    </>
  );
}
