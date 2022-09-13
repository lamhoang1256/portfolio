import Image from "next/image";
import { useState } from "react";
import { IProjectImages } from "types/project";
import classNames from "utils/className";
import { sanityImgUrl } from "utils/sanityImgUrl";

interface ProjectImageSliderProps {
  images: IProjectImages[];
  className?: string;
}

const ProjectImageSlider = ({ images, className = "" }: ProjectImageSliderProps) => {
  const [indexActive, setIndexActive] = useState(0);
  const handleChooseActive = (index: number) => setIndexActive(index);
  return (
    <div className={className}>
      <Image
        src={sanityImgUrl(images[indexActive]).width(1200).url()}
        alt="product-active"
        width={1200}
        height={560.25}
        className="object-cover object-top"
      />
      <div className="relative flex gap-2 my-3 overflow-x-auto">
        {images.map((image, index) => (
          <div
            key={image._key}
            className={classNames(
              "inline-block border-2 rounded-md overflow-hidden transition-all duration-200 cursor-pointer w-20 h-20",
              indexActive === index ? " border-[#00ffea]" : "border-transparent"
            )}
            onClick={() => handleChooseActive(index)}
            onMouseEnter={() => handleChooseActive(index)}
          >
            <Image
              src={sanityImgUrl(image).width(200).url()}
              alt="product"
              width={200}
              height={200}
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectImageSlider;
