
import React from 'react'
import Image from 'next/image'
import {Motionh1 , MotionDiv } from "./MotionDiv";


function Work() {

  const handleNavigation = (event: React.MouseEvent , slideId:string) => {
    event.preventDefault();
    const slide = document.getElementById(slideId);
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div id="Work"  className='h-dvh'>
         <div className='lg:mb-5'>
             <Motionh1 className='font-Poppins text-stone-950 text-opacity-90  font-bold text-5xl sm:text-6xl lg:text-7xl pt-10 md:pt-24 lg:pt-32 lg:pb-24 pb-16  ml-10 md:ml-20 lg:ml-32'
             initial = {{opacity :0 , y: 100}}
             whileInView = {{opacity:1, y: 0}}
              viewport={{once:true}}
              transition={{delay:0.4, duration:0.6 ,ease:  'easeIn', y:{type:"spring" , stiffness:60},opacity:{duration:0.6}  }}
             >
                Our Work
             </Motionh1>
          </div>
    

      <div className='flex justify-center'>
       <div className="carousel w-[80%] rounded-lg shadow-xl">

        <div id="slide1" className="carousel-item relative w-full flex flex-col justify-between items-center md:flex md:flex-row py-5">
            <div className='flex flex-col justify-start  md:ml-16 lg:ml-20  pt-4 font-Poppins text-background2  '>  
                  <h3 className=' opacity-90 font-bold text-4xl mt-4  md:mb-4 ' >RealMe.</h3>
                  <p className='hidden md:block opacity-80 font-semibold text-sm leading-tight w-10/12  mb-4'>
                  We ran a promotional campaign for RealMe.  Our strategic approach resulted in increased brand awareness and customer engagement, driving sales and ultimately helping Realme achieve their marketing objectives.
                  </p>
              </div>                
                  <Image
                  src="/Realme.png"
                  alt="Picture work done" 
                  width={300}
                  height={200}
                  />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle" onClick={(e) => handleNavigation(e, "slide3")}>❮</a>
                   <a href="#slide2" className="btn btn-circle" onClick={(e) => handleNavigation(e, "slide2")}>❯</a>
               
               </div>
        </div> 

        <div id="slide2" className="carousel-item relative w-full flex flex-col justify-between items-center md:flex md:flex-row py-5">
          <div className='flex flex-col justify-start md:ml-16 lg:ml-20 pt-4 font-Poppins text-background2  '>                 
             
                <h3 className=' opacity-90 font-bold text-4xl mt-4  md:mb-4 ' >Star Solutions</h3>
                <p className='hidden md:block opacity-80 font-semibold text-sm leading-snug w-10/12 lg:w-10/12 mb-4 mt-4'>
                We had the opportunity to create a sleek and user-friendly responsive website for Star Solutions. By utilizing modern design elements and innovative technology, we were able to highlight their services and products in a visually appealing way.
                </p>
         </div>

                    <Image
                    src="/screen1.png"
                    alt="Picture work done" 
                    width={300}
                    height={200}
                    />               
             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 opacity-80">
                
                 <a href="#slide1" className="btn btn-circle" onClick={(e) => handleNavigation(e, "slide1")}>❮</a>
                <a href="#slide3" className="btn btn-circle" onClick={(e) => handleNavigation(e, "slide3")}>❯</a>
            </div>
        </div> 
       
         <div id="slide3" className="carousel-item relative w-full flex flex-col items-center">
         <div className='flex flex-col justify-start md:ml-16 lg:ml-20 pt-4 font-Poppins text-background2  '>      
         <h3 className='opacity-90 font-bold text-4xl pt-4' >Home Center</h3> </div>
                    <Image
                    src="/Group3.png"
                    alt="Picture work done" 
                    fill
                    className='object-contain '                    
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      
                    <a href="#slide2" className="btn btn-circle" onClick={(e) => handleNavigation(e, "slide2")}>❮</a>
                   <a href="#slide1" className="btn btn-circle" onClick={(e) => handleNavigation(e, "slide1")}>❯</a>
                    </div>
         </div> 
                    
       </div>

     </div>

   </div>
        
    
  )
}

export default Work


