import React from 'react'
import { useForm } from 'react-hook-form';
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";

const Signup = ({getUsers}) => {
    const {register,handleSubmit} = useForm()
    const navigate = useNavigate();
    const handleLogin =()=>{
        navigate('/');
    }
   
  return (
    <>
   <div className='flex bg-zinc-200 items-center justify-center'>

  
<div className='w-full md:w-1/3 h-screen flex flex-col justify-center px-5 bg-zinc-200 text-black' >
    <h2  className= 'text-2xl font-bold text-[#8B62FC]'>Front-End Mastery</h2>
    <div className='mt-4'>
        <h3 className='text-4xl font-bold w-full '>Sign up</h3>
        <p className=' mt-2 text-zinc-800 text-lg'>Start your Web Development Journey Now!</p>
    </div>
    
    <div className='w-full border  border-zinc-500 mt-6 relative'>
        <h6 className='absolute -top-4 bg-zinc-200 px-2 left-1/2 -translate-x-[50%]'>Enter your details</h6>
    </div>
    <form action="" className='mt-6 flex flex-col gap-2' onSubmit={handleSubmit((data)=> {
        getUsers(data);
        navigate('/home')
        })}>
        <div className='w-full h-12 bg-white relative flex items-center overfloe-hidden rounded-md'>
            <span className='px-2'>
            <IoPersonOutline />
                </span>
            <input {...register('name')} type="text" placeholder='Name' className='absolute w-full h-full top-0 bg-transparent px-8' />
        </div>
        <div className='w-full h-12 bg-white relative flex items-center overfloe-hidden rounded-md'>
            <span className='px-2'>
                < CiMail/>
                </span>
            <input {...register('email')} type="email" placeholder='Email' className='absolute w-full h-full top-0 bg-transparent px-8' />
        </div>
        <div className='w-full h-12 bg-white relative flex items-center overfloe-hidden rounded-md'>
            <span className='px-2'>
            <RiLockPasswordLine />
                </span>
            <input {...register('password')} type="password" placeholder='Password' className='absolute w-full h-full top-0 bg-transparent px-8' />
        </div>
        <div className="">
            <input type="checkbox" name="reameberme" id="remember" /> Remember Me
        </div>
        <button className='w-full py-3 bg-[#8B62FC] text-white text-lg font-bold rounded-md'>Sign Up</button>
    </form>

    <h6 className='mt-5 text-lg'>Already have an account? <span onClick={handleLogin} className='cursor-pointer text-xl text-[#8B62FC] font-bold'>Login</span></h6>
</div>
{/* <img className='hidden md:block md:w-1/2 mix-blend-overlay' src="https://img.freepik.com/premium-vector/sign-page-illustration-design-template_559664-157.jpg?w=740" alt="" /> */}
</div>
    </>
  )
}

export default Signup