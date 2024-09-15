import React from "react";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
//@ts-ignore
import image1 from "../../assets/img/customer/1.jpg";
//@ts-ignore
import image2 from "../../assets/img/customer/2.jpg";
//@ts-ignore
import image3 from "../../assets/img/customer/3.jpg";
//@ts-ignore
import image4 from "../../assets/img/customer/4.jpg";

interface Review {
  image: string;
  name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    image: image1,
    name: "Абумуслим Д.",
    rating: 5.0,
    text: "Мобильный мир превзошел мои ожидания. Легко настроил рассрочку и получил новый айфон за несколько дней. Обязательно воспользуюсь снова, спасибо.",
  },
  {
    image: image2,
    name: "Мага E.",
    rating: 5.0,
    text: "В полном восторге от Мобильного мира! Получила iPhone 13 Pro с гибким планом рассрочки и отличным обслуживанием клиентов. Рекомендую.",
  },
  {
    image: image3,
    name: "Раяна Б.",
    rating: 5.0,
    text: "Вы - лучшие из лучших! Аллах благословит вас за вашу работу! Я поражена тем, как вы с терпением и уважением относитесь к каждому клиенту, даже к самым сложным. Вы заслуживаете только благодарности и похвалы!",
  },
  {
    image: image4,
    name: "Хава М.",
    rating: 5.0,
    text: "Ассаламу алейкум. Товар доставили очень быстро, очень рада, что заказал здесь. Спасибо за оперативную доставку и качественный товар! Дал аьттув боахкхалб шун за вашу работу.",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="w-full mx-auto mb-20">
      <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl sm:mt-10 py-5">
        Отзывы наших <span>клиентов</span>
        <span className="text-[#7266F3] text-5xl">...</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-5 py-8 rounded-2xl w-full md:w-[340px] lg:w-[300px]"
          >
            <div className="flex items-center gap-3">
              <Avatar alt={review.name} src={review.image} />
              <div>
                <h3 className="font-bold text-xl ml-1">{review.name}</h3>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={review.rating}
                    precision={5.0}
                    readOnly
                  />
                </Stack>
              </div>
            </div>
            <div className="mt-3">
              <span>{review.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
