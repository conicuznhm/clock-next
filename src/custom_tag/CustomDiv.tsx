"use client";
import styled, { keyframes } from "styled-components";

//keyframes set
export const flashIn = keyframes`
  0%{
    opacity:0
  }
  50%{
    opacity:1
  }
`;

//styling component
export const CustomDiv = styled.div`
  width: 1.5rem;
`;
export const AnimateDiv = styled.div`
  animation: ${flashIn} 1s steps(1) infinite;
`;
