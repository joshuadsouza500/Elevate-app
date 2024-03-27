

import Image from "next/image";
import {Motionh1 ,MotionP, MotionB, MotionDiv } from "./MotionDiv";

 function AboutMe()  {
  



  return (
    <>
      <div id="About" className="h-dvh sm:flex justify-between  sm:gap-1 pt-20 sm:pt-40 mb-20
      
    " >
  
        <div className="flex justify-center items-start  flex-col sm:justify-start ml-10 sm:ml-20 lg:ml-32 gap-1 ">
          <Motionh1 className="text-5xl md:text-6xl lg:text-7xl text-background opacity-90 font-bold font-Poppins pt-10 mb-10"  initial={{opacity:0 , x: -80}}
          whileInView = {{opacity:1,  x: 0}}
          viewport={{once:true}}
          transition={{delay:0.2, duration:0.6 ,ease:  'easeIn', x:{type:"spring" , stiffness:60},opacity:{duration:0.6}  }}>
            Who we are
          </Motionh1>
          <MotionP className="opacity-70 text-background text-xs  md:text-sm sm:leading-4 font-semibold font-Poppins capitalize md:leading-normal w-8/12 sm:w-11/12  lg:w-9/12 text-left mb-6 ml-1"
          initial={{opacity:0 , x: -50}}
          whileInView = {{opacity:1,  x: 0}}
          viewport={{once:true}}
          transition={{delay:0.2, duration:0.5 , ease: 'easeIn' , x:{type:"spring" , stiffness:60},opacity:{duration:0.6}  }}>
          
            {" "}
            Being one of the regions first digital marketing agency, we work
            tirelessly to elevate our clients brands and drive tangible results.
            Our integrated approach combines data-driven insights, and
            personalized solutions to deliver bespoke marketing campaigns that
            resonate with target audiences and achieve business goals.{" "}
          </MotionP>

          <MotionB className="btn bg-stone-900 text-background hover:bg-background2 hover:opacity-90 w-32 text-xs   shadow border border-zinc-600 ml-2 "
          initial={{opacity:0 , x: -50}}
          whileInView = {{opacity:1,  x: 0}}
          viewport={{once:true}}
          transition={{delay:0.2, duration:0.4 ,ease: 'easeIn' ,x:{type:"spring" , stiffness:60} ,opacity:{duration:0.6} }}
          >
            {`We're hiring`}
            </MotionB>
        </div>

        <MotionDiv className=" ml-10 mr-10  lg:mr-12 lg:ml-2 mt-10 sm:mt-20 lg:mt-10 w-4/5 md:w-full sm:h-2/5 md:h-3/5 lg:h-4/5 rounded-2xl "
        initial={{opacity:0 , x: 100}}
        whileInView = {{opacity:1,  x: 0}}
        viewport={{once:true}}
        transition={{delay:0.2, duration:0.7 ,ease:  'easeIn', x:{type:"spring" , stiffness:60},opacity:{duration:0.6}  }}
        > 
        <Image
          src="/business-team.jpg"
          width={500}
          height={500}
          alt="Picture of team"
          className="rounded-xl w-full h-full  " />
         </MotionDiv>
        
        </div>
     
    </>
  );
};

export default AboutMe;
