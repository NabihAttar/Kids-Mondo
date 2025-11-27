

import Footer2 from "@/components/footers/Footer2";
import Hero2 from "@/components/other-pages/team/Hero2";
import ServicesStack2 from "@/components/homes/home-1/ServicesStack2";

import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "About Us || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
    description:
        "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function locations() {
    return (
        <>
            <main
                id="mxd-page-content"
                className="mxd-page-content inner-page-content"
            >
                <Hero2 />
              <ServicesStack2 />

            </main>
            <Footer2 />
        </>
    );
}
