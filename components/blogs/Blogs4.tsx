import Link from "next/link";

import Image from "next/image";
import { blogs2, blogs5, blogs6 } from "@/data/blogs.json";
// -------------------- Shared bits --------------------
const StarSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
  </svg>
);

const MetaTag: React.FC<{ label: string }> = ({ label }) => (
  <span className="meta-tag">
    <a href="#">{label}</a>
    <StarSvg />
  </span>
);

// -------------------- Data (NO href fields) --------------------

// -------------------- Component --------------------
export default function Blogs4() {
  return (
    <>
      {/* Section - Inner Page Headline Start */}
      <div className="mxd-section mxd-section-inner-headline padding-blog-descr-pre-grid">
        <div className="mxd-container grid-container">
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12" />
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline loading__item">
                      <h1 className="inner-headline__title headline-img-before headline-img-06">
                        News & Stories
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="inner-headline__descr loading__item">
                      <p>
                        Stay connected with the world of KidzMondo from exciting announcements and new openings to inspiring stories and expert insights. <br />
                        Here you’ll find updates from our cities, behind-the-scenes moments, and thought-provoking articles about education, creativity, and childhood development.<br />
                        It’s more than news it’s a space to celebrate growth, imagination, and the people who make KidzMondo extraordinary.
                       </p>
                    </div>
                  </div>
                </div>
                {/* Inner Headline Aside End */}
              </div>
            </div>
          </div>
        </div>
      </div>
   

    
    </>
  );
}
