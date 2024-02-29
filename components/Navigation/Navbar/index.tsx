"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Logo from "./Logo";
import Button from "./Button";

const Navbar = ({ toggle }: { toggle: () => void }) => {

  const pathname = usePathname()

  const NavLinks = [
    {
      id: 1,
      name: "Home",
      href: "/",
      isActive: () => {
        return pathname === "/"
      }
    }, {
      id: 2,
      name: "Careers",
      href: "/Careers",
      isActive: () => {
        return pathname === "/Careers"
      }
    }, {
      id: 3,
      name: "Apply",
      href: "/Apply",
      isActive: () => {
        return pathname === "/Apply"
      }
    }, {
      id: 3,
      name: "Courses",
      href: "/Courses",
      isActive: () => {
        return pathname === "/Courses"
      }
    }, {
      id: 4,
      name: "Contacts",
      href: "/contacts",
      isActive: () => {
        return pathname === "/contacts"
      }
    }
  
  ]

  return (
    <>
      <div className="w-full h-20 bg-[#131313] border-b-2 border-b-red-600">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
              {
                NavLinks.map(({id, name, href, isActive}) => (
                  <li key={id}>
                    <Link className={(isActive() ? "font-bold" : "") + "hover:bg-black hover:text-red-600"} href={href}>
                      {name}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;