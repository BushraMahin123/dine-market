"use client"
import { createContext, useReducer , useContext} from "react";
import reducer from "../reducer/cartreducer"
import {faker} from "@faker-js/faker";
const products = [...Array(20)].map(()=>({
    id: faker.datatype.uuid(),
    name : faker.commerce.productName(),
    price : faker.commerce.price(),
    image : faker.image.image(),
}))
const CartContext = createContext();
const initialState = {
    product : products,
    cart : [],
    // total_item : "",
    // total_amount : "",
    // shipping_fee : 5000,
}
const CartProvider = ({children}:any) => {
    
    // console.log(products);
    
    const [state , dispatch] = useReducer(reducer , initialState)
    const addtocart = (id:any , price:any ) => {
        dispatch({type : "ADD_To_Cart", payload:{id , price}})
    }
     return <CartContext.Provider value = {{...state , addtocart}}>{children}</CartContext.Provider>
}
const useCartContext = () =>{
    return useContext(CartContext)
}
export {CartProvider , useCartContext}