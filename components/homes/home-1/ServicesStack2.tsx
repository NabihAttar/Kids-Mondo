"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
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

/** ✅ Interactive hover map (same image, hover bubble + triangle pointer) */
function InteractiveMap() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [active, setActive] = useState<string | null>(null);
  const [scale, setScale] = useState({ sx: 1, sy: 1 });

  const HOTSPOTS = useMemo(
    () => [
      {
        id: "lebanon",
        label: "Lebanon",
        coords: [857, 281, 473, 304] as const, 
        message: "KidzMondo Beirut — Opening Soon",
        href: null as string | null,
      },
      {
        id: "turkey",
        label: "Turkey",
        coords: [0, 0, 0, 0] as const,
        message: "Visit KidzMondo Istanbul",
        href: "http://www.kidzmondoistanbul.com/",
      },
      {
        id: "jordan",
        label: "Jordan",
        coords: [0, 0, 0, 0] as const,
        message: "Opening Soon",
        href: null,
      },
      {
        id: "oman",
        label: "Oman",
        coords: [0, 0, 0, 0] as const,
        message: "Opening Soon",
        href: null,
      },
      {
        id: "uae",
        label: "UAE",
        coords: [0, 0, 0, 0] as const,
        message: "Opening Soon",
        href: null,
      },
      {
        id: "qatar",
        label: "Qatar",
        coords: [0, 0, 0, 0] as const,
        message: "KidzMondo Doha",
        href: null,
      },
      {
        id: "australia",
        label: "Australia",
        coords: [0, 0, 0, 0] as const,
        message: "Opening Soon",
        href: null,
      },
    ],
    []
  );

  const updateScale = useCallback(() => {
    const img = imgRef.current;
    if (!img) return;

    const nw = img.naturalWidth || 1;
    const nh = img.naturalHeight || 1;

    const rect = img.getBoundingClientRect();
    const dw = rect.width || 1;
    const dh = rect.height || 1;

    setScale({ sx: dw / nw, sy: dh / nh });
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [updateScale]);

  const rectFromCoords = (coords: readonly number[]) => {
    const [x1, y1, x2, y2] = coords;

    const leftN = Math.min(x1, x2);
    const rightN = Math.max(x1, x2);
    const topN = Math.min(y1, y2);
    const bottomN = Math.max(y1, y2);

    const left = leftN * scale.sx;
    const top = topN * scale.sy;
    const right = rightN * scale.sx;
    const bottom = bottomN * scale.sy;

    const width = right - left;
    const height = bottom - top;

    return {
      left: Math.round(left),
      top: Math.round(top),
      width: Math.round(width),
      height: Math.round(height),
      centerX: Math.round(left + width / 2),
      anchorY: Math.round(top),
    };
  };

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <div
      ref={wrapRef}
      style={{
        marginTop: 24,
        position: "relative",
        width: "100%",
      }}
      onMouseLeave={() => setActive(null)}
    >
      <div
        style={{
          overflow: "hidden",
          borderRadius: 46,
          position: "relative",
        }}
      >
        <img
          ref={imgRef}
          src="/img/hero/Map.jpeg"
          alt="Map"
          style={{ width: "100%", height: "auto", display: "block" }}
          onLoad={updateScale}
        />
      </div>

      {HOTSPOTS.map((h) => {
        if (h.coords.every((n) => n === 0)) return null;

        const r = rectFromCoords(h.coords);
        const isActive = active === h.id;

        const HotspotTag: any = h.href ? "a" : "div";

        return (
          <React.Fragment key={h.id}>
            {isActive && (
              <div
                style={{
                  position: "absolute",
                  left: r.centerX,
                  top: r.anchorY,
                  transform: "translate(-50%, calc(-100% - 14px))",
                  background: "rgba(0,0,0,0.82)",
                  color: "#fff",
                  padding: "12px 14px",
                  borderRadius: 14,
                  fontSize: 13,
                  lineHeight: 1.25,
                  zIndex: 20,
                  maxWidth: 260,
                  boxShadow: "0 14px 40px rgba(0,0,0,0.30)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.16)",
                    display: "grid",
                    placeItems: "center",
                    flex: "0 0 auto",
                    fontSize: 16,
                  }}
                >
                  💬
                </span>

                <div>
                  <div style={{ fontWeight: 800, marginBottom: 3 }}>
                    {h.label}
                  </div>
                  <div style={{ opacity: 0.95 }}>{h.message}</div>
                </div>

                {/* ✅ triangle pointer */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: -10,
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "10px solid rgba(0,0,0,0.82)",
                  }}
                />
              </div>
            )}

            <HotspotTag
              {...(h.href
                ? { href: h.href, target: "_blank", rel: "noreferrer" }
                : {})}
              style={{
                position: "absolute",
                left: r.left,
                top: r.top,
                width: r.width,
                height: r.height,
                cursor: h.href ? "pointer" : "default",
                zIndex: 10,
              }}
              onMouseEnter={() => setActive(h.id)}
              onFocus={() => setActive(h.id)}
              onBlur={() => setActive(null)}
              onClick={(e: any) => {
                // touch: first tap shows tooltip, second tap follows link
                if (isTouchDevice) {
                  if (active !== h.id) {
                    e.preventDefault?.();
                    setActive(h.id);
                    return;
                  }
                }
                if (!h.href) {
                  e.preventDefault?.();
                  setActive(h.id);
                }
              }}
              onTouchStart={(e: any) => {
                if (!h.href) e.preventDefault?.();
                setActive(h.id);
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function ServicesStack() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CityKey>("doha");

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
  }, [open]);

  useEffect(() => {
    if (!isMobile && open) setOpen(false);
  }, [isMobile, open]);

  const handleOpen = (key: CityKey) => {
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
                    <h3
                      className="opposite-responsive"
                      style={{ color: "white" }}
                    >
                      KidzMondo Doha, City of Young Dreamers
                    </h3>
                  </div>

                  <div className="mxd-services-stack__info width-60">
                    <p className="t-small-mobile t-opposite desktop-only">
                      {FULL_TEXT.doha}
                    </p>

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
                    if (e.key === "Enter" || e.key === " ")
                      handleOpen("beirut");
                  }}
                >
                  <div className="mxd-services-stack__title width-60">
                    <h3
                      className="opposite-responsive"
                      style={{ color: "black" }}
                    >
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

      {/*  Map section */}
      <div
        className="mxd-container grid-container"
        style={{ marginBottom: "150px" }}
      >
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12">
                <InteractiveMap />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Popup */}
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
