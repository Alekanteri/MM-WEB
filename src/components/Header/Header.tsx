import React, { useState } from "react";
//@ts-ignore
import MW from "../../assets/img/MW.png";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-4 bg-gray-200 sm:py-5">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex shrink-0">
            <a href="#" title="" className="flex items-center gap-1">
              <img className="w-10 h-10" src={MW} alt="" />
              <span className="font-bold text-xl">
                MOBILE
                <span className="text-indigo-600 font-bold">МIR</span>
              </span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={handleToggle}
              type="button"
              className="text-gray-900"
            >
              {isOpen ? (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden md:flex md:space-x-10 md:items-center md:justify-center">
            <a
              href="#"
              title=""
              className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600"
            >
              Services
            </a>

            <a
              href="#"
              title=""
              className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600"
            >
              Latest Collections
            </a>

            <a
              href="#"
              title=""
              className="text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 hover:text-indigo-600"
            >
              Blog
            </a>
          </div>

          <div className="hidden md:flex">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              +7 (918) 819-82-02
            </a>
          </div>
        </nav>

        {isOpen && (
          <nav className="mt-5 bg-gray-100 rounded-2xl">
            <div className="px-1 pt-8 pb-4">
              <div className="grid gap-y-6">
                <a
                  href="#"
                  title=""
                  className="flex items-center text-base m-auto font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                >
                  Services
                </a>

                <a
                  href="#"
                  title=""
                  className="flex items-center text-base m-auto font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                >
                  Latest Collections
                </a>

                <a
                  href="#"
                  title=""
                  className="flex items-center text-base m-auto font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                >
                  Blog
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-6 py-2 text-base font-semibold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Поддержка +7 (918) 819-82-02
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
