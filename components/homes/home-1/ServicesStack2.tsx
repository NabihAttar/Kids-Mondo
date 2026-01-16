"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import StackCards from "@/components/animation/StackCards";

type CityKey = "doha" | "beirut";

const FULL_TEXT: Record<CityKey, React.ReactNode> = {
  doha: (
    <>
      Located in Lusail, KidzMondo Doha blends education and entertainment in a
      dynamic city built just for kids. With over 80 professions to explore and
      bilingual staff, it offers a safe environment reflecting Qatar’s culture.
      It is the ideal destination for school trips, birthdays, and family
      adventures that inspire creativity.
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  ),
  beirut: (
    <>
      Located in the heart of Beirut, KidzMondo inspires children through the
      power of play. In this safe, educational city, kids explore real-world
      roles—from doctors to builders—building confidence and responsibility. It
      is the premier destination for school outings, birthdays, and family fun
      in Lebanon
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  ),
};

/**
 * ✅ Map using CSS positions (no links)
 * - Hover shows tooltip
 * - Mouse out hides tooltip
 * - Transparent marker (white stroke)
 * - Tooltip background #D5242D + triangle pointer
 *
 * IMPORTANT:
 * Your CSS must include:
 * .km-hotspot--lebanon { left:..; top:.. } etc...
 */
function InteractiveMapCss() {
  const [active, setActive] = useState<string | null>(null);

  const HOTSPOTS = [
    { id: "lebanon", label: "Lebanon", message: "KidzMondo Beirut — Opening Soon" },
    { id: "turkey", label: "Turkey", message: "KidzMondo Istanbul — Opening Soon" },
    { id: "jordan", label: "Jordan", message: "Opening Soon" },
    { id: "qatar", label: "Qatar", message: "KidzMondo Doha" },
    { id: "uae", label: "UAE", message: "Opening Soon" },
    { id: "oman", label: "Oman", message: "Opening Soon" },
    { id: "australia", label: "Australia", message: "Opening Soon" },
  ];

  return (
    <div className="km-map-wrap" style={{ marginTop: 24 }}>
      {/* ✅ only the image is clipped (so tooltip/ring never get cut) */}
      <div className="km-map-clip">
        <img
          src="/img/hero/Map.jpeg"
          alt="Map"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* ✅ overlay is NOT clipped */}
      <div className="km-map-overlay" onMouseLeave={() => setActive(null)}>
        {HOTSPOTS.map((h) => {
          const isActive = active === h.id;

          return (
            <div
              key={h.id}
              className={`km-hotspot km-hotspot--${h.id} ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => setActive(h.id)}
              onMouseLeave={() => setActive(null)}
            >
              <button
                type="button"
                className="km-hotspot-btn"
                aria-label={h.label}
                onClick={(e) => {
                  e.stopPropagation();
                  setActive((prev) => (prev === h.id ? null : h.id));
                }}
                onFocus={() => setActive(h.id)}
                onBlur={() => setActive(null)}
              >
                <span className="km-marker" />
              </button>

              <div className="km-tooltip">
                <div style={{ fontWeight: 800, marginBottom: 4 }}>{h.label}</div>
                <div style={{ opacity: 0.95 }}>{h.message}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ServicesStack() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CityKey>("doha");

  // Detect mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();

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
    // Popup only on mobile
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
                    <p className="t-small-mobile t-opposite desktop-only">
                      {FULL_TEXT.doha}
                    </p>

                    <p className="t-small-mobile t-opposite mobile-only">
                      Located in the heart of Lusail, KidzMondo Doha brings education
                      and entertainment together in one dynamic world.
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
                    <p
                      className="t-small-mobile t-opposite desktop-only"
                      style={{ color: "black" }}
                    >
                      {FULL_TEXT.beirut}
                    </p>

                    <p
                      className="t-small-mobile t-opposite mobile-only"
                      style={{ color: "black" }}
                    >
                      Nestled in the heart of Beirut, KidzMondo’s first city continues
                      to inspire generations of children through the power of play.
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

      {/* ✅ Map section */}
      <div className="mxd-container grid-container" style={{ marginBottom: 150 }}>
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12">
                <InteractiveMapCss />
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

              <button
                className="kmMobileModalClose"
                onClick={handleClose}
                aria-label="Close"
              >
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
