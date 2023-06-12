import Link from "next/link";

export default function Header() {
  return (
    <section className="bg-lime-400 flex px-5 gap-10">
      <Link
        className="bg-yellow-600 hover:bg-red-200 active:bg-red-700 focus:bg-gray-700 rounded-md px-1"
        href="/clock"
      >
        Clock
      </Link>
      <Link
        className="bg-yellow-600 hover:bg-red-200 active:bg-red-700 focus:bg-gray-700 rounded-md px-1"
        href="/stopwatch"
      >
        Stopwatch
      </Link>
      <Link
        className="bg-yellow-600 hover:bg-red-200 active:bg-red-700 focus:bg-gray-700 rounded-md px-1"
        href="/about"
      >
        About
      </Link>
    </section>
  );
}
