// Import Swiper React components
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <div className="relative w-full lg:w-[75%] xl:w-[78%]">
      <Swiper
        navigation={{
          prevEl: ".custom-button-prev",
          nextEl: ".custom-button-next",
        }}
        slidesPerView={1}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://new2.codexdigitalagency.com/uploads/banner/80TEi771830.jpg"
            alt=""
            className="h-[324px] lg:h-[440px] object-cover mx-auto w-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://new2.codexdigitalagency.com/uploads/banner/80TEi771830.jpg"
            alt=""
            className="h-[324px] lg:h-[440px] object-cover mx-auto w-full "
          />
        </SwiperSlide>
      </Swiper>
      <SlArrowRight className="hidden cursor-pointer text-2xl lg:block custom-button-next  absolute text-gray-900 top-1/2 right-4 z-50" />
      <SlArrowLeft className="hidden cursor-pointer text-2xl lg:block custom-button-prev absolute text-gray-text-gray-900 left-4 top-1/2 z-50" />
    </div>
  );
};

export default Slider;
