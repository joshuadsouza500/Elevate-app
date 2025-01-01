import { TextReveal } from "../ui/TextReveal";

function AboutMe() {
  return (
    <>
      <div
        id="About"
        className="h-auto   pt-2 pb-10 xl:pt-10 xl:pb-20 flex items-center  flex-col gap-3 md:gap-y-5
      
    "
      >
        <div>
          <p className=" text-Purple max-md:text-sm font-medium hidden">
            {" "}
            * Who we are
          </p>
          <div className="flex items-center gap-x-1 text-xs md:text-sm font-medium  bg-Purple/5 px-2 md:px-3 py-1 rounded-full justify-center">
            <span className="size-1 animate-pulse rounded-full bg-indigo-700"></span>
            <p className=" text-Purple ">Who we are</p>
          </div>
        </div>
        <TextReveal
          text="We are a creative team that believes every design tells a story, and our job is to bring that story to life in the most impactful
            way."
          Colour="text-background2"
        />

        <p className="max-md:text-center text-background2 text-xl md:text-3xl 2xl:text-4xl w-[95%]  md:w-3/4 text-center font-medium text-pretty bg-red-400 hidden">
          We are a creative team that believes every design tells a story,
          <span className="text-background2/45 ">
            {" "}
            and our job is to bring that story to life in the most impactful
            way.
          </span>
        </p>
      </div>
    </>
  );
}

export default AboutMe;
