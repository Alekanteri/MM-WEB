import React, { ReactElement } from "react";
// @ts-ignore
import image from '../../assets/img/2.jpg'

const PopularCategories: React.FC = (): ReactElement => {
  return (
    <section className="px-5 sm:mt-20">
      <h1 className="text-center text-3xl py-5 font-bold text-gray-900 sm:text-4xl xl:text-5xl">
      Порядок оформления рассрочки
      </h1>
      <div className="flex flex-wrap justify-center gap-4 ">
        <div
          style={{ transition: "0.5s" }}
          className="bg-[#6f76dc] hover:scale-105 transition-all flex justify-between rounded-xl relative p-5 h-[283px] w-[450px]"
        >
          <div className="flex justify-between">
            <div className="relative bg-[#6f76dc65]">
                <h3 className="w-[350px] absolute z-10 text-x font-[620] text-[25px] text-white">
                  Узнайте решение за 15 минут не выходя из дома
                </h3>
            </div>
            <div className="absolute right-0">
              <img
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          style={{ transition: "0.5s" }}
          className="bg-[#abcdff] hover:scale-105 flex justify-between rounded-xl relative p-5 h-[283px] w-[450px]"
        >
          <div className="flex justify-between">
            <div className="relative">
              <h3 className="font-[620] text-[22px] text-white">Apple</h3>
              ...
            </div>
            <div className="absolute right-0">
              <img
                src="https://рассрочка-кредит.рф/image/cachewebp/catalog/demo-prostore/categories-min/img-categories-02-171x252.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          style={{ transition: "0.5s" }}
          className="bg-[#9BCAD7] hover:scale-105 transition-all flex justify-between rounded-xl relative p-5 h-[283px] w-[450px]"
        >
          <div className="flex justify-between">
            <div className="relative">
              <h3 className="font-[620] text-[22px] text-white">Apple</h3>
              ...
            </div>
            <div className="absolute right-0">
              <img
                src="https://рассрочка-кредит.рф/image/cachewebp/catalog/demo-prostore/categories-min/img-categories-04-180x252.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
