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
              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">Chef</h3>
                </div>
                <h6 style={{ color: "white" }}>Skills Learned:</h6>

                <div className="mxd-services-stack__info width-60">

                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Teamwork and communication
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Following instructions and precision
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Creativity and sensory learning
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Time management and organization
                    </span>

                  </div>
                  <p className="t-small-mobile t-opposite">
                    What Kids Do:
                  </p>
                  <p className="t-small-mobile t-opposite">
                    Step into the kitchen, wear the hat, and create dishes just like a real chef. Kids learn to follow recipes, measure ingredients, and work together to prepare simple, delicious meals.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-01.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-01.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Firefighter
                  </h3>
                </div>
                <h6 style={{ color: "white" }}>Skills Learned:</h6>

                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Responsibility and courage
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Team coordination
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Safety awareness and empathy
                    </span>
                    {/* <span className="tag tag-default tag-outline-opposite">
                      Mobile Apps
                    </span> */}
                  </div>
                  <p className="t-small-mobile t-opposite">
                    What Kids Do:
                  </p>

                  <p className="t-small-mobile t-opposite">
                    Suit up, ride in the fire truck, and respond to emergencies around the city. Children practice safety drills, teamwork, and problem-solving as they learn how to protect others.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-02.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-02.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    Reporter
                  </h3>
                </div>
                <h6 style={{ color: "black" }}>Skills Learned:</h6>

                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline">
                      Communication and public speaking
                    </span>
                    <span className="tag tag-default tag-outline">
                      Critical thinking and curiosity
                    </span>
                    <span className="tag tag-default tag-outline">
                      Writing and storytelling
                    </span>
                    <span className="tag tag-default tag-outline">
                      Confidence and media literacy
                    </span>
                  </div>
                  <p className="t-small-mobile">
                    What Kids Do:                  </p>
                  <p className="t-small-mobile">
                    Grab a microphone and step into the newsroom. Kids learn how to research, interview, and report stories — turning information into engaging news segments.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-03.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-03.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Doctor
                  </h3>

                </div>
                <h6 style={{ color: "white" }}>Skills Learned:</h6>

                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Empathy and compassion
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Attention to detail
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      SEO
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Problem-solving and observation
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Health awareness and responsibility
                    </span>
                  </div>
                  <p className="t-small-mobile t-opposite">
                    What Kids Do:
                  </p>
                  <p className="t-small-mobile t-opposite">
                    Put on a lab coat, check vitals, and care for patients in the hospital zone. Children experience the world of healthcare — learning empathy, precision, and how to make others feel better.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-04.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-04.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/services`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Pilot
                  </h3>

                </div>
                <h6 style={{ color: "white" }}>Skills Learned:</h6>

                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Focus and decision-making
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Coordination and spatial awareness
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Responsibility and leadership
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Technical curiosity and discipline
                    </span>

                  </div>
                  <p className="t-small-mobile t-opposite">
                    What Kids Do:
                  </p>
                  <p className="t-small-mobile t-opposite">
                    Take the captain’s seat and navigate the skies. Kids experience the excitement of flying an aircraft using real controls and teamwork to ensure a safe, successful flight.                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/services/800x800_ser-04.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/services/1000x1000_ser-04.webp"
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
