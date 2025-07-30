import { serverSideFunction } from "@/utils/server-utils";

export default function Server() {
  const result = serverSideFunction();
  return <div>This is server route {result}</div>;
}
