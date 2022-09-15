import { Heading } from "components/text";
import Image from "next/image";

const HomeAboutMe = () => {
  return (
    <section className="layout-container">
      <div className="flex flex-col-reverse items-center justify-between gap-8 py-10 lg:flex-row lg:py-20">
        <div className="w-full max-w-[700px]">
          <Heading>About Me</Heading>
          <p className="max-w-[650px] my-6 leading-[34px] text-lg">
            Good day, everyone! I&apos;m Nguyen Hoang Lam, I&apos;m 19 years old and I&apos;m from
            Ho Chi Minh city. I&apos;m Fresher Front-end Developer. I&apos;m often praised for my
            creativity and independent working skills. I always put my heart and soul into every
            single website that I develop. I guess that&apos;s all I have to share about myself.
            Thank you for reading!
          </p>
          <div className="flex gap-x-3">
            <button className="py-3 rounded-lg px-7 bg-linearOrangee">Download CV</button>
            <button className="py-3 rounded-lg px-7 bg-linearPurple">Contact Me</button>
          </div>
        </div>
        <div className="flex justify-center flex-1">
          <Image
            alt="avatar"
            width={350}
            height={350}
            src="/avatar.png"
            className="rounded-lg aspect-square"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutMe;
