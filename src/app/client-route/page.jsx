"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function Client() {
  const result = serverSideFunction();
  return <div>This is Client route {result}</div>;
}
