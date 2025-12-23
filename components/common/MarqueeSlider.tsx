import Link from "next/link";
import Image from "next/image";

import testimonialsPortfolioData from "@/data/testimonials-portfolio.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import AnimatedButton from "../animation/AnimatedButton";
import RevealText from "../animation/RevealText";

import VelocityMarquee from "@/components/animation/VelocityMarquee";
import { projects6, projects7 } from "@/data/projects.json";
import React from "react";
export default function MarqueeSlider() {
  return (
    <>





      {testimonialsPortfolioData.map((item, idx) => (
        <div className="col-12  mxd-testimonials-photo__content mxd-grid-item no-margin">
          <div
            className="mxd-testimonials-photo__author"
            data-swiper-parallax-x={-250}
            data-swiper-parallax-opacity={0}
          >
            <RevealText as="h2" className="reveal-type">
              Discover What They Can Be
            </RevealText>
          </div>
          <div
            className="mxd-testimonials-photo__text"
            data-swiper-parallax-x={-300}
            data-swiper-parallax-opacity={0}
          >
            <p className="t-large" style={{ color: "black" }}>{item.text}</p>
          </div>
        </div>
      ))}


      <div className="mxd-section padding-pre-title">
        <div className="mxd-container fullwidth-container">
          {/* Block - Marquee Images Two Lines Start */}
          <div className="mxd-block">
            {/* top line */}
            <VelocityMarquee direction="left" className="marquee marquee--gsap">
              {/* item */}
              {projects6.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="marquee__item image">
                    <Link className="marquee__link" href={`/project-details`}>
                      <Image
                        alt="Image"
                        src={item.src}
                        width={1200}
                        height={1000}
                      />
                    </Link>
                  </div>
                  {/* item */}
                  {item.title && (
                    <div className="marquee__item has-caption padding-4">
                      <p>
                        {item.title.split(" ")[0]}
                        <br />
                        {item.title.split(" ")[1]}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </VelocityMarquee>
            {/* bottom line */}
            <VelocityMarquee direction="right" className="marquee marquee--gsap">
              {projects7.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="marquee__item image">
                    <Link className="marquee__link" href={`/project-details`}>
                      <Image
                        alt="Image"
                        src={item.src}
                        width={1200}
                        height={1000}
                      />
                    </Link>
                  </div>
                  {/* item */}
                  {item.title && (
                    <div className="marquee__item has-caption padding-4">
                      <p>
                        {item.title.split(" ")[0]}
                        <br />
                        {item.title.split(" ")[1]}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </VelocityMarquee>
          </div>
          {/* Block - Marquee Images Two Lines End */}
        </div>
      </div>
    </>
  );
}
