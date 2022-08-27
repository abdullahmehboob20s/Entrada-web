import Bar from "components/Bar";
import TrendingCard from "components/TrendingCard";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Trending() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <div className="container">
        <div className="mb-12 2xl:mb-16">
          <Bar
            prevButton={prevRef}
            nextButton={nextRef}
            title="Trending 2020"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
          />
        </div>
      </div>
      <div className="ml-[7vw]">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={30}
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
        >
          <SwiperSlide>
            <TrendingCard img="images/trending-img-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <TrendingCard img="images/trending-img-3.png" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Trending;
