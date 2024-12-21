import Link from "next/link";
import { Mail, ArrowUpRight, ListEndIcon, GitBranch } from "lucide-react";

export default function Footer1() {
  return (
    <footer className=" text-white  pb-2 md:pb-4 px-2 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl bg-zinc-950 pt-8   rounded-2xl">
        <div className="grid gap-6 ">
          {/* Main CTA Section */}
          <div
            className="text-center max-xl:max-w-[90%] xl:max-w-5xl py-6 xl:py-10 mx-auto space-y-4 bg-background w-full rounded-2xl flex flex-col place-items-center"
            id="#CTA"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-black to-zinc-600 bg-clip-text text-transparent">
              Ready to elevate <br /> your brand?
            </h2>
            <p className="max-md:text-sm text-zinc-600 text-lg">
              {` Let's turn your vision into reality.`}
            </p>
            <button className="mt-4 group flex items-center border-zinc-800 text-background rounded-full px-3 py-2  bg-gradient-to-br shadow-sm from-zinc-950 to-zinc-700 hover:border-white">
              Start a Project
              <ArrowUpRight className="ml-2 size-4 group-hover:rotate-45  transition-transform bg-white text-black rounded-full " />
            </button>
          </div>

          {/* Divider */}

          {/* Footer Content Grid */}

          {/* Brand Column */}
          <div className=" "></div>

          {/* Bottom Bar */}
          <div className="flex flex-row justify-center items-center pl-2 md:pl-4 pt-3 md:pt-5  gap-4 relative ">
            <h6 className="leading-none text-[144px] text-center font-medium tracking-tight">
              Elevate<span className="text-primary">.</span>
            </h6>
            {/* Social Links */}

            <div
              className="bg-white flex items-center  justify-center h-10 md:h-12 w-32 md:w-40 rounded-tl-2xl absolute bottom-0 right-0
            "
            >
              <div className="flex space-x-2 md:space-x-4 pt-2 ">
                <Link
                  href="#"
                  className="text-background2 hover:text-zinc-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
                <Link
                  href="#"
                  className="text-background2 hover:text-zinc-700 transition-colors"
                >
                  <span className="h-5 w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </span>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-background2 hover:text-zinc-700 transition-colors"
                >
                  <GitBranch className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="#"
                  className="text-background2 hover:text-zinc-700 transition-colors"
                >
                  <ListEndIcon className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
