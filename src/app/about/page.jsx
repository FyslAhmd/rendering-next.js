import { cookies } from "next/headers";

export default async function About() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("about page in server");
  return <div>This is about page {new Date().toLocaleTimeString()}</div>;
}
