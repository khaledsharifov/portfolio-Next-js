import MyWorkCard from "@/components/Card/myWorkCard";
import React from "react";
import my_work_img_1 from "../../../public/image/my-work-img_1.svg";
import my_work_img_2 from "../../../public/image/my-work-img_2.svg";
import my_work_img_3 from "../../../public/image/my-work-img_3.svg";
import my_work_img_4 from "../../../public/image/my-work-img_4.svg";
import my_work_img_5 from "../../../public/image/my-work-img_5.svg";
import my_work_img_6 from "../../../public/image/my-work-img_6.svg";

const MyWorksPage = () => {
  return (
    <main className="max-w-[1166px]  m-auto px-[20px] relative">
      <div className="border-b border-[#949494] py-[70px]">
        <div className="bg-light absolute left-[-100px] top-[40px] w-[300px]"></div>
        <h1 className=" text-white text-[72px] font-[700] font-syne">
          My works
        </h1>
        <p className="text-[#949494] text-[18px] font-rubik">
          Showcase About Works
        </p>
      </div>
      <div className="py-[60px] grid grid-cols-3 gap-x-6 gap-y-[60px]">
        <MyWorkCard img={my_work_img_1} title_1="blue" title_2="Orvillebury" />
        <MyWorkCard img={my_work_img_2} title_1="green" title_2="West Lavada" />
        <MyWorkCard img={my_work_img_3} title_1="aqua" title_2="Rempelshire" />
        <MyWorkCard img={my_work_img_4} title_1="black" title_2="Pfefferstad" />
        <MyWorkCard
          img={my_work_img_5}
          title_1="purple"
          title_2="South Adrienne"
        />
        <MyWorkCard
          img={my_work_img_6}
          title_1="maroon"
          title_2="Lake Trevor"
        />
      </div>
      <div className=" text-center">
        <button className="border-[#FF9142] border uppercase font-rubik font-[500] mb-[100px] text-[#FF9142] text-[13px] py-3 px-6 rounded-[50px]">
          <span>Load more works</span>
        </button>
      </div>
    </main>
  );
};

export default MyWorksPage;
