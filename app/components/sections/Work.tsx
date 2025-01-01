import React from "react";
import Image from "next/image";
import { Motionh1, MotionDiv } from "../MotionDiv";
import WorksCard from "../ui/WorksCard";

const worksData = [
  {
    image: "/Litlem/Lit.jpeg",
    year: "2023",
    company: "Little Lemon",
    title: "Creating an online presence for Little Lemon",
    services: ["Branding", "website"],
    slug: "little-lemon",
  },
  {
    image: "/Home/Furniture.jpeg",
    year: "2023",
    company: "Homecentre",
    title: "Redesigning Homecentre's website",
    services: ["website", "SEO"],
    slug: "homecentre",
  },
  {
    image: "/Macy/macy.jpeg",
    year: "2023",
    company: "Macy's Coffee",
    title: "Running a promotional campaign for Macy's winter fest.",
    services: ["Media", "Ads"],
    slug: "macys-coffee",
  },
  {
    image: "/Happylfe/happyl.jpeg",
    year: "2023",
    company: "Happylfe",
    title: "Branding and Ad campaign for Happylfe",
    services: ["Branding", "Media"],
    slug: "happylfe",
  },
];

function Work() {
  return (
    <div
      id="Work"
      className="h-auto py-16 xl:py-28 flex items-center  flex-col gap-y-3 md:gap-y-5  overflow-hidden mb-10"
    >
      <div className="pb-12 md:pb-24 text-center space-y-2">
        <h6 className="text-Purple max-md:text-sm font-medium hidden">
          {" "}
          * Our work
        </h6>
        <div className="flex items-center gap-x-1 text-xs md:text-sm font-medium  bg-purple-100 px-2 md:px-3 py-1 rounded-full ">
          <p className=" text-Purple ">Our work</p>
        </div>
        <p className="mx-auto text-background2/80 max-md:text-xs font-medium w-[65%]">
          Check out our work and see how {"we've"} helped our clients
        </p>
      </div>
      <section className="  grid md:grid-cols-2 gap-12 text-background2 mx-1">
        {worksData.map((work, index) => (
          <WorksCard
            key={index}
            image={work.image}
            year={work.year}
            company={work.company}
            title={work.title}
            services={work.services}
            slug={work.slug}
          />
        ))}
      </section>
    </div>
  );
}

export default Work;
