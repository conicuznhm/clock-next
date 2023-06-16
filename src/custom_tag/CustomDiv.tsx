"use client";
import styled, { keyframes } from "styled-components";
import getAngle from "@/utils/getAngle";

//keyframes set
//flashIn for colon animate
const flashIn = keyframes`
  0%{
    opacity:0
  }
  50%{
    opacity:1
  }
`;

//rotate of second hand animation
const secondMove = keyframes`
  0%{
    transform: rotate(${getAngle().secDeg}deg)
  }
  100%{
    transform: rotate(${getAngle().secDeg + 360}deg)
  }
`;

//styling component
export const CustomDiv = styled.div`
  width: 1.5rem;
`;

//colon animation
export const AnimateDiv = styled.div`
  animation: ${flashIn} 1s steps(1) infinite;
`;

//second hand config
export const SecondHandConfig = styled.div`
  position: absolute;
  bottom: 11rem;
  transform-origin: bottom;
  border-radius: 9999px;
  height: 9rem;
  width: 0.1rem;
  background-color: #333333;
`;

//second hand animation
export const SecondHandDiv = styled(SecondHandConfig)`
  animation: ${secondMove} 60s linear infinite;
`;
