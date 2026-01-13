"use client";
import Image from "next/image";

const partners = [
  {
    src: "/img/brands/facebook.png",
    alt: "KidzMondo Facebook (Beirut)",
    href: "https://www.facebook.com/KidzMondobeirut/",
  },
  {
    src: "/img/brands/instagram.png",
    alt: "KidzMondo Instagram (Doha)",
    href: "https://www.instagram.com/kidzmondodoha/?hl=en",
  },
  {
    src: "/img/brands/Linked in.png",
    alt: "KidzMondo LinkedIn",
    href: "https://www.linkedin.com/company/kidzmondo/",
  },
  {
    src: "/img/brands/X.png",
    alt: "KidzMondo X (Twitter)",
    href: "https://x.com/kidzmondobeirut",
  },
  {
    src: "/img/brands/youtube.png",
    alt: "KidzMondo YouTube",
    href: "https://www.youtube.com/user/KidzMondoTV",
  },
];

export default function Partners() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-partners-cards">
            <div className="container-fluid p-0">
              <div className="partnersGrid">
                {partners.map((partner) => (
                  <a
                    key={partner.href}
                    className="partnerCard"
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={partner.alt}
                  >
                    <Image
                      alt={partner.alt}
                      src={partner.src}
                      width={120}
                      height={120}
                      className="partnerIcon"
                      priority
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
