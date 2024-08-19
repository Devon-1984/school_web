import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "@/icons/Logo";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [admissions, setAdmissions] = useState(true);

  const [color, setColor] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 40) return setColor(false);
      return setColor(true);
    };

    window.addEventListener("scroll", changeColor);

    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  function remove() {
    setAdmissions(false);
  }

  return (
    <>
      <div className="header-admission-wrapper z-50 fixed max-w-full w-screen top-0 left-0">
        {admissions && (
          <div className="admission-wrapper flex justify-center bg-primary-500 text-white p-1 text-[11px] font-bold max-w-full relative">
            <p className="admission">Admissions are open</p>
            <button onClick={remove}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="#F5FCFA"
                  strokeWidth="4"
                />
              </svg>
            </button>
          </div>
        )}

        <header
          className={
            currentRoute === "/" && color
              ? "p-5 md:px-10 md:py-5 text-white transition-colors duration-500 ease-in-out"
              : "p-5 md:px-10 md:py-5 header-wrapper header-bg"
          }
        >
          <div className="flex flex-col md:flex-row md:flex md:items-center ">
            <div className="img-label flex items-center font-bold">
              <Link
                className="img-label flex items-center font-bold"
                href={"/"}
              >
                <Logo width={60} height={60} />

                <label className="font-heading max-w-[22ch] leading-[1.15] text-[12px] cursor-pointer">
                  SAHUDANGI HAT <br />
                  P. K. ROY HIGH SCHOOL
                </label>
              </Link>
              <div className="md:hidden ml-auto">
                <button onClick={toggleMenu} className="focus:outline-none">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop */}

            <ul className="gap-4 ml-auto font-semibold text-xs leading-none hidden md:flex">
              <Link
                href={"/about"}
                className={currentRoute === "/about" ? " text-primary-500" : ""}
              >
                About
              </Link>
              <Link
                href={"/event"}
                className={currentRoute === "/event" ? " text-primary-500" : ""}
              >
                Events
              </Link>
              <Link
                href={"/notice"}
                className={
                  currentRoute === "/notice" ? " text-primary-500" : ""
                }
              >
                Notice
              </Link>
              <Link
                href={"/contact"}
                className={
                  currentRoute === "/contact" ? " text-primary-500" : ""
                }
              >
                Contact
              </Link>
            </ul>

            {/* Mobile */}

            {isOpen && (
              <ul className="md:hidden flex flex-col items-center font-semibold space-y-4 py-4">
                <Link
                  href={"/about"}
                  onClick={toggleMenu}
                  className={
                    currentRoute === "/about" ? " text-primary-500" : ""
                  }
                >
                  About
                </Link>
                <Link
                  href={"/event"}
                  onClick={toggleMenu}
                  className={
                    currentRoute === "/event" ? " text-primary-500" : ""
                  }
                >
                  Events
                </Link>
                <Link
                  href={"/notice"}
                  onClick={toggleMenu}
                  className={
                    currentRoute === "/notice" ? " text-primary-500" : ""
                  }
                >
                  Notice
                </Link>
                <Link
                  href={"/contact"}
                  onClick={toggleMenu}
                  className={
                    currentRoute === "/contact" ? " text-primary-500" : ""
                  }
                >
                  Contact
                </Link>
              </ul>
            )}
          </div>
        </header>
      </div>
    </>
  );
}
