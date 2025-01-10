import Image from "next/image";
import Link from "next/link";

interface WorksCardProps {
  image: string;
  year: string;
  company: string;
  title: string;
  services: string[];
  slug: string;
}

export default function WorksCard({
  image,
  year,
  company,
  title,
  services = [],
  slug,
}: WorksCardProps) {
  return (
    <Link href={`/case-studies/${slug}`}>
      <div className="aspect-square sm:aspect-[4/3]  rounded-xl  flex flex-col justify-center  sm:pb-2  font-medium md:hover:shadow-sm">
        <figure className=" w-full rounded-xl  relative group overflow-hidden  ">
          <Image
            src={image}
            height={400}
            width={400}
            alt={` project thumbnail`}
            className="h-auto   w-full object-cover rounded-xl group-hover:scale-[1.025]  transition-transform duration-200 ease-in-out"
          />
          <div className="absolute bottom-4  left-2  gap-2 z-10  text-sm group-hover:flex hidden transition-all duration-200 ease-in-out ">
            {Array.isArray(services) &&
              services.map((service) => (
                <span
                  key={service}
                  className=" w-auto px-3 py-1 capitalize bg-background2/50 text-background rounded-xl"
                >
                  {service}
                </span>
              ))}
          </div>
        </figure>

        <div className=" space-y-1 py-2   pl-1 ">
          <div className="flex justify-start gap-x-2 items-center">
            <span className="text-sm text-background2/60">{year}</span>
            <span className="size-1 bg-black rounded-full"></span>{" "}
            <p className="font-mono">{company}</p>
          </div>
          <h5 className="text-xl md:text-2xl  capitalize">{title}</h5>
        </div>
      </div>
    </Link>
  );
}
