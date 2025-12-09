import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";

export default function ServicesStack() {
    return (
        <div className="mxd-section padding-stacked-section">
            <div className="mxd-container grid-container">
                {/* Block - Services/Features Stacking Cards Start */}
                <div className="mxd-block mxd-grid-item no-margin" >
                    <div className="content__block">
                        <StackCards className="stack-wrapper in-content-stack" >
                            {/* services stack single item */}

                            <div className="mxd-services-stack__inner justify-between bg-base-opp" style={{ backgroundColor: "#024b70" }}>
                                {/* <div className="mxd-services-stack__controls">
                                    <Link
                                        className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                                        href={`/services`}
                                    >
                                        <i className="ph ph-arrow-up-right" />
                                    </Link>
                                </div> */}
                                <div className="mxd-services-stack__title width-60">
                                    <h3 className=" opposite-responsive" style={{ color: "white" }}>KidzMondo Doha, City of Young Dreamers</h3>
                                </div>
                                {/* <h6 style={{ color: "white" }}>Skills Learned:</h6> */}

                                <div className="mxd-services-stack__info width-60">


                                    <p className="t-small-mobile t-opposite">
                                        Located in the heart of Lusail, KidzMondo Doha brings education and entertainment together in one dynamic world.
                                        Children can explore more than 80 real-life professions, from pilots and bankers to journalists and firefighters, all within a safe, immersive city built just for them.
                                        With bilingual staff, interactive activities, and themed zones that reflect Qatar’s culture and innovation, every visit is both fun and meaningful.

                                        The Doha branch is a flagship destination, hosting school trips, birthday celebrations, and family adventures, all designed to inspire creativity, confidence, and curiosity.
                                    </p>

                                </div>
                                {/* <div className="mxd-services-cards__tags">
                                    <span className="tag tag-default tag-outline-opposite">
                                        Book Your Visit to KidzMondo Doha
                                    </span>
                                </div> */}
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
                                        src="/img/services/Doha.jpg"
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                            </div>

                            {/* services stack single item */}

                            <div className="mxd-services-stack__inner justify-between bg-accent">
                                {/* <div className="mxd-services-stack__controls" >
                                    <Link
                                        className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                                        href={`/services`}
                                    >
                                        <i className="ph ph-arrow-up-right" />
                                    </Link>
                                </div> */}
                                <div className="mxd-services-stack__title width-60">
                                    <h3 className="opposite-responsive" style={{ color: "black" }}>
                                        KidzMondo Beirut, Where It All Began
                                    </h3>
                                </div>

                                <div className="mxd-services-stack__info width-60">

                                    <p className="t-small-mobile t-opposite" style={{ color: "black" }}>
                                        Nestled in the heart of Beirut, KidzMondo’s first city continues to inspire generations of children through the power of play.
                                        Here, every corner tells a story from hospitals and theaters to radio stations and construction zones giving kids the chance to experience real-world roles in a safe, joyful environment.
                                        Beirut’s city is where KidzMondo’s philosophy was born: combining education, culture, and fun to build confident, responsible citizens of tomorrow.

                                        Perfect for school outings, family days, and birthday celebrations, KidzMondo Beirut remains a benchmark for experiential learning in Lebanon and beyond.
                                    </p>
                                </div>
                                {/* <div className="mxd-services-cards__tags">
                                    <span className="tag tag-default tag-outline-opposite" style={{ color: "black", borderColor: "black" }}>
                                        Book Your Visit to KidzMondo Beirut
                                    </span>
                                </div> */}
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
    );
}
