// DoctorCarousel.js
import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Banner = () => {
  const slides = [
    {
      img: 'https://i.ibb.co.com/5KHjCT3/pexels-kerimeveyik-28782562.jpg', // Replace with doctor page image
      title: 'Experienced Doctors',
      description: 'Our team consists of the best specialists dedicated to your health.',
    },
    {
      img: 'https://i.ibb.co.com/xqh8Kbb/pexels-huuhuynh-17188941.jpg',
      title: '24/7 Consultation',
      description: 'Access to professional medical advice at any time of day.',
    },
    {
      img: 'https://i.ibb.co.com/JrShBqf/pexels-enginakyurt-4056214.jpg',
      title: 'Personalized Care',
      description: 'Get healthcare tailored to meet your unique needs.',
    },
  ];

  return (
    <div className="">
          <div className="">
      <Swiper className=""
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center h-[400px] md:h-[500px]
           py-[200px] bg-cover bg-center text-white"
           style={{ backgroundImage: `url(${slide.img})` }}>
            <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}
            <div className="relative z-10 text-center p-4">
              <h2 className="text-3xl font-semibold text-white mb-4 animate-fadeInUp">{slide.title}</h2>
              <p className="text-white mb-6 animate-fadeInUp">{slide.description}</p>
              <Link to="/doctor" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105">
                Learn More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  
  );
};

export default Banner;
