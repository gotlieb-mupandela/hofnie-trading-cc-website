export const stockImages = [
  {
    src: "/images/crane.jpg",
    alt: "Stock photograph of a tower crane over a building frame. Not a Hofnie Trading CC project.",
  },
  {
    src: "/images/site.jpg",
    alt: "Stock photograph of a construction site. Not a Hofnie Trading CC project.",
  },
  {
    src: "/images/crew.jpg",
    alt: "Stock photograph of people on a building site. Not a Hofnie Trading CC project.",
  },
  {
    src: "/images/frame.jpg",
    alt: "Stock photograph of a building frame. Not a Hofnie Trading CC project.",
  },
  {
    src: "/images/interior.jpg",
    alt: "Stock photograph of a finished interior. Not a Hofnie Trading CC project.",
  },
] as const;

export const heroImage = {
  src: "/images/hero.jpg",
  alt: "Stock photograph of a concrete building exterior. Not a Hofnie Trading CC project.",
  width: 1800,
  height: 1200,
};

export const compareImages = {
  before: stockImages[1],
  after: stockImages[4],
};
