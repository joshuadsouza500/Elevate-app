import React from "react";
import { MotionDiv, Motionh1 } from "../MotionDiv";
import { title } from "process";
import Service2 from "../ui/Service2";
import ServiceSmall from "../ui/ServiceSmall";

const service = [
  {
    id: 0,
    title: "Logo & Branding",
    content:
      "Shape your brand's identity with  logos and cohesive branding that communicates your values and sets you apart.",
    img: "/Happylfe/happyl.jpeg",
  },
  {
    id: 1,
    title: " App Developement",
    content:
      "From custom web applications to ecommerce solutions, we create digital experiences that drive results.",
    img: "/Litlem/lit1.jpeg",
  },
  {
    id: 2,
    title: "SEO",
    content:
      "Implementing proven SEO strategies to elevate your brand's online presence and drive organic traffic to your site.",
    img: "/Home/home2.jpeg",
  },
  {
    id: 3,
    title: "Media Production",
    content:
      "From concept development to post-production, we deliver high-quality visual content that enhances your brand narrative.",
    img: "/Macy/macy2.jpeg",
  },
];

function Services() {
  return (
    <div id="Services" className=" h-auto pt-6 xl:pt-20">
      <div className="pt-1 flex flex-col items-center ">
        <div className="pb-12 md:pb-24  text-center space-y-2">
          <h6 className="text-Purple max-md:text-sm font-medium ">
            {" "}
            * What we do
          </h6>
          <p className="mx-auto text-background2/80 max-md:text-xs font-medium w-[70%]">
            {"Here's"} how we can help your brand shine and connect with your
            audience.
          </p>
        </div>
        <ul className="md:hidden w-full h-full  cursor-pointer px-1">
          {service.map((service) => (
            <ServiceSmall
              key={service.id}
              id={service.id}
              title={service.title}
              Img={service.img}
            />
          ))}
        </ul>
        <ul className="hidden md:block w-[95%]  text-4xl text-black h-full  cursor-pointer ">
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
