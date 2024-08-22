"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState("Vini is Noob");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setMessage("Vini is Learning!");
    setCount(count + 1);
  };

  return (
    <div className="text-center pt-8">
      <h1 className="text-4xl mb-4">{message}</h1>
      <button
        className="text-3xl bg-blue-500 text-white py-2 px-4 rounded-full transform transition-all duration-300 hover:scale-110 active:scale-90 mb-4"
        onClick={handleClick}
      >
        Vini
      </button>
      <p className="mt-4 text-2xl">Button clicked {count} times</p>
      <Link href="/">
        <button className="mt-8 text-2xl bg-green-500 text-white py-2 px-4 rounded-full transform transition-all duration-300 hover:scale-110 active:scale-90">
          Go to Home Page
        </button>
      </Link>
    </div>
  );
}
