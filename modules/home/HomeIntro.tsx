import { TextAnimation } from "components/text";

const HomeIntro = () => {
  return (
    <section className="bg-[#11042a] py-10">
      <div className="layout-container">
        <div className="flex flex-col items-center justify-center text-center min-h-screen">
          <h2 className="text-[22px] lg:text-[50px] font-bold">
            <span className="text-gradient bg-linearPurple">HELLO</span>, MY NAME IS
          </h2>
          <TextAnimation>HOANG LAM</TextAnimation>
          <h2 className="text-[22px] lg:text-[50px] font-bold">
            I AM
            <span className="text-gradient bg-linearPurple"> FRONTEND DEVELOPER</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
