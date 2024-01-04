import Image from "next/image";
import SwiperCard from "./components/SwiperCard";
import { Caveat } from "next/font/google";
const montserrat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="">
        <Image
          src="/home_first.webp"
          alt="Aakriti 2K24"
          width={1920}
          height={1500}
          className=""
        ></Image>
      </div>
      <div className="relative pt-[220px] bg-black">
        <div
          className={`${montserrat.className} lg:pt-5 sm:px-10 absolute text-white text-2xl text-center top-2 font-semibold sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl`}
        >
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Aakriti
          </span>{" "}
          is a vibrant three-day inter-college festival uniting 5000+ students.
          Join us to celebrate achievement, engage in diverse activities, and
          showcase your creativity at CEC!
          <div className="text-white w-max mx-auto p-4 px-8 mt-2 sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl rounded-full border-white border-2">
            <p>On 25th, 26th and 27th of April.</p>
          </div>
        </div>

        <Image
          src="/home_second.webp"
          alt="Aakriti 2K24"
          width={1920}
          height={1500}
          className=""
        />
      </div>
      <div className=" bg-green-300 p-4 sm:py-8 text-black sm:flex sm:justify-center sm:items-end">
        <div className="w-80 sm:w-1/2 h-full border-4 border-black bg-orange-500 p-4  rounded-sm shadow-[8px_8px_0px_rgba(0,0,0,1)]  mx-auto">
          <article className="w-full h-full bg-black border-2 border-black">
            <figure className="w-full h-1/2 border-black border-b-2 ">
              <Image
                src="/home_third.webp"
                width={1920}
                height={1080}
                alt="Aakriti 2024"
              />
            </figure>
            <div className="px-6 py-5 text-left h-full sm:text-center text-white">
              <p className=" font-medium tracking-wider sm:text-2xl sm:mb-2">
                Aakriti.
              </p>
              <h1 className=" mb-3 font-semibold text-3xl sm:text-5xltracking-wider">
                Wall of fame.
              </h1>
              <div className="w-[220px] sm:w-[220px] md:w-[260px] lg:w-[300px] mx-auto">
                <SwiperCard />
              </div>
              <p className=" pt-2">Swipe to explore →</p>
            </div>
          </article>
        </div>
      </div>
      <div>
        <Image
          src="/home_fourth.webp"
          alt="Aakriti 2K24"
          width={1920}
          height={1500}
          className=""
        ></Image>
      </div>
    </div>
  );
}
