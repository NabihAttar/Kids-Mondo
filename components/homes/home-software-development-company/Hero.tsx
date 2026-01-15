"use client";

import { useRef, useState } from "react";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      if (!isPlaying) {
        // Start playing WITH sound
        v.muted = false;
        v.volume = 1;
        await v.play();
        setIsPlaying(true);
      } else {
        // Pause on second click (optional)
        v.pause();
        setIsPlaying(false);
      }
    } catch {
      // fallback if browser blocks anything
      v.controls = true;
    }
  };

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

          {/* ✅ bottom video part (visible, click plays with sound) */}
          <div className="mxd-hero-03__bottom">
            <div className="mxd-container">
              <div className="mxd-divider">
                <div className="mxd-divider__video" style={{ position: "relative" }}>
                  <video
                    ref={videoRef}
                    className="hero-bottom-video"
                    playsInline
                    preload="metadata"
                    muted={false}
                    onClick={handleVideoClick}
                    // ✅ shows first frame even when not playing
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      cursor: "pointer",
                    }}
                  >
                    <source
                      src="/video/Animate_the_banner_202601131138.mp4"
                      type="video/mp4"
                    />
                  </video>

                  {/* Optional overlay text */}
                  {!isPlaying && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pointerEvents: "none",
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(0,0,0,0.55)",
                          color: "#fff",
                          padding: "10px 14px",
                          borderRadius: 999,
                          fontSize: 14,
                        }}
                      >
                        Tap to play with sound
                      </div>
                    </div>
                  )}
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
