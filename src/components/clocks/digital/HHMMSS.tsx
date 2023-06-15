"use client";
import { useEffect, useState } from "react";
import { CustomDiv, AnimateDiv } from "@/utils";

export default function HHMMSS() {
  interface Time {
    hh: string;
    mm: string;
    ss: string;
    isPm: boolean;
  }

  const getTime = () => {
    const date: Date = new Date();
    const hr: number = date.getHours();
    const hours: string =
      hr % 12
        ? (hr % 12).toLocaleString("en-US", { minimumIntegerDigits: 2 })
        : hr === 12
        ? "12"
        : "00";
    const minutes: string = date.getMinutes().toLocaleString("en-US", { minimumIntegerDigits: 2 });
    const seconds: string = date.getSeconds().toLocaleString("en-US", { minimumIntegerDigits: 2 });
    const isPm: boolean = hr >= 12;
    return { hh: hours, mm: minutes, ss: seconds, isPm };
  };

  // const [time, setTime] = useState<{ hh: string; mm: string; ss: string }>(getTime());
  const [time, setTime] = useState<Time>(getTime());

  useEffect(() => {
    let frameCount = 0;
    let frameID: number;

    const updateFrame = () => {
      frameCount++;
      // Set animationFrame to read every 1 sec
      // (like interval(()=>{},1000)) if frame rate of browser = 60 FPS
      if (frameCount === 60) {
        setTime(getTime());
        frameCount = 0;
      }
      frameID = requestAnimationFrame(updateFrame);
    };
    frameID = requestAnimationFrame(updateFrame);
    return () => cancelAnimationFrame(frameID);
  }, []);

  return (
    <section className="flex justify-center items-center">
      <section className="bg-[rgba(0,0,0,0.7)] rounded-[10px]">
        <section className="bg-[rgba(0,0,0,0.9)] text-white m- py-1 w-[180px] text-xl rounded-[10px]">
          <section className="flex justify-center gap-2 px-1">
            <CustomDiv>{time.hh}</CustomDiv>
            <div>:</div>
            <CustomDiv>{time.mm}</CustomDiv>
            <AnimateDiv>:</AnimateDiv>
            <CustomDiv>{time.ss}</CustomDiv>
            <CustomDiv>{time.isPm ? "PM" : "AM"}</CustomDiv>
          </section>
        </section>
      </section>
    </section>
  );
}

// to make precisely animation and higher performance (reduce resource usage)
// suggest using requestAnimationFrame() instead of using setInterval

// use setInterval
// useEffect(() => {
//   const updateTime = () => {
//     setTime(getTime());
//   };
//   const interval = setInterval(updateTime, 1000);
//   return () => clearInterval(interval);
// }, [time]);

//Remainder
// % in js is remainder not modulo
// (hr % 12 + 12) % 12 = (hr % 12)
// (hr % 12 + 12) % 12 to dealing with negative value the result will give like modulo
