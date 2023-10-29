"use client"
import { Card } from "@/components/card/Card";
import { Product } from "../../types";
// import useProduct from '../../useProduct';
import ProductCard from "@/components/ProductCard/ProductCard";
import img1 from "/images/img1.jpg"

const product: Product = {
  id: 1,
  image: "/images/img1.jpg" ,
  title: 'Apple watch series 7gps ,Aluminum case ,Starlight sports',
  price: 79500,
};


export default function Home() {
  return (
    <div className="p-10 flex gap-10 ">
        <Card>

        <Card.Title>Redux Toolkit</Card.Title>
        <Card.Price>39.00$</Card.Price>
        <Card.CartButton>Add To Cart</Card.CartButton>
      </Card>

      <ProductCard
      product={product}
      image={<ProductCard.Image />}
      title={<ProductCard.Title />}
      price={ <ProductCard.Price /> }
      action={ <ProductCard.Button>Add to cart</ProductCard.Button> }

    />

      
       
      
    </div>
  );
}
