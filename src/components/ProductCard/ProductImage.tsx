import * as React from 'react';
import { useProductCardContext } from './ProductCardContext';

import Image from "next/image";

function ProductImage() {
  const { product } = useProductCardContext();
  return (
    <div className="flex flex-col ">
      <Image
          src={product.image}
          alt="Package Image 1"
          width={480}
          height={480}
          quality={100}
          className="rounded-full"
        />
    </div>
  );
}

export default ProductImage;
