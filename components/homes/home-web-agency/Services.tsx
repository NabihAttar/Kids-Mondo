"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import services from "@/data/services/services-web-agency.json";
import { Service } from "@/types/services";

gsap.registerPlugin(ScrollTrigger);

// Map each character/service title to its background color
const bgColors: Record<string, string> = {
  Kozmo: "#D5242D",
  "Ëena": "#F8D222",
  Dogzilla: "#1262A4",
  Leeloo: "#2196C4",
  "Digital marketing solutions": "#F8D222", // both last items
};

export default function Services() {
  const pinnedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = pinnedRef.current;
    if (!root) return;

    const textItems = Array.from(
      root.querySelectorAll<HTMLElement>(".mxd-pinned__text-item")
    );
    const imgItems = Array.from(
      root.querySelectorAll<HTMLElement>(".mxd-pinned__img-item")
    );

    const count = Math.min(textItems.length, imgItems.length);
    if (count === 0) return;

    const setActive = (idx: number) => {
      textItems.forEach((el) => el.classList.remove("is-active"));
      imgItems.forEach((el) => el.classList.remove("is-active"));
      textItems[idx]?.classList.add("is-active");
      imgItems[idx]?.classList.add("is-active");
    };

    // initial active
    setActive(0);

    const triggers: ScrollTrigger[] = [];

    textItems.slice(0, count).forEach((el, idx) => {
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) setActive(idx);
        },
      });
      triggers.push(st);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="mxd-section padding-pinned-img-pre-mtext">
      <div className="mxd-container">
        {/* Block - Services Pinned Image Start */}
        <div className="mxd-block">
          <div className="mxd-pinned" ref={pinnedRef}>
            {/* LEFT: IMAGES */}
            <div className="mxd-pinned__visual page-padding">
              <div className="mxd-pinned__img-wrap">
                <div className="mxd-pinned__img-list" role="list">
                  {services.map((item: Service, idx: number) => {
                    const bg = bgColors[item.title] || "transparent";
                    return (
                      <div
                        className="mxd-pinned__img-item"
                        role="listitem"
                        key={idx}
                        style={{
                          backgroundColor: bg,
                          borderRadius: "24px",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          className="mxd-pinned__img"
                          alt={item.title}
                          src={item.img}
                          width={800}
                          height={800}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: TEXT */}
            <div className="mxd-pinned__content page-padding">
              <div className="mxd-pinned__text-wrap">
                <div className="mxd-pinned__text-list" role="list">
                  {services.map((item: Service, idx: number) => {
                    const bg = bgColors[item.title] || "transparent";
                    return (
                      <div
                        className="mxd-pinned__text-item"
                        role="listitem"
                        key={idx}
                      >
                        {/* MOBILE IMAGE with same colored box */}
                        <div
                          className="mxd-pinned__img-mobile anim-uni-in-up"
                          style={{
                            backgroundColor: bg,
                            borderRadius: "24px",
                            overflow: "hidden",
                            marginBottom: "16px",
                          }}
                        >
                          <Image
                            alt={item.title}
                            src={item.img}
                            width={800}
                            height={800}
                          />
                        </div>

                        <h2 className="mxd-pinned__title h2-small anim-uni-in-up">
                          {item.title}
                        </h2>

                        {/* If you want tags back, uncomment this
                        <div className="mxd-pinned__tags">
                          {item.tags?.map((tag, tagIdx) => (
                            <span
                              className="tag tag-default tag-outline anim-uni-in-up"
                              key={tagIdx}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        */}

                        <p className="anim-uni-in-up">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Pinned Image End */}
      </div>
    </div>
  );
}
