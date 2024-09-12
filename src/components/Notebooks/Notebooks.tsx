import React, { ReactElement } from "react";
import "./Adaptation.scss";

const Notebooks: React.FC = (): ReactElement => {
  return (
    <section className="notebooks">
      <h1
  className="text-3xl font-[600] text-gray-900 ml-1 sm:mt-10 py-5"
      >
        Ноутбуку на заказ
      </h1>
      <div className="grid grid-cols-4 items-center gap-5 notebooksContainer">
        <figure className="w-fit h-[100%] cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 15 <br /> Pro 128GB
          </figcaption>
          <img
            className="w-[400px] mt-5"
            src="https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/74569dc7b9533320daf588989e8315e2-500x500.webp"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">103300₽</figcaption>
             <button
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit h-[100%] cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 15 Pro
            <br />
            256GB
          </figcaption>
          <img
            className="mt-5"
            width={250}
            src="https://c.dns-shop.ru/thumb/st1/fit/320/250/6b1cdddf223e994b7445e0d0944a9be4/943eec03c5526a1b4d0e8b487731433fa927413847efb8cc8e5025f5678459fd.jpg"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">129400₽</figcaption>
             <button
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit h-[100%] cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 15 <br /> Pro 128GB
          </figcaption>
          <img
            className="w-[400px] mt-5"
            src="https://c.dns-shop.ru/thumb/st1/fit/320/250/ddb0ebe50621b0363dbe99ec381409a0/c6944fbf088e230992c7b42bec1d5bccadf7f6a13be73b04ffec9a48286f88ed.jpg"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">103300₽</figcaption>
             <button
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit h-[100%] cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 15 Pro
            <br />
            256GB
          </figcaption>
          <img
            className="mt-5"
            width={250}
            src="https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/Apple-MacBook-Pro-14-M1-8C-CPU-14C-GPU-16GB512GB-SSD-2021-seryj-kosmos-500x500.webp"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">129400₽</figcaption>
             <button
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Notebooks;
