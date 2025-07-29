"use client";
import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  console.log("Dashbaord client component");
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        className="border p-2 m-2"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}
