
import React from 'react'
import {Motionh1 , MotionDiv } from "./MotionDiv";
function Services() {
  return (
 <div id="Services"  className=' h-dvh'>
     <div className='pt-1 sm:flex flex-col ml-10 sm:ml-20 lg:ml-32'>
          <Motionh1 className='font-Poppins text-background text-opacity-90 font-bold text-5xl sm:text-6xl lg:text-7xl pt-6 pb-16 '
            initial={{opacity:0 , x: -10}}
            whileInView = {{opacity:1,  x: 0}}
            viewport={{once:true}}
            transition ={{delay:0.2, duration:0.4 ,ease:'easeIn', x:{type:"spring" , stiffness:100},opacity:{duration:0.6}  }}
              >
            What We Do</Motionh1>

       <div className='flex flex-col gap-5 w-10/12 sm:w-8/12 lg:w-8/12  text-background font-Poppins '>

            <MotionDiv className="collapse collapse-arrow   rounded-2xl shadow border border-zinc-600 "
            initial={{opacity:0 , y: -50}}
            whileInView = {{opacity: 1 , y: -1}}
            viewport={{once:true}}
            transition={{delay:0.2, duration:0.5, y:{type:"spring", stiffness:60}, ease: "easeIn"  }}
            >
              <input type="radio" name="my-accordion-2"         defaultChecked    /> 
              <div className="collapse-title text-2xl font-light opacity-80">
              Web Developement 
              </div>
              <div className="collapse-content opacity-60 font-medium text-xs sm:text-sm"> 
                      <p>From custom web applications to e-commerce solutions, we create digital experiences that drive results.</p>
                  </div>
            </MotionDiv>

            <MotionDiv className="collapse collapse-arrow   rounded-2xl shadow border border-zinc-600 "
               initial={{opacity:0 , y: -50}}
               whileInView = {{opacity: 1 , y: -1}}
               viewport={{once:true}}
               transition={{delay:0.3, duration:0.5, y:{type:"spring"}, ease: "easeIn"  }}
                 >
                <input type="radio" name="my-accordion-2"            /> 
                        <div className="collapse-title text-2xl font-light opacity-80">
                        Web Design 
                        </div>
                        <div className="collapse-content opacity-60 font-medium text-xs sm:text-sm"> 
                                <p>From wireframing to responsive design, we craft websites that make a lasting impression and enhance user experience.</p>
                        </div>
              </MotionDiv>

              <MotionDiv className="collapse collapse-arrow   rounded-2xl shadow border border-zinc-600 "
                initial={{opacity:0 , y: -10}}
                whileInView= {{opacity: 1 , y: -1}}
                viewport={{once:true}}
                transition={{delay:0.4, duration:0.6, y:{type:"spring"}, ease: "easeIn"  }}
                >
                <input type="radio" name="my-accordion-2"            /> 
                   <div className="collapse-title text-2xl font-light opacity-80">
                  Search Engine Optimization
                  </div>
                  <div className="collapse-content opacity-60 font-medium text-xs sm:text-sm"> 
                   <p>Implementing proven SEO strategies to boost your {`website's`} ranking on search engines and drive organic traffic.</p>
                   </div>
                </MotionDiv>
                 <MotionDiv className="collapse collapse-arrow   rounded-2xl shadow border border-zinc-600 "
                    initial={{opacity:0 , y: -50}}
                    whileInView= {{opacity: 1 , y: 0}}
                    viewport={{once:true}}
                    transition={{delay:0.6, duration:0.5, y:{type:"spring"}, ease: "easeIn"  }}
                    >
                     <input type="radio" name="my-accordion-2"          /> 
                    <div className="collapse-title text-2xl font-light opacity-80">
                    Social Media Marketing 
                    </div>
                     <div className="collapse-content opacity-60 font-medium text-xs sm:text-sm"> 
                      <p>Tailored social media marketing strategies to help you establish a strong online presence and engage with your target audience effectively.</p>
                      </div>
                   </MotionDiv>
                    
        </div>
      
      </div>

   </div>
  )
}

export default Services