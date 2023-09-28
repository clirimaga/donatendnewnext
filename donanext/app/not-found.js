"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <h1>OOPS page not found</h1>
      <button onClick={() => router.back()}>Go BACK</button>
    </div>
  );
}
