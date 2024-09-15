import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { InputMask } from "primereact/inputmask";
// import { PiTelegramLogo } from "react-icons/pi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SendIn.scss";

interface FormData {
  fullName: string;
  tel: string;
}

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { register, handleSubmit, formState } = useForm<FormData>({
    mode: "onBlur",
  });

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const serviceId = "service_0nsoz97";
    const templateId = "template_r3zk6cn";
    const publicKey = "8uDWii8PP2-3rRTFn";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Web Wizard",
        message: message,
      },
    };
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const notify = () =>
    toast.success(
      <>
        <h1>Спасибо за заявку!</h1> <br />
        <span>
          Менеджер связжется с <br />
          вами в ближайшее время!
        </span>
      </>
    );

  return (
    <section className="w-1/2 mx-auto p-5">
      <div className="bg-white p-5 rounded-2xl flex flex-col gap-4">
        <h1 className="text-center text-2xl font-bold mb-5">
          Подать заявку на рассрочку
        </h1>
        <form onSubmit={handleSubmit(sendEmail)}>
          <div className="flex flex-col gap-3 mb-3">
            <input
              className="bg-gray-100 placeholder:text-gray-400 text-xl font-medium h-12 outline-none rounded-2xl p-2 px-5"
              {...register("fullName")}
              placeholder="ФИО клиента"
              required
            />
            <InputMask
              className="bg-gray-100 placeholder:text-gray-400 text-xl font-medium h-12 outline-none rounded-2xl p-2 px-5"
              id="phone"
              mask="+7 (999) 999-99-99"
              placeholder="Номер телефона"
              {...register("tel")}
              required
            />
          </div>

          <button
            onClick={notify}
            className="w-full relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Оформить рассрочку
          </button>
        </form>
        <ToastContainer />
        <span className="text-sm">
          Оставьте заявку для консультации по рассрочке без банка. Наша команда
          наших менеджеров рассмотрит ваш запрос и свяжется с вами в ближайшее
          время.
        </span>
      </div>
    </section>
  );
};

export default Contact;
