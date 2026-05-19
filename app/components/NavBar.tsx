import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/students">Students</Link>
      <Link href="/classes">Classes</Link>
      <Link href="/messages">Messages</Link>
    </nav>
  );
}