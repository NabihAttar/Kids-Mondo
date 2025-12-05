import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";

export default function About() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - About Description with H2 Title and Paragraph Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <RevealText as="h2" className="reveal-type anim-uni-in-up">
                    Why We Do What We Do?
                  </RevealText>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up" style={{color:"black"}}>
                      We believe children learn best through real, hands-on experiences. <br />
                      When they take the lead — making decisions, solving problems, and experimenting freely — they build confidence and discover who they can become.
                    </p>
                    {/* <div className="mxd-paragraph__lists">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-6 col-xl-5">
                            <ul>
                              <li>
                                <p className="anim-uni-in-up">Innovations</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">Excellence</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">Creativity</p>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6 col-xl-5">
                            <ul>
                              <li>
                                <p className="anim-uni-in-up">Experience</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">Competence</p>
                              </li>
                              <li>
                                <p className="anim-uni-in-up">Passion</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="mxd-paragraph__controls anim-uni-in-up">
                      <AnimatedButton
                        text="Start Your Adventure!"
                        className="btn btn-anim btn-default btn-outline slide-right-up"
                        href={`/visit`}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - About Description with H2 Title and Paragraph End */}
      </div>
    </div>
  );
}
