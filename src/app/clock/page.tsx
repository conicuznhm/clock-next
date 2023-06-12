import { ClockApp, ClockDigital } from "@/utils";
export default function Clock() {
  return (
    <main>
      <h1 className="text-lg mb-4">Analog Clock</h1>
      <ClockApp />
      <h1 className="text-lg my-6">Digital</h1>
      <ClockDigital />
    </main>
  );
}
