// Import Swiper React components
import React from 'react';
import SwiperCore, { Pagination, Navigation, Lazy } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../../styles/features/module.carousel.css';
import 'swiper/swiper.min.css';
import 'swiper/components/lazy/lazy.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import wildfireimg1 from '../../images/kebakaranhutan1.jpg';
import wildfireimg2 from '../../images/kebakaranhutan2.jpg';
import wildfireimg3 from '../../images/kebakaranhutan3.jpg';
import wildfireimg4 from '../../images/basisdatafinal.png';

SwiperCore.use([Pagination, Navigation, Lazy]);

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      lazy={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={wildfireimg1} alt="image-slider" />
        <h6>
          Antara 2015 – 2019,{' '}
          <b>4,4 juta hektar lahan telah terbakar di Indonesia.</b> Sekitar
          789.600 hektar kawasan ini (18 persen diantaranya) telah berulang kali
          terbakar.
        </h6>
      </SwiperSlide>
      <SwiperSlide>
        <img src={wildfireimg2} alt="image-slider" />
        <h6>
          Koordinator Pusat Studi Lingkungan Hidup, Universitas Riau Dr Suwondo
          MS memperkirakan{' '}
          <b>Riau mengalami kerugian materiil sebesar Rp 50 triliun lebih</b>{' '}
          akibat kabut asap kebakaran hutan dan lahan atau karhutla melanda
          daerah itu sejak beberapa bulan terakhir.
        </h6>
      </SwiperSlide>
      <SwiperSlide>
        <img src={wildfireimg3} alt="image-slider" />
        <h6>
          WWF-Indonesia, organisasi non pemerintah internasional yang menangani
          masalah konservasi dan lingkungan, menyatakan bahwa{' '}
          <b>Karhutla 2019 di Indonesia sudah seharusnya dinyatakan darurat.</b>
        </h6>
      </SwiperSlide>
      <SwiperSlide>
        <img src={wildfireimg4} alt="image-slider" />
        <div className="product-adv-text">
          <h6>
            <b>Oleh karena itu, kami menciptakan fire detector</b>
          </h6>
          <ul>
            <li>Menggunakan fuzzy logic</li>
            <li>Menggunakan sensor BME680</li>
            <li>Mendeteksi kebakaran dini</li>
          </ul>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
