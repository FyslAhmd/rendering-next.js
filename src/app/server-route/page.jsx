import ImageSlider from "@/component/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function Server() {
  const result = serverSideFunction();
  console.log(result);
  return <ImageSlider />;
}
