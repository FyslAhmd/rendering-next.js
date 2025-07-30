import ServerComponentOne from "@/component/server-component-1";

// import ClientComponentOne from "@/component/client-component-1";

export default function Page() {
  return (
    <div>
      <h1>Interleaving Page</h1>
      <ServerComponentOne />
      {/* <ClientComponentOne /> */}
    </div>
  );
}
