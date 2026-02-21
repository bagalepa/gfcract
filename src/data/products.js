import capacity6to8 from "../assets/Untitled design (7).png";
import capacity10to12 from "../assets/Untitled design (8).png";
import capacity15to26 from "../assets/Untitled design (9).png";
import capacity30to35 from "../assets/Untitled design (6).png";
import compact6 from "../assets/6-L.png";
import compact75 from "../assets/7.5-L.png";
import compact85 from "../assets/8.5-L.png";

import standard10 from "../assets/10-L.png";
import standard12 from "../assets/12-L.png";

import heavy15 from "../assets/15-L.png";
import heavy20 from "../assets/20-L.png";
import heavy26 from "../assets/26-L.png";

export const categories = [
  {
    title: "Compact Buckets",
    capacity: "6L – 8.5L",
    image: capacity6to8,
    categoryId: "compact",
  },
  {
    title: "Standard Buckets",
    capacity: "10L – 12L",
    image: capacity10to12,
    categoryId: "standard",
  },
  {
    title: "Heavy Duty Buckets",
    capacity: "15L – 26L",
    image: capacity15to26,
    categoryId: "heavy",
  },
];

export const products = [
  // Compact
  {
    id: 1,
    name: "6L Polymer Bucket",
    capacity: "6L",
    categoryId: "compact",
    image: compact6,
  },
  {
    id: 2,
    name: "7.5L Polymer Bucket",
    capacity: "7.5L",
    categoryId: "compact",
    image: compact75,
  },
  {
    id: 3,
    name: "8.5L Polymer Bucket",
    capacity: "8.5L",
    categoryId: "compact",
    image: compact85,
  },

  // Standard
  {
    id: 4,
    name: "10L Polymer Bucket",
    capacity: "10L",
    categoryId: "standard",
    image: standard10,
  },
  {
    id: 5,
    name: "12L Polymer Bucket",
    capacity: "12L",
    categoryId: "standard",
    image: standard12,
  },

  // Heavy Duty
  {
    id: 6,
    name: "15L Industrial Bucket",
    capacity: "15L",
    categoryId: "heavy",
    image: heavy15,
  },
  {
    id: 7,
    name: "20L Industrial Bucket",
    capacity: "20L",
    categoryId: "heavy",
    image: heavy20,
  },
  {
    id: 8,
    name: "26L Industrial Bucket",
    capacity: "26L",
    categoryId: "heavy",
    image: heavy26,
  },
];
