import Image from "next/image";
import React from "react";

interface myProjectCard {
  img: string;
  title: string;
  client: string;
  work: string;
}

const myProjectCard = ({ img, title, client, work }: myProjectCard) => {
  return (
    <div>
      <Image src={img} alt="" />
      <h1 className="font-[700] text-white text-[24px] font-syne py-[30px] flex items-center gap-8">
        {title} <span className="w-[48px] bg-[#FF9142] h-[1px]"></span>
      </h1>
      <p className="text-[#606060] flex gap-6 font-rubik pb-2">
        Client:<span className="text-white">{client}</span>
      </p>
      <p className="text-[#606060] flex gap-6 font-rubik">
        Work: &nbsp;<span className="text-white">{work}</span>
      </p>
    </div>
  );
};

export default myProjectCard;
