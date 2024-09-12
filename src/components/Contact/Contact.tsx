import React, { ReactElement } from "react";
import axios from "axios";
import { InputMask } from "primereact/inputmask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import './Adaptation.scss'


const Contact: React.FC = (): ReactElement => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const notify = () =>
    toast.success("Спасибо за зайвку", {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
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
  return (
    <section className="flex justify-center items-center m-auto contact">
      <div className="grid grid-cols-2 items-center gap-20 px-5 pb-10 mt-20 rounded-r-x p-5 contactContainer">
        <div>
          <Accordion
            style={{
              marginBottom: "1rem",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore color="#4F46E5" size={35} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h2 className="text-xl font-[600]">
                Устали от строгих условий оплаты банка?
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              Вы устали от строгих условий оплаты, установленных банком? Хотите
              насладиться свободой выбора собственного графика платежей? Не
              ищите дальше! Наши планы рассрочки предлагают вам возможность
              платить в удобном для вас темпе, без необходимости - телефон
              банка.
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              marginBottom: "1rem",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore color="#4F46E5" size={35} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h2 className="text-xl font-[600]">Удобные условии!</h2>
            </AccordionSummary>
            <AccordionDetails>
              Благодаря нашему простому процессу вы можете подать заявку онлайн
              и получить одобрение в кратчайшие сроки. Больше никакой
              утомительной бумажной работы и долгих телефонных звонков. Наша
              преданная команда будет сопровождать вас на каждом этапе пути,
              обеспечивая бесперебойную работу.
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded
            style={{
              marginBottom: "1rem",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore color="#4F46E5" size={35} />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <h2 className="text-xl font-[600]">
                Возьмите под контроль свои финансы сегодня!
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              Так зачем ждать? Возьмите под контроль свои финансы сегодня и
              подайте заявку на нашу рассрочку. Заполните форму ниже, чтобы
              начать, и позвольте нам помочь вам достичь ваших целей не тратя
              денег.
            </AccordionDetails>
          </Accordion>
        </div>
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
            Оставьте заявку для консультации по рассрочке без банка. Наша
            команда наших менеджеров рассмотрит ваш запрос и свяжется с вами в
            ближайшее время.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
