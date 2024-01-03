import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#D2F1EE]">
        <Image
          src="/first_photo.webp"
          alt="Aakriti 2K24"
          width={1920}
          height={1080}
          className=""
        ></Image>
      </div>
    </div>
  );
}
