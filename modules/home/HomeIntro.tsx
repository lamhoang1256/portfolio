import { TextStrokeAnimation } from "components/text";

const HomeIntro = () => {
  return (
    <section className="-mt-16 bg-[#141523] py-10">
      <div className="layout-container">
        <div className="flex flex-col items-center justify-center lg:min-h-screen">
          <h2 className="text-2xl lg:text-[50px] font-bold">
            <span className="text-gradient bg-linearPurple">HELLO</span>, MY NAME IS
          </h2>
          <TextStrokeAnimation>HOANG LAM</TextStrokeAnimation>
          <h2 className="text-2xl lg:text-[50px] font-bold">
            I AM
            <span className="text-gradient bg-linearPurple"> FRONTEND DEVELOPER</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
