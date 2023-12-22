import Image from 'next/image';
import React from 'react'

type Props = {
    img: string;
    title_1: string;
    title_2: string;
}

const myWorkCard = ({img, title_1, title_2}: Props) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="2000" className='font-[700] text-center'>
        <Image  src={img} alt=''/>
        <h2 className='text-[#F4F7FA] text-[13px] uppercase pt-[20px]'>{title_1}</h2>
        <h1 className='text-[24px] text-white'>{title_2}</h1>
    </div>
  )
}

export default myWorkCard