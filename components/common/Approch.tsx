import Link from "next/link";
import Image from "next/image";

import { approach1 } from "@/data/approach.json";
import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

export default function Approch() {
  return (
    <div className="mxd-section padding-pre-grid mobile-grid-s">
      <div className="mxd-container grid-container">
        {/* Block - Section Title Start */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {/* Title + Button Row */}
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      The City That Raises Dreamers
                    </RevealText>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin d-flex align-items-center">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <AnimatedButton
                      text="Let's Chat"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href={`/contact`}
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </AnimatedButton>
                  </div>
                </div>

                {/* Three-column description under the title */}
                <div className="col-12 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <div className="row gy-4 gx-5"  style={{ marginTop: "25px" }}>
                      <div className="col-12 col-md-4" >
                        <p className="anim-uni-in-up">
                          At KidzMondo, every child steps into a world built
                          just for them: a living city where imagination meets
                          responsibility, and curiosity turns into confidence.
                        </p>
                      </div>
                      <div className="col-12 col-md-4">
                        <p className="anim-uni-in-up">
                          Through hands-on experiences that mirror real life,
                          children explore professions, teamwork, and values in
                          a safe, inclusive environment.
                        </p>
                      </div>
                      <div className="col-12 col-md-4">
                        <p className="anim-uni-in-up">
                          Our mission is to spark a lifelong love of learning by
                          turning everyday play into a meaningful journey of
                          discovery, creativity, and growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title End */}

        {/* Block - Approach and Philosophy List Start */}
        <div className="mxd-block">
          <div className="mxd-approach-list">
            {approach1.map((item, idx) => (
              <div className="mxd-approach-list__item" key={idx}>
                <div className="mxd-approach-list__border anim-uni-in-up" />
                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <Image
                            alt="Icon"
                            src={item.icon}
                            width={210}
                            height={210}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <h6>{item.title}</h6>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-approach-list__border anim-uni-in-up" />
              </div>
            ))}
          </div>
        </div>
        {/* Block - Approach and Philosophy List End */}
      </div>
    </div>
  );
}
