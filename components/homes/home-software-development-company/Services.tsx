import Image from "next/image";

export default function Services() {
  return (
    <div className="mxd-section overflow-hidden padding-pre-title">
      <div className="mxd-container grid-container">
        {/* Block - Services Cards #02 Start */}
        <div className="mxd-block">
          <div className="mxd-services-cards-s">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* item */}
                <div className="col-12 col-xl-8 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-services-cards-s__inner justify-between bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">
                        Motor, Cognitive & Social 
                        <br />
                        Skill Development
                      </h3>
                    </div>
                    <div className="mxd-services-cards-s__info width-50">
                      {/* <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          UI/UX
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Web design
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Packaging
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Motion
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          3D models
                        </span>
                      </div> */}
                      <p className="anim-uni-in-up">
                        KidzMondo’s curriculum supports healthy growth across four developmental pillars:
                        Cognitive Development: attention, logic, memory, creativity, scientific thinking
                        Emotional Intelligence: confidence building, identity expression, conflict resolution
                        Psychomotor Skills: coordination, sensory awareness, object handling, motor skills
                        Social Development: teamwork, cultural awareness, moral values, real-world readiness
                        Together, these concepts shape a world where learning becomes living.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-right">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/3d-hardware-gears 1.png"
                        width={910}
                        height={1200}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards-s__inner justify-end bg-accent radius-l padding-4" style={{ backgroundColor: "#2196C4" }}>
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up">Citizenship & Financial Literacy</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      {/* <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Frontend
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Interactions
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Backend
                        </span>
                      </div> */}
                      <p className="t-opposite anim-uni-in-up">
                        Each child becomes a citizen of KidzMondo earning and spending the city’s official currency, Kidlar.
                        Through this simple economy, kids understand money management, contribution, and responsibility in a community.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-top-right">
                      <Image
                        className="mxd-move"
                        alt="Illustration"
                        src="/img/illustrations/finance-icons-digital-applications 3.png"
                        width={1200}
                        height={1200}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right" >
                  <div className="mxd-services-cards-s__inner bg-additional radius-l padding-4" style={{ backgroundColor: "#F8D323" }}>
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up"style={{color:"black"}}>Playful Learning Via Edutainment</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      {/* <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Strategy
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Social media
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          SEO
                        </span>
                      </div> */}
                      <p className="t-bright anim-uni-in-up" style={{color:"black"}}>
                        Every activity combines education with fun, helping children learn by doing while enjoying the freedom to explore their interests and follow their imagination.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-bottom">
                      <Image
                        className="mxd-rotate-slow"
                        alt="Illustration"
                        src="/img/illustrations/Helmet.png"
                        width={1200}
                        height={1200}
                      />
                    </div>
                  </div>
                </div>
                {/* item */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in">
                  <div className="mxd-services-cards-s__inner bg-base-opp radius-l padding-4"style={{backgroundColor:"#024B70"}}>
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up">A Real City for Real Learning</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      {/* <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Brand strategy
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Logo design
                        </span>
                        <span className="tag tag-default tag-outline-opposite anim-uni-in-up">
                          Guidelines
                        </span>
                      </div> */}
                      <p className="t-opposite anim-uni-in-up">
                        KidzMondo is a fully immersive miniature city designed for children ages 2 to 14.
                        Through vocational role-play in realistic establishments, from hospitals to banks and fire stations kids experience over 120 professions in a world built just for them.
                      </p>
                    </div>
                    {/* <div className="mxd-services-cards-s__image image-bottom image-bottom-2">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/3d-office-icon.png"
                        width={891}
                        height={1200}
                      />
                    </div> */}
                  </div>
                </div>
                {/* item */}
                {/* <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards-s__inner justify-end bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">Gaming</h3>
                    </div>
                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          E-Commerce
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Maintenance
                        </span>
                        <span className="tag tag-default tag-outline anim-uni-in-up">
                          Support
                        </span>
                      </div>
                      <p className="anim-uni-in-up">
                        Immersive experiences, multiplayer platforms, and game
                        engine development.
                      </p>
                    </div>
                    <div className="mxd-services-cards-s__image image-top">
                      <Image
                        alt="Illustration"
                        src="/img/illustrations/1200x1200_service-image-05.webp"
                        width={1200}
                        height={996}
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Services Cards #02 End */}
      </div>
    </div>
  );
}
