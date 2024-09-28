import React, { ReactElement, useState } from "react";
import Modal from "@mui/material/Modal";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoClose } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BasicTable } from "../TableContainer/TableContainer";
import "./Adaptation.scss";

type ProductCharsType = { [key: string]: number | string };
//! Короче, тут ты ни чего не трогаешь, так и оставляешь, в файле таблицы точно такой же тип, вынеси вообще все типы и интерфейсы в отдельные файлы по компонентам, чтобы мозги не ебать по правилам такие файлы называются "Имякомпонента.d.ts"

interface ProductProps {
  title: string;
  price: number;
  chars: ProductCharsType; //! Тут тоже не трож
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: ProductProps;
}

const products: IProduct[] = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro 128GB",
    price: 103300,
    image:
      "https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/27664.970-500x500.webp",
    description: {
      title:
        "Смартфон Apple iPhone 15 Pro 256 ГБ, Dual: nano SIM + eSIM, синий титан",
      price: 103300,
      //! Эта вся хуйня идет в модальное окно, делай через мапинг как хочешь, я для теста делал с одним элементом
      chars: {
        //! Пишешь обязательно так же как и указано в типе!!!!!  Тоесть ключ - строка, значение - строка или число
        "Объем памяти": 512,
        Батарея: "4000mA",
        Вес: 0.2,
      },
    },
  },
  // {
  //   id: 2,
  //   name: "Apple iPhone 15 Pro 256GB",
  //   price: 129400,
  //   image:
  //     "https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/27682.970-500x500.webp",
  //   description:
  //     "Смартфон Apple iPhone 15 Pro 256 ГБ, Dual: nano SIM + eSIM, синий титан",
  // },
  // ...
];
const AppleItems: React.FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ProductCard = ({ product }: { product: IProduct }) => (
    <figure className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
      <figcaption className="font-[600] text-center text-[20px]">
        {product.name}
      </figcaption>
      <img className="mt-5" width={250} src={product.image} alt="" />
      <div className="text-center mt-5 items-center">
        <figcaption className="font-[600] text-[20px]">
          {product.price}₽
        </figcaption>
        <button
          onClick={handleOpen}
          className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Купить
        </button>
      </div>
    </figure>
  );

  return (
    <section className="appleItems">
      <h1 className="text-3xl font-[600] text-gray-900 ml-1 sm:mt-10 py-5">
        Продукт Apple
      </h1>
      <div className="grid grid-cols-4 items-center gap-5 appleItemsContainer">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          {/* Modal content */}
          <div
            onClick={handleClose}
            className="w-fit m-5 transition-all hover:scale-110 rounded-full absolute right-1 border-2 border-[#7266F3] cursor-pointer"
          >
            <IoClose color="#7266F3" size={32} />
          </div>
          <div className="w-full h-full px-[10rem] bg-white grid grid-cols-1 md:grid-cols-2 place-items-center">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <img width={300} src={product.image} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-[-1rem]">
              <h1
                style={{ fontWeight: "600", fontSize: "1.6rem" }}
                className="py-5 mt-10"
              >
                {products[0].description.title}
              </h1>
              <h4 className="text-xl font-[600]">
                Цена по скидке {products[0].description.price}
              </h4>
              {/* //! Короче тут ни чего не трогай в файле компонента я все настроил, так что там можешь только если визуально поиграться */}
              <BasicTable description={products[0].description.chars} />
            </div>
          </div>
        </>
      </Modal>
    </section>
  );
};

export default AppleItems;
