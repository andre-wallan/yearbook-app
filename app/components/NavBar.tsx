import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/students">Students</Link>
      <Link href="/classes">Classes</Link>
      <Link href="/messages">Messages</Link>
    </nav>
  );
}