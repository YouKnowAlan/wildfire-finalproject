import AppLayout from '../layout/AppLayout';
// Import Swiper React components
import React from 'react';
import SwiperCore, { Pagination, Navigation, Lazy } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../../styles/pages/module.contact.css';
import 'swiper/swiper.min.css';
import 'swiper/components/lazy/lazy.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import linkedinImg from '../../images/linkedin.svg';
import gmailImg from '../../images/gmail.svg';

import { profileTeam } from '../data/profileTeam';

SwiperCore.use([Pagination, Navigation, Lazy]);

export default function Contact() {
  return (
    <AppLayout>
      <h2 className="title-section">Our Team</h2>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        lazy={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {profileTeam.map((profile) => {
          return (
            <SwiperSlide key={profile.id}>
              <img
                src={profile.img}
                alt="image-slider"
                className="img-profile"
              />
              <div className="profile-nama-nim">
                <p>{profile.nama}</p>
                <p>{profile.nim}</p>
              </div>
              <div className="social-media">
                <a href={profile.linkedin}>
                  <img src={linkedinImg} className="social-media-img" />
                </a>
                <a href={`mailto:${profile.gmail}`}>
                  <img src={gmailImg} className="social-media-img" />
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </AppLayout>
  );
}
