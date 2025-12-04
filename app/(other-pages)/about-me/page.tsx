import Hero from "@/components/other-pages/about/Hero";
import ProjectsMarqueeSlider from "@/components/other-pages/about/ProjectsMarqueeSlider";
import Footer2 from "@/components/footers/Footer2";
import About1 from "@/components/other-pages/About1";
import { Metadata } from "next";
import Services from "@/components/homes/home-software-development-company/Services";
import Testimonials from "@/components/homes/home-1/Testimonials";
import About from "@/components/homes/home-software-development-company/About";
import Testimonials2 from "@/components/common/Testimonials2";
export const metadata: Metadata = {
  title:
    "About Me || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function AboutMePage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />

        <ProjectsMarqueeSlider />
        <About1 />
        <Services />
        <About />
        <Testimonials2 />
        <Testimonials />
      </main>
      <Footer2 />
    </>
  );
}
