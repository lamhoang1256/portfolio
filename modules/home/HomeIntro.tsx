import { TextStrokeAnimation } from "components/text";

const HomeIntro = () => {
  return (
    <section className="-mt-20">
      <div className="layout-container">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-[50px] font-bold">HELLO, MY NAME IS</h2>
          <TextStrokeAnimation>HOANG LAM</TextStrokeAnimation>
          <h2 className="text-[50px] font-bold">I AM FRONTEND DEVELOPER</h2>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
