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
      className="h-auto py-16 xl:py-20 flex items-center  flex-col gap-y-3 md:gap-y-5  overflow-hidden"
    >
      <div className="pb-16 md:pb-24 text-center space-y-2">
        <h6 className="capitalize text-Purple max-md:text-sm  ">
          {" "}
          &#65290; our work
        </h6>
        <p className="mx-auto text-background2/80 text-sm font-medium w-[80%]  md:w-[70%]">
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
