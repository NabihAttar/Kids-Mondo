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
              {/* custom flex row */}
              <div className="partners-row">
                {partners.map((partner, i) => (
                  <div
                    key={i}
                    className="partners-col mxd-partners-cards__item mxd-grid-item "
                  >
                    <a
                      className="mxd-partners-cards__inner"
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="mxd-partners-cards__logo">
                        <Image
                          alt={partner.alt}
                          src={partner.src}
                          width={984}
                          height={235}
                          
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              {/* end flex row */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
