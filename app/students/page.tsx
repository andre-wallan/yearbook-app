"use client";

import { useState } from "react";
import { students } from "../data/students";
import StudentCard from "../components/StudentCard";

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      {/* HEADER */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">
          🎓 University Yearbook
        </h1>

        <p className="text-gray-600 mt-2">
          Meet students from different faculties and departments
        </p>
      </div>

      {/* SEARCH BAR */}
<div className="max-w-xl mx-auto mb-8">
  <input
    type="text"
    placeholder="Search university student..."
    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

<p className="text-center text-gray-500 mb-6">
  Showing {filteredStudents.length} student(s)
</p>

      {/* GRID CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
            year={student.year}
            image={student.image}
            message={student.message}
          />
        ))}
      </div>
    </main>
  );
}