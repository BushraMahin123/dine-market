"use client"
import Link from "next/link";
import { CartProvider, useCartContext } from "@/app/context/cart_context";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// import Cart from "@/components/cart";

function Product({id}:any){
  let [value , Setvalue] = useState(1)
  let [price , SetPrice] = useState(545)
  let [cart , Setcart] = useState(0)
  // let [previousPrice , setPreviousprice] = useState(price)
  
  function inc(){
    Setvalue (value + 1)
    // previousPrice = newPrice
    // newPrice = price + 195
    // SetPrice (newPrice)
  }
  function dec(){
    if(value != 1){
      Setvalue (value - 1)
    }
  }
 
    const {addtocart}:any = useCartContext();
    
  
    return(
      // <CartProvider >
      <div className="py-5 grid grid-rows-1 grid-flow-col justify-center gap-5">
        <Image className="bg-slate-200" src={'/herosection.webp'} width={100} height={100} alt="img"/>
        <Image  className="bg-slate-200 " src={'/herosection.webp'} width={500} height={500} alt="img"/>
        <div className="flex flex-col gap-5">
          <h1 className="text-bold text-3xl w-56">Cameryn Sash Tie Dress</h1>
          <h1 className=" text-slate-400 text-bold text-2xl w-56">Dress</h1>
          <h1 className="text-bold text-md capitalize">Select Size</h1>
          <div className="flex gap-3">
            <h1 className="text-xl text-bold hover:shadow-xl hover:shadow-indigo-500/50 rounded-full px-3">XS</h1>
            <h1 className="text-xl text-bold hover:shadow-xl hover:shadow-indigo-500/50 rounded-full px-3">S</h1>
            <h1 className="text-xl text-bold hover:shadow-xl hover:shadow-indigo-500/50 rounded-full px-3">M</h1>
            <h1 className="text-xl text-bold hover:shadow-xl hover:shadow-indigo-500/50 rounded-full px-3">L</h1>
            <h1 className="text-xl text-bold hover:shadow-xl hover:shadow-indigo-500/50 rounded-full px-3">XL</h1>
          </div>
          <div className="flex gap-3">
            <h1 className="font-bold">Quantity:</h1>
            <button className="border rounded-full px-3" onClick={dec}>-</button>
            <p>{value}</p>
            <button className="border rounded-full px-3" onClick={inc}>+</button>
          </div>
          <div className="flex  gap-4">
          <Link href = {'/Cart'} onClick={() => AddtoCart(id , price)}>
            <button className="p-3 w-48 bg-slate-900 border-2 border-b-4 border-slate-900 text-white flex gap-5">
                <ShoppingCart/>
                Add to Cart
            </button>
          </Link>
            <p className="font-bold text-3xl mt-2">${price}</p>
          </div>
          
        </div>
       

      </div>
      // </CartProvider>
    )
}
export default Product;