import React from "react";
import "./Adaptation.scss";

interface SamsungItem {
  name: string;
  price: number;
  image: string;
}

const samsungItems: SamsungItem[] = [
  {
    name: "Samsung Galaxy S23 Ultra 12/512GB",
    price: 109990,
    image:
      "https://vladivostok.рассрочка-кредит.рф/image/cachewebp/catalog/pics/Smartfon-Samsung-Galaxy-S23-Ultra-12512GB-Phantom-Black-500x500.webp",
  },
  {
    name: "Samsung Galaxy S22 Ultra 12/256GB",
    price: 89990,
    image:
      "https://vladivostok.рассрочка-кредит.рф/image/cachewebp/catalog/pics/abb601f668b3d58a9aab83063dc41662-500x500.webp",
  },
  {
    name: "Samsung Galaxy S21 FE 8/256GB 5G",
    price: 45990,
    image:
      "https://vladivostok.рассрочка-кредит.рф/image/cachewebp/catalog/pics/96692b264cdb5e2ecba4ee49f2902393-500x500.webp",
  },
  {
    name: "Samsung Galaxy S22+ Plus 8/128GB",
    price: 79990,
    image:
      "https://vladivostok.рассрочка-кредит.рф/image/cachewebp/catalog/pics/b5429fa00ca9a912f92472965cdc924a-500x500.webp",
  },
  {
    name: "Samsung Galaxy S23 8/256GB",
    price: 86990,
    image:
      "https://vladivostok.рассрочка-кредит.рф/image/cachewebp/catalog/pics/Smartfon-Samsung-Galaxy-S23-Plus-8256GB-Lavender-500x500.webp",
  },
  {
    name: "Samsung Galaxy S21 Ultra 12/128",
    price: 105990,
    image:
      "https://vladivostok.рассрочка-кредит.рф/image/cachewebp/catalog/pics/e36cf77ff9479c6433c7cfd3ba1115e1-500x500.webp",
  },
  {
    name: "Apple iPhone 14 128GB Blue",
    price: 129400,
    image:
      "https://static.eldorado.ru/img1/b/bb/06846300.jpg/resize/1920x1080/",
  },
  {
    name: "Apple iPhone 14 Pro Max 256GB",
    price: 129400,
    image: "https://static.eldorado.ru/img1/p/b/45407300.jpg/resize/360x360/",
  },
];

const SamsungItems: React.FC = () => {
  return (
    <section className="samsung">
      <h1 className="text-3xl font-bold text-gray-900 ml-1 sm:mt-10 py-5">
        Продукт Samsung
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {samsungItems.map((item, index) => (
          <figure
            key={index}
            className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg"
          >
            <figcaption className="font-bold text-center text-lg">
              {item.name}
            </figcaption>
            <img src={item.image} width={250} alt="" />
            <div className="text-center mt-5">
              <figcaption className="font-bold text-lg">
                {item.price}₽
              </figcaption>
              <button className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                Купить
              </button>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default SamsungItems;
