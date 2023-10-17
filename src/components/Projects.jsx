import React from 'react';
import { Plinks } from '../data/projectsLink';
import '../App.css'
import {BsGithub} from 'react-icons/bs'

const Projects = () => {
  console.log(Plinks);

  return (
    <div id='projects' className='h-screen pt-20 p-10 sm:p-20 align-elements '>
      <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-center z-10 mt-[600px] mb-20 lg:mt-0'>Projects</h1>

     <div className='flex flex-col  items-center sm:grid  lg:grid-cols-2 gap-10  pb-[40px]'>
     {Plinks.map((link) => {
        const { id, title, img, gitHub, Netlify } = link;

        return (
          <div key={id}  className=''>
            <h3 className='text-2xl sm:text-3xl font-bold inline-block p-3 w-full text-center sm:text-start'>{title}</h3>
            <div className='relative projects__box overflow-hidden projects-shadow rounded-[10px]'>
              <img src={img} alt={title} className='scale-110 sm:scale-100  '/>

               <span className='projects__box-links absolute  w-full h-full flex justify-center top-[-100%] items-center  bg-[#a35bf7ae] flex-col gap-3 text-[#fff]'>
                 <a href={gitHub} className='font-bold text-2xl flex items-center gap-3 '><BsGithub className='w-10 h-10'/> GitHub Link</a>
      
                 <a href={Netlify} className='font-bold text-2xl flex items-center gap-3 '> <img src="./src/assets/netlify.png" alt="" width={40} />  Netlify Link</a>
               </span>
            </div>

            
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default Projects;