"use client";
import Image from "next/image";
import rightArrow from "../../public/icons/right.svg";
import rightArrow_2 from "../../public/icons/rightArrow.svg";
import manImg from "../../public/image/man.svg";
import { useRouter } from "next/navigation";
import projectImg1 from "../../public/image/Img_1.svg";
import projectImg2 from "../../public/image/Img_2.svg";
import projectImg3 from "../../public/image/Img_3.svg";
import projectImg4 from "../../public/image/Img_4.svg";
import quotes from "../../public/icons/“.svg";
import MyProjectCard from "@/components/Card/myProjectCard";

export default function Home() {
  const { push } = useRouter();
  return (
    <main className="max-w-[1166px]  m-auto px-[20px] relative">
      <section className="flex flex-col items-center text-center py-[100px]">
        <div className="bg-light absolute right-[150px] top-[80px]"></div>
        <span className="text-white text-[72px] font-[700] font-syne leading-[90px] pb-[50px] w-[80%]">
          Adaptive Logo Design for Your Brand
        </span>
        <button onClick={() => push("/works")} className="btn-yellow">
          <span>Explore works </span>
          <span>
            <Image src={rightArrow} alt="" />
          </span>
        </button>
      </section>
      <section className="flex items-center justify-between py-[80px]">
        <div className="text-white w-[50%]">
          <h1 className="text-[56px] font-[700] font-syne leading-[70px]">
            Let’s get know about me closer
          </h1>
          <p className="text-[#A8A8A8] text-[18px] font-rubik py-[30px]">
            Aaronn is a New York-based visual designer focusing on branding and
            visual identity. Her portfolio showcases her wide range of work,
            spanning books, posters and web design.
          </p>
          <button className="btn-yellow mt-8">Discover More About Me</button>
        </div>
        <div className="relative">
          <span className="w-[110px] h-[34px] rounded-[50px] border-[#FF9142] border-[1px] absolute top-[-15px] right-0"></span>
          <span className="w-[55px] h-[178px] rounded-[50px] border-[#FF9142] border-[1px] absolute bottom-[50px] left-[-40px]"></span>
          <Image src={manImg} alt="" className="w-[454px]" />
        </div>
      </section>
      <section className="py-[80px] relative">
        <div className="bg-light absolute right-[200px] top-[80px] z-[-1]"></div>
        <h1 className="text-[64px] font-[700] font-syne text-white pb-[40px] text-center">
          My Projects Highlight
        </h1>
        <button
          onClick={() => push("/works")}
          className=" border-[#FF9142] border uppercase font-rubik flex items-center m-auto gap-2 font-[500] text-white text-[13px] py-3 px-6 rounded-[50px]"
        >
          <span>Explore More</span>
          <span>
            <Image src={rightArrow_2} alt="" />
          </span>
        </button>
        <div className="grid grid-cols-2 gap-x-10 gap-y-20 py-[80px]">
          <MyProjectCard
            img={projectImg1}
            title="Brand Journey Improvements"
            client="Organc"
            work="Branding"
          />
          <MyProjectCard
            img={projectImg2}
            title="Brand Grouping"
            client="FR"
            work="Branding"
          />
          <MyProjectCard
            img={projectImg3}
            title="NFT Glimps"
            client="Rumanda"
            work="NFT Design"
          />
          <MyProjectCard
            img={projectImg4}
            title="Brand Suggestions"
            client="T3d"
            work="NFT logo"
          />
        </div>
      </section>
      <section className="pb-[80px] relative">
        <div className="bg-light absolute left-[-80px] top-[-30px] h-[300px] w-[250px]"></div>
        <Image src={quotes} alt="" className=" absolute right-4" />
        <h1 className="text-[64px] text-white font-[700] font-syne">
          Testimonial
        </h1>
        <p className="text-[#949494] text-[18px] font-rubik w-[78%] py-[30px]">
          “Aaronn was fantastic to work with from start to finish. We were
          looking for a simple, stand-out logo and he delivered. I tried
          designing the logo myself thinking I wouldn’t need to pay the money
          for a professional graphic designer but I was very wrong. Working with
          Aaronn was worth every penny and was surprisingly affordable! I
          remember him saying simplicity is key to a successful logo and boy he
          was right. I can’t thank Aaronn enough for his effort and
          professionalism. I would recommend him to anyone looking for a
          design!”
        </p>
        <p className="text-[24px] font-[700]  font-syne text-white">
          -Martin lee
        </p>
      </section>
    </main>
  );
}
