import React from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
import "./Pros.scss";

interface Pro {
  title: string;
  icon: React.ReactNode;
}

const pros: Array<Pro> = [
  {
    title: "Бесплатная доставка по РФ",
    icon: <MdOutlineDeliveryDining color="#7266F3" size={40} />,
  },
  {
    title: "Гарантированный возврат",
    icon: <MdOutlineDeliveryDining color="#7266F3" size={40} />,
  },
  {
    title: "Оригинальная Техника",
    icon: <MdOutlineDeliveryDining color="#7266F3" size={40} />,
  },
];

const Pros: React.FC = () => {
  return (
    <section className="mt-20 mb-20 w-full mx-auto p-10">
      <div className="prosContainer flex flex-wrap justify-center gap-4">
        {pros.map((pro, index) => (
          <div
            key={index}
            className="bg-white flex justify-between items-center gap-3 p-5 px-10 rounded-2xl prosInfo"
          >
            <div className="flex flex-col">
              <span className="text-xl font-bold">{pro.title}</span>
            </div>
            <div className="bg-gray-200 p-3 rounded-full">{pro.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pros;
