export default function About() {
  console.log("about page in server");
  return <div>This is about page {new Date().toLocaleTimeString()}</div>;
}
