import React, { ReactElement } from "react";
// import Logo from "../../assets/img/Logo.png";
// import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
//@ts-ignore
import MW from "../../assets/img/MW.png";
import { FaVk, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = (): ReactElement => {
  return (
    <footer className="py-10 bg-gray-200 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <div className="flex items-center gap-3 cursor-pointer">
              <img className="rounded-xl w-12" src={MW} alt="MW" />
              <span className="font-bold text-xl">
                MOBILE
                <span className="text-indigo-600 font-bold">МIR</span>
              </span>
            </div>
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaVk size={20} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaTelegram size={20} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <FaWhatsapp size={20} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Works
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Customer Support
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Delivery Details
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <div className="flex items-center gap-2">
              <img
                width={180}
                src="https://inservices.kz/images/main-page/download-google-ru.svg"
                alt=""
              />
              <img
                width={170}
                src="https://inservices.kz/images/main-page/download-ios-ru.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
