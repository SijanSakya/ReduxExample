import * as React from 'react';
import { createContext, useContext } from 'react';

const ProductCardContext = createContext<{ product: Product } | null>(null);
 export type Product = {
    id: number;
    image: string;
    title: string;
    price: number;
  };
  
export function useProductCardContext() {
  const context = useContext(ProductCardContext);

  return context;
}

export default ProductCardContext;
