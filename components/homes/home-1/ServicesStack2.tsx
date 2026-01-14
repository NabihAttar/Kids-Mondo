"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import StackCards from "@/components/animation/StackCards";

type CityKey = "doha" | "beirut";

const FULL_TEXT: Record<CityKey, React.ReactNode> = {
  doha: (
    <>
      Located in Lusail, KidzMondo Doha blends education and entertainment in a dynamic city built just for kids. With over 80 professions to explore and bilingual staff, it offers a safe environment reflecting Qatar’s culture. It is the ideal destination for school trips, birthdays, and family adventures that inspire creativity.
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>
  ),
  beirut: (
    <>
      Located in the heart of Beirut, KidzMondo inspires children through the power of play. In this safe, educational city, kids explore real-world roles—from doctors to builders—building confidence and responsibility. It is the premier destination for school outings, birthdays, and family fun in Lebanon
   <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>
  ),
};

export default function ServicesStack() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CityKey>("doha");

  // Detect mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();

    // support older browsers too
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  // Lock scroll when modal open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // If user switches to desktop while modal open, close it
  useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  const handleOpen = (key: CityKey) => {
    // ✅ Popup only on mobile
    if (!isMobile) return;
    setSelected(key);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="mxd-section padding-stacked-section">
        <div className="mxd-container grid-container">
          <div className="mxd-block mxd-grid-item no-margin">
            <div className="content__block">
              <StackCards className="stack-wrapper in-content-stack">
                {/* Doha */}
                <div
                  className="mxd-services-stack__inner justify-between bg-base-opp"
                  style={{ backgroundColor: "#024b70" }}
                  onClick={() => handleOpen("doha")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleOpen("doha");
                  }}
                >
                  <div className="mxd-services-stack__title width-60">
                    <h3 className="opposite-responsive" style={{ color: "white" }}>
                      KidzMondo Doha, City of Young Dreamers
                    </h3>
                  </div>

                  <div className="mxd-services-stack__info width-60">
                    {/* Desktop text (unchanged) */}
                    <p className="t-small-mobile t-opposite desktop-only">
                      {FULL_TEXT.doha}
                    </p>

                    {/* Mobile short text */}
                    <p className="t-small-mobile t-opposite mobile-only">
                      Located in the heart of Lusail, KidzMondo Doha brings
                      education and entertainment together in one dynamic world.
                    </p>
                  </div>

                  <div className="services-stack__image">
                    <Image
                      className="service-img service-img-s"
                      alt="KidzMondo Doha"
                      src="/img/services/800x800_ser-01.webp"
                      width={800}
                      height={800}
                    />
                    <Image
                      className="service-img service-img-m"
                      alt="KidzMondo Doha"
                      src="/img/services/Doha.jpg"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>

                {/* Beirut */}
                <div
                  className="mxd-services-stack__inner justify-between bg-accent"
                  onClick={() => handleOpen("beirut")}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleOpen("beirut");
                  }}
                >
                  <div className="mxd-services-stack__title width-60">
                    <h3 className="opposite-responsive" style={{ color: "black" }}>
                      KidzMondo Beirut, Where It All Began
                    </h3>
                  </div>

                  <div className="mxd-services-stack__info width-60">
                    {/* Desktop text (unchanged) */}
                    <p
                      className="t-small-mobile t-opposite desktop-only"
                      style={{ color: "black" }}
                    >
                      {FULL_TEXT.beirut}
                    </p>

                    {/* Mobile short text */}
                    <p
                      className="t-small-mobile t-opposite mobile-only"
                      style={{ color: "black" }}
                    >
                      Nestled in the heart of Beirut, KidzMondo’s first city
                      continues to inspire generations of children through the
                      power of play.
                    </p>
                  </div>

                  <div className="services-stack__image">
                    <Image
                      className="service-img service-img-s"
                      alt="KidzMondo Beirut"
                      src="/img/services/800x800_ser-02.webp"
                      width={800}
                      height={800}
                    />
                    <Image
                      className="service-img service-img-m"
                      alt="KidzMondo Beirut"
                      src="/img/services/Beirut.jpg"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              </StackCards>
            </div>
          </div>
        </div>
      </div>

      {/* Map section (unchanged) */}
      <div className="mxd-container grid-container" style={{ marginBottom: "150px" }}>
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12">
                <div style={{ marginTop: 24, overflow: "hidden", borderRadius: 46 }}>
                  <Image
                    src="/img/hero/Map.jpeg"
                    alt="Map"
                    width={3920}
                    height={1900}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    priority
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Popup */}
      {open && (
        <div className="kmMobileModalOverlay" onClick={handleClose}>
          <div className="kmMobileModal" onClick={(e) => e.stopPropagation()}>
            <div className="kmMobileModalHeader">
              <h4 className="kmMobileModalTitle">
                {selected === "doha"
                  ? "KidzMondo Doha, City of Young Dreamers"
                  : "KidzMondo Beirut, Where It All Began"}
              </h4>
              <button className="kmMobileModalClose" onClick={handleClose} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="kmMobileModalBody">
              <p className="kmMobileModalText">{FULL_TEXT[selected]}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
