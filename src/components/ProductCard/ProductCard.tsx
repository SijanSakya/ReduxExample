
import { ReactNode } from 'react';
import * as React from 'react';
import ProductCardContext from './ProductCardContext';
import { Product } from './ProductCardContext';
import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductInfo from './ProductInfo';
import ProductPrice from './ProductPrice';
import ProductButton from './ProductCardButton';


type Props = {
  product: Product;
  image?: ReactNode;
  title?: ReactNode;
  price?: ReactNode;
  action?: ReactNode;
};

function ProductCard({ image,title, price, action, product }: Props) {
  return (
    <ProductCardContext.Provider value={{ product }}>
      <div className="flex flex-col overflow-hidden border-2 border-black/30 w-80 gap-2 py-2">
        {image}
        <div className='font-semibold px-2'>
        {title}
        </div>
        <div className="flex justify-between px-2">
        {price}
        {action}
        </div>
        
      </div>
    </ProductCardContext.Provider>
  );
}

ProductCard.Image = ProductImage;
ProductCard.Button = ProductButton;
ProductCard.Title = ProductTitle;
ProductCard.Info = ProductInfo;
ProductCard.Price = ProductPrice;

export default ProductCard;