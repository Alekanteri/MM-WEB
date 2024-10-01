import React from "react";
// @ts-ignore
import categoryImage from "../../assets/img/2.png";

interface CategoryProps {
  title: string;
  imageSrc: string;
  backgroundColor: string;
}

const Category: React.FC<CategoryProps> = ({
  title,
  imageSrc,
  backgroundColor,
}) => {
  return (
    <div
      className={`${backgroundColor} hover:scale-105 transition-all flex justify-between rounded-xl relative p-5 h-[283px] w-[450px]`}
    >
      <div className="flex justify-between">
        <div className="relative">
          <h3 className="font-[620] text-[22px] text-white">{title}</h3>
        </div>
        <div className="absolute right-0">
          <img className="max-h-[250px]" src={imageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

const PopularCategories: React.FC = () => {
  return (
    <section className="px-5 sm:mt-20">
      <h1 className="text-center text-3xl py-5 font-bold text-gray-900 sm:text-4xl xl:text-5xl">
        Порядок оформления рассрочки
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Category
          title="Узнайте решение за 15 минут не выходя из дома"
          imageSrc={categoryImage}
          backgroundColor="bg-indigo-300"
        />
        <Category
          title="Apple"
          imageSrc="https://рассрочка-кредит.рф/image/cachewebp/catalog/demo-prostore/categories-min/img-categories-02-171x252.webp"
          backgroundColor="bg-green-200"
        />
        <Category
          title="Apple"
          imageSrc="https://рассрочка-кредит.рф/image/cachewebp/catalog/demo-prostore/categories-min/img-categories-04-180x252.webp"
          backgroundColor="bg-blue-200"
        />
      </div>
    </section>
  );
};

export default PopularCategories;
