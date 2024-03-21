import React from 'react'
import { useForm } from 'react-hook-form';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {register,handleSubmit} =  useForm();
    console.log(register());
    const navigate = useNavigate();
    const handleAccount = () => {
        navigate('/signup');
    }
  return (
    <>
    <div className='flex bg-zinc-200 items-center justify-center'>

  
    <div className='w-full md:w-1/3 h-screen flex flex-col justify-center px-5 bg-zinc-200 text-black' >
        <h2  className= 'text-2xl font-bold text-[#8B62FC]'>Front-End Mastery</h2>
        <div className='mt-4'>
            <h3 className='text-4xl font-bold w-full '>Log in to your Account</h3>
            <p className=' mt-2 text-zinc-400 text-lg'>Welcome back! Select method of log in:</p>
        </div>
        <div className='flex items-center mt-4 gap-2 justify-center'>
            <button className='w-1/2  md:w-1/3 flex items-center gap-2 text-xl border border-black justify-center py-2 rounded-md'><FcGoogle />Google</button>
            <button className=' w-1/2 md:w-1/3 flex items-center gap-2 text-xl border border-black justify-center py-2 rounded-md'> <FaFacebook/> Facebook</button>
        </div>
        <div className='w-full border  border-zinc-500 mt-6 relative'>
            <h6 className='absolute -top-4 bg-zinc-200 px-2 left-1/2 -translate-x-[50%] text-center'>or continue with email</h6>
        </div>
        <form className='mt-6 flex flex-col gap-2 ' onSubmit={handleSubmit(data => {
            navigate('/home')
        })}>
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
            <button type='submit' className='w-full py-3 bg-[#8B62FC] text-white text-lg font-bold rounded-md'>Login</button>
        </form>

        <h6 className='mt-5 text-lg'>Don't have an account? <span onClick={handleAccount}  className='cursor-pointer text-xl text-[#8B62FC] font-bold'>Create an account</span></h6>
    </div>
    {/* <img className='hidden md:block md:w-1/2 mix-blend-overlay' src="https://img.freepik.com/premium-vector/sign-page-illustration-design-template_559664-157.jpg?w=740" alt="" /> */}
    </div>
    </>
  )
}

export default Login