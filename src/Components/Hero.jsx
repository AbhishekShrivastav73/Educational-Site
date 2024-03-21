import React from 'react'

const Hero = ({text,btn,exploreCourse}) => {
  return (
    <div className='w-full flex flex-col items-center mt-5' >
        <h1 className='text-black text-lg uppercase tracking-[2vw] font-bold'>Front-End Mastery</h1>
        <h2 className='text-[#8862fc] text-5xl font-bold tracking-[2.7vw] md:text-8xl'>{text}</h2>
        <button onClick={exploreCourse} className='bg-[#8862fc] font-semibold px-4 py-2 rounded-md mt-6 text-white'>{btn}</button>
    </div>
  )
}

export default Hero