import Bar from "components/Bar";
import TourGuideCard from "components/TourGuideCard";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function TourGuide() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <div className="container">
        <div className="mb-8 md:mb-12 2xl:mb-16">
          <Bar
            title="Tour Guides"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
          />
        </div>
      </div>

      <div className="ml-[7vw]">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current;
            if (swiper.navigation) {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.3,
            },
          }}
        >
          <SwiperSlide>
            <TourGuideCard index="01" img="images/tour-guide.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TourGuideCard index="02" img="images/tour-guide.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TourGuideCard index="03" img="images/tour-guide.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TourGuide;
