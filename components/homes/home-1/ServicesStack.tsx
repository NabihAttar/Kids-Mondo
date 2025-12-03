import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";

export default function ServicesStack() {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">

              {/* Pilot (1) */}
              <div
                className="mxd-services-stack__inner justify-between bg-base-opp"
                style={{ backgroundColor: "#024B70" }}
              >
                {/* <div className="mxd-services-stack__controls">
  <Link
    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
    href={`/services`}
  >
    <Image
      src="/img/services/pilot icon (1).png" 
      alt="View services"
      width={25}
      height={25}
      style={{ objectFit: "contain" }}
    />
  </Link>
</div> */}


                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">Pilot</h3>
                </div>

                <div className="mxd-services-stack__info width-60">
                  <h6 className="stack-label">What Kids Do:</h6>
                  <p className="t-small-mobile t-opposite">
                    Take the captain’s seat and navigate the skies. Kids
                    experience the excitement of flying an aircraft using real
                    controls and teamwork to ensure a safe, successful flight.
                  </p>

                  <h6 className="stack-label">Skills Learned:</h6>
                  <div
                    className="mxd-services-cards__tags"
                    style={{ marginBottom: "1rem" }}
                  >
                    <span className="tag tag-default tag-outline-opposite">
                      Focus
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Decision-Making
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Coordination
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Spatial Awareness
                    </span>
                  </div>

                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Responsibility
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Leadership
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Technical Curiosity
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Discipline
                    </span>
                  </div>
                </div>

                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Pilot small"
                    src="/img/services/800x800_ser-04.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Pilot large"
                    src="/img/services/pilot33.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* Chef (2) */}
              {/* Chef */}
              <div
                className="mxd-services-stack__inner justify-between bg-base-opp is-light-card"
                style={{ backgroundColor: "#F8D222" }}
              >

                {/* <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div> */}

                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">Chef</h3>
                </div>

                <div className="mxd-services-stack__info width-60">
                  <h6 className="stack-label">What Kids Do:</h6>
                  <p className="t-small-mobile t-opposite">
                    Step into the kitchen, wear the hat, and create dishes just
                    like a real chef. Kids learn to follow recipes, measure
                    ingredients, and work together to prepare simple, delicious
                    meals.
                  </p>

                  <h6 className="stack-label">Skills Learned:</h6>
                  <div
                    className="mxd-services-cards__tags"
                    style={{ marginBottom: "1rem" }}
                  >
                    <span className="tag tag-default tag-outline-opposite">
                      Teamwork
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Time Management
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Precision
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Sensory Learning
                    </span>
                  </div>
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Following Instructions
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Creativity
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Communication
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Organization
                    </span>
                  </div>
                </div>

                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Chef small"
                    src="/img/services/800x800_ser-01.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Chef large"
                    src="/img/services/Chef33.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* Reporter (3) */}
              <div
                className="mxd-services-stack__inner justify-between bg-base-opp"
                style={{ backgroundColor: "#1262A4" }}
              >
                {/* <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div> */}

                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">Reporter</h3>
                </div>

                <div className="mxd-services-stack__info width-60">
                  <h6 className="stack-label">What Kids Do:</h6>
                  <p className="t-small-mobile t-opposite">
                    Grab a microphone and step into the newsroom. Kids learn how
                    to research, interview, and report stories — turning
                    information into engaging news segments.
                  </p>

                  <h6 className="stack-label">Skills Learned:</h6>
                  <div
                    className="mxd-services-cards__tags"
                    style={{ marginBottom: "1rem" }}
                  >
                    <span className="tag tag-default tag-outline-opposite">
                      Storytelling
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Public Speaking
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Writing
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Critical Thinking
                    </span>
                  </div>

                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Midea Literacy
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Curiosity
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Communication
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Confidence
                    </span>
                  </div>
                </div>

                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Reporter small"
                    src="/img/services/800x800_ser-04.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Reporter large"
                    src="/img/services/reporter33.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* Firefighter (4) */}
              <div
                className="mxd-services-stack__inner justify-between bg-accent"
                style={{ backgroundColor: "#D5242D" }}
              >
                {/* <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div> */}

                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">Firefighter</h3>
                </div>

                <div className="mxd-services-stack__info width-60">
                  <h6 className="stack-label">What Kids Do:</h6>
                  <p className="t-small-mobile t-opposite">
                    Suit up, ride in the fire truck, and respond to emergencies
                    around the city. Children practice safety drills, teamwork,
                    and problem-solving as they learn how to protect others.
                  </p>

                  <h6 className="stack-label">Skills Learned:</h6>
                  <div
                    className="mxd-services-cards__tags"
                    style={{ marginBottom: "1rem" }}
                  >
                    <span className="tag tag-default tag-outline-opposite">
                      Courage
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Team Coordination
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Empathy
                    </span>
                  </div>

                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Safety Awareness
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Responsibilty
                    </span>
                  </div>
                </div>

                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Firefighter small"
                    src="/img/services/800x800_ser-02.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Firefighter large"
                    src="/img/services/firefighter33.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* Doctor (5) */}
              <div
                className="mxd-services-stack__inner justify-between bg-base-opp"
                style={{ backgroundColor: "#2196C4" }}
              >
                {/* <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div> */}

                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">Doctor</h3>
                </div>

                <div className="mxd-services-stack__info width-60">
                  <h6 className="stack-label">What Kids Do:</h6>
                  <p className="t-small-mobile t-opposite">
                    Put on a lab coat, check vitals, and care for patients in
                    the hospital zone. Children experience the world of
                    healthcare — learning empathy, precision, and how to make
                    others feel better.
                  </p>

                  <h6 className="stack-label">Skills Learned:</h6>
                  <div
                    className="mxd-services-cards__tags"
                    style={{ marginBottom: "1rem" }}
                  >
                    <span className="tag tag-default tag-outline-opposite">
                      Empathy
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Compassion
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Responsibility
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Observation
                    </span>
                  </div>

                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Attention to Detail
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Problem-Solving
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Health Awareness
                    </span>
                  </div>
                </div>

                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Doctor small"
                    src="/img/services/800x800_ser-04.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Doctor large"
                    src="/img/services/doctor33.jpg"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

            </StackCards>
          </div>
        </div>
        {/* Block - Services/Features Stacking Cards End */}
      </div>
    </div>
  );
}
