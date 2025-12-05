import Link from "next/link";
import Image from "next/image";

import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

export default function Cta() {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container">
        {/* Block - CTA Start */}
        <div className="mxd-block" >
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container"style={{backgroundColor:"#FEC52E"}}>
              {/* background */}
              <div className="mxd-promo__bg" 
              style={{
    backgroundImage: 'url("/img/illustrations/cartoon-headphone.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}/>
              {/* caption */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  <span className="mxd-promo__icon">
                    <Image
                      alt="Icon"
                      src="/img/icons/phone-handset-icon-3d-rendering-vector-illustration (1) 1.png"
                      width={300}
                      height={300}
                    />
                  </span>
                  <RevealText
                    as="span"
                    className="mxd-promo__caption reveal-type"
                  style={{color:"black"}}>
                    Let’s talk about <br></br>your project!
                  </RevealText>
                </p>
                <div className="mxd-promo__controls anim-uni-in-up" >
                  <AnimatedButton
                    text=" Get in Touch " 
                    className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                    href={`/contact`}
                    style={{backgroundColor:"#2E9FDC", color:"white"}}
                  >
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
              </div>
              {/* parallax images */}
              {/* <div className="mxd-promo__images">
                <Image
                  className="promo-image promo-image-1"
                  alt="Image"
                  src="/img/illustrations/cartoon-headphone.png"
                  width={800}
                  height={912}
                />
                <Image
                  className="promo-image promo-image-2"
                  alt="Image"
                  src="/img/illustrations/cartoon-headphone.png"
                  width={600}
                  height={601}
                />
              </div> */}
            </div>
          </div>
        </div>
        {/* Block - CTA End */}
      </div>
    </div>
  );
}
