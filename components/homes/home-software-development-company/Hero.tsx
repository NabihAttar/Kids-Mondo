"use client";

import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
      <div className="mxd-hero-03">
        <div className="mxd-hero-03__wrap loading-wrap">
          {/* top part */}
          <div className="mxd-hero-03__top">
            {/* marquee */}
            <div className="mxd-hero-03__marquee loading__item">
              <VelocityMarquee className="marquee marquee-right--gsap">
                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-move"
                      alt="Image"
                      src="/img/hero/Frame 67.png"
                      width={1000}
                      height={1532}
                    />
                  </div>
                </div>

                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-rotate-slow"
                      alt="Image"
                      src="/img/hero/helmet.png"
                      width={1410}
                      height={1056}
                    />
                  </div>
                </div>

                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-move"
                      alt="Image"
                      src="/img/hero/rendering-firefighter.png"
                      width={2152}
                      height={2015}
                    />
                  </div>
                </div>

                <div className="marquee__item one-line">
                  <div className="hero-03-marquee__image">
                    <Image
                      className="mxd-pulse-small"
                      alt="Image"
                      src="/img/hero/blue-bowl-with-spoon-it-that-says-egg-it 2.png"
                      width={800}
                      height={780}
                    />
                  </div>
                </div>
              </VelocityMarquee>
            </div>

            {/* headline */}
            <div className="mxd-hero-03__headline">
              <p className="hero-03-headline__caption loading__item">
                Where Kids
                <br />
                Become Heroes of
                <br />
                Their Own Story
              </p>

              <h1 className="hero-03-headline__title loading__item">
                <span className="hero-03-headline__hidden">KidzMondo</span>

                {/* Mobile logo */}
                <Image
                  className="hero-03-headline__svg-mobile"
                  src="/img/avatars/KidzMondo(6).svg"
                  alt="KidzMondo"
                  width={238}
                  height={108}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />

                {/* Desktop logo */}
                <Image
                  className="hero-03-headline__svg"
                  src="/img/avatars/KidzMondo(6).svg"
                  alt="KidzMondo"
                  width={400}
                  height={72}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </h1>
            </div>
          </div>

          {/* ✅ bottom video part */}
          <div className="mxd-hero-03__bottom">
            <div className="mxd-container">
              <div className="mxd-divider">
                <div className="mxd-divider__video">
                  <video
                    className="hero-bottom-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src="/video/IMG_4456.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          {/* ✅ end bottom video */}
        </div>
      </div>
    </div>
  );
}
