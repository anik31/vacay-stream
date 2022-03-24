import { v4 as uuid } from "uuid";
import { beach, hillStation, jungleSafari, trekking } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Trekking",
    image: {
      src: trekking,
      alt: "trekking"
    },
    description:
      "Computer programming is the process of designing and building an executable computer program to accomplish a specific computing",
  },
  {
    _id: uuid(),
    categoryName: "Beaches",
    image: {
      src: beach,
      alt: "beach"
    },
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
  },
  {
    _id: uuid(),
    categoryName: "Hill Station",
    image: {
      src: hillStation,
      alt: "hill station"
    },
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  },
  {
    _id: uuid(),
    categoryName: "Jungle Safari",
    image: {
      src: jungleSafari,
      alt: "jungle safari"
    },
    description:
      "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website.",
  }
];
