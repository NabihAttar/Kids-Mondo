import Blogs4 from "@/components/blogs/Blogs4";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Blogs5 from "@/components/blogs/Blogs5";

import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Blog Creative || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function news() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Blogs4 />
        <Blogs5 />

        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
