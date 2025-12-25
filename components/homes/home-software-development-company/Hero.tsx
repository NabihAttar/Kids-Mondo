import VelocityMarquee from "@/components/animation/VelocityMarquee";
import VideoParallax from "@/components/animation/VideoParallax";
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
              {/* Marquee Start */}
              <VelocityMarquee className="marquee marquee-right--gsap">
                {/* item */}
                {/* <div className="marquee__item one-line">
                  <div className="hero-03-marquee__video">
                    <video
                      preload="auto"
                      autoPlay
                      loop
                      muted
                      poster="video/hero/hero-video-02.webp"
                    >
                      <source
                        type="video/mp4"
                        src="/video/hero/hero-video-02.mp4"
                      />
                      <source
                        type="video/webm"
                        src="/video/hero/hero-video-02.webm"
                      />
                      <source
                        type="video/ogv"
                        src="/video/hero/hero-video-02.ogv"
                      />
                    </video>
                  </div>
                </div> */}
                {/* item */}
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
                {/* item */}
                {/* <div className="marquee__item one-line">
                  <div className="hero-03-marquee__video">
                    <video
                      preload="auto"
                      autoPlay
                      loop
                      muted
                      poster="video/hero/hero-video-01.webp"
                    >
                      <source
                        type="video/mp4"
                        src="/video/hero/hero-video-01.mp4"
                      />
                      <source
                        type="video/webm"
                        src="/video/hero/hero-video-01.webm"
                      />
                      <source
                        type="video/ogv"
                        src="/video/hero/hero-video-01.ogv"
                      />
                    </video>
                  </div>
                </div>
                {/* item */}
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
                {/* item */}
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
                {/* item */}
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
              {/* Marquee End */}
            </div>
            {/* headline */}
            <div className="mxd-hero-03__headline">
              <p className="hero-03-headline__caption loading__item" style={{color:"black"}}>
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
    src="/img/avatars/KidzMondo%20(2).svg"
    alt="KidzMondo"
    width={238}
    height={108}
    priority
    style={{ width: "100%", height: "auto" }}
  />

  {/* Desktop logo */}
  <Image
    className="hero-03-headline__svg"
    src="/img/avatars/KidzMondo%20(2).svg"
    alt="KidzMondo"
    width={400}
    height={72}
    priority
    style={{ width: "100%", height: "auto" }}
  />
</h1>

            </div>
          </div>
          {/* bottom part */}
          {/* <div className="mxd-hero-03__bottom">
            <div className="mxd-container">
              <div className="mxd-divider">
                <div className="mxd-divider__video">
                  <VideoParallax
                    className="video parallax-video"
                    src="/video/1920x1080_video-04.webm"
                    poster="/video/1920x1080_video-04.webp"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
