// This is a server component
// Add use client for client component
"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex border-4 border-black">
      <br/>
      <h5 className="lg:text-red-700 xl:text-green-700">
        This is heading
      </h5>
    </div>
  );
}
