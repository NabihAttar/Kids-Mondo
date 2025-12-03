"use client";
import RevealText from "@/components/animation/RevealText";
import Image from "next/image";

import testimonialsData from "@/data/testimonials.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

const testimonialBgColors: Record<string, string> = {
  Sara: "#F8D222",
  Omar: "#1262A4",
  Dunia: "#2196C4",
  Mohammad: "#D5242D",
};

export default function Testimonials() {
  return (
    <div className="mxd-section padding-grid-pre-mtext">
      <div className="mxd-container no-padding-container">
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5">
                <div className="mxd-container grid-container">
                  <div className="mxd-block">
                    <div className="mxd-section-title no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title anim-uni-in-up">
                              <RevealText as="h2" className="reveal-type">
                                What our clients say
                              </RevealText>
                            </div>
                          </div>
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__descr">
                              <p className="anim-uni-in-up">
                                We&apos;re more than just executors —
                                we&apos;re your creative partners. Don&apos;t
                                just take our word for it, see what clients have
                                to say about working with us.
                              </p>
                            </div>
                          </div>
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__controls anim-uni-in-up">
                              <a
                                className="mxd-section-title__image-link"
                                href="https://clutch.co/"
                                target="_blank"
                              >
                                {/* clutch svg stays the same */}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Section Title End */}
                  </div>
                </div>
              </div>

              <div className="col-12 col-xl-7">
                <div className="testimonials-slider overflow-hidden anim-uni-in-up">
                  <Swiper
                    className="swiper-testimonials"
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
                  >
                    {testimonialsData.map((item, idx) => {
                      // clean first word of name (handles "Mohammad,")
                      const firstNameKey = item.authorName
                        .split(" ")[0]
                        .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, "");

                      const bgColor =
                        testimonialBgColors[firstNameKey] ||
                        "var(--base-tint)";

                      const isSara = firstNameKey === "Sara";
                      const textColor = isSara ? "#000000" : "#ffffff";

                      return (
                        <SwiperSlide className="swiper-slide" key={idx}>
                          <div
                            className="mxd-testimonials-card radius-m"
                            style={{
                              backgroundColor: bgColor,
                              color: textColor,
                            }}
                          >
                            <div className="mxd-testimonials-card__content">
                              <div className="mxd-testimonials-card__media anim-uni-in-up">
                                <div className="mxd-testimonials-card__photo">
                                  <Image
                                    alt="Author Photo"
                                    src={item.authorPhoto}
                                    width={item.authorPhotoWidth}
                                    height={item.authorPhotoHeight}
                                  />
                                </div>
                              </div>
                              <div className="mxd-testimonials-card__text">
                                <p
                                  className="anim-uni-in-up"
                                  style={{ color: textColor }}
                                >
                                  {item.text}
                                </p>
                              </div>
                            </div>
                            <div className="mxd-testimonials-card__author">
                              <h5
                                className="mxd-testimonials-card__name anim-uni-in-up"
                                style={{ color: textColor }}
                              >
                                {item.authorName}
                              </h5>
                              <p
                                className="mxd-testimonials-card__position t-small anim-uni-in-up"
                                style={{ color: textColor }}
                              >
                                {item.authorPosition}
                                {/* company link commented out for now */}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}

                    <div className="swiper-button-prev mxd-slider-btn mxd-slider-btn-round-prev animate-card-2">
                      <a
                        className="btn btn-round btn-round-small btn-outline slide-left anim-no-delay"
                        href="#"
                      >
                        <i className="ph ph-arrow-left" />
                      </a>
                    </div>
                    <div className="swiper-button-next mxd-slider-btn mxd-slider-btn-round-next animate-card-2">
                      <a
                        className="btn btn-round btn-round-small btn-outline slide-right anim-no-delay"
                        href="#"
                      >
                        <i className="ph ph-arrow-right" />
                      </a>
                    </div>
                  </Swiper>
                  <div className="testimonials-slider__shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
