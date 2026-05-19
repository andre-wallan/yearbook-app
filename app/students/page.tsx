"use client";

import { useState } from "react";
import { students } from "../data/students";
import StudentCard from "../components/StudentCard";

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [faculty, setFaculty] = useState("");

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) &&
      (faculty === "" || student.faculty === faculty)
    );
  });

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">
          🎓 University Students
        </h1>

        <p className="text-gray-600 mt-2">
          Browse students by faculty and course
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search student..."
          className="flex-1 p-3 rounded-lg border"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-3 rounded-lg border"
          onChange={(e) => setFaculty(e.target.value)}
        >
          <option value="">All Faculties</option>
          <option value="Computing">Computing</option>
          <option value="Business">Business</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            course={student.course}
            faculty={student.faculty}
            year={student.year}
            image={student.image}
            message={student.message}
          />
        ))}
      </div>
    </main>
  );
}