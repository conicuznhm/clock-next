import Link from "next/link";

export default function Header() {
  return (
    <section className="bg-lime-400 flex px-5 gap-20">
      <Link
        className="bg-yellow-600 hover:bg-red-200 active:bg-red-700 focus:bg-gray-700"
        href="/clock"
      >
        Clock
      </Link>
      <Link
        className="bg-yellow-600 hover:bg-red-200 active:bg-red-700 focus:bg-gray-700"
        href="/about"
      >
        About
      </Link>
    </section>
  );
}
