import React from 'react'
import hero from '../assets/work.jpg'
import iteach from '../assets/iteach.jpeg'
import najot from "../assets/najotta'lim.jpeg"

const About = () => {
  return (
    <div  id='about' className='h-screen pt-[72px] p-10 sm:p-20 align-elements'>
         
    <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-center z-10  '>About Me</h1>  
    
    <div className='flex items-center justify-between flex-col lg:flex-row gap-10 pt-10 sm:pt-20'>
        {/* My img */}
         <img src={hero} alt="" className='w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] 
         lg:w-[400px] lg:h-[400px] object-cover rounded-[50%] aboutHero'/>

        {/* description */}
         <div>
          <p className='max-w-[415px] text-2xl sm:font-semibold font-normal text-center lg:text-start'>
           Hello, my full name is Ergashov Nodirbek. I was born on May 11, 2005, in the city of Fergana.
           I want to learn <span className='text-[#ff9849] font-bold'>Frontend field 2023  "Najot Ta'lim"</span>
           <br />I started studying at the educational center
          </p>

          <div className='flex flex-col gap-5 mt-4'>
          <span className='flex items-center gap-5'>
            <img className='rounded-full ' src={iteach} alt='iteach' width={80}/>
            <div>
            <p className='text-2xl font-bold text-[#ff4646] border-b-solid border-b-[3px] border-b-[#ff8902]'>2022</p>
            <p className='font-bold text-2xl uppercase mt-2'>Iteach Academy</p>
            </div>
          </span>
          <span className='flex items-center gap-5'>
            <img  className='rounded-full border-solid border-[2px] border-[#000]' src={najot} alt='najot-talim' width={80}/>
            <div>
            <p className='text-2xl font-bold text-[#ff4646] border-b-solid border-b-[3px] border-b-[#ff8902]'>2023</p>
            <p className='font-bold text-2xl uppercase mt-2'>Najot Ta'lim</p>
            </div>
          </span>
          </div>
        
         </div>
    </div>
      
    
   
    </div>
  )
}

export default About