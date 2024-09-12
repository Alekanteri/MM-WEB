import React, { ReactElement } from "react";
// @ts-ignore
import About from "../../assets/img/MOBILEMIR.jpg";
// @ts-ignore
import MW from "../../assets/img/MW.png";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import "./Adaptation.scss";

const AboutUs: React.FC = (): ReactElement => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="bg-white rounded-t-[4rem]">
      <div className="aboutUsContainer">
        <div className="flex justify-center">
          <img
            className="rounded-2xl z-20 hover:scale-105 transition-all MobileMir"
            src={About}
            alt="Mobile Mir"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-4xl creditPhoneText">
            Телефон в рассрочку надежно, выгодно, быстро в Ингушетии
          </h1>
          <h3 className="w-[700px] mt-5 text-[16px] infoText">
            Мобильный Мир - ведущий розничный торговец мобильными устройствами и
            аксессуарами, предлагающий широкий ассортимент товаров ведущих
            брендов по конкурентоспособным ценам. Наша миссия - предоставлять
            нашим клиентам новейшие технологии и инновационные решения для
            улучшения их работы с мобильными устройствами.
          </h3>
          <button
            className="flex items-center gap-3 text-[16px] font-[600] text-[#857AFF] mt-5"
            onClick={toggleVisibility}
          >
            {isVisible ? "Скрыть" : "узнать подробнее"}
            {isVisible ? <GoArrowLeft size={20} /> : <GoArrowRight size={20} />}
          </button>
          {isVisible && (
            <>
              <h3 className="w-[700px] mt-5 text-[16px] infoText">
                Рассрочка без участия банка В "Мобильном мире" понимают, что
                покупка нового мобильного устройства может стать существенной
                инвестицией. Именно поэтому мы предлагаем удобную рассрочку без
                участия банка. Наш тарифный план позволяет вам приобрести
                желаемое устройство и оплачивать его ежемесячными платежами без
                каких-либо скрытых комиссий или процентных ставок.
              </h3>

              <h3 className="w-[700px] mt-5 text-[16px] infoText">
                Преимущества нашего плана рассрочки: Без участия банка: Мы не
                требуем никаких банковских гарантий или проверок
                кредитоспособности, что упрощает получение одобрения. Гибкие
                условия оплаты: выберите график платежей, соответствующий вашему
                бюджету, на срок от 3 до 12 месяцев. Отсутствие процентных
                ставок: Мы не взимаем проценты за рассрочку, поэтому вы
                оплачиваете только первоначальную стоимость устройства. Никаких
                скрытых платежей: Наш тарифный план прозрачен и понятен, без
                каких-либо дополнительных комиссий или сборов. как это работает:
              </h3>
              <h3 className="w-[700px] mt-5 text-[16px] infoText">
                Выберите мобильное устройство: просмотрите наш ассортимент и
                выберите смартфон или планшет, который вам нравится. Подайте
                заявку на рассрочку: заполните простую форму заявки и получите
                возможность приобрести устройство в рассрочку с удобными
                условиями!
              </h3>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
