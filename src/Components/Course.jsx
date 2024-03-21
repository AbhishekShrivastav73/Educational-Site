import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Cards from './Cards'

const Course = ({courses,heros}) => {
  return (
    <>
    <div className='w-full  bg-zinc-200 text-black'>
        
    <Navbar/>
    {heros.map((item) => {
        if (item.type === "course") {
          return (
            <Hero text={item.mainTxt} btn={item.btnTxt}/>
          );
        }
        return null;
      })}
  
   
    <div className='flex gap-8 flex-wrap items-center w-full justify-center pt-8 pb-6'>
   
      <Cards courses={courses} />
    </div>
    </div>
    </>
  )
}

export default Course