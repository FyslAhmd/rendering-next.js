"use client";
import { useState } from "react";
import ClientComponentTwo from "./client-component-2";

export default function ClientComponentOne() {
  const [name, setName] = useState("Batman");
  return (
    <div>
      <h1>Client Component One</h1>
      <ClientComponentTwo />
    </div>
  );
}
