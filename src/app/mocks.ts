import headphones from "../../public/headphones.webp";
import aparat from "../../public/aparat.jpeg";
import laptop from "../../public/macbook.jpeg";
import smartphone from "../../public/iphone.jpeg";

export const products = [
  {
    id: "1a",
    name: "Smartphone",
    price: 1299.99,
    regularPrice: 1499.99,
    image: smartphone.src,
    category: "smartphones",
  },
  {
    id: "2b",
    name: "Laptop",
    price: 2199.99,
    regularPrice: 2499.99,
    image: laptop.src,
    category: "laptops",
  },
  {
    id: "3c",
    name: "Słuchawki",
    price: 199.99,
    regularPrice: 249.99,
    image: headphones.src,
    category: "headphones",
  },
  {
    id: "4d",
    name: "Aparat fotograficzny",
    price: 899.99,
    regularPrice: 999.99,
    image: aparat.src,
    category: "cameras",
  },
];
