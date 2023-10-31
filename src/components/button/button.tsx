import React, { useState } from "react";
type ButtonProps ={
    data : any
}
const ButtonChange:React.FC<ButtonProps> = ({data}) => {
   


    console.log(data.name)
  const [color, setColor] = useState("");

  const changeToRed = () => {
    setColor("text-red-500");
  };

  const changeToBlue = () => {
    setColor("text-blue-500");
  };
  return (
    <div>
      <div className="flex gap-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={changeToRed}
        >
          Red
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={changeToBlue}
        >
          Blue
        </button>
      </div>
      <div className={`text-xl ${color}`}>Alpas Technology</div>

    </div>
   
  );
};

export default ButtonChange;
