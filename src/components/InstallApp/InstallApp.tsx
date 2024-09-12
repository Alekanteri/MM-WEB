import React, { ReactElement } from "react";
// @ts-ignore
import QR from "../../assets/img/QRtiger.png";
import "./Adaptation.scss";

const InstallApp: React.FC = (): ReactElement => {
  return (
    <section className="bg-white flex justify-center items-center rounded-t-[4rem]">
      <div className="installApp">
        <div className="bg-[#7db1ff] flex items-center gap-1 rounded-2xl p-6 installAppRow">
          <div className="">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-4xl">
              Добро пожаловать в Мобильный Мир Рассрочки!
            </h1>
            <h3 className="mt-5 text-[16px] infoText">
              Вы ищете удобный и быстрый способ получить кредит без походов в
              банк? Наше приложение Мобильный Мир Рассрочки - это именно то, что
              вам нужно! Скачайте наше приложение в App Store и откройте для
              себя мир возможностей.
            </h3>
          </div>
          <div className="m-auto">
            <img src={QR} alt="" />
          </div>
        </div>
        <div className="bg-[#73aab9] flex items-center gap-1 rounded-2xl p-6 installAppRow">
          <div className="">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-4xl welocmeText">
              Добро пожаловать в Мобильный Мир Рассрочки!
            </h1>
            <h3 className="mt-5 text-[16px] infoText">
              Вы ищете удобный и быстрый способ получить кредит без походов в
              банк? Наше приложение Мобильный Мир Рассрочки - это именно то, что
              вам нужно! Скачайте наше приложение в App Store и откройте для
              себя мир возможностей.
            </h3>
          </div>
          <div className="m-auto">
            <img src={QR} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallApp;
