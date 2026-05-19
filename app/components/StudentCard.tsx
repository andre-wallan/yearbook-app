"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type StudentProps = {
  id: number;
  name: string;
  course: string;
  faculty: string;
  year: string;
  image: string;
  message: string;
};

export default function StudentCard({
  id,
  name,
  course,
  faculty,
  year,
  image,
  message,
}: StudentProps) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes-${id}`);

    if (savedLikes) {
      setLikes(Number(savedLikes));
    }
  }, [id]);

  const handleLike = () => {
    const newLikes = likes + 1;

    setLikes(newLikes);

    localStorage.setItem(`likes-${id}`, newLikes.toString());
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-72 hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-center">{name}</h2>

        <p className="text-blue-600 text-center">{course}</p>

        <p className="text-gray-500 text-center">{faculty}</p>

        <p className="text-sm text-gray-400 text-center">{year}</p>

        <p className="italic text-center mt-3">
          "{message}"
        </p>

        <button
          onClick={handleLike}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full"
        >
          ❤️ Like ({likes})
        </button>

        <Link
          href={`/students/${id}`}
          className="block text-center mt-3 text-blue-700 font-semibold"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}