import NavBar from "@/app/components/Navbar";
import WorksCard from "@/app/components/ui/WorksCard";
import Image from "next/image";
import { title } from "process";
import React from "react";

const worksData = [
  {
    image: "/Litlem/Lit.jpeg",
    images: ["/Litlem/lit1.jpeg", "/Litlem/lit2.jpeg"],
    year: "2023",
    industry: "Restaurant",
    company: "Little Lemon",
    desc: "Developed a comprehensive online presence for Little Lemon, including a visually appealing website and cohesive branding to enhance their market reach.Our team developed a comprehensive brand strategy, created a new visual identity, and redesigned their website to better reflect their innovative spirit and market position.",
    services: ["Branding", "Website"],
    title: " Little Lemon Branding and  website Redesign",
    slug: "little-lemon",
  },
  {
    image: "/Home/Furniture.jpeg",
    images: ["/Home/hhh.jpeg", "/Home/home2.jpeg"],
    year: "2023",
    industry: "Furniture store",
    company: "Homecentre",
    desc: "Redesigned Homecentre's website with a user-centric approach and implemented effective SEO strategies to improve visibility and engagement.  The result was a 40% increase in user engagement and a 25% boost in lead generation within the first quarter post-launch.",
    services: ["Website", "SEO"],
    title: " Homecentre's website Redesign",
    slug: "homecentre",
  },
  {
    image: "/Macy/macy.jpeg",
    images: ["/Macy/macy1.jpeg", "/Macy/macy2.jpeg"],
    year: "2023",
    industry: "Cafe",
    company: "Macy's Coffee",
    desc: "Executed a vibrant promotional campaign for Macy's winter fest, utilizing creative media and ad strategies to maximize seasonal customer engagement.",
    services: ["Media", "Ads"],
    title: "promotional campaign for Macy's winter fest.",
    slug: "macys-coffee",
  },
  {
    image: "/Happylfe/happyl.jpeg",
    images: ["/Happylfe/hap1.jpeg", "/Happylfe/hap2.jpeg"],
    year: "2023",
    industry: "Food",
    company: "Happylfe",
    desc: "Developed impactful branding and managed an engaging ad campaign for Happylfe, establishing a strong market presence and brand identity.",
    services: ["Branding", "Media"],
    title: "Branding and Ad campaign for Happylfe",
    slug: "happylfe",
  },
];

//When using dynamic routes nextjs provides a function that returns a promise with the params object
const CaseStudy = async ({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) => {
  const slug = (await params).slug;

  const work = worksData.find((work) => work.slug === slug);

  if (!work) {
    return (
      <div className="h-screen w-full bg-slate-100 text-2xl font-semibold text-center">
        Page not found
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-3 md:px-6 xl:max-w-6xl 2xl:max-w-7xl  bg-white">
      <div className="max-w-6xl  mx-auto pt-10 pb-10">
        <h1 className="text-3xl font-mono md:text-4xl xl:text-5xl font-semibold text-gray-800">
          {work.company}
        </h1>

        <div className="flex justify-start gap-x-1 items-center mt-1  text-gray-500 font-medium pl-1">
          <span className="size-1 bg-black rounded-full"></span>
          <p className="text-sm "> {work.year}</p>
        </div>

        <div className="mt-8">
          <Image
            src={work.image}
            alt="CaseStudyStudy Study Main Image"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="mt-5 md:mt-10 grid md:grid-cols-2 gap-8 mx-1">
          <div className="max-md:flex items-center justify-between  ">
            <div className="">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-4">
                Deliverables:
              </h2>
              <ul className=" text-gray-600 flex items-ceneter gap-x-2">
                {work.services.map((service, index) => (
                  <li
                    className="w-auto px-3 py-[2px] capitalize bg-background text-background2 rounded-2xl font-medium"
                    key={index}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 md:mt-6 mb-2 ">
                Industry:
              </h2>
              <p className="text-gray-600 font-medium">{work.industry}</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Project Overview:
            </h2>
            <p className="text-gray-600 pl-1 text-pretty  tracking-wide">
              {work.desc}
            </p>
          </div>
        </div>

        <div className="mt-12 mb-10  ">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {work.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`CaseStudyStudy Study Image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
      <section className="  text-background2 mx-1 my-12">
        <h2 className=" font-semibold capitalize text-3xl   md:text-4xl  2xl:text-5xl  text-center pb-12">
          More Work
        </h2>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-12">
          {worksData
            .filter((worksData) => worksData.slug != slug)
            .slice(0, 2)
            .map((work, index) => (
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
        </div>
      </section>
    </section>
  );
};

export default CaseStudy;
