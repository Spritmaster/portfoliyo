import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {ImExit} from 'react-icons/im'
import '../App.css';

const Header = () => {
  const [burger, setBurger] = useState('hidden');

 window.addEventListener('click', (e)=>{
    !e.target.className.includes('burger') ? setBurger('hidden'):null
  });
window.addEventListener('resize' , ()=>setBurger('hidden'))

  return (
    <div className='gradientClr fixed z-10 w-full'>
      <div className="align-elements py-4 flex justify-between">
        <h1 className='hidden md:block text-4xl font-bold text-[#fff]'><span className='text-[#000058] italic'>No</span>Dirbek</h1>
        <h1 className='block md:hidden text-4xl font-bold text-[#fff]'><span className='text-[#000058]'>N</span>D</h1>

        <nav className='hidden md:flex md:gap-3 lg:gap-5'>
          <a href="#home" className='nav-links text-[#fff] px-3 active:scale-125'>Home</a>
          <a href="#about" className='nav-links text-[#fff] px-3'>About</a>
          <a href='skills' className='nav-links text-[#fff] px-3'>Skills</a>
          <a href="#projects" className='nav-links text-[#fff] px-3'>Projects</a>
        </nav>

        <nav className='block md:hidden'>
          <GiHamburgerMenu className='text-[#fff] w-[40px] h-[40px]' onClick={() => { setBurger('flex') }} />
          <span className={`${burger} burger absolute top-0  h-screen flex flex-col items-center justify-between  py-10 w-[200px] bg-[#fff] right-0 burgerGradient`}>
            <nav className='flex flex-col items-center '>
              <a href="#home" className='nav-links  text-[#000] px-3 active:scale-125'>Home</a>
              <a href="#about" className='nav-links text-[#000] px-3'>About</a>
              <a href='skills' className='nav-links text-[#000] px-3'>Skills</a>
              <a href="#projects" className='nav-links text-[#000] px-3'>Projects</a>
            </nav>

            <ImExit className='w-[40px] h-[40px] text-[#fff]' onClick={()=>setBurger('hidden')}/>
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Header;