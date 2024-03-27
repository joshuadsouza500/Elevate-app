
import React from "react";
import Link from "next/link";
import { MotionNav } from "./MotionDiv";

function NavBar()  {
  return (
    <div > 
      <MotionNav className="navbar bg-background fixed border-b border-background2 z-20 w-dvw"
      initial ={{opacity:0}}
      animate = {{opacity:1}}
      transition={{delay: 0.2}}
     
      >
        <div className="absolute right-6">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle sm:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-background rounded-box w-52 "
            >
              <li>
                <Link href="#Home"  >Home</Link>
              </li>
              <li>
                <Link href="#About"    >About</Link>
              </li>
              <li>
                <Link href="#Services"> Services</Link>
              </li>
              <li>
                <Link href="#Work">Our Work</Link>
              </li>
              <li>
                <Link href="#Reviews">Reviews</Link>
              </li>
              <li>
                <Link href="/contact">Conatact Us</Link>
              </li>
            </ul>
          </div>
        </div>
       <div className="">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="44"
          fill="none"
          viewBox="0 0 41 44"
        >
          <path
            fill="#1C1616"
            d="M20.594 43.089 2.78 10.943l35.345-.154-17.532 32.3Z"
          />
          <path
            fill="#FAFAF5"
            d="m19.867 1.739 16.775 30.533-32.484.58 15.71-31.113Z"
          />
        </svg>
        <h4 className="font-Poppins font-medium pt-2 pl-1">Elevate</h4> 
        </div>
        <div className="hidden sm:block flex-none absolute right-2 md:right-10">
          <ul className="flex flex-row justify-around gap-4 pr-8 mr-2 font-Poppins text-base text-background2 ">
            <li>
              <Link
                href="#Home"  
                className="hover:border-b hover:border-black hover:border-solid scroll-smooth"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#About"  
                className="hover:border-b hover:border-black hover:border-solid scroll-smooth"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#Services"  
                className="hover:border-b hover:border-black hover:border-solid scroll-smooth"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#Work"  
                className="hover:border-b hover:border-black hover:border-solid scroll-smooth"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="#Reviews"  
                className="hover:border-b hover:border-black hover:border-solid scroll-smooth"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/contact"  
                className="hover:border-b hover:border-black hover:border-solid scroll-smooth" 
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
     
    </MotionNav>
    </div>
  );
};

export default NavBar;
