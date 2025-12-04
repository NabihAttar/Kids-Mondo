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
                                    <h3 className="opposite">KidzMondo Doha — The City of Young Dreamers</h3>
                                </div>
                                {/* <h6 style={{ color: "white" }}>Skills Learned:</h6> */}

                                <div className="mxd-services-stack__info width-60">


                                    <p className="t-small-mobile t-opposite">
                                        Located in the heart of Lusail, KidzMondo Doha brings education and entertainment together in one dynamic world.
                                    </p>

                                </div>
                                <div className="mxd-services-cards__tags">
                                    <span className="tag tag-default tag-outline-opposite">
                                        Book Your Visit to KidzMondo Doha
                                    </span>
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
                                <div className="mxd-services-stack__controls" >
                                    <Link
                                        className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                                        href={`/services`}
                                    >
                                        <i className="ph ph-arrow-up-right" />
                                    </Link>
                                </div>
                                <div className="mxd-services-stack__title width-60">
                                    <h3 className="opposite" style ={{color :"black"}}>
                                        KidzMondo Beirut — Where It All Began
                                    </h3>
                                </div>

                                <div className="mxd-services-stack__info width-60">

                                    <p className="t-small-mobile t-opposite"style ={{color :"black"}}>
                                        Nestled in the heart of Beirut, KidzMondo’s first city continues to inspire generations of children through the power of play.
                                    </p>
                                </div>
                                <div className="mxd-services-cards__tags">
                                    <span className="tag tag-default tag-outline-opposite"style ={{color :"black", borderColor :"black"}}>
                                        Book Your Visit to KidzMondo Beirut
                                    </span>
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

                        </StackCards>
                    </div>
                </div>
            </div>
        </div>
    );
}
