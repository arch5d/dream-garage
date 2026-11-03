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
    image: "/images/mclaren-gt.jpg",
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
    image: "/images/mahindra-scorpio.jpg",
    alt: "A white Mahindra Scorpio S11 on a quiet hillside road.",
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
    image: "/images/toyota-fortuner.jpg",
    alt: "A white Toyota Fortuner Legender in a bright showroom.",
    position: "center 56%",
    ref: "INDIA / 2021",
  },
  {
    id: "hyundai-verna",
    index: "05",
    name: "Hyundai Verna",
    category: "THE MODERN CLASSIC",
    tagline: "Sharp design. A different kind of attitude.",
    image: "/images/hyundai-verna.jpg",
    alt: "A white Hyundai Verna in motion along a coastal road.",
    position: "center 54%",
    ref: "SEOUL / 2020",
  },
  {
    id: "volkswagen",
    index: "06",
    name: "Volkswagen",
    category: "THE GERMAN CLASSIC",
    tagline: "Engineering speaks without raising its voice.",
    image: "/images/volkswagen.jpg",
    alt: "A white Volkswagen Golf on an empty runway at golden hour.",
    position: "center 56%",
    ref: "WOLFSBURG / 2020",
  },
  {
    id: "mahindra-xuv700",
    index: "07",
    name: "Mahindra XUV700",
    category: "THE ALL-ROUNDER",
    tagline: "Every road. Every reason. Always ready.",
    image: "/images/mahindra-xuv700.jpg",
    alt: "A blue Mahindra XUV700 on an open runway.",
    position: "center 58%",
    ref: "INDIA / 2021",
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
    label: "McLaren GT — hero",
    author: "Calreyn88",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:2022_McLaren_GT_1.jpg",
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
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:2021_McLaren_GT_2.jpg",
  },
  {
    label: "Mahindra Scorpio S11",
    author: "RuatfelaChhangte",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Vehicle_of_Champhai_DC_(SUV).jpg",
  },
  {
    label: "Tata Harrier",
    author: "Matti Blume",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Tata_Buzzard_Sport,_GIMS_2019,_Le_Grand-Saconnex_(GIMS0651).jpg",
  },
  {
    label: "Toyota Fortuner Legender",
    author: "Husskeyy",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:Toyota_Fortuner_in_Milnerton,_Cape_Town_(2).jpg",
  },
  {
    label: "Hyundai Verna",
    author: "Dinkun Chen",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:HYUNDAI_VERNA_(HYUNDAI_ACCENT)_(RB,RC)_China_(7).jpg",
  },
  {
    label: "Volkswagen",
    author: "Dinkun Chen",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:VOLKSWAGEN_GOLF_(Mk8_CD1)_China_(8).jpg",
  },
  {
    label: "Mahindra XUV700",
    author: "DriveSpark",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    source:
      "https://commons.wikimedia.org/wiki/File:2021_Mahindra_XUV700_2.2_AX7_(India)_front_view.png",
  },
];
