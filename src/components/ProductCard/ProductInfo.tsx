import * as React from 'react';
import { ReactNode } from 'react';
import { useProductCardContext } from './ProductCardContext';

export type Props = {
  children: ReactNode;
};

function ProductInfo({ children }: Props) {
    // const { product } = useProductCardContext();

  return <div className="flex flex-col gap-1">{children}</div>;
}

export default ProductInfo;
