function AboutMe() {
  return (
    <>
      <div
        id="About"
        className="h-auto  py-16 xl:py-20 flex items-center  flex-col gap-3 md:gap-y-5
      
    "
      >
        <div>
          <p className="capitalize text-Purple max-md:text-sm font-medium">
            {" "}
            &#65290; who we are
          </p>
        </div>
        <p className="max-md:text-center text-background2 text-xl md:text-3xl 2xl:text-4xl w-[95%]  md:w-3/4 text-center font-medium text-pretty ">
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
