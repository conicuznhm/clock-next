export default function StopwatchLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-slate-700">
      <section className="flex justify-center items-center text-center">{children}</section>
    </main>
  );
}
