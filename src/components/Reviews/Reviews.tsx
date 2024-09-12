import React, { ReactElement } from "react";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import './Adaptation.scss'

const image1 = require('../../assets/img/customer/1.jpg');
const image2 = require('../../assets/img/customer/2.jpg');
const image3 = require('../../assets/img/customer/3.jpg');
const image4 = require('../../assets/img/customer/4.jpg');


const Reviews: React.FC = (): ReactElement => {
  return (
    <section className="reviews mb-20">
      <h1
       className="text-center text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl sm:mt-10 py-5"
      >
        Отзывы наших <span>клиентов</span>
        <span className="text-[#7266F3] text-5xl">...</span>
      </h1>
      <div className="reviewsContainer">
        <div className="w-[350px] h-[300px] bg-[#FFFFFF] p-5 py-8 rounded-2xl">
          <div className="flex items-center gap-3">
            <Avatar alt="Абумуслим" src={image1} />
            <div>
              <h3 className="font-bold text-xl ml-1">Абумуслим Д.</h3>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={5.0}
                  precision={5.0}
                  readOnly
                />
              </Stack>
            </div>
          </div>
          <div className="mt-3">
            <span>
              Мобильный мир превзошел мои ожидания. Легко настроил рассрочку и
              получил новый айфон за несколько дней. Обязательно воспользуюсь
              снова, спасибо.
            </span>
          </div>
        </div>
        <div className="w-[350px] h-[300px] bg-[#FFFFFF] p-5 py-8 rounded-2xl">
          <div className="flex items-center gap-3">
            <Avatar alt="Мага E." src={image2} />
            <div>
              <h3 className="font-bold text-xl ml-1">Мага E.</h3>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={5.0}
                  precision={5.0}
                  readOnly
                />
              </Stack>
            </div>
          </div>
          <div className="mt-3">
            <span>
              В полном восторге от Мобильного мира! Получила iPhone 13 Pro с
              гибким планом рассрочки и отличным обслуживанием клиентов.
              Рекомендую.
            </span>
          </div>
        </div>
        <div className="w-[350px] h-[300px] bg-[#FFFFFF] p-5 py-8 rounded-2xl">
          <div className="flex items-center gap-3">
            <Avatar alt="Раяна Б." src={image3} />
            <div>
              <h3 className="font-bold text-xl ml-1">Раяна Б.</h3>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={5.0}
                  precision={5.0}
                  readOnly
                />
              </Stack>
            </div>
          </div>
          <div className="mt-3">
            <span>
              Вы - лучшие из лучших! Аллах благословит вас за вашу работу! Я
              поражена тем, как вы с терпением и уважением относитесь к каждому
              клиенту, даже к самым сложным. Вы заслуживаете только
              благодарности и похвалы!
            </span>
          </div>
        </div>
        <div className="w-[350px] h-[300px] bg-[#FFFFFF] p-5 py-8 rounded-2xl">
          <div className="flex items-center gap-3">
            <Avatar alt="Хава М." src={image4} />
            <div>
              <h3 className="font-bold text-xl ml-1">Хава М.</h3>
              <Stack spacing={1}>
                <Rating
                  name="Хава М."
                  defaultValue={5.0}
                  precision={5.0}
                  readOnly
                />
              </Stack>
            </div>
          </div>
          <div className="mt-3">
            <span>
              Ассаламу алейкум. Товар доставили очень быстро, очень рада, что
              заказал здесь. Спасибо за оперативную доставку и качественный
              товар! Дал аьттув боахкхалб шун за вашу работу.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
