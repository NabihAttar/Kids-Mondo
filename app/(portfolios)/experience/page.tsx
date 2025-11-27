import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Projects from "@/components/homes/home-1/Projects";
import Awards from "@/components/common/Awards";
import ServicesStack from "@/components/homes/home-1/ServicesStack";
import Capabilities from "@/components/homes/home-digital-agency/Capabilities";
import Hero2 from "@/components/homes/home-1/Hero2";

import Challages from "@/components/portfolios/Challages";
import DetailsHero from "@/components/portfolios/DetailsHero";
import Feedback from "@/components/portfolios/Feedback";
import NextPrevNavigation from "@/components/portfolios/NextPrevNavigation";
import ParallaxDivider2 from "@/components/portfolios/ParallaxDivider2";
import Solutions from "@/components/portfolios/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
    title:
        "Project Details || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
    description:
        "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function Experience() {
    return (
        <>
            <main
                id="mxd-page-content"
                className="mxd-page-content inner-page-content"
            >
                <Hero2 />
                {/* <DetailsHero /> */}
                <ServicesStack />
                <Capabilities />


                <div className="mxd-section mxd-project overflow-hidden">
                    <div className="mxd-container grid-container">

                    </div>
                </div>
            </main>
            <Footer2 />
        </>
    );
}
