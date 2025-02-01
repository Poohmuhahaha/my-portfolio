import React from 'react';

const MyExperience = () => {
  return (
    <div className=" bg-[#7A5653] min-h-full p-20 font-inter2 text-[#1F3328] " >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 items-center tracking-wider">  
            <div className='rounded-3xl bg-[#D9D9D9] mx-10 pt-2 pb-10 mb-20 px-2 shadow-2xl drop-shadow-2xl' > 
             <h3 className='bg-[#1F3328] rounded-2xl p-4 text-center text-[#ffffff] font-inter text-2xl shadow-xl drop-shadow-xl'>
                Experience
             </h3>
             <div className='w-ful flex justify-center'>
                <img src="experience.png" alt="" className=' px-10 py-10 w-96 h-96 ' />
             </div>
                <h4 className='px-10 text-2xl font-bold leading-relaxed '>
                    Leagues of Code TH
                </h4>
                <ul className='text-lg px-10 leading-relaxed list-disc '>
                    <h5 className='font-bold pt-3'>Digital Marketing</h5> 
                    <li className='mx-5'>SEO</li>
                    <li className='mx-5'>UTM</li>
                    <li className='mx-5'>Content Creator</li>
                </ul>
                <ul className='text-lg px-10 leading-relaxed list-disc'>
                    <h5 className='font-bold pt-3'>Customer Relation (CR)</h5> 
                    <li className='mx-5'>Analyst the Customer Information</li>
                </ul>
                <ul className='text-lg px-10 leading-relaxed list-disc'>
                    <h5 className='font-bold pt-3'>Devolopment</h5> 
                    <li className='mx-5'>Discord bot For Gamification Design</li>
                </ul>
             </div>            
            
            <div className=' rounded-3xl bg-[#D9D9D9] mx-10 pt-2 pb-10 mb-20 px-2 shadow-2xl drop-shadow-2xl' > 
             <h4 className='bg-[#1F3328] rounded-2xl p-4 text-center text-[#ffffff] font-inter text-2xl shadow-xl drop-shadow-xl'>
                Skill
             </h4>
             <div className='w-ful flex justify-center'>
             <img src="skill.png" alt="" className=' px-10 py-10 w-96 h-96 ' />
             </div>
             <div> 
                <h4 className='px-10 text-2xl font-bold leading-relaxed'>
                Hard Skill
                </h4>
                <h4 className='text-lg pl-14 leading-relaxed'>
                    - Custumer Relation
                    <br />
                    - Development 
                    <p className='pl-5 leading-relaxed'>
                        - HTML, Css, Javascript
                        <br />
                        - MongoDB
                    </p>
                    - Digital Marketing (UTM, SEO)
                </h4>
                <br />
                <h4 className='px-10 text-2xl font-bold leading-relaxed'>
                    Soft Skill
                </h4>
                <p className='text-lg pl-14 leading-relaxed'>
                   - English Communocation
                </p>
                <br />
                <br />
             </div>

            {/* Project     */}
            </div>
            <div className=' rounded-3xl bg-[#D9D9D9] mx-10 pt-2 pb-10 mb-20 px-2 shadow-2xl drop-shadow-2xl' > 
             <h4 className='bg-[#1F3328] rounded-2xl p-4 text-center text-[#ffffff] font-inter text-2xl shadow-xl drop-shadow-xl'>
                Project
             </h4>
             <div className='w-ful flex justify-center'>
             <img src="project.png" alt="" className=' px-10 py-10 w-96 h-96 ' />
             </div>
                <h4 className='px-10 text-2xl font-bold leading-relaxed'>
                None
                </h4>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>   
        </div>
    </div>
  );
};

export default MyExperience;