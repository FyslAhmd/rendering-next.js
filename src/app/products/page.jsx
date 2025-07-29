import Link from "next/link";

export default function ProductPage() {
  return (
    <>
      <Link className="text-lg font-bold m-2" href="/products/1">
        Product 1
      </Link>{" "}
      <br />
      <Link className="text-lg font-bold m-2" href="/products/2">
        Product 2
      </Link>{" "}
      <br />
      <Link className="text-lg font-bold m-2" href="/products/3">
        Product 3
      </Link>{" "}
      <br />
    </>
  );
}
