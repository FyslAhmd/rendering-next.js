import ImageSlider from "@/component/ImageSlider";
// import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

export default function Server() {
  const result = serverSideFunction();
  // const res = clientSideFunction();
  console.log(result);
  return (
    <>
      {/* <h1>{res}</h1> */}
      <ImageSlider />
    </>
  );
}
