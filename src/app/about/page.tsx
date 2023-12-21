import React from "react";
import man_2 from "../../../public/image/man_2.svg";
import man_3 from "../../../public/image/man_3.svg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="max-w-[1166px]  m-auto px-[20px] relative">
      <div className="border-b border-[#949494] py-[70px]">
        <div className="bg-light absolute left-[-100px] top-[40px] w-[300px]"></div>
        <h1
          data-aos="fade-right"
          data-aos-duration="2000"
          className=" text-white text-[72px] font-[700] font-syne"
        >
          About Me
        </h1>
        <p
          data-aos="fade-left"
          data-aos-duration="2000"
          className="text-[#949494] text-[18px] font-rubik"
        >
          Little Brief About Myself
        </p>
      </div>
      <div className="py-[60px] flex items-center gap-[40px] px-[20px]">
        <h1
          data-aos="zoom-in"
          data-aos-duration="2000"
          className=" text-white text-[80px] font-[700] font-syne leading-[84px] w-[48%]"
        >
          My mission is to make design easier.
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="text-[#949494] text-[21px] font-sans leading-[39px] w-[45%]"
        >
          Create custom Designs with AARONN that converts more visitors than any
          website. With lots of unique design, you can easily select a logo
          without hassle. Create custom landing logos with AARONN that converts
          more visitors than any website. With lots of revisions, you can easily
          build a logo without porbolem.
        </p>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex justify-between gap-[20px] my-[40px] relative"
      >
        <span className="w-[55px] h-[178px] rounded-[50px] border-[#FF9142] border-[1px] absolute top-0 left-[-28px]"></span>
        <span className="w-[178px] h-[55px] rounded-[50px] border-[#FF9142] border-[1px] absolute bottom-[-25px] right-[-5px]"></span>
        <Image src={man_2} alt="" />
        <Image src={man_3} alt="" />
      </div>
      <div className="pt-[80px] pb-[120px]">
        <h1   data-aos="fade-right"
          data-aos-duration="2000" className="text-[48px] font-[700] font-syne text-white">
          Follow me on:
        </h1>
        <div className="text-[#949494] font-[700] text-[32px] uppercase flex justify-between py-[30px]">
          <span data-aos="zoom-in" data-aos-duration="2000">Dribble</span>
          <span data-aos="zoom-in" data-aos-duration="2000">Twitter</span>
          <span data-aos="zoom-in" data-aos-duration="2000">Facebook</span>
          <span data-aos="zoom-in" data-aos-duration="2000">Instagram</span>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
