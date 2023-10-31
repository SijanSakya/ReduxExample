
import { ReactNode } from "react";
import Image from "next/image";
import Nav from "./nav";

export default function Layout({ children }: { children: ReactNode }) {

    const data = {name: 'alpas Technology'}
    return (
      <>
        <div>
          <header className="flex ">
            <Nav data={data}/>
          </header>
          {typeof children === 'function' ? children(data) : children}
          
        </div>
       
      </>
    );
  }
  