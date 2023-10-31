"use client";
import { Card } from "@/components/card/Card";
import { Product } from "../../types";
import ProductCard from "@/components/ProductCard/ProductCard";
import img1 from "/images/img1.jpg";
import ButtonChange from "@/components/button/button";
import Layout from "@/components/layout/layout";
import { ReactNode } from "react";
import TableReact from "@/components/table/TableReact";
import TableData from "@/components/table/tableData";
import NewData from "@/components/table/newData";

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
  {
    id: 3,
    image: "/images/img1.jpg",
    title: "Apple watch ",
    price: 74500,
  },
];


export default function Home({data}:{data:ReactNode}) {


  
  return (
    <div className="p-10 flex gap-10 ">
      <Layout>
        {
          (data)=>(
            <ButtonChange data={data}/>
          )
        }
     
      </Layout>
         {/* {product.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          image={<ProductCard.Image/>} 
          title={<ProductCard.Title />}
          price={<ProductCard.Price />}
          action={<ProductCard.Button>Add to cart</ProductCard.Button>}
        />
      ))} */}
        {/* <NewData /> */}
      <TableReact />
      
    </div>
  );
}
