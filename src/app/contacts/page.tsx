import React from "react";
import notebook from "../../../public/image/notebook.svg";
import Image from "next/image";

const ContactsPage = () => {
  return (
    <main className="max-w-[1166px]  m-auto px-[20px] pb-[50px] relative">
      <div className="border-b border-[#949494] py-[70px]">
        <div className="bg-light absolute left-[-100px] top-[40px] w-[300px]"></div>
        <h1
          data-aos="fade-right"
          data-aos-duration="2000"
          className=" text-white text-[72px] font-[700] font-syne"
        >
          Contact Me
        </h1>
        <p
          data-aos="fade-left"
          data-aos-duration="2000"
          className="text-[#949494] text-[18px] font-rubik"
        >
          For Any Project Knock Us
        </p>
      </div>
      <div className="flex justify-between py-[100px]">
        <h1
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-[#ffff] text-[64px] font-[700] font-syne w-[38%]"
        >
          Get in Touch With Us
        </h1>
        <form
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex flex-col  items-start gap-8"
        >
          <div className="flex flex-col text-white">
            <label className="text-[24px] uppercase font-[400] font-rubik">
              Name
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col text-white">
            <label className="text-[24px] uppercase font-[400] font-rubik">
              Subject
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col text-white">
            <label className="text-[24px] uppercase font-[400] font-rubik">
              Message
            </label>
            <input type="text" className="input" />
          </div>
          <input
            type="button"
            value="Send"
            className="bg-[#FF9142] uppercase font-rubik font-[400] text-white py-2 px-8 rounded-[50px] text-[24px]"
          />
        </form>
      </div>
      <Image
        data-aos="zoom-in"
        data-aos-duration="2000"
        src={notebook}
        alt=""
      />
      <div className="text-white text-[24px] font-[700] font-syne flex justify-evenly py-[60px]">
        <span data-aos="fade-right" data-aos-duration="2000">
          Street Avenue 21, CA
        </span>
        <span data-aos="zoom-in" data-aos-duration="2000">
          +9 0283353
        </span>
        <span data-aos="fade-left" data-aos-duration="2000">
          info@aaronn.com
        </span>
      </div>
    </main>
  );
};

export default ContactsPage;
