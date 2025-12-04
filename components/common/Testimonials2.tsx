"use client";
import Image from "next/image";

import testimonialsPortfolioData2 from "@/data/testimonials-portfolio2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

import RevealText from "../animation/RevealText";

export default function Testimonials2() {
  return (
    <div
      id="testimonials"
      className="mxd-section overflow-hidden padding-default"
    >
      <div className="mxd-container grid-container">
        {/* Block - Testimonials Slider #02 with Section Title Start */}
        <div className="mxd-block">
          <div className="testimonials-slider no-padding">
            {/* slider main container */}
            <Swiper
              {...{
                slidesPerView: "auto",
                grabCursor: true,
                spaceBetween: 30,
                autoplay: true,
                delay: 3e3,
                speed: 1e3,
                loop: true,
                parallax: true,
                pagination: {
                  el: ".swiper-pagination",
                  type: "fraction",
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              }}
              modules={[Navigation, Pagination, Parallax]}
              className="swiper-testimonials no-padding"
            >
              {testimonialsPortfolioData2.map((item, idx) => (
                <SwiperSlide
                  className="swiper-slide mxd-fullwidth-slide"
                  key={idx}
                >
                  <div className="mxd-testimonials-photo">
                    <div className="container-fluid p-0 fullheight-l">
                      <div className="row g-0 d-flex align-items-stretch fullheight-l">
                        <div className="col-12 col-lg-6 mxd-testimonials-photo__content mxd-grid-item no-margin">
                          <div
                            className="mxd-testimonials-photo__author"
                            data-swiper-parallax-x={-250}
                            data-swiper-parallax-opacity={0}
                          >
                            <RevealText as="h2" className="reveal-type">
                              Our philosophy centers on:
                            </RevealText>
                          </div>
                          <ul className="mxd-philosophy-list t-large">
                            <li>
                              Empowering children to act independently and
                              think for themselves
                            </li>
                            <li>
                              Connecting play to purpose so learning feels
                              natural and exciting
                            </li>
                            <li>
                              Teaching values of citizenship, respect, and
                              inclusion through community interaction
                            </li>
                            <li>
                              Preparing future leaders with life skills that
                              classrooms alone can’t fully deliver
                            </li>
                          </ul>
                          <div
                            className="mxd-testimonials-photo__text"
                            data-swiper-parallax-x={-300}
                            data-swiper-parallax-opacity={0}
                          >
                            {/* 🔹 NEW BULLET LIST HERE */}


                            {/* existing paragraphs */}
                            <p className="t-large" style={{ color: "black" }}>{item.text}</p>
                            <p className="t-large" style={{ color: "black" }}>{item.text1}</p>
                          </div>
                        </div>

                        <div
                          className="col-12 col-lg-6 mxd-testimonials-photo__image mxd-grid-item no-margin fullheight-l"
                          data-swiper-parallax-x={-450}
                          data-swiper-parallax-opacity={0}
                        >
                          <div className="mxd-testimonials-photo__image-inner radius-l fullheight-l">
                            <Image
                              alt="Testimonials Image"
                              src={item.testimonialImage}
                              width={item.testimonialImageWidth}
                              height={item.testimonialImageHeight}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
