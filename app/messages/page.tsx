"use client";

import { useState } from "react";

export default function MessagesPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = () => {
    if (message.trim() === "") return;

    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">
        💬 Student Messages
      </h1>

      <div className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Write message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={addMessage}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full"
        >
          Post Message
        </button>

        <div className="mt-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white shadow p-4 rounded-lg"
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}