import Image from "next/image";
import SwiperCard from "./components/SwiperCard";
import { Caveat, Roboto_Mono } from "next/font/google";
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black px-2">
      <div className="bg-black h-5"></div>
      <div
        className={`${roboto_mono.className} bg-black pb-6 pt-2 max-w-[1400px] mx-auto`}
      >
        <div className="bg-black border-white border-2 rounded-lg sm:text-xl">
          <div className="border-b-2 h-[40px] flex justify-start items-center">
            <div className=" mx-2 border-4 bord rounded-full border-red-400 bg-red-400 h-[15px] w-[15px]"></div>
            <div className="  border-4 bord rounded-full border-yellow-300 bg-yellow-300 h-[15px] w-[15px]"></div>
            <div className=" mx-2 border-4 bord rounded-full border-green-400 bg-green-400 h-[15px] w-[15px]"></div>
            <div className="text-white ml-auto pr-4">/canara_engineering</div>
          </div>
          <div className="text-white p-4 sm:p-10">
            <h1
              className={`${roboto_mono.className}  max-w-max mx-auto my-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl sm:text-4xl md:text-5xl   text-[#00ff00] font-light`}
            >
              $ Aakriti 2024
            </h1>
            <p>
              Aakriti is a vibrant three-day inter-college festival uniting
              5000+ students. Join us to celebrate achievement, engage in
              diverse activities, and showcase your creativity at CEC!
            </p>
            <p className="pt-4">
              <span className="text-[#00ff00]">&gt;&gt;</span> On April 25th,
              26th and 27th
            </p>
            <p>
              <span className="text-[#00ff00]">&gt;&gt;</span> Exciting
              Tournaments
            </p>
            <p>
              <span className="text-[#00ff00]">&gt;&gt;</span> DJ Nights
            </p>
            <p>
              <span className="text-[#00ff00]">&gt;&gt;</span> Auto Expo
            </p>
          </div>
        </div>
      </div>

      <div>
        <p
          className={`${roboto_mono.className} top-2 relative sm:top-10 text-white text-center max-w-[800px] mx-auto text-xl sm:text-2xl md:text-3xl`}
        >
          <span className="text-3xl sm:text-4xl md:text-5xl">
            Astronaut uncle
          </span>{" "}
          has already started exploring the events. What are you waiting for ?
        </p>

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
                आकृति.
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
