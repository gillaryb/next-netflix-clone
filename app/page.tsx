// ./app/page.tsx
"use client"
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
    </div>
  );
}
