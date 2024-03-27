
import Image from 'next/image'
import React from 'react'
import {Motionh1 , MotionDiv } from "./MotionDiv";

  function Reviews()  {
    return (
   <div id="Reviews"  className='top-10' >
        <div>
            <Motionh1 className='font-Poppins text-stone-950 opacity-90 font-bold text-5xl sm:text-6xl lg:text-7xl pt-6 md:pt-12 lg:pt-20 lg:pb-20 pb-16  ml-10 md:ml-20 lg:ml-32 sm:w-3/4  lg:w-3/5 md:leading-relaxed pr-2'
               initial = {{opacity :0 , y: 100}}
               whileInView = {{opacity:1 ,  y: 0}}
               viewport={{once:true}}
               transition={{delay:0.3, duration: 0.6 ,ease:  'easeIn', y:{type:"spring" , stiffness:60},opacity:{duration:0.6}  }}
                >
               What Our Clients Say About Us
            </Motionh1>
        </div>
        <div className='flex flex-col justify-between items-center  gap-10  h-dvh  relative'>
            <MotionDiv className='bg-white shadow-xl w-[80%] rounded-xl sticky top-[25%] mt-10'
              initial = {{opacity :0 ,y: 100}}
              whileInView = {{opacity:1,  y: 0}}
              viewport={{once:true}}
              transition={{delay:0.2, duration:0.6 ,ease:  'easeIn', y:{type:"spring" , stiffness:60},opacity:{duration:0.6}  }}
            >
                <p className='hidden md:block opacity-80 font-semibold text-sm w-10/12 lg:w-9/12 my-4 p-5 md:ml-6'>
                I had the pleasure of working with Elevate on a recent marketing campaign and I was thoroughly impressed with their level of creativity, professionalism, and attention to detail.The team at Elevate went above and beyond to ensure our campaign was a success, resulting in increased brand awareness and customer engagement. I highly recommend Elevate to any business looking to take their marketing efforts to the next level.
                </p>
                <p className='md:hidden opacity-80 font-semibold text-xs w-11/12  my-4 p-5'>The team at Elevate went above and beyond to ensure our campaign was a success, resulting in increased brand awareness and customer engagement. I highly recommend Elevate to any business looking to take their marketing efforts to the next level.</p> 
               
                <div className='flex md:ml-6'>
                <Image
                    src="/Review1.webp"
                    alt="avatar"
                    width={500}
                    height={500}
                    className='w-12 md:w-16 rounded-full ml-4 mb-4'
                    />
                  <div className='w-[50%] font-Poppins text-xs ml-3 opacity-70 mt-2'>
                  <h6>Daniel Martin</h6>
                    <h6>Star Solutions</h6>
                    </div>
                  </div>
            </MotionDiv>

            <MotionDiv className='bg-white shadow-xl w-[80%] rounded-xl sticky  ' >
                <p className='hidden md:block opacity-80 font-semibold text-sm w-10/12 lg:w-9/12 my-4 p-5 md:ml-6'>
                I had the pleasure of working with Elevate on a recent marketing campaign and I was thoroughly impressed with their level of creativity, professionalism, and attention to detail.The team at Elevate went above and beyond to ensure our campaign was a success, resulting in increased brand awareness and customer engagement. I highly recommend Elevate to any business looking to take their marketing efforts to the next level.
                </p>
                <p className='md:hidden opacity-80 font-semibold text-xs w-11/12  my-4 p-5'>The team at Elevate went above and beyond to ensure our campaign was a success, resulting in increased brand awareness and customer engagement. I highly recommend Elevate to any business looking to take their marketing efforts to the next level.</p> 
               
                <div className='flex md:ml-6'>
                <Image
                    src="/Review2.webp"
                    alt="avatar"
                    width={500}
                    height={300}
                    className='w-12 md:w-16 rounded-full ml-4 mb-4'
                    />
                  <div className='w-[50%] font-Poppins text-xs ml-3 opacity-70 mt-2'>
                  <h6 >Novac Zoro</h6>
                    <h6>Home Center</h6>
                    </div>
                  </div>
            </MotionDiv> 
           
        
        
        </div>

    </div>
  )
}

export default Reviews