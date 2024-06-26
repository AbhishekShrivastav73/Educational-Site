
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Cards = ({courses}) => {
   
  return (
   <>
        {courses.map((items,index)=>{
            return (
                <div className='w-72 md:w-64 border border-black  bg-zinc-100 rounded-lg overflow-hidden p-2'>
                <div className="logo h-32 bg-zinc-700 overflow-hidden rounded-md">
                    <img className='w-full h-full object-cover'  src={items.img} alt="" />
                </div>
                <h4 className='font-bold text-lg mt-1'>{items.name}</h4>
                <p className='text-[#8862fc] font-semibold mt-1 mb-2'>{items.type}</p>
                <div className='w-full flex items-center justify-between text-white bg-[#8862fc] px-2 py-3 text-md font-semibold'>
                    <h6>Language :</h6>
                    <p>{items.language}</p>
                </div>
                <p className={`${items.beginner ? 'text-green-400' : 'text-red-400'}`}>{items.beginner ? 'Beginner Friendly' : 'Intermediate Level'}</p>
                <Link className='bg-[#8862fc] text-white px-4 py-1 mt-2' to={`/course/${items.name}`}>Explore</Link>
            </div>
            )
        })}
       
   </>
    
  )
}

export default Cards