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
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-72 hover:scale-105 transition duration-300">
      
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          {name}
        </h2>

        <p className="text-blue-600 text-center font-medium mt-1">
          {course}
        </p>

        <p className="text-sm text-gray-500 text-center">
          {year}
        </p>

        <p className="text-gray-700 italic text-center mt-4">
          "{message}"
        </p>

        <button
          onClick={() => setLikes(likes + 1)}
          className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full font-semibold transition"
        >
          ❤️ Like ({likes})
        </button>
      </div>
    </div>
  );
}