import * as React from 'react';
import { ReactNode } from 'react';
import { Product } from './ProductCardContext';


type Props = {
  children: ReactNode;
};

function ProductButton({ children }: Props) {


  const handleClick = () => {
    // onClick(product);
  };

  return (
    <button type="button" className=" bg-blue-700 text-white cursor-pointer h-8 px-2 py-1 rounded-md">
      {children}
    </button>
  );
}

export default ProductButton;
