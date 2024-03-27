
import Link from 'next/link'
import React from 'react'
import { MotionDiv } from "./MotionDiv";
function ContactMe(){
  return (
    <MotionDiv className='mt-20 lg:pt-10 pb-10 sticky'
    initial = {{ opacity: 1, scale: 1 }}
    whileHover={{opacity: 1, scale:1.03}}
    transition={{duration: .3}}
    >
        <Link href='/contact'>
           <h1 className="font-Poppins text-background2 text-opacity-90 font-bold text-[44px] sm:text-6xl md:text-[84px] lg:text-[150px] pt-4 md:pt-10 pb-16  text-center ml-2 md:ml-10 hover:text-stone-800 hover:opacity-70 w-[90%] ">  GET IN TOUCH </h1>
       </Link> 
    </MotionDiv>
  )
}

export default ContactMe   