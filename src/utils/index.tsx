//To dynamic import  (ssr disable)
import dynamic from "next/dynamic";

// Layout Header
import Header from "@/components/layouts/Header";
export { Header };

// component analog clock
import ClockApp from "@/components/clocks/analog/ClockApp";
import ClockNumbers from "@/components/clocks/analog/ClockNumbers";
// import ClockHands from "@/components/clocks/analog/ClockHands";
// import ClockHandsCon from "@/components/clocks/analog/ClockHandsCon";

//ssr disable
const ClockHands = dynamic(() => import("@/components/clocks/analog/ClockHands"), { ssr: false });
const ClockHandsCon = dynamic(() => import("@/components/clocks/analog/ClockHandsCon"), {
  ssr: false
});
export { ClockApp, ClockNumbers, ClockHands, ClockHandsCon };

// component digital clock
// import ClockDigital from "@/components/clocks/digital/ClockDigital";
// import HHMMSS from "@/components/clocks/digital/HHMMSS";

//ssr disable
const ClockDigital = dynamic(() => import("@/components/clocks/digital/ClockDigital"));
const HHMMSS = dynamic(() => import("@/components/clocks/digital/HHMMSS"));
export { ClockDigital, HHMMSS };

//custom component
import { CustomDiv } from "@/custom_tag/CustomDiv";
import { AnimateDiv } from "@/custom_tag/CustomDiv";
export { CustomDiv, AnimateDiv };
