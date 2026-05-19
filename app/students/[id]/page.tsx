import { students } from "../../data/students";

export default async function StudentProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return <h1>Student not found</h1>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <img
          src={student.image}
          alt={student.name}
          className="w-40 h-40 rounded-full mx-auto object-cover"
        />

        <h1 className="text-3xl font-bold text-center mt-4">
          {student.name}
        </h1>

        <p className="text-center text-blue-600 mt-2">
          {student.course}
        </p>

        <p className="text-center text-gray-500">
          {student.faculty}
        </p>

        <p className="text-center text-gray-400">
          {student.year}
        </p>

        <p className="text-center italic mt-6">
          "{student.message}"
        </p>
      </div>
    </main>
  );
}