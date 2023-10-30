"use client";
import { Card } from "@/components/card/Card";
import { Product } from "../../types";
// import useProduct from '../../useProduct';
import ProductCard from "@/components/ProductCard/ProductCard";
import img1 from "/images/img1.jpg";

const product: Product[] = [
  {
    id: 1,
    image: "/images/img1.jpg",
    title: "Apple watch series 7gps ,Aluminum case ,Starlight sports",
    price: 79500,
  },
  {
    id: 2,
    image: "/images/img1.jpg",
    title: "Apple watch series 7gps ,Aluminum case ,Starlight sports",
    price: 74500,
  },
];

export default function Home() {
  return (
    <div className="p-10 flex gap-10 ">
         {product.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          image={<ProductCard.Image src={product.image} />} // Assuming Image component accepts src prop
          title={<ProductCard.Title>{product.title}</ProductCard.Title>}
          price={<ProductCard.Price>Rs {product.price}</ProductCard.Price>}
          action={<ProductCard.Button>Add to cart</ProductCard.Button>}
        />
      ))}
    </div>
  );
}
