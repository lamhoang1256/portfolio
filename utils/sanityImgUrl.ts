import imageUrlBuilder from "@sanity/image-url";
import { IProjectMainImage } from "types/project";
import sanityClient from "./sanityClient";

export function sanityImgUrl(source: any) {
  return imageUrlBuilder(sanityClient).image(source);
}

export function sanityImgUrlMain(mainImage: IProjectMainImage) {
  return imageUrlBuilder(sanityClient)
    .image(mainImage)
    .width(600)
    .height(350)
    .focalPoint(0, 0)
    .crop("focalpoint")
    .fit("crop")
    .url();
}
