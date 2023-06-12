import { ClockHands, ClockNumbers, ClockHandsCon } from "@/utils";
export default function ClockApp() {
  return (
    <section
      className="bg-slate-100 w-[350px] h-[350px] 
    shadow-[inset_20px_20px_20px_var(--shadow-color1),25px_35px_20px_var(--shadow-color1),25px_30px_30px_var(--shadow-color1),inset_-20px_-20px_25px_var(--shadow-color2)]
    rounded-[50%] relative flex justify-center items-center"
    >
      <ClockNumbers />
      {/* <ClockHandsCon /> */}
      <ClockHands />
    </section>
  );
}
