"use client";

import { useState } from "react";

type StudentProps = {
  name: string;
  course: string;
  year: string;
  image: string;
  message: string;
};

export default function StudentCard({
  name,
  course,
  year,
  image,
  message,
}: StudentProps) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-64">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto"
      />

      <h2 className="text-lg font-bold text-center mt-2">{name}</h2>

      <p className="text-sm text-gray-500 text-center">{course}</p>
      <p className="text-xs text-gray-400 text-center">{year}</p>

      <p className="text-center mt-2 italic">"{message}"</p>

      <button
        onClick={() => setLikes(likes + 1)}
        className="mt-3 bg-blue-600 text-white px-3 py-1 rounded w-full"
      >
        ❤️ Like ({likes})
      </button>
    </div>
  );
}