import React, { useEffect } from "react";
import SingleProducts from "./SingleProduct";
import { useState } from "react";

export default function ProductList({ productData, UpdateCart,response}) {

  
  const [localCart, setlocalCart] = useState(productData);

  useEffect(
    function () {
      setlocalCart(productData);
    },
    [productData]
  );

  function handleRemove(productid){
    const cart ={...productData}
    delete cart[productid];
    UpdateCart(cart);
  }
  
  function handleChange( productId , newValue ){
    const newLocalCart = {...localCart , [productId]:newValue };
    setlocalCart(newLocalCart);
  }

  function updateMyCart(){
    UpdateCart(localCart)
  }

  
  return (
    <div className=" border-2 max-w-5xl mx-auto bg-white ">
      <div className="hidden xl:block">
        <div className="border-b-2 flex space-x-10 justify-between items-center  pt-2 pb-2 pl-4 pr-4 bg-gray-100 text-gray-500 font-bold">
          <div className="flex justify-between w-1/2">
            <div></div>
            <div></div>
            <p className="mr-40">Product</p>
          </div>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>

      {response.map(function (item) {
        
        return (
          
          <SingleProducts
            onRemove={handleRemove}
            onQuantityChange={handleChange}
            product={item.data}
            quantity={localCart[item.data.id]}
          />
        );

        
      })}
        <div className=" p-2 border-2 border-t-0 space-y-2 xl:space-y-0 xl:p-5 xl:flex xl:justify-between">
        <div className="space-x-3 flex justify-between xl:justify-start ">
          <input
            type="text"
            placeholder="Coupon code"
            className="pl-3 pr-3 pt-1 pb-1 border-2"
          />
          <button className="pl-4 pr-4 pt-1 pb-1 bg-red-500 text-white  rounded-md">
            APPLY COUPON
          </button>
        </div>
        <button
          onClick={updateMyCart}
          className="flex justify-center w-full md:w-56 text-white bg-red-600 pt-2 pb-2 xl:pl-6 xl:pr-6 rounded-md cursor-pointer"
        >
          UPDATE CART
        </button>
      </div>
    </div>
  );
}
