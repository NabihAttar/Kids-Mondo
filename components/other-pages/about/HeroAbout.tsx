import BackgroundParallax from "@/components/animation/BackgroundParallax";
import RevealText from "@/components/animation/RevealText";

export default function HeroAbout() {
  return (
    <>
      {/* Section - Inner Page Headline Start */}
      <div className="mxd-section mxd-section-inner-headline padding-headline-pre-block">
        <div className="mxd-container grid-container">
          {/* Block - Inner Page Headline Start */}
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* Inner Headline Name Start */}
                
                {/* Inner Headline Name Start */}
                {/* Inner Headline Content Start */}
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title headline-img-before headline-img-06 loading__item">
                        Driven by ideas and innovation
                      </h1>
                      {/* <p class="inner-headline__text t-large t-bright">Our team is a blend of creative 
                  thinkers, problem-solvers, and tech enthusiasts dedicated to bringing your ideas 
                  to life. Together, we craft innovative solutions that inspire and deliver results.</p> */}
                    </div>
                  </div>
                </div>
                {/* Inner Headline Content End */}
              </div>
            </div>
          </div>
          {/* Block - Inner Page Headline End */}
        </div>
      </div>
      {/* Section - Inner Page Headline End */}
      {/* Section - Culture & Values Start */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container grid-container">
          {/* Block - Culture & Values Start */}
          <div className="mxd-block">
            <div className="mxd-values loading__fade">
              <div className="container-fluid p-0">
                <div className="row g-0 d-flex">
                 
                  <div className="col-12 col-xl-4 mxd-values__item order-1 order-xl-2 mxd-grid-item no-margin animate-card-2">
                    <BackgroundParallax className="mxd-values__image image-large-desktop image-values-1 parallax-img-small" />
                  </div>
                  <div className="col-12 col-xl-6 mxd-values__item order-3 order-xl-3 mobile-reverse mxd-grid-item no-margin animate-card-2">
                    <BackgroundParallax className="mxd-values__image image-small-desktop image-values-2 parallax-img-small" />
                    <div className="mxd-values__descr has-top-list anim-uni-in-up">
                      <RevealText
                        as="p"
                        className="t-bright t-large reveal-type"
                      >
                        We are a creative digital agency specializing in
                        innovative design and cutting-edge development. We help
                        businesses stand out and thrive in the modern landscape.
                      </RevealText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Culture & Values Start */}
        </div>
      </div>
      {/* Section - Culture & Values End */}
    </>
  );
}
