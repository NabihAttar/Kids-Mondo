import Footer2 from "@/components/footers/Footer2";
import Pricing from "@/components/other-pages/Pricing";
import Image from "next/image";
import Link from "next/link";
import { blogs2, blogs5, blogs6 } from "@/data/blogs.json";
import { Metadata } from "next";
export const metadata: Metadata = {
    title:
        "Project Details || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
    description:
        "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function EducationCSR() {
    return (
        <>
            <main
                id="mxd-page-content"
                className="mxd-page-content inner-page-content"
            >
                <Pricing />


                <div className="mxd-section padding-default">
                    <div className="mxd-container grid-container">
                        {/* Block - Section Title */}
                        <div className="mxd-block">
                            <div className="mxd-section-title no-controls">
                                <div className="container-fluid p-0">
                                    <div className="row g-0">
                                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                                            <div className="mxd-section-title__hrtitle">
                                                <h2>
                                                    All
                                                    <br />
                                                    resources
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                                            <div className="mxd-section-title__hrdescr">
                                                <p>
                                                    Browse through all our articles, tutorials, roundups,
                                                    and experiments.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Block - Archive Blog List */}
                        <div className="mxd-block">
                            <div className="mxd-projects-archive">
                                {blogs6.map((item) => (
                                    <Link
                                        key={item.title}
                                        className="mxd-projects-archive__item"
                                        href={`/blog-article`}
                                    >
                                        <div className="mxd-projects-archive__border" />
                                        <div className="mxd-projects-archive__inner">
                                            <div className="container-fluid px-0">
                                                <div className="row gx-0">
                                                    <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                                                        <div className="mxd-projects-archive__title">
                                                            <div className="mxd-projects-archive__image">
                                                                <Image
                                                                    alt="Project Preview"
                                                                    src={item.img}
                                                                    width={1200}
                                                                    height={800}
                                                                />
                                                            </div>
                                                            <p>
                                                                <span>{item.title}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                                                        <div className="mxd-projects-archive__tagslist">
                                                            <ul>
                                                                {item.tags.map((t) => (
                                                                    <li key={t}>
                                                                        <p className="t-small">{t}</p>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                                                        <div className="mxd-projects-list__date">
                                                            <p className="t-small">{item.date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mxd-projects-archive__border" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* Block - Archive Blog List End */}
                    </div>
                </div>



















                <div className="mxd-container grid-container">

                    <div className="mxd-section padding-default">


                        <div className="mxd-article">
                            <div className="mxd-article__grid">
                                {/* LEFT COLUMN */}
                                <div className="mxd-article__col mxd-article__col--left">
                                    <div id="chapter-05" className="mxd-article__block">
                                        <h3>Why I&apos;ll Keep Using AI</h3>
                                        <p>
                                            AI tools like{" "}
                                            <a href="https://www.midjourney.com/home" target="_blank">
                                                MidJourney
                                            </a>{" "}
                                            and{" "}
                                            <a href="https://stablediffusionweb.com/" target="_blank">
                                                Stable Diffusion
                                            </a>{" "}
                                            don&apos;t replace illustrators. Instead, they:
                                        </p>
                                        <ul>
                                            <li>Provide inspiration when you hit creative blocks;</li>
                                            <li>Help with time-consuming tasks like creating textures;</li>
                                            <li>
                                                Push creative boundaries, inspiring new styles and techniques.
                                            </li>
                                        </ul>
                                    </div>

                                    <div id="chapter-06" className="mxd-article__block">
                                        <h3>Final Thoughts</h3>
                                        <p>
                                            AI in illustration isn&apos;t the end of creativity—it&apos;s the
                                            start of a new era. If you&apos;re an illustrator considering AI,
                                            here’s my advice:
                                        </p>
                                        <ul>
                                            <li>
                                                <span>Experiment:</span> Try different tools and see what works
                                                for you;
                                            </li>
                                            <li>
                                                <span>Adapt:</span> Use AI to complement your skills, not replace
                                                them;
                                            </li>
                                            <li>
                                                <span>Stay Original:</span> Your unique touch is what makes your
                                                art special.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mxd-article-author__info">
                                        <h5 className="mxd-article-author__name">
                                            <a href="#">Johanna Cherry</a>
                                            <small className="mxd-article-author__position">
                                                Brand Identity Expert
                                            </small>
                                        </h5>
                                        <div className="mxd-article-author__socials">
                                            <span className="tag tag-default tag-opposite tag-link-opposite">
                                                <a href="https://www.linkedin.com/" target="_blank">
                                                    LinkedIn
                                                </a>
                                            </span>
                                            <span className="tag tag-default tag-opposite tag-link-opposite">
                                                <a href="https://www.behance.net/" target="_blank">
                                                    Behance
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT COLUMN */}
                                <div className="mxd-article__col mxd-article__col--right">
                                    <div className="mxd-article__content">
                                        <div className="mxd-article__block">
                                            <p className="t-large mxd-article__excerpt">
                                                As a digital illustrator, I&apos;ve always been fascinated by the
                                                intersection of art and technology. Recently, I decided to dive
                                                into the world of artificial intelligence (AI) to see how it could
                                                help me create commercial illustrations more efficiently and
                                                creatively.
                                            </p>
                                            <p>
                                                The idea of working alongside AI felt both exciting and
                                                intimidating. Could a machine truly assist in producing work that
                                                matches the nuances of human creativity? With curiosity as my
                                                guide, I set out to explore the capabilities of these tools and see
                                                how they could enhance my artistic process.
                                            </p>
                                        </div>

                                        <div className="mxd-article__block block-table-of-contents">
                                            <p className="table-of-contents__title">Table of contents:</p>
                                            <ul className="table-of-contents__nav">
                                                <li>
                                                    <a href="#chapter-01">The Experiment Begins</a>
                                                </li>
                                                <li>
                                                    <a href="#chapter-02">What I Learned</a>
                                                </li>
                                                <li>
                                                    <a href="#chapter-03">How I Used AI in My Workflow</a>
                                                </li>
                                                <li>
                                                    <a href="#chapter-04">The Challenges</a>
                                                </li>
                                                <li>
                                                    <a href="#chapter-05">Why I&apos;ll Keep Using AI</a>
                                                </li>
                                                <li>
                                                    <a href="#chapter-06">Final Thoughts</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div id="chapter-01" className="mxd-article__block">
                                            <h3>The Experiment Begins</h3>
                                            <p>
                                                The idea was simple: could AI tools like MidJourney, DALL·E, or
                                                Stable Diffusion become valuable collaborators in my creative
                                                process? I wanted to see if these cutting-edge technologies could
                                                help me produce high-quality illustrations that met the
                                                expectations of my clients. With a mix of excitement and
                                                skepticism, I decided to dive in and put these tools to the test.
                                            </p>
                                        </div>

                                        <div className="mxd-article__block block-quote">
                                            <blockquote>
                                                <p className="quote__text">
                                                    AI didn&apos;t replace my creativity — it amplified it, unlocking
                                                    possibilities I hadn&apos;t even imagined.
                                                </p>
                                                <p className="quote__cite">
                                                    <cite>Alex Walker</cite>
                                                </p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mxd-section mxd-project overflow-hidden">
                    <div className="mxd-container grid-container">

                    </div>
                </div>
            </main>
            <Footer2 />
        </>
    );
}
