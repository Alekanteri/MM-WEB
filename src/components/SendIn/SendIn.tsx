import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { InputMask } from "primereact/inputmask";
import { PiTelegramLogo } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './SendIn.scss'
interface FormData {
  fullName: string;
  tel: string;
}

const Contact: React.FC = (): ReactElement => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<FormData>({
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
        <h1 className="">Спасибо за заявку!</h1> <br />
        <span>
          Менеджер связжется с <br />
          вами в ближайшее время!
        </span>
      </>
    );

  return (
    <section className="left-10 right-0">
      <div className="w-[500px] m-auto bg-white p-5 rounded-2xl postFromContainer">
        <h1
          style={{
            fontWeight: "600",
            fontSize: "1.5rem",
            marginBottom: "10px",
          }}
          className="text-center py-5"
        >
          Подать заявку на рассрочку
        </h1>
        <form onSubmit={sendEmail}>
          <div className="flex flex-col gap-3 mb-3">
            <input
              className="bg-[#F7F7FB] placeholder:text-[18px] mb-5 text-xl placeholder:text-[#8A9BB5] font-[400] h-[60px] outline-none rounded-2xl p-2 px-5"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ФИО клиента"
              required
            />
            <InputMask
              className="bg-[#F7F7FB] placeholder:text-[18px] mb-5 text-xl placeholder:text-[#8A9BB5] font-[400] h-[60px] outline-none rounded-2xl p-2 px-5"
              id="phone"
              mask="+7 (999) 999-99-99"
              placeholder="Номер телефона"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
            ></InputMask>
          </div>

          <div className="w-full relative inline-flex  mb-5 group">
            <div className="w-full absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

            <button
              onClick={notify}
              className="w-full relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Оформить рассрочку
            </button>
          </div>
        </form>
        <ToastContainer />
        <span className="text-[14px]">
          Оставьте заявку для консультации по рассрочке без банка. Наша команда
          наших менеджеров рассмотрит ваш запрос и свяжется с вами в ближайшее
          время.
        </span>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
