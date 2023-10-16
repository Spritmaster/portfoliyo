import React from 'react'
import reactIcon from '../assets/React-icon.png'
import jsIcon from '../assets/javascript-icon.png'
import redux from '../assets/redux.png'

const Skills = () => {
  
  return (
    <div id='skills' className='h-screen pt-[76px]  p-10 sm:p-20   align-elements '>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-center mt-[150px] lg:mt-0'>My Skills</h1>


      <div className='flex items-center lg:justify-between mt-5 flex-col md:flex-row gap-7 '>
        <div className='w-[270px] lg:w-[350px] bg-[#ff8707] skills-shadow rounded-2xl  flex items-center flex-col py-3'>
            <img src={reactIcon} alt="" className='w-[90px]  hover:scale-110 ' />
            <h3 className='text-center font-bold text-3xl mt-2'>React JS</h3>
            <div className="radial-progress mt-2 bg-[#0008a8] text-primary-content border-4 border-primary" style={{"--value":90}}>90%</div>
        </div>

        <div className='w-[270px]  lg:w-[350px] bg-[#ff8707] skills-shadow rounded-2xl  flex items-center flex-col py-3'>
            <img src={jsIcon} alt="" className='w-[80px]  hover:scale-110 ' />
            <h3 className='text-center font-bold text-3xl mt-2'>JavaScript</h3>
            <div className="radial-progress mt-2 bg-[#0008a8] text-primary-content border-4 border-primary" style={{"--value":84}}>84%</div>
        </div>
    
    <div className='w-[270px]  lg:w-[350px] bg-[#ff8707] skills-shadow rounded-2xl  flex items-center flex-col py-3'>
        <img src={redux} alt="" className='w-[80px]  hover:scale-110 ' />
            <h3 className='text-center font-bold text-3xl mt-2'>Redux Toolkit</h3>
            <div className="radial-progress mt-2 bg-[#0008a8] text-primary-content border-4 border-primary" style={{"--value":84}}>70%</div>
        </div>
      </div>

      <div className='mt-16 max-w-[400px]'>
       <div>
       <div className='flex justify-between font-bold text-[18px]'>
        <h4>HTML5</h4>
        <p>98%</p>
        </div>
      <progress className="progress progress-error max-w-[400px] " value="95" max="100"></progress>
       </div>

       <div>
       <div className='flex justify-between font-bold text-[18px]'>
        <h4>CSS , SASS</h4>
        <p>96%</p>
        </div>
      <progress className="progress progress-success max-w-[400px] " value="96" max="100"></progress>
       </div>

       <div>
       <div className='flex justify-between font-bold text-[18px]'>
        <h4>Tailwind CSS, Antdesign , Bootstrap</h4>
        <p>90%</p>
        </div>
      <progress className="progress progress-success max-w-[400px] " value="90" max="100"></progress>
       </div>

       <div>
       <div className='flex justify-between font-bold text-[18px]'>
        <h4>VSCode , Postman , Git, GitHub ,Netlify , Figma , Redux , React Rudux</h4>
        <p>80%</p>
        </div>
      <progress className="progress progress-warning max-w-[400px] " value="80" max="100"></progress>
       </div>
      </div>


    </div>
  )
}

export default Skills