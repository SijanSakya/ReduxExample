import * as React from 'react';
import { useProductCardContext } from './ProductCardContext';

function ProductTitle() {
  const { product } = useProductCardContext();
  return <div className="flex justify-center">{product.title}</div>;
}

export default ProductTitle;
