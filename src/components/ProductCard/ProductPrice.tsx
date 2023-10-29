import * as React from 'react';
import { useProductCardContext } from './ProductCardContext';

type Props = {
  currency: string;
};

function ProductPrice() {
  const { product } = useProductCardContext();
  return (
    <div className="flex justify-center text-2xl">
      Rs {product.price}
    </div>
  );
}

export default ProductPrice;
