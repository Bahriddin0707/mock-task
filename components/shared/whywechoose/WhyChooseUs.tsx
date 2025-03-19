"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./card/Card";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { cards } from "@/lib/cards";
import useResponsive from "./useResponsive";

const WhyChooseUs = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isMobile = useResponsive();

  const nexto = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    } else {
      console.error("Swiper instance is not available.");
    }
  };

  const prevo = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    } else {
      console.error("Swiper instance is not available.");
    }
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 uppercase">
          Why Choose Us
        </h2>

        {isMobile ? (
          <div className="flex flex-col gap-4">
            {cards.map((card, index) => (
              <Card key={index} {...card} className="w-full" />
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <FaChevronLeft
                className="text-white w-12 h-12 cursor-pointer"
                onClick={() => prevo()}
              />
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <FaChevronRight
                className="text-white w-12 h-12 cursor-pointer"
                onClick={() => nexto()}
              />
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 0 },
                600: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index} className="w-full">
                  <Card {...card} className="w-full" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
