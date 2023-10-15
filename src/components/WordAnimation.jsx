import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {BsYoutube ,BsTwitter,BsTelegram ,BsInstagram} from 'react-icons/bs'
import '../App.css'
const WordAnimation = () => {
  return (
    <div>
      <span className=' fixed top-[110px] p-3 pl-16 left-[-60px] flex gap-5 flex-col rounded-[40px] bg-[#fff]   z-30 socialMedia'>
        <BsYoutube className='text-[#ff0000] w-10 h-10  hover:scale-125'/>
        <BsTwitter className='text-[#1522b0] w-10 h-10  hover:scale-125'/>
        <BsTelegram className='text-[#2362aa] w-10 h-10 bg-[#fff] rounded-full hover:scale-125'/>
        <BsInstagram className='text-[#ff8818] w-10 h-10  hover:scale-125'/>
      </span>
    <TypeAnimation
             sequence={[
               // Same substring at the start will only be typed out once, initially
               ' Frontend Developer',
               1000, // wait 1s before replacing "Mice" with "Hamsters"
               'Student',
               1000,
               'Programmer',
               1000,
               
             ]}
             wrapper="span"
             speed={50}
             className=' font-semibold  sm:font-bold text-[29px]  sm:text-4xl text-[#fff]'
             repeat={Infinity}
           />
       </div>
  )
}

export default WordAnimation