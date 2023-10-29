import React, { HtmlHTMLAttributes, ReactNode } from 'react'

interface CardProps {
    children : ReactNode;
}
export const Card = ({ children }: CardProps) => {
  return (
    <div className='shadow rounded-md border bg-blue-100 h-40 w-40'>
        {children}
    </div>
  )
}

function Title({
    children,
    ...props
  }: HtmlHTMLAttributes<HTMLParagraphElement>) {
    return (
      <p
        className=" text-center text-sm p-2 text-slate-700"
      >
        {children}
      </p>
    );
  }
  
  function Price({
    children,
    ...props
  }: HtmlHTMLAttributes<HTMLParagraphElement>) {
    return (
      <p
        className=" text-center text-sm p-2 text-green-600"
      >
        {children}
      </p>
    );
  }
  
  function Button({
    children,
    ...props
  }: HtmlHTMLAttributes<HTMLButtonElement>) {
    return (
      <button
        className=" transition duration-75 bg-violet-600 text-white p-2 w-full hover:bg-violet-700 active:translate-y-1"
      >
        {children}
      </button>
    );
  }


Card.Title = Title;
Card.Price = Price;
Card.CartButton = Button;