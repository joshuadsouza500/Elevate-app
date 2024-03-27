
import Link from 'next/link'
import React from 'react'
import { MotionDiv } from "./MotionDiv";
function ContactMe(){
  return (
    <MotionDiv className='mt-20 lg:pt-10 pb-10 sticky  '
    initial = {{ opacity: 1, scale: 1 }}
    whileHover={{opacity: 1, scale:1.03}}
    transition={{duration: .3}}
    >
        <Link href='/contact' className=' font-Poppins text-background2 opacity-90 font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[150px] pt-4 md:pt-10 pb-16  ml-10 md:ml-20 lg:ml-28 hover:text-stone-80000 hover:opacity-70 text-center'>
             GET IN TOUCH
       </Link> 
    </MotionDiv>
  )
}

export default ContactMe   