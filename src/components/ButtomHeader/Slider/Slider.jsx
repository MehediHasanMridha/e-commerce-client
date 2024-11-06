// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Slider = () => {
    return (
        <div className='w-[90%] md:w-[50%] mx-auto'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="https://new2.codexdigitalagency.com/uploads/banner/80TEi771830.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://new2.codexdigitalagency.com/uploads/banner/hRl0l581710.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://new2.codexdigitalagency.com/uploads/banner/KKJfT265355.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://new2.codexdigitalagency.com/uploads/banner/KKJfT265355.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;