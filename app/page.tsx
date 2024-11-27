// This is a server component
// Add use client for client component
"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex text-secondary-900 font-extrabold">
      Hello World
      <h1 className="text-heading text-2xl">
        This is heading
      </h1>
    </div>
  );
}
