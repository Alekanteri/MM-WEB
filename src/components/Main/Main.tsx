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
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:max-w-none">
            <div className="lg:col-span-4 self-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                Мобильный мир. Телефоны в рассрочку
              </h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                Выберите выгодный тариф и заполните предварительную
                онлайн-заявку
              </p>
              <button
                onClick={handleOpen}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-3 px-8 transition duration-200"
              >
                Оформить рассрочку
              </button>
            </div>

            <div className="bg-gradient-to-r from-[#4F46E5] via-[#ab44ff] to-[#6F76DC] rounded-xl rounded-t-[5rem] lg:col-span-5 self-end">
              <img
                width={350}
                className="mx-auto"
                src="https://apple-com.ru/image/catalog/product/iphone%2012%20pro/promo/hero_large.png"
                alt=""
              />
            </div>

            <div className="lg:order-last lg:pb-20 lg:col-span-3 self-end">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                ⚡️ Работаем с 9:00 до 18:00
              </p>

              <div className="mt-6 space-y-6 lg:space-y-8">
                {[
                  {
                    iconColor: "bg-[#4F46E5]",
                    text: "Оплачивать по частям удобно и выгодно",
                  },
                  {
                    iconColor: "bg-[#8bb9ff]",
                    text: "Рассчитайте стоимость рассрочки и оставьте заявку!",
                  },
                  {
                    iconColor: "bg-[#9BCAD7]",
                    text: "Рассрочка дается на 3 и 12 месяце.",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative overflow-hidden">
                    <div className="flex items-start lg:items-center">
                      <BiDetail
                        className={`${item.iconColor} text-white object-cover w-12 h-12 rounded-lg shrink-0`}
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        <span>{item.text}</span>
                      </p>
                    </div>
                  </div>
                ))}
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
            className="absolute right-1 top-1 w-fit m-5 transition-all hover:scale-110 rounded-full border-2 border-white cursor-pointer"
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
