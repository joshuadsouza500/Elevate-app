import Link from 'next/link'
import React from 'react'
function page(){
  return (
    <div className='bg-background h-dvh flex flex-col justify-center item-start pt-20 md:pt-28'>
        <div>
        <Link href='/' className=" btn btn-circle hover:opacity-50 ml-6 md:ml-10">❮  </Link> 
        <h1 className='font-Poppins text-stone-950 opacity-90 font-bold text-5xl sm:text-6xl lg:text-7xl pt-4 md:pt-6 pb-16  ml-10 md:ml-20  sm:w-3/4 lg:w-3/5'>Get In Touch With Us</h1>
        </div>
    <div className='h-dvh ml-10 md:ml-20 flex flex-col gap-5 pb-10'>
    <input type="text" placeholder="Enter Email" className="input input-bordered w-[60%] sm-w-[50%] md:w-[30%] h-[10%] shadow-md " />
    <input type="text" placeholder="Leave a message here" className="input input-bordered w-[85%] md:w-[70%] h-2/5 lg:h-3/5 shadow-md" />
    <button className='btn w-32 bg-background2 opacity-80 text-white '>Submit</button>
    </div>
    </div>
  )
}

export default page