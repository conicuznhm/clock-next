export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section className="bg-blue-400">{children}</section>
    </main>
  );
}
