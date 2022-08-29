import Bar from "components/Bar";
import CategoryCard from "components/CategoryCard";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Category() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <div className="container">
        <div className="mb-10 sm:mb-14">
          <Bar
            title="Select Category"
            subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!"
            prevButton={prevRef}
            nextButton={nextRef}
          />
        </div>
      </div>

      <div className="ml-[7vw]">
        <Swiper
          slidesPerView={4.5}
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
          breakpoints={{
            200: {
              slidesPerView: 1.2,
            },
            400: {
              slidesPerView: 1.7,
            },
            560: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
        >
          <SwiperSlide>
            <CategoryCard
              title="Beach Activity"
              subtitle="196 Activities"
              icon="images/beach-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Bungee Jump"
              subtitle="196 Activities"
              icon="images/jump-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="City Tours"
              subtitle="196 Activities"
              icon="images/city-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Hiking Trips"
              subtitle="196 Activities"
              icon="images/hiking-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Beach Activity"
              subtitle="196 Activities"
              icon="images/beach-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Bungee Jump"
              subtitle="196 Activities"
              icon="images/jump-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="City Tours"
              subtitle="196 Activities"
              icon="images/city-icon.svg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard
              title="Hiking Trips"
              subtitle="196 Activities"
              icon="images/hiking-icon.svg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Category;
