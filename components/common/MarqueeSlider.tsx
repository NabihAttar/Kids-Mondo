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
        <div
          // key={item.id ?? idx}
          className="mxd-section padding-pre-grid mobile-grid-s"
          style={{ marginBottom: "-100px", paddingTop: "0px" }}
        >
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle anim-uni-in-up">
                        <RevealText as="h2" className="reveal-type">
                          Discover What They Be
                        </RevealText>
                      </div>

                      <RevealText
                        as="h2"
                        className="reveal-type"
                        style={{ width: "100%" }}
                      >
                        <p style={{ color: "black", width: "100%", fontSize: "2rem" }}>{item.text}</p>
                      </RevealText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      <p style={{ color: "black", fontSize: "100px" }}>
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
                    <div className="marquee__item has-caption padding-4" style={{background: "#D5242D"}}>
                      <p style={{ color: "white", fontSize: "100px" }}>
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
