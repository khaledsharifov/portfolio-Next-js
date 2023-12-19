import React from 'react'
import logo from '../../public/icons/logo.svg'
import social from '../../public/icons/social.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-[#131313] py-[60px] font-syne font-[700]'>
      <div className='max-w-[1166px]  m-auto px-[20px] flex flex-col justify-evenly'>
        <div className='flex flex-col items-center pb-[80px]'>
          <span className='text-[#FF9142] text-[24px]'>Get in Touch With Us</span>
          <span className='text-[64px] text-white'>info@aaronn.com</span>
        </div>
        <ul className='flex justify-between items-center border-b-[1px] border-[#949494] pb-[40px] text-white text-[24px]'>
          <li><Image src={logo} alt="" width={241}/></li>
          <li>Street Avenue 21, CA <br />0-8-00-888- <br />000</li>
          <li className=' pr-[80px]'><span>+9 0283353</span><Image className='pt-3' src={social} alt="" /></li>
        </ul>
        <span className=' text-center pt-[30px] text-white text-[24px]'>© 2023. Ideapeel. All rights reserved. </span>
      </div>
    </footer>
  )
}

export default Footer