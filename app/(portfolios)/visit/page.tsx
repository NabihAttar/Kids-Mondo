import BackgroundParallax from "@/components/animation/BackgroundParallax";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import ContactForm from "@/components/other-pages/contact/ContactForm";
import Locations from "@/components/other-pages/contact/Locations";
import PageTitle from "@/components/other-pages/contact/PageTitle";
import Socials from "@/components/other-pages/contact/Socials";
import ContactFormKidz from "@/components/other-pages/contact/ContactFormKidz";

import pricing from "@/data/pricing.json";
import { PricingItem } from "@/types/pricing";

import { Metadata } from "next";
export const metadata: Metadata = {
    title:
        "Contact || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
    description:
        "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function visit() {
    return (
        <>
            <main
                id="mxd-page-content"
                className="mxd-page-content inner-page-content"
            >
                <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-form overflow-hidden">
                    <div className="mxd-container grid-container">
                        <div className="mxd-block loading-wrap">
                            <div className="container-fluid px-0">
                                <div className="row gx-0">
                                    <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                                        <div className="mxd-block__name name-inner-headline">
                                            <p className="mxd-point-subtitle">
                                                <svg
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    width="20px"
                                                    height="20px"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2
                    c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4
                    c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2
                    c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6
                    c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4
                    c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6
                    c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"
                                                    />
                                                </svg>
                                                <span>Contact</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                                        <div className="mxd-block__content">
                                            <div className="mxd-block__inner-headline loading__item">
                                                <h1 className="inner-headline__title">
                                                    Let&apos;s talk
                                                    <br />
                                                    about your project!
                                                </h1>
                                                <a
                                                    className="btn btn-line-headline slide-right-up anim-no-delay"
                                                    href="mailto:example@example.com?subject=Message%20from%20your%20site"
                                                >
                                                    <span className="btn-caption">hello@rayo.com</span>
                                                    <i className="ph-bold ph-arrow-up-right" />
                                                </a>
                                                <p className="inner-headline__text t-large t-bright loading__item">
                                                    Have questions? We&apos;ve got the answers! Here,
                                                    you&apos;ll find clear and concise information about our
                                                    services, process, and what to expect when working with
                                                    us. If you need more details, feel free to reach out!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactFormKidz />

                <>
                    {/* Section - Inner Page Headline Start */}

                    {/* Section - Inner Page Headline End */}
                    {/* Section - Pricing Cards Start */}
                    <div className="mxd-section padding-grid-pre-mtext">
                        <div className="mxd-container grid-container">
                            {/* Block - Pricing Cards Start */}
                            <div className="mxd-block">
                                <div className="mxd-pricing-table loading__fade">
                                    <div className="container-fluid p-0">
                                        <div className="row g-0">
                                            {pricing.map((p: PricingItem, idx: number) => (
                                                <div
                                                    key={idx}
                                                    className="col-12 col-xl-4 mxd-pricing-table__item mxd-grid-item animate-card-3"
                                                >
                                                    <div
                                                        className={`mxd-pricing-table__inner ${p.best ? "best-choice" : ""
                                                            }`}
                                                    >
                                                        {p.tag && (
                                                            <div className="mxd-pricing-table__tag">
                                                                <span className={`tag ${p.tagClass || ""}`}>
                                                                    {p.tag}
                                                                </span>
                                                            </div>
                                                        )}
                                                        <div className="mxd-pricing-table__data">
                                                            <div className="pricing-data__header">
                                                                {p.title && (
                                                                    <h4 className="pricing-header__title anim-uni-in-up">
                                                                        {p.title}
                                                                    </h4>
                                                                )}
                                                                {p.descr && (
                                                                    <p className="pricing-header__descr anim-uni-in-up">
                                                                        {p.descr}
                                                                    </p>
                                                                )}
                                                            </div>
                                                            <div className="pricing-data__info">
                                                                {p.amount && (
                                                                    <div className="pricing-data__price">
                                                                        <div className="pricing-data__num anim-uni-in-up">
                                                                            {p.currency && (
                                                                                <span className="pricing-data__currency">
                                                                                    {p.currency}
                                                                                </span>
                                                                            )}
                                                                            <span className="pricing-data__amount">
                                                                                {p.amount}
                                                                            </span>
                                                                            {p.period && (
                                                                                <span className="pricing-data__period">
                                                                                    {p.period}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                        {p.timeline && (
                                                                            <p className="t-small t-muted t-140 anim-uni-in-up">
                                                                                {p.timeline}
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                )}
                                                                <div className="pricing-data__btnholder anim-uni-in-up">
                                                                    <a
                                                                        className="btn btn-anim btn-default btn-opposite btn-fullwidth slide-right-up"
                                                                        href={p.btnHref || "contact.html"}
                                                                    >
                                                                        <span className="btn-caption">
                                                                            {p.btnText || "Start Project"}
                                                                        </span>
                                                                        <i className="ph-bold ph-arrow-up-right" />
                                                                    </a>
                                                                </div>
                                                                <div className="pricing-data__divider anim-uni-in-up" />
                                                            </div>
                                                        </div>
                                                        {p.features && (
                                                            <div className="mxd-pricing-table__plan">
                                                                <p className="pricing-plan__caption t-semibold t-bright anim-uni-in-up">
                                                                    What&apos;s included:
                                                                </p>
                                                                <div className="pricing-plan__list">
                                                                    <ul className="mxd-check-list">
                                                                        {p.features.map((f, fIdx) => (
                                                                            <li key={fIdx} className="anim-uni-in-up">
                                                                                <i className="ph ph-check" />
                                                                                <span>{f}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        )}
                                                        <div className="mxd-pricing-table__link anim-uni-in-up">
                                                            <a href={p.linkHref || "contact.html"}>
                                                                {p.linkText || "Need more info? Let's talk."}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Block - Pricing Cards End */}
                        </div>
                    </div>
                    {/* Section - Pricing Cards End */}
                </>
            </main>
            <Footer2 />
        </>
    );
}
