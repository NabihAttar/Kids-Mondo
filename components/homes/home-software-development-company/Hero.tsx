// "use client";

// import { useEffect, useRef, useState } from "react";
// import VelocityMarquee from "@/components/animation/VelocityMarquee";
// import Image from "next/image";

// export default function Hero() {
//   const [open, setOpen] = useState(false);
//   const modalVideoRef = useRef<HTMLVideoElement | null>(null);

//   const openVideo = () => setOpen(true);
//   const closeVideo = () => setOpen(false);

//   // lock scroll + autoplay with sound inside popup
//   useEffect(() => {
//     if (!open) return;

//     const prevOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") closeVideo();
//     };
//     window.addEventListener("keydown", onKeyDown);

//     // try to play with sound after opening (triggered by user click)
//     const v = modalVideoRef.current;
//     if (v) {
//       v.muted = false;
//       v.volume = 1;
//       v.currentTime = 0;
//       v.play().catch(() => {
//         // fallback: show controls if browser blocks
//         v.controls = true;
//       });
//     }

//     return () => {
//       window.removeEventListener("keydown", onKeyDown);
//       document.body.style.overflow = prevOverflow;

//       const v2 = modalVideoRef.current;
//       if (v2) v2.pause();
//     };
//   }, [open]);

//   return (
//     <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
//       <div className="mxd-hero-03">
//         <div className="mxd-hero-03__wrap loading-wrap">
//           {/* top part */}
//           <div className="mxd-hero-03__top">
//             {/* marquee */}
//             <div className="mxd-hero-03__marquee loading__item">
//               <VelocityMarquee className="marquee marquee-right--gsap">
//                 <div className="marquee__item one-line">
//                   <div className="hero-03-marquee__image">
//                     <Image
//                       className="mxd-move"
//                       alt="Image"
//                       src="/img/hero/Frame 67.png"
//                       width={1000}
//                       height={1532}
//                     />
//                   </div>
//                 </div>

//                 <div className="marquee__item one-line">
//                   <div className="hero-03-marquee__image">
//                     <Image
//                       className="mxd-rotate-slow"
//                       alt="Image"
//                       src="/img/hero/helmet.png"
//                       width={1410}
//                       height={1056}
//                     />
//                   </div>
//                 </div>

//                 <div className="marquee__item one-line">
//                   <div className="hero-03-marquee__image">
//                     <Image
//                       className="mxd-move"
//                       alt="Image"
//                       src="/img/hero/rendering-firefighter.png"
//                       width={2152}
//                       height={2015}
//                     />
//                   </div>
//                 </div>

//                 <div className="marquee__item one-line">
//                   <div className="hero-03-marquee__image">
//                     <Image
//                       className="mxd-pulse-small"
//                       alt="Image"
//                       src="/img/hero/blue-bowl-with-spoon-it-that-says-egg-it 2.png"
//                       width={800}
//                       height={780}
//                     />
//                   </div>
//                 </div>
//               </VelocityMarquee>
//             </div>

//             {/* headline */}
//             <div className="mxd-hero-03__headline">
//               <p className="hero-03-headline__caption loading__item">
//                 Where Kids
//                 <br />
//                 Become Heroes of
//                 <br />
//                 Their Own Story
//               </p>

//               <h1 className="hero-03-headline__title loading__item">
//                 <span className="hero-03-headline__hidden">KidzMondo</span>

//                 {/* Mobile logo */}
//                 <Image
//                   className="hero-03-headline__svg-mobile"
//                   src="/img/avatars/KidzMondo(6).svg"
//                   alt="KidzMondo"
//                   width={238}
//                   height={108}
//                   priority
//                   style={{ width: "100%", height: "auto" }}
//                 />

//                 {/* Desktop logo */}
//                 <Image
//                   className="hero-03-headline__svg"
//                   src="/img/avatars/KidzMondo(6).svg"
//                   alt="KidzMondo"
//                   width={400}
//                   height={72}
//                   priority
//                   style={{ width: "100%", height: "auto" }}
//                 />
//               </h1>
//             </div>
//           </div>

//           {/* ✅ bottom video cover (click opens popup) */}
//           <div className="mxd-hero-03__bottom">
//             <div className="mxd-container">
//               <div className="mxd-divider">
//                 <div
//                   className="mxd-divider__video"
//                   style={{
//                     position: "relative",
//                     width: "100%",
//                     overflow: "hidden",
//                     borderRadius: 16,
//                   }}
//                 >
//                   {/* Cover: poster image */}
//                   <video
//                     className="hero-bottom-video"
//                     playsInline
//                     preload="metadata"
//                     poster="/img/hero/cover.jpg" // ✅ put your cover image here (in /public/img/hero/)
//                     style={{
//                       width: "100%",
//                       height: "auto",
//                       display: "block",
//                     }}
//                   >
//                     <source
//                       src="/video/Animate_the_banner_202601131138.mp4"
//                       type="video/mp4"
//                     />
//                   </video>

//                   {/* Click layer + play badge */}
//                   <button
//                     type="button"
//                     onClick={openVideo}
//                     aria-label="Play video"
//                     style={{
//                       position: "absolute",
//                       inset: 0,
//                       cursor: "pointer",
//                       background: "transparent",
//                       border: "none",
//                       padding: 0,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                     }}
//                   >
//                     <span
//                       style={{
//                         background: "rgba(0,0,0,0.55)",
//                         color: "#fff",
//                         padding: "10px 14px",
//                         borderRadius: 999,
//                         fontSize: 14,
//                       }}
//                     >
//                       Tap to play with sound
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ✅ end bottom video */}
//         </div>
//       </div>

//       {/* ✅ Popup modal video (plays with sound) */}
//       {open && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           onClick={closeVideo}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.75)",
//             zIndex: 9999,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: 12,
//           }}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               width: "min(1000px, 96vw)",
//               borderRadius: 16,
//               overflow: "hidden",
//               background: "#000",
//               position: "relative",
//             }}
//           >
//             <button
//               type="button"
//               onClick={closeVideo}
//               aria-label="Close"
//               style={{
//                 position: "absolute",
//                 top: 10,
//                 right: 10,
//                 zIndex: 2,
//                 width: 40,
//                 height: 40,
//                 borderRadius: 999,
//                 border: "1px solid rgba(255,255,255,0.25)",
//                 background: "rgba(0,0,0,0.55)",
//                 color: "#fff",
//                 cursor: "pointer",
//                 fontSize: 18,
//                 lineHeight: 1,
//               }}
//             >
//               ✕
//             </button>

//             <video
//               ref={modalVideoRef}
//               autoPlay
//               controls
//               playsInline
//               preload="metadata"
//               muted={false}
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 display: "block",
//                 aspectRatio: "16 / 9",
//                 objectFit: "contain",
//                 background: "#000",
//               }}
//             >
//               <source
//                 src="/video/Animate_the_banner_202601131138.mp4"
//                 type="video/mp4"
//               />
//             </video>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Image from "next/image";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [needUserTap, setNeedUserTap] = useState(false);

  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const openVideo = () => {
    setOpen(true);
    setNeedUserTap(false);
  };

  const closeVideo = () => {
    const v = modalVideoRef.current;
    if (v) v.pause();
    setOpen(false);
    setNeedUserTap(false);
  };

  // Try to auto-play with sound when modal opens (may be blocked)
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onKeyDown);

    // Try to play (if blocked, we show a tap button)
    const tryPlay = async () => {
      const v = modalVideoRef.current;
      if (!v) return;

      v.muted = false;
      v.volume = 1;
      v.currentTime = 0;

      try {
        await v.play();
        setNeedUserTap(false);
      } catch {
        setNeedUserTap(true);
      }
    };

    // small delay so ref is ready
    setTimeout(tryPlay, 0);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;

      const v2 = modalVideoRef.current;
      if (v2) v2.pause();
    };
  }, [open]);

  const userStartWithSound = async () => {
    const v = modalVideoRef.current;
    if (!v) return;

    v.muted = false;
    v.volume = 1;

    try {
      await v.play();
      setNeedUserTap(false);
    } catch {
      // if it STILL fails, show controls as fallback
      v.controls = true;
    }
  };

  return (
    <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
      <div className="mxd-hero-03">
        <div className="mxd-hero-03__wrap loading-wrap">
          {/* top part */}
          <div className="mxd-hero-03__top">
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

                <Image
                  className="hero-03-headline__svg-mobile"
                  src="/img/avatars/KidzMondo(6).svg"
                  alt="KidzMondo"
                  width={238}
                  height={108}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />

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

          {/* ✅ cover (stable size on mobile) */}
          <div className="mxd-hero-03__bottom">
            <div className="mxd-container">
              <div className="mxd-divider">
                <div
                  className="mxd-divider__video"
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 9", // ✅ keeps the same shape on mobile
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <video
                    className="hero-bottom-video"
                    preload="metadata"
                    playsInline
                    poster="/img/hero/cover.jpg" // ✅ put your cover image here
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  >
                    <source
                      src="/video/Animate_the_banner_202601131138.mp4"
                      type="video/mp4"
                    />
                  </video>

                  {/* Click to open popup */}
                  <button
                    type="button"
                    onClick={openVideo}
                    style={{
                      position: "absolute",
                      inset: 0,
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                    }}
                    aria-label="Open video"
                  >
                    <span
                      style={{
                        background: "rgba(0,0,0,0.55)",
                        color: "#fff",
                        padding: "10px 14px",
                        borderRadius: 999,
                        fontSize: 14,
                      }}
                    >
                      Tap to play with sound
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Popup modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeVideo}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(1100px, 96vw)",
              borderRadius: 16,
              overflow: "hidden",
              background: "#000",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={closeVideo}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 3,
                width: 40,
                height: 40,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(0,0,0,0.55)",
                color: "#fff",
                cursor: "pointer",
                fontSize: 18,
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            <video
              ref={modalVideoRef}
              playsInline
              preload="metadata"
              controls
              muted={false}
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                display: "block",
                objectFit: "contain",
                background: "#000",
              }}
            >
              <source
                src="/video/Animate_the_banner_202601131138.mp4"
                type="video/mp4"
              />
            </video>

            {/* If browser blocked autoplay with sound, user taps once هنا */}
            {needUserTap && (
              <button
                type="button"
                onClick={userStartWithSound}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  border: "none",
                  background: "rgba(0,0,0,0.35)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    background: "rgba(0,0,0,0.65)",
                    color: "#fff",
                    padding: "10px 14px",
                    borderRadius: 999,
                    fontSize: 14,
                  }}
                >
                  Tap to start sound
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
