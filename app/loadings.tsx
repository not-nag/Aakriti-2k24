import Image from "next/image";

export default function Loading() {
  return (
    <Image
      src={"/loading.webp"}
      alt="Loading"
      width={767}
      height={510}
      className="py-10 mx-auto"
    ></Image>
  );
}
