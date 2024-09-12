import React, { ReactElement } from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
import './Pros.scss'

const Pros: React.FC = (): ReactElement => {
  return (
    <section className="mt-20 mb-20">
        <div className="prosContainer">
          <div className="w-[400px] bg-white flex justify-between items-center gap-3 p-5 px-10 rounded-2xl prosInfo">
            <div className="flex flex-col">
              <span className="text-xl font-bold"> Бесплатная </span>
              <span className="text-xl font-bold"> доставка по РФ</span>
            </div>
            <div className="bg-[#F7F7FB] p-3 rounded-full">
              <MdOutlineDeliveryDining color="#7266F3" size={40} />
            </div>
          </div>
          <div className="w-[400px] bg-white flex justify-between items-center gap-3 p-5 px-10 rounded-2xl prosInfo">
            <div className="flex flex-col">
              <span className="text-xl font-bold">
                {" "}
                Гарантированный возврат
              </span>
            </div>
            <div className="bg-[#F7F7FB] p-3 rounded-full">
              <MdOutlineDeliveryDining color="#7266F3" size={40} />
            </div>
          </div>
          <div className="w-[400px] bg-white flex justify-between items-center gap-3 p-5 px-10 rounded-2xl prosInfo">
            <div className="flex flex-col">
              <span className="text-xl font-bold">Оригинальная </span>
              <span className="text-xl font-bold">Техника</span>
            </div>
            <div className="bg-[#F7F7FB] p-3 rounded-full">
              <MdOutlineDeliveryDining color="#7266F3" size={40} />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Pros;
