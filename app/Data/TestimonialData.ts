import { StaticImageData } from "next/image";

import user1 from "../assets/users/balazs-orban.png";
import user2 from "../assets/users/delba-de-oliveira.png";
import user3 from "../assets/users/evil-rabbit.png";
import user4 from "../assets/users/guillermo-rauch.png";
import user5 from "../assets/users/hector-simpson.png";
import user6 from "../assets/users/balazs-orban.png";
import user7 from "../assets/users/lee-robinson.png";
import user8 from "../assets/users/michael-novotny.png";
import user9 from "../assets/users/steph-dietz.png";
import user10 from "../assets/users/steven-tey.png";

export {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
};

export interface TestData {
  id: number;
  name: string;
  image: StaticImageData;
  position: string;
  review: string;
}

const testData: TestData[] = [
  {
    id: 1,
    name: "balazs orban",
    image: user1,
    position: "Web Developer",
    review:
      "Enver has never let me down on any of my works always on time and ther SAAS services come with specifications",
  },
  {
    id: 2,
    name: "delba de oliveira",
    image: user2,
    position: "Graphic Designer",
    review:
      "Great company to work with, excellent team very good with substancial softwares i just love how they do work faster!",
  },
  {
    id: 3,
    name: "evil rabbit",
    image: user3,
    position: "Marketing Specialist",
    review:
      "Impressed by their strategic approach in marketing its really estastic.",
  },
  {
    id: 4,
    name: "guillermo rauch",
    image: user4,
    position: "Project Manager",
    review:
      "Smooth project management, delivered on time with great quality and shipment.",
  },
  {
    id: 5,
    name: "hector simpson",
    image: user5,
    position: "Content Writer",
    review:
      "Enver's content team knows how to engage the audience with absolutely affordable prices.",
  },
  {
    id: 6,
    name: "balazs orban",
    image: user6,
    position: "UI/UX Designer",
    review:
      "Their designs are both beautiful and user-friendly and the functionality? just so divine and inspiritional.",
  },
  {
    id: 7,
    name: "lee robinson",
    image: user7,
    position: "SEO Specialist",
    review:
      "Enver helped us improve our search rankings significantly and with great SEO services, we feel unstoppable.",
  },
  {
    id: 8,
    name: "michael novotny",
    image: user8,
    position: "Social Media Manager",
    review:
      "Their social media strategies are spot-on ive been working with them for years and they have never dissapointed me .",
  },
  {
    id: 9,
    name: "steph dietz",
    image: user9,
    position: "Customer Support",
    review:
      "Always prompt and helpful customer service and their app design they did for my store was really amazing.",
  },
  {
    id: 10,
    name: "steven tey",
    image: user10,
    position: "Sales Representative",
    review:
      "Enver's sales team knows how to close deals! and i love how they co-operate and work together",
  },
];

export default testData;
