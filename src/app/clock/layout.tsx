interface ClockProps {
  children: React.ReactNode;
}
export default function ClockLayout({ children }: ClockProps) {
  return (
    <main className="bg-sky-200 py-5">
      <section className="flex justify-center align-center text-center">{children}</section>
    </main>
  );
}
