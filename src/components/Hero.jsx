import React from 'react'
import image from '../assets/work.jpg'
import { Parallax } from 'react-parallax';
import WordAnimation from './WordAnimation';

const Hero = () => {
  return (
    <div>
     <Parallax
        bgImage="https://cdn.wallpapersafari.com/80/98/GZprTy.jpg"
        className='w-full '
        renderLayer={percentage => (
            <div id='home'/>)}>

<div className='flex justify-between flex-col sm:flex-row align-elements items-center h-screen p-16 pt-24 sm:pt-[72px] sm:px-10'>

    {/* Hero Name */}
        
        <div className='text-[#99e9e5]'>
            <p className='text-2xl sm:text-4xl font-semibold'> Hello I'm </p>
            <h1 className='text-3xl  sm:text-6xl  font-semibold sm:font-bold '>Ergashov Nodirbek </h1>
            <p className='text-2xl sm:text-4xl font-semibold mt-3'> And I'm a </p>
            <dd className='mt-3'><WordAnimation/> </dd>
        </div>

    {/*Hero img  */}
        <div className="avatar">

           <div className="w-[280px] sm:w-[350px] lg:w-[450px] mask mask-hexagon">
               <img src={image} alt="nodirbek" />
           </div>

         </div>
      </div>
   
    </Parallax>
   
    </div>
  )
}

export default Hero