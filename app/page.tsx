import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center p-6">
      
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
        🎓 Online University Yearbook
      </h1>

      <p className="text-gray-700 text-lg max-w-2xl mb-8">
        Welcome to the Yearbook of Memories. 
        Discover students, classes, achievements, and unforgettable university moments.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/students"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          View Students
        </Link>

        <Link
          href="/classes"
          className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Explore Classes
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">
            📸 Student Memories
          </h2>
          <p className="text-gray-600">
            Relive memorable university moments and celebrations.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">
            🏫 Faculties & Courses
          </h2>
          <p className="text-gray-600">
            Explore different faculties, departments, and programs.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">
            💬 Student Messages
          </h2>
          <p className="text-gray-600">
            Share memories, wishes, and messages with classmates.
          </p>
        </div>

      </div>
    </main>
  );
}