import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type AboutUsProps = SliceComponentProps<Content.AboutUsSlice>;

const AboutUs = ({ slice }: AboutUsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="border-b typography-on"
    >
      <div className="container max-w-4xl py-8 flex flex-col gap-8 md:flex-row items-center justify-center md:justify-between relative overflow-y-hidden">
        <PrismicNextImage
          field={slice.primary.image}
          className="w-[360px] hidden md:block"
        />
        <div className="md:flex-1 text-center md:text-start">
          <h2
            dangerouslySetInnerHTML={{
              __html: slice.primary.title || "",
            }}
          />
          <PrismicRichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
