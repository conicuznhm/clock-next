"use client";
import { useEffect, useRef, useState } from "react";

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
    const hrDeg = (hr % 12) * 30 + min * 0.5;
    const minDeg = min * 6;
    const secDeg = sec * 6;

    return { hrDeg, minDeg, secDeg, sec };
  };
  // clock hand movement (will be make to module next)

  const { hrDeg, minDeg, secDeg, sec } = getTime();
  const [hrAngle, setHrAngle] = useState<number>(hrDeg);
  const [minAngle, setMinAngle] = useState<number>(minDeg);
  const [secAngle, setSecAngle] = useState<number>(secDeg);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const offsetSec = useRef<number>(sec);

  useEffect(() => {
    let frameID: number;
    const calSecAngle = () => {
      const elapsedSec = Math.abs((Date.now() - startTime) / 1000);
      return (elapsedSec + offsetSec.current) * 6;
    };

    const updateAngle = () => {
      setHrAngle(getTime().hrDeg);
      setMinAngle(getTime().minDeg);
      setSecAngle(calSecAngle());
      frameID = requestAnimationFrame(updateAngle);
    };
    frameID = requestAnimationFrame(updateAngle);
    console.log("hi");

    return () => cancelAnimationFrame(frameID);
  }, []);

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
        style={{ transform: `rotate(${secAngle}deg)`, transition: "transform 0.5s linear" }}
        // style={{ transform: `rotate(${secAngle}deg)`, transition: "transform 0.5s ease-in-out" }}
      ></span>
    </>
  );
}

//Remainder
// % in js is remainder not modulo
// (hr % 12 + 12) % 12 = (hr % 12)
// (hr % 12 + 12) % 12 to dealing with negative value the result will give like modulo

// console.log(Date.now());
// console.log(new Date().getTime());
// console.log(new Date().getSeconds());
