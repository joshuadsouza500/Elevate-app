"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
    slug: "happylfe",
  },
];

const CaseStudy = () => {
  const router = useRouter();
  const { slug } = router.query;

  const work = worksData.find((work) => work.slug === slug);

  if (!work) {
    return (
      <div className="h-screen w-full bg-slate-100 text-2xl font-semibold text-center">
        Page not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800">{work.company}</h1>
      <p className="text-sm text-gray-500 mt-1">{work.year}</p>

      <div className="mt-8">
        <Image
          src={work.image}
          alt="CaseStudyStudy Study Main Image"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Services:
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            {work.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Industry:
          </h2>
          <p className="text-gray-600">{work.industry}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Project Overview:
          </h2>
          <p className="text-gray-600">{work.desc}</p>
        </div>
      </div>

      <div className="mt-12">
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
  );
};

export default CaseStudy;
