import React, { ReactElement } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import SendIn from "../SendIn/SendIn";
import { IoClose } from "react-icons/io5";
import { BiDetail } from "react-icons/bi";
import "./Adaptation.scss";

const Main: React.FC = (): ReactElement => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className="bg-[#ECF1F7]">
      <div className="pt-12 bg-gradient-to-b">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
            <div className="self-center lg:col-span-4 contentMobileMir">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                Мобильный мир. Телефоны в рассрочку
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                Выберите выгодный тариф и заполните предварительную
                онлайн-заявку
              </p>
              <div className="relative inline-flex mt-9 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                <button
                  onClick={handleOpen}
                  className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  Оформить рассрочку
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#4F46E5] via-[#ab44ff] to-[#6F76DC] rounded-xl person self-end lg:col-span-5 centerContainer">
              <img
                width={450}
                className="mx-auto mb-[-5px]"
                src="https://apple-com.ru/image/catalog/product/iphone%2012%20pro/promo/hero_large.png"
                alt=""
              />
            </div>

            <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                ⚡️ Работаем с 9:00 до 18:00
              </p>

              <div className="mt-6 space-y-6 lg:space-y-8">
                <div className="relative overflow-hidden">
                  <div className="flex items-center">
                    <BiDetail className="bg-[#4F46E5] text-white object-cover w-12 h-12 rounded-lg shrink-0" />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <a href="#" title="">
                      Оплачивать по частям удобно и выгодно
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <BiDetail className="bg-[#8bb9ff] text-white object-cover w-12 h-12 rounded-lg shrink-0" />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <a href="#" title="">
                        Рассчитайте стоимость рассрочки и оставьте заявку!
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex items-start lg:items-center">
                    <BiDetail className="bg-[#9BCAD7strokeLinecap] text-white object-cover w-12 h-12 rounded-lg shrink-0" />
                    <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                      <a href="#" title="">
                      Рассрочка дается на 3 и 12 месяце.
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        disableScrollLock={false}
      >
        <>
          <div
            onClick={handleClose}
            className="w-fit m-5 transition-all hover:scale-110 rounded-full absolute right-1 border-2 border-white cursor-pointer"
          >
            <IoClose color="white" size={32} />
          </div>
          <div className="w-fit relative m-auto top-[15%]">
            <SendIn />
          </div>
        </>
      </Modal>
    </section>
  );
};

export default Main;
