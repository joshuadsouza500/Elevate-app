import React from "react";
import { MotionDiv, Motionh1 } from "../MotionDiv";
import { title } from "process";
import Service2 from "../ui/Service2";

const service = [
  {
    id: 0,
    title: "Web  Branding",
    content:
      "From custom web applications to e-commerce solutions, we create digital experiences that drive results.",
    img: "/Review1.webp",
  },
  {
    id: 1,
    title: "Media  Developement",
    content:
      "From custom web applications to e-commerce solutions, we create digital experiences that drive results.",
    img: "/Home/home2.jpeg",
  },
  {
    id: 2,
    title: "SEO",
    content:
      "Implementing proven SEO strategies to boost your websites ranking on search engines and drive organic traffic.",
    img: "/Litlem/lit1.jpeg",
  },
  {
    id: 3,
    title: "Production",
    content:
      "From custom web applications to e-commerce solutions, we create digital experiences that drive results.",
    img: "/Macy/macy.jpeg",
  },
];

function Services() {
  return (
    <div id="Services" className=" h-dvh">
      <div className="pt-1 sm:flex flex-col ml-10 sm:ml-20 lg:ml-32">
        <h1 className="font-Poppins text-background text-opacity-90 font-bold text-5xl sm:text-6xl lg:text-7xl pt-6 pb-16 ">
          What We Do
        </h1>

        <ul className="w-full  text-4xl text-black h-full  ">
          {service.map((service) => (
            <Service2
              key={service.id}
              id={service.id}
              title={service.title}
              Img={service.img}
              content={service.content}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;
