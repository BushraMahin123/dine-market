import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
// import Cart from './cart'
// const getImages = async()=>{
//   await fetch("https://api.pexels.com/v1/photos/id:1",{
//     headers:{
//       Authorization: "wPOg1IXJfTkn3xP9IapYYH1mn6amlpCojTO6y5dsOuIERvIJGLlfZWns",
//     },
//   })
   
//   .then((res)=>{
//     return res.json()
//   })
//   // if(!res){
//   //     throw new Error("Could not retrieve blog posts");
//   // }
//   // return await res.json();
// }
function Header(){
  // const ShowImage = getImages();
  // console.log(ShowImage);
  
  return(
    <header className='flex gap-12 text-lg py-10 justify-center'>
    <Link href={'/'}>
        <Image 
          src={"/dine-market.png"} 
          height={140} 
          width={140} 
          alt='Dine Market'
        />
    </Link>
      <Link href={'/Female'}>Female</Link>
      <Link href={'/Male'}>Male</Link>
      <Link href={'/Kids'}>Kids</Link>
      <Link href={'/header/allproducts'}>All Products</Link>
    
    <div>
    <form>   
      <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input type="search" className="w-[350px] h-[20px] md:rounded-sm border p-3 ps-10 text-sm" placeholder="what are you looking for?"/>
      </div>
    </form>
    </div>
    <div className='bg-slate-200 p-3 rounded-full transform transition duration-500 hover:scale-125 flex justify-center items-center relative'>
      <Link href={'#'} className="relative flex">
        <ShoppingCart/>
        <span className="absolute top-0 right-0 left-2 rounded-full bg-red-600 w-4 h-4 text-white font-mono text-sm  leading-tight text-center">0</span>
      </Link>
    </div>
    
    
    
    
    
    
  </header>
  )
};
export default Header;