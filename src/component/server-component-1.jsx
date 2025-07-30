import fs from "fs";
// import ServerComponentTwo from "./server-component-2";
import ClientComponentOne from "./client-component-1";

export default function ServerComponentOne() {
  fs.readFileSync("src/component/server-component-1.jsx", "utf-8");
  return (
    <div>
      <h1>Server Component One</h1>
      {/* <ServerComponentTwo /> */}
      <ClientComponentOne />
    </div>
  );
}
