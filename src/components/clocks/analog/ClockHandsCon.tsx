"use client";
import { useEffect, useRef, useState } from "react";
import getAngle from "@/utils/getAngle";
import { hand } from "@/utils";
import { SecondHandDiv } from "@/utils";

export default function ClockHands() {
  // handSizes and handColors
  // getAngle

  const { hrDeg, minDeg, secDeg } = getAngle();
  const [hrAngle, setHrAngle] = useState<number>(hrDeg);
  const [minAngle, setMinAngle] = useState<number>(minDeg);

  useEffect(() => {
    let frameID: number;
    const updateAngle = () => {
      setHrAngle(getAngle().hrDeg);
      setMinAngle(getAngle().minDeg);
      frameID = requestAnimationFrame(updateAngle);
    };
    frameID = requestAnimationFrame(updateAngle);
    return () => cancelAnimationFrame(frameID);
  }, []);

  return (
    <>
      <div className="h-3 w-3 rounded-full bg-black"></div>
      <div
        className={`${hand.handSizes.hr} ${hand.handColors.hr} ${hand.positions.hr}`}
        style={{ transform: `rotate(${hrAngle}deg)` }}
      ></div>
      <div
        className={`${hand.handSizes.min} ${hand.handColors.min} ${hand.positions.min}`}
        style={{ transform: `rotate(${minAngle}deg)` }}
      ></div>
      <SecondHandDiv style={{ transform: `rotate(${secDeg}deg)` }}></SecondHandDiv>
    </>
  );
}

//Remainder
// % in js is remainder not modulo
// (hr % 12 + 12) % 12 = (hr % 12)
// (hr % 12 + 12) % 12 to dealing with negative value the result will give like modulo

// console.log(Date.now());
// console.log(new Date().getAngle());
// console.log(new Date().getSeconds());

// // clock hand movement (will be make to module next)
// const getAngle = () => {
//   const date = new Date();

//   // Get current hr,min,sec
//   const hr = date.getHours();
//   const min = date.getMinutes();
//   const sec = date.getSeconds();

//   // Set angle for hr,min,sec hands
//   const hrDeg = (hr % 12) * 30 + min * 0.5;
//   const minDeg = min * 6;
//   const secDeg = sec * 6;

//   return { hrDeg, minDeg, secDeg, sec };
// };
// // clock hand movement (will be make to module next)

// const handSizes = {
//   hr: "h-[5rem] w-2",
//   min: "h-[8rem] w-[0.3rem]",
//   sec: "h-[9rem] w-[0.1rem]"
// };
// const handColors = {
//   hr: "bg-red-800",
//   min: "bg-blue-800",
//   sec: "bg-zinc-800"
// };
