import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
  Zoom,
} from 'swiper';
import slide1 from '../../../image/slides/slide1.png';
import slide2 from '../../../image/slides/slide2.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';

const Banner = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#e2e8f0',
          '--swiper-pagination-color': '#38bdf8',
        }}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect={'fade'}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        zoom={true}
        modules={[Navigation, Pagination, EffectFade, Keyboard, Autoplay, Zoom]}
        className='mySwiper mb-20'>
        <SwiperSlide>
          <div className='container grid md:grid-cols-2 items-center gap-10 bg-primary py-24'>
            <div>
              <h1 className='text-5xl mb-5'>
                The largest Warehouse for Gym Equipments
              </h1>
              <p className='text-xl'>
                Gymo is the largest warehouse for the gym equipment. Here you
                can get all the gym tools for your business shop. Get your
                products before we running out of stock.
              </p>
            </div>
            <div>
              <img className='block w-3/4 mx-auto' src={slide1} alt='' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container grid md:grid-cols-2 items-center gap-10 bg-primary py-24'>
            <div>
              <h1 className='text-5xl mb-5'>
                Stay Healthy with Gymo Equipments
              </h1>
              <p className='text-xl'>
                Gymo Equipment is to help you stay healthy. Get your exercise
                done with our product. Our largest warehouse is available
                anytime.
              </p>
            </div>
            <div>
              <img className='block w-3/4 mx-auto' src={slide2} alt='' />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
