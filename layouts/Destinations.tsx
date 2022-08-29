import Bar from "components/Bar";
import DestinationCard from "components/DestinationCard";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DestinationGridCard from "components/DestinationGridCard";

function Destinations() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <div className="container">
        <div className="mb-12 2xl:mb-16">
          <Bar
            title="Top Destinations"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
          />
        </div>

        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
              <DestinationGridCard
                images={[
                  "images/destination-img-1.png",
                  "images/destination-img-2.png",
                  "images/destination-img-3.png",
                  "images/destination-img-4.png",
                  "images/destination-img-5.png",
                  "images/destination-img-6.png",
                ]}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
