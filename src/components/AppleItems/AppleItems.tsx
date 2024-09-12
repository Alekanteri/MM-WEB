import React, { ReactElement } from "react";
import Modal from "@mui/material/Modal";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoClose } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BasicTable from "../TableContainer/TableContainer";
import "./Adaptation.scss";

const AppleItems: React.FC = (): ReactElement => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClick = () => {};
  const handleClose = () => setOpen(false);

  return (
    <section className="appleItems">
      <h1 className="text-3xl font-[600] text-gray-900 ml-1 sm:mt-10 py-5">
        Продукт Apple
      </h1>
      <div className="grid grid-cols-4 items-center gap-5 appleItemsContainer">
        <figure className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <div onClick={handleOpen}>
            <figcaption className=" font-[600] text-center text-[20px]">
              Apple iPhone 15 <br /> Pro 128GB
            </figcaption>
            <img
              className="mt-5"
              width={250}
              src="https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/27664.970-500x500.webp"
              alt=""
            />
          </div>
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">103300₽</figcaption>
            <button
              onClick={handleOpen}
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 15 Pro
            <br />
            256GB
          </figcaption>
          <img
            className="mt-5"
            width={250}
            src="https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/27682.970-500x500.webp"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">129400₽</figcaption>
            <button
              onClick={handleOpen}
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 15 <br /> Pro 128GB
          </figcaption>
          <img
            className="mt-5"
            width={250}
            src="https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/27651.970-500x500.webp"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">129400₽</figcaption>
            <button
              onClick={handleOpen}
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 15 <br /> Pro 128GB
          </figcaption>
          <img
            className="mt-5"
            width={250}
            src="https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/27640.970-500x500.webp"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">129400₽</figcaption>
            <button
              onClick={handleOpen}
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 12 <br /> 256GB White
          </figcaption>
          <img
            className="mt-5"
            width={250}
            src="https://static.eldorado.ru/img1/p/b/75907300.jpg/resize/360x360/"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">129400₽</figcaption>
            <button
              onClick={handleOpen}
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 13 <br /> 256GB Midnight
          </figcaption>
          <img
            className="mt-5"
            width={250}
            src="https://static.eldorado.ru/img1/p/b/39317300.jpg/resize/360x360/"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">129400₽</figcaption>
            <button
              onClick={handleOpen}
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 14 <br /> 128GB Blue
          </figcaption>
          <img
            className="mt-5"
            width={250}
            src="https://static.eldorado.ru/img1/b/bb/06846300.jpg/resize/1920x1080/"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">129400₽</figcaption>
            <button
              onClick={handleOpen}
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
        <figure className="w-fit cursor-pointer transition-all m-auto bg-white px-14 py-5 rounded-2xl shadow-lg">
          <figcaption className="font-[600] text-center text-[20px]">
            Apple iPhone 14 <br />
            Pro Max 256GB
          </figcaption>
          <img
            className="mt-5"
            width={250}
            src="https://static.eldorado.ru/img1/p/b/45407300.jpg/resize/360x360/"
            alt=""
          />
          <div className="text-center mt-5 items-center">
            <figcaption className="font-[600] text-[20px]">129400₽</figcaption>
            <button
              onClick={handleOpen}
              className="w-full relative inline-flex mt-3 items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Купить
            </button>
          </div>
        </figure>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <div
            onClick={handleClose}
            className="w-fit m-5 transition-all hover:scale-110 rounded-full absolute right-1 border-2 border-[#7266F3] cursor-pointer"
          >
            <IoClose color="#7266F3" size={32} />
          </div>
          <div className="w-full h-full px-[10rem] bg-white flex flex-wrap justify-center items-center">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  width={600}
                  src="https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/27664.970-500x500.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={500}
                  src="https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/27665.970-500x500.webp"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  width={500}
                  src="https://рассрочка-кредит.рф/image/cachewebp/catalog/pics/27666.970-500x500.webp"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>

            <div className="mt-[-1rem]">
              <h1
                style={{ fontWeight: "600", fontSize: "1.6rem" }}
                className="py-5 mt-10"
              >
                Смартфон Apple iPhone 15 Pro 256 ГБ, <br /> Dual: nano SIM +
                eSIM, синий титан
              </h1>

              <h4 className="text-xl font-[600]">Цена по скидук</h4>
              <h1 className="flex items-center gap-3 font-bold text-4xl mt-5">
                103 300₽
                <span className="bg-[#E6008C] text-white text-xs p-1 px-3 rounded-full">
                  29%
                </span>
              </h1>
              <button
                onClick={handleClick}
                className="w-fit h-[48px] mt-5 cursor-pointer hover:bg-[#857aff] active:bg-[#8277ff] bg-[#7266F3] px-5 p-3 rounded-[10px] text-white font-[600]"
              >
                Купить
              </button>
              <div className="mt-5">
                <h1 className="text-xl font-[600]">Объем памяти</h1>
                <p className="w-fit px-3 border border-black mt-5 rounded-[5px] font-bold">
                  128 Гб
                </p>
              </div>
              <div className="mt-5">
                <BasicTable />
              </div>
            </div>
          </div>
        </>
      </Modal>
    </section>
  );
};

export default AppleItems;