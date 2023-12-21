import ContactUs from "@/components/contact-us";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import mandala from "./assets/mandala.svg";
import Image from "next/image";

export type IntroductionProps = SliceComponentProps<Content.IntroductionSlice>;

const Introduction = ({ slice }: IntroductionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="border-b"
    >
      <div className="container max-w-4xl py-8 pt-20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 relative overflow-y-hidden">
        <div className="absolute inset-0 opacity-10 -z-50">
          <Image
            src={mandala}
            alt="Mandala tattoo pattern"
            className="w-full"
          />
        </div>
        <div className="md:flex-1 text-center md:text-start">
          <h1
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
            dangerouslySetInnerHTML={{
              __html: slice.primary.title || "",
            }}
          />
          <p
            className="text-xl mb-8"
            dangerouslySetInnerHTML={{
              __html: slice.primary.subtitle || "",
            }}
          />
          <ContactUs />
        </div>
        <PrismicNextImage
          field={slice.primary.main_image}
          className="flex-1 max-w-[350px] hidden md:block"
        />
      </div>
    </section>
  );
};

export default Introduction;
