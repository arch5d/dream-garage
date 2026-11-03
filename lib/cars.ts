export type Car = {
  id: string;
  index: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  alt: string;
  position: string;
  ref: string;
};

export const cars: Car[] = [
  {
    id: "mclaren-gt",
    index: "01",
    name: "McLaren GT",
    category: "GRAND TOURER",
    tagline: "Performance with a quieter kind of confidence.",
    image: "/images/mclaren-gt.jpg.webp",
    alt: "An orange McLaren GT photographed from the front three-quarter.",
    position: "center 56%",
    ref: "WOKING / 2019",
  },
  {
    id: "mahindra-scorpio",
    index: "02",
    name: "Mahindra Scorpio S11",
    category: "THE ICON",
    tagline: "Built with presence. Made to own the road.",
    image: "/images/mahindra-scorpio-s11.avif",
    alt: "A Mahindra Scorpio S11 photographed for the collection.",
    position: "center 58%",
    ref: "INDIA / 2017",
  },
  {
    id: "tata-harrier",
    index: "03",
    name: "Tata Harrier",
    category: "THE COMMANDER",
    tagline: "Bold lines. Unmistakable character.",
    image: "/images/tata-harrier.jpg",
    alt: "An orange Tata Harrier photographed against a dark studio wall.",
    position: "center 52%",
    ref: "MUMBAI / 2019",
  },
  {
    id: "toyota-fortuner",
    index: "04",
    name: "Toyota Fortuner Legender",
    category: "THE STATEMENT",
    tagline: "Elegance with an intimidating edge.",
    image: "/images/toyota-fortuner-legender.jpg",
    alt: "A grey Toyota Fortuner Legender.",
    position: "center 56%",
    ref: "INDIA / 2021",
  },
  {
    id: "hyundai-verna",
    index: "05",
    name: "Hyundai Verna",
    category: "THE MODERN CLASSIC",
    tagline: "Sharp design. A different kind of attitude.",
    image: "/images/hyundai-verna-sedan.avif",
    alt: "A Hyundai Verna photographed for the collection.",
    position: "center 54%",
    ref: "SEOUL / 2020",
  },
  {
    id: "volkswagen",
    index: "06",
    name: "Volkswagen",
    category: "THE GERMAN CLASSIC",
    tagline: "Engineering speaks without raising its voice.",
    image: "/images/volkswagen-golf-r.jpg",
    alt: "A Volkswagen Golf R 20 Years at the 2023 Zurich auto show.",
    position: "center 56%",
    ref: "ZURICH / 2023",
  },
  {
    id: "mahindra-xuv700",
    index: "07",
    name: "Mahindra XUV700",
    category: "THE ALL-ROUNDER",
    tagline: "Every road. Every reason. Always ready.",
    image: "/images/mahindra-xuv700-ax7l.webp",
    alt: "A Mahindra XUV700 AX7L photographed from the rear.",
    position: "center 58%",
    ref: "INDIA / 2023",
  },
];

export type Credit = {
  label: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
};

export const credits: Credit[] = [
  {
    label: "Tata Harrier - cover and collection",
    author: "Matti Blume",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Tata_Buzzard_Sport,_GIMS_2019,_Le_Grand-Saconnex_(GIMS0651).jpg",
  },
  {
    label: "McLaren GT — collection",
    author: "Calreyn88",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:2022_McLaren_GT_2.jpg",
  },
  {
    label: "McLaren GT — story",
    author: "Calreyn88",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:2022_McLaren_GT_1.jpg",
  },
  {
    label: "Mahindra Scorpio S11",
    author: "devansh02",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Mahindra_Scorpio_S11_.jpg",
  },
  {
    label: "Toyota Fortuner Legender",
    author: "Ethan Llamas",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Toyota_Fortuner_GUN166_Legender_2.8_Q_4x2_Gray_Metallic_01.jpg",
  },
  {
    label: "Hyundai Verna",
    author: "Dinkun Chen",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:HYUNDAI_VERNA_(HYUNDAI_ACCENT)_(RB,RC)_China_(9).jpg",
  },
  {
    label: "Volkswagen",
    author: "Alexander-93",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Volkswagen_Golf_VIII_R_20_Years_Auto_Zuerich_2023_1X7A1359.jpg",
  },
  {
    label: "Mahindra XUV700",
    author: "LuvsMG481",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:2023_Mahindra_XUV700_AX7L_rear.jpg",
  },
];
