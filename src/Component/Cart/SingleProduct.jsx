import React, { useCallback, useContext } from "react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SingleProduct({data ,UpdateCart,setInput}) {

  let localdata=JSON.parse(localStorage.getItem('my-cart'));
  
  const[InputUpdate,setInputUpdate]=useState(localdata);
  
  const{id , title , price, thumbnail }=data;

  
  function DeleteItem(){
    delete localdata[id];
    UpdateCart(localdata);
  }
  
  function handleChange(e){
    const data={...localdata , [id] : +e.target.value};
    setInputUpdate(data);
    
  }

  setInput(InputUpdate);
  
 
  

  return (
    <>
      <div className=" text-gray-600 font-bold xl:hidden bg-white">
        <div className="flex justify-end border-2 border-b-0 p-2">
          <AiOutlineCloseCircle className="text-3xl hover:text-red-500 hover:cursor-pointer" onClick={DeleteItem} />
        </div>
        <div className="flex justify-center border-2 border-b-0 p-2 sm:hidden">
          <img
            src={thumbnail}
            className="h-16 w-16"
            alt=""
          />
        </div>
        <div className="flex justify-between border-2 border-b-0 p-2">
          <p>Product:</p>
          <p className="text-red-400">{title}</p>
        </div>
        <div className="flex justify-between border-2 border-b-0 p-2">
          <p>Price:</p>
          <p>${price}.00</p>
        </div>
        <div className="flex justify-between border-2 border-b-0 p-2">
          <p>Quantity:</p>
          <input type="number" onChange={handleChange} value={InputUpdate[id]} className="border-2 w-12" />
        </div>
        <div className="flex justify-between border-2  p-2">
          <p>Subtotal:</p>
          <p>${InputUpdate[id] * price }</p>
        </div>

        
      </div>

      <div className="hidden xl:block border-b-2">
        <div className=" flex space-x-10 justify-between  items-center max-w-5xl mx-auto bg-white pt-2 pb-2 pl-4 pr-4 text-gray-500 font-bold">
          <div className="flex justify-between w-1/2 items-center">
            <AiOutlineCloseCircle className="text-3xl hover:text-red-500 hover:cursor-pointer" onClick={DeleteItem}/>
            <img
              src={thumbnail}
              className="h-12 w-12"
              alt=""
            />
            <p className="w-1/2">{title}</p>
          </div>

          <p>${price}.00</p>
          <input type="number" onChange={handleChange} value={InputUpdate[id]} min="1" className="w-16 border-2" />
          <p>${InputUpdate[id] * price }</p>
        </div>
      </div>
    </>
  );
}
