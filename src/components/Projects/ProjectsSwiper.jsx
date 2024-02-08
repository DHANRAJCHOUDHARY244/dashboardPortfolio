import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from './ProjectCard';
import SectionTitle from '../Templates/Text/SectionTitle';
import SwiperNavigation from '../Templates/Swiper/SwiperNavigation';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default function ProjectsSwiper(props) {
  SwiperCore.use([Autoplay]); // start autoplay

  return (
    <div className='container-fluid'>
      <div className='row p-30-0'>
        {/* title */}
        <SectionTitle title='Projects' />

        {/* project items  */}
        <div className={'col-lg-12'}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            speed={900}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 992
              992: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              // when window width is >= 1200
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 1500
              1500: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={{ nextEl: '.art-project-swiper-next', prevEl: '.art-project-swiper-prev' }}
            pagination={{ el: '.project-swiper-pagination', type: 'bullets', clickable: true }}
          >
            {props.data.projects.map((p) => (
              <SwiperSlide key={p.id} className='swiper-slide art-grid art-grid-3-col art-gallery'>
                <ProjectCard key={p.id} project={p} class=' art-project-swiper-card' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <SwiperNavigation section='project' />
      </div>
    </div>
  );
}
