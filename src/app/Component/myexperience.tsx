import React from 'react';

const MyExperience = () => {
   return (
      <div className="bg-[#7A5653] min-h-full p-4 sm:p-6 md:p-12 lg:p-20 font-inter2 text-[#1F3328] ">
         <h2 id='experience' className='min-h-full bg-[#7A5653] text-white pt-40 pb-36 text-center text-4xl sm:text-5xl md:text-6xl font-inter2 font-bold tracking-wider justify-items-center'>
            EXPERIENCE AND PROJECT
         </h2>
         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch tracking-wider pb-20">  
            {/* Experience Card */}
            <a href="#work">
               <div className="rounded-3xl bg-[#D9D9D9] p-4 h-full flex flex-col shadow-2xl drop-shadow-2xl transform transition-all duration-300 hover:-translate-y-2 pb-10 mx-10"> 
                  <h3 className="bg-[#1F3328] rounded-2xl p-3 text-center text-white font-inter text-lg sm:text-xl md:text-2xl shadow-xl drop-shadow-xl mb-6 ">
                     WORK
                  </h3>
                  <div className="w-full flex justify-center flex-shrink-0">
                     <img src="Experience.png" alt="Experience icon" className="w-full h-32 sm:h-36 md:h-40 object-contain" />
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed pt-5">
                     Description:
                     <span className='font-light'>
                        <br />My university experiences and the projects I have worked on.
                     </span>
                  </p>
               </div>            
            </a>
            
            {/* Skills Card */}
            <a href="#skill">
               <div className="rounded-3xl bg-[#D9D9D9] p-4 h-full flex flex-col shadow-2xl drop-shadow-2xl transform transition-all duration-300 hover:-translate-y-2 pb-10 mx-10"> 
                  <h3 className="bg-[#1F3328] rounded-2xl p-3 text-center text-white font-inter text-lg sm:text-xl md:text-2xl shadow-xl drop-shadow-xl mb-6 ">
                     SKILL
                  </h3>
                  <div className="w-full flex justify-center flex-shrink-0">
                     <img src="Skill.png" alt="Skills icon" className="w-full h-32 sm:h-36 md:h-40 object-contain" />
                  </div>
                  <div className="flex-grow px-4">
                     <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed pt-5">
                        Description:
                        <span className='font-light'>
                           <br />Skills I have learned from classes and self-study.
                        </span>
                     </p>
                  </div>
               </div>
            </a>

            {/* Project Card */}
            <a href="#project">
               <div className="rounded-3xl bg-[#D9D9D9] p-4 h-full flex flex-col shadow-2xl drop-shadow-2xl transform transition-all duration-300 hover:-translate-y-2 pb-10 mx-10"> 
                  <h3 className="bg-[#1F3328] rounded-2xl p-3 text-center text-white font-inter text-lg sm:text-xl md:text-2xl shadow-xl drop-shadow-xl mb-6">
                     PROJECT
                  </h3>
                  <div className="w-full flex justify-center flex-shrink-0">
                     <img src="Project.png" alt="Project icon" className="w-full h-32 sm:h-36 md:h-40 object-contain" />
                  </div>
                  <div className="flex-grow px-4 ">
                     <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed pt-5">
                        Description:
                        <span className='font-light '>
                           <br />Projects I have worked on, whether required or just things I wanted to do.
                        </span>
                     </p>
                  </div>
               </div>   
            </a>
         </div>
      </div>
   );
};

export default MyExperience;