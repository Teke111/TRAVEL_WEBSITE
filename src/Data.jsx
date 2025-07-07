// import images
import img2 from "./assets/Yellow.jpg";
import img5 from "./assets/blog.jpg";
import img7 from "./assets/Yellow.jpg";
import img9 from "./assets/Yellow.jpg";

//so now we are going to use a high order array method to display all the destination
// using map. To do so we need to list all the destination in one array "Data" and later we
// shall call each destination by index/id.

export const data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
  },
  {
    id: 3,
    imgSrc: img7,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
  },
  {
    id: 4,
    imgSrc: img9,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
  },
];

// images
import img6 from "./assets/offer1.jpg";
import img3 from "./assets/offer2.jpg";
import img8 from "./assets/offer3.jpg";

export const offer = [
  {
    id: 1,
    imgSrc: img6,
    destTitle: "Machu Picchu",
    location: "Peru",
    price: "$7,452",
  },

  {
    id: 2,
    imgSrc: img3,
    destTitle: "Guanajuato",
    location: "Mexico",
    price: "$2,452",
  },
  {
    id: 3,
    imgSrc: img8,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    price: "$4,400",
  },
];

import img11 from "./assets/blog.jpg";
import img12 from "./assets/blog2.jpg";
import img13 from "./assets/blog3.jpg";
import img14 from "./assets/blog.jpg";

export const Posts = [
  {
    id: 1,
    postImage: img11,
    title: "Beautiful Morocco, let us travel!",
    desc: "The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.",
  },

  {
    id: 2,
    postImage: img12,
    title: "Romantic moments under Eiffel Tower",
    desc: "with vast swaths of desert in its east and west and the rich Nile River Valley at its heart, is site to one of the world's earliest and greatest civilizations",
  },
  {
    id: 3,
    postImage: img13,
    title: "Let us have an adventure outside Tunisia.",
    desc: "Tunisia is a small Arab country in North Africa that represents both the aspirtions of freedom and struggles against terrorism that roil the region",
  },
  {
    id: 4,
    postImage: img14,
    title: "Best Country in East Africa",
    desc: "When Kenya claimed its independence from the U.K in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.",
  },
];

// export default Data;
